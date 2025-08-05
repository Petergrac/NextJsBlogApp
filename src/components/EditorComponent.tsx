"use client";

import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Code from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";
import ImageTool from "@editorjs/image";

export default function EditorComponent() {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        autofocus: true,
        tools: {
          header: Header,
          paragraph: Paragraph,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: "/api/upload", // for file uploads
                byUrl: "/api/fetchImage", // for external URLs
              },
            },
          },
        },
        onReady: () => {
          editorRef.current = editor;
        },
        onChange: async () => {
          const content = await editor.saver.save();
          console.log("Editor data: ", content);
        },
      });
    }

    return () => {
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  return (
    <div className="border rounded-md p-4 min-h-[72vh] bg-white shadow-md max-w-3xl mx-auto">
      <div id="editorjs" />
    </div>
  );
}
