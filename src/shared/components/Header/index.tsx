import { ThemeToggle } from "@/shared/components/ThemeToggle";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <ThemeToggle />
    </header>
  );
}
