import { ThemeProvider as ThemeProviderExternal } from "next-themes";

interface ThemeProviderProps {
  readonly children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeProviderExternal attribute="class">{children}</ThemeProviderExternal>;
}
