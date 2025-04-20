import { useTheme as useThemeExternal } from "next-themes";

export function useTheme() {
  const { theme, setTheme } = useThemeExternal();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return {
    theme,
    toggleTheme,
  };
}
