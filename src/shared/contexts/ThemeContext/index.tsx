import { ThemeProvider as ThemeProviderExternal } from "next-themes";

interface Props {
  readonly children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  return <ThemeProviderExternal attribute="class">{children}</ThemeProviderExternal>;
}
