import Image from "@tiptap/extension-image";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { ResizableImage } from "./ResizableImage";

export const ImageBlock = Image.extend({
  name: "image",
  group: "block",
  draggable: true,
  selectable: true,

  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
      },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(ResizableImage);
  },
});
