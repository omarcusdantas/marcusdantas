"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface MobileMenuProps {
  readonly navItems: { name: string; path: string }[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"}>
        <div className="relative h-6 w-6">
          <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
            <motion.div
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
              transition={{ duration: 0.2 }}
              className="absolute flex items-center justify-center"
            >
              <Menu className="h-6 w-6" />
            </motion.div>
            <motion.div
              variants={{
                open: { opacity: 1 },
                closed: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="absolute flex items-center justify-center"
            >
              <X className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "110%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-tertiary-01 dark:bg-primary-03 fixed top-22 right-6 left-6 z-40 w-auto overflow-hidden rounded-xl shadow-lg"
            >
              <nav className="py-8">
                <ul className="flex flex-col items-center gap-8">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className="hover:text-primary-01 dark:hover:text-secondary-01 text-lg transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-tertiary-03/40 fixed inset-x-0 top-16 bottom-0 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
