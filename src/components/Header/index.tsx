import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <ThemeToggle />
    </header>
  );
}
