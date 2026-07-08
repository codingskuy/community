"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  items: NavItem[];
  base: string;
}

export default function MobileNav({ items, base }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const itemCount = items.length;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open Menu</span>
        {isOpen ? (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {items.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={
                    item.href.startsWith("http")
                      ? item.href
                      : base + item.href.slice(1)
                  }
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: itemCount * 0.05, duration: 0.2 }}
                className="px-3 py-2"
              >
                <a
                  href={`${base}search`}
                  className="flex items-center gap-2 py-2 rounded-md text-base font-medium text-foreground hover:text-primary"
                >
                  <Search className="w-4 h-4" />
                  Search
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
