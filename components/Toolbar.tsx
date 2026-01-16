import { Editor } from "@tiptap/react";

export default function Toolbar({ editor }: { editor: Editor | null }) {
  if (!editor) return null;

  const canAlign = editor.can().setTextAlign?.("left");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      editor
        .chain()
        .focus()
        .setImage({ src: reader.result as string })
        .run();
    };
    reader.readAsDataURL(file);

    // reset input so same image can be re-uploaded
    event.target.value = "";
  };

  const iconsStyle = "h-5 w-auto";

  return (
    <div className="mb-2 items-center justify-center flex gap-4 border border-border-light dark:border-border-dark rounded-xl p-2">
      <button onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <img src="/icons/TextB.svg" className={iconsStyle} alt="Text Bold"></img>
      </button>

      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        <img src="/icons/TextItalic.svg" className={iconsStyle} alt="Text Italic"></img>
      </button>

      <button onClick={() => editor.chain().focus().toggleUnderline().run()}> 
        <img src="/icons/TextUnderline.svg" className={iconsStyle} alt="Text Underline"></img>
      </button>

      <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <img src="/icons/ListBullets.svg" className={iconsStyle} alt="Bullet List"></img>
      </button>

      <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <img src="/icons/ListNumbers.svg" className={iconsStyle} alt="Number List"></img>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
       <img src="/icons/TextHOne.svg" className={iconsStyle} alt="Text H1"></img>
      </button>

      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
        <img src="/icons/TextHTwo.svg" className={iconsStyle} alt="Text H2"></img>
      </button>

      <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
        <img src="/icons/TextHThree.svg" className={iconsStyle} alt="Text H3"></img>
      </button>

      <button onClick={() => editor.chain().focus().setParagraph().run()}>
        <img src="/icons/TextT.svg" className={iconsStyle} alt="Normal Text"></img>
      </button>

      {/* Alignment */}
      {canAlign !== undefined && (
        <>
          <button onClick={() => editor.chain().focus().setTextAlign("left").run()}>
            <img src="/icons/TextAlignLeft.svg" className={iconsStyle} alt="Text Left"></img>
          </button>

          <button onClick={() => editor.chain().focus().setTextAlign("center").run()}>
            <img src="/icons/TextAlignCenter.svg" className={iconsStyle} alt="Text Center"></img>
          </button>

          <button onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            >
            <img src="/icons/TextAlignJustify.svg" className={iconsStyle} alt="Text Justify"></img>
          </button>

          <button onClick={() => editor.chain().focus().setTextAlign("right").run()}
            >
            <img src="/icons/TextAlignRight.svg" className={iconsStyle} alt="Text Right"></img>
          </button>
        </>
      )}

      <button onClick={() => editor.chain().focus().toggleCode().run()}>
        <img src="/icons/Code.svg" className={iconsStyle} alt="Inline Code"></img>
      </button>

      <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
        <img src="/icons/CodeBlock.svg" className={iconsStyle} alt="Code Block"></img>
      </button>

      {/* Image upload */}
      <label className="cursor-pointer">
        <img src="/icons/Image.svg" className={iconsStyle} alt="Image"></img>
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
}
