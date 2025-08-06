import { create } from "zustand";
import { OutputData } from "@editorjs/editorjs";

interface EditorStore {
  content: OutputData | null;
  setContent: (data: OutputData) => void;
}

export const useEditorStore = create<EditorStore>((set) => ({
  content: null,
  setContent: (data) => set({ content: data }),
}));
