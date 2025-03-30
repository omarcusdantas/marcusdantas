import { ThemeToggle } from "@/shared/components/ThemeToggle";
import { LanguageToggle } from "@/shared/components/LanguageToggle";

export function Header() {
  return (
    <header className="flex items-center justify-center gap-4 p-8">
      <ThemeToggle />
      <LanguageToggle />
    </header>
  );
}
