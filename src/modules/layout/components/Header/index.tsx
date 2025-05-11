import { ThemeToggle } from "@/modules/layout/components/ThemeToggle";
import { LanguageToggle } from "@/modules/layout/components/LanguageToggle";
import { Navbar } from "@/modules/layout/components/Navbar";
import { MobileMenu } from "@/modules/layout/components/MobileMenu";
import { Suspense } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 flex w-full items-center justify-center bg-inherit px-8 py-3">
      <div className="text-primary-02 dark:text-secondary-02 flex w-full max-w-5xl items-center justify-between">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <div className="hidden sm:block">
          <Navbar navItems={navItems} />
        </div>
        <div className="flex items-center gap-4 rounded-full px-2 py-2">
          <ThemeToggle />
          <div className="bg-tertiary-02 dark:bg-primary-01 h-6 w-[2px]"></div>
          <Suspense fallback={null}>
            <LanguageToggle />
          </Suspense>
          <div className="contents sm:hidden">
            <div className="bg-tertiary-02 dark:bg-primary-01 h-6 w-[2px]"></div>
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
