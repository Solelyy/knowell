import { NodeViewWrapper } from "@tiptap/react";
import { useRef, useState } from "react";

export function ResizableImage({ node, updateAttributes }: any) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isResizing, setIsResizing] = useState(false);

  const startResize = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsResizing(true);

    const startX = event.clientX;
    const startWidth = imgRef.current?.offsetWidth ?? 0;

    const onMouseMove = (e: MouseEvent) => {
      const newWidth = Math.max(120, startWidth + (e.clientX - startX));
      updateAttributes({ width: newWidth });
    };

    const onMouseUp = () => {
      setIsResizing(false);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <NodeViewWrapper className="relative my-1 inline-block">
      <img
        ref={imgRef}
        src={node.attrs.src}
        style={{ width: node.attrs.width ?? "auto" }}
        className="max-w-full rounded-md"
        draggable={false}
      />

      {/* Resize handle */}
      <img 
        src="/icons/ArrowsOut.svg" 
        alt="Resize"
        onMouseDown={startResize}
        className="h-6 w-auto absolute bottom-1 right-1 cursor-se-resize opacity-60 hover:opacity-100 transition-opacity p-1 bg-background-light dark:bg-background-dark rounded shadow-sm"
      />
    </NodeViewWrapper>
  );
}
