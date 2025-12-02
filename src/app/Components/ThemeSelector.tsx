"use client";
import { useTheme, themes } from "../context/ThemeContext";

export default function ThemeSelector() {
  const { currentTheme, setTheme } = useTheme();

  return (
    <div className="absolute top-3 right-1/2 translate-x-1/2 translate-y-1/2 z-50 flex gap-3">
      {themes.map((theme) => (
        <button
          key={theme.name}
          onClick={() => setTheme(theme)}
          className="group relative"
          title={theme.name}
        >
          <div
            className="w-5 h-5  transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: theme.background,
              border:"1px solid #000",
                boxShadow:
                currentTheme.name === theme.name
                  ? `0 0 0 2px ${theme.background}`
                  : "none",
            }}
          />
        </button>
      ))}
    </div>
  );
}
