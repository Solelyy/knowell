"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { useEffect } from "react";
import Toolbar from "@/components/Toolbar";
import { ImageBlock } from "../editor/extensions/ImageBlock";

import Placeholder from "@tiptap/extension-placeholder";

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      ImageBlock.configure({
        allowBase64: true,
      }),
    ],
    content: {
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: { level: 1 },
        },
        {
          type: "paragraph",
        },
      ],
    },
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:       
        "outline-none min-h-[200px] caret-accent selection:bg-accent/20 selection:text-text-primary-dark",
      },
    },
  });

  useEffect(() => {
    if (!editor) return;

    let timeout: NodeJS.Timeout;

    const handleUpdate = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log(editor.getJSON());
      }, 500);
    };
    editor.on("update", handleUpdate);
    return () => {
      if (editor) editor.off("update", handleUpdate);
      clearTimeout(timeout);
    };
  }, [editor]);

  return (
    <div className="w-full max-w-2xl border border-border-light dark:border-border-dark rounded-md p-4 bg-card-light dark:bg-card-dark">
      <Toolbar editor={editor} />
      <EditorContent
      editor={editor}
      className="
        prose max-w-none

        prose-strong:text-inherit
        dark:prose-strong:text-inherit

        font-body text-text-primary-light dark:text-text-primary-dark
        leading-[1.6]

        prose-p:my-1
        prose-headings:font-heading
        prose-headings:leading-tight
        prose-headings:mt-2 prose-headings:mb-1
        prose-headings:text-text-primary-light
        dark:prose-headings:text-text-primary-dark

        prose-h1:text-2xl prose-h1:font-bold
        prose-h2:text-xl prose-h2:font-semibold
        prose-h3:text-lg prose-h3:font-medium

        prose-pre:bg-overlay-subtle-light dark:prose-pre:bg-overlay-subtle-dark
        prose-pre:text-text-primary-light dark:prose-pre:text-text-primary-dark
        prose-pre:font-mono prose-pre:text-sm
        prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:max-h-[50vh]

        prose-code:bg-overlay-subtle-light dark:prose-code:bg-overlay-subtle-dark
        prose-code:text-code-light dark:prose-code:text-code-dark 
        prose-code:font-mono prose-code:px-1 prose-code:rounded
        prose-code:before:content-none
        prose-code:after:content-none

        prose-pre:scrollbar scrollbar-thin
        prose-pre:scrollbar-thumb-accent/30 scrollbar-track-background-light
        dark:prose-pre:scrollbar-track-background-dark

        prose-a:text-link-light dark:prose-a:text-link-dark
        prose-a:no-underline hover:prose-a:underline

        [&_ul]:list-disc [&_ul]:pl-5 [&_ul>li]:my-1
        [&_ol]:list-decimal [&_ol]:pl-5 [&_ol>li]:my-1

        [&_ul>li::marker]:text-text-primary-light
        dark:[&_ul>li::marker]:text-text-primary-dark

        [&_ol>li::marker]:text-text-primary-light
        dark:[&_ol>li::marker]:text-text-primary-dark
      "
    />
    </div>
  );
}
