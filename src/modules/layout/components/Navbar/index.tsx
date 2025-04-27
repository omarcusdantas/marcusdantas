"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

interface NavbarProps {
  readonly navItems: { name: string; path: string }[];
}

export function Navbar({ navItems }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="relative flex">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li key={item.path} className="text-md relative px-3 py-2">
              <div className="relative mx-auto w-fit">
                <Link
                  href={item.path}
                  className="hover:text-primary-01 dark:hover:text-secondary-01 transition-colors duration-200"
                >
                  {item.name}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    data-testid={`navbar-underline-${item.name.toLowerCase()}`}
                    className="bg-primary-02 dark:bg-secondary-02 absolute -bottom-2 left-1/2 h-0.5 w-[80%] -translate-x-1/2 rounded-t-md"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
