"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../ui/Button";
import { useLanguage } from "../ui/LanguageProvider";
import LanguageToggle from "../ui/LanguageToggle";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[color:var(--border)] bg-[color:var(--surface-nav)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="text-lg font-semibold text-[color:var(--text)]"
        >
          Hesdin
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[color:var(--text-muted)] md:flex">
          {t.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[color:var(--text)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Button href="#contact" size="sm" variant="secondary">
            {t.contactButton}
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border-soft)] text-[color:var(--text-muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </div>
          </button>
        </div>
      </div>
      {isOpen ? (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--surface-nav)] px-6 py-6 md:hidden">
          <div className="mb-6 flex items-center justify-between gap-3">
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-md border border-[color:var(--border-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
              onClick={() => setIsOpen(false)}
            >
              {t.contactButton}
            </Link>
          </div>
          <div className="mb-6 flex items-center justify-between gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <nav className="flex flex-col gap-4 text-sm text-[color:var(--text-muted)]">
            {t.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[color:var(--text)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
