import { ThemeToggle } from "@/modules/layout/components/ThemeToggle";
import { LanguageToggle } from "@/modules/layout/components/LanguageToggle";
import { Navbar } from "@/modules/layout/components/Navbar";

export function Header() {
  return (
    <header className="sticky flex items-center justify-center px-8 py-5">
      <div className="text-primary-02 dark:text-secondary-02 flex w-full max-w-5xl items-center justify-between">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <div className="hidden sm:block">
          <Navbar />
        </div>
        <div className="flex items-center gap-2 rounded-full px-2 py-2">
          <ThemeToggle />
          <div className="bg-tertiary-02 dark:bg-primary-01 h-6 w-[2px]"></div>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
