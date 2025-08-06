"use client";

import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Code from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";
import ImageTool from "@editorjs/image";
import Title from "title-editorjs";
import AttachesTool from "@editorjs/attaches";
import { useEditorStore } from "@/context/EditorStore";

export default function EditorComponent() {
  const editorRef = useRef<EditorJS | null>(null);
 const setContent = useEditorStore((state)=>state.setContent)
  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        autofocus: false,
        tools: {
          header: Header,
          paragraph: Paragraph,
          list: List,
          code: Code,
          title: Title,
          inlineCode: InlineCode,
          image: {
            class: ImageTool,
            inlineToolbar: true,
            config: {
              endpoints: {
                byFile: "/api/upload", // for file uploads
                byUrl: "/api/fetchImage", // for external URLs
              },
              captionPlaceholder: "Enter caption",
              buttonContent: "Select an Image",
            },
          },
          attaches: {
            class: AttachesTool,
            config: {
              endpoint: "",
            },
          },
        },
        onReady: () => {
          editorRef.current = editor;
        },
        onChange: async () => {
          const content = await editor.saver.save();
          setContent(content);
        },
      });
    }

    return () => {
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, [setContent]);

  return (
    <div className="border rounded-md p-4 min-h-[72vh] dark:bg-slate-400  bg-white/75 shadow-md max-w-3xl mx-auto">
      <div id="editorjs" />
    </div>
  );
}
