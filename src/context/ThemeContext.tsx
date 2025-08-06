"use client";
import { OutputData } from "@editorjs/editorjs";
import {
  createContext,
  useContext,
  useState,
} from "react";

type ThemeContextType = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;

};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme}}
    >
      <div className={theme ? "" : "dark"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
