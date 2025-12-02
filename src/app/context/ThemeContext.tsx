"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Theme = {
  name: string;
  primary: string;
  secondary: string;
  background: string;
};

export const themes: Theme[] = [
  {
    name: "Brutalist",
    primary: "#e24b2b",
    secondary: "#d65b3b",
    background: "#fffaf7",
  },
  {
    name: "Minimal1",
    primary: "#000000",
    secondary: "#333333",
    background: "#fafafa",
  },
  {
    name: "Minimal",
    background: "#000000",
    secondary: "#fafafa",
    primary: "#fafafa",
  },
  {
    name: "Red Bold",
    background: "#ff0000",
    secondary: "#cc0000",
    primary: "#000000",
  },
  {
    name: "Blue Bold",
    primary: "#000000",
    secondary: "#000000",
    background: "#0d00fe",
  },
];

type ThemeContextType = {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
