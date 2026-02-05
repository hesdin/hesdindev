"use client";

import Link from "next/link";
import SocialIcon from "../ui/SocialIcon";
import { useLanguage } from "../ui/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface-nav)]">
      <div className="mx-auto grid max-w-6xl divide-y divide-[color:var(--border)] px-6">
        <div className="grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr] md:divide-x md:divide-[color:var(--border)]">
          <div className="space-y-5 pr-0 md:pr-10">
            <h3 className="text-2xl font-semibold text-[color:var(--text)]">
              {t.footer.brand}
            </h3>
            <p className="text-sm leading-6 text-[color:var(--text-muted)]">
              {t.footer.description}
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-[color:var(--button-primary-bg)] px-4 py-2 text-xs font-semibold text-[color:var(--button-primary-text)]"
            >
              {t.footer.resumeCta}
            </button>
            <div className="flex items-center gap-4 pt-4">
              {t.socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text-muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
                  aria-label={social.name}
                >
                  <SocialIcon icon={social.icon} />
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 px-0 md:px-10">
            <h4 className="text-lg font-semibold text-[color:var(--text)]">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-sm text-[color:var(--text-muted)]">
              {t.contactDetails.map((detail) => (
                <p key={detail.label}>
                  <span className="block text-[color:var(--text)]">
                    {detail.label}:
                  </span>
                  {detail.value}
                </p>
              ))}
            </div>
          </div>
          <div className="space-y-4 pl-0 md:pl-10">
            <h4 className="text-lg font-semibold text-[color:var(--text)]">
              {t.footer.menuTitle}
            </h4>
            <nav className="flex flex-col gap-2 text-sm text-[color:var(--text-muted)]">
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
          </div>
        </div>
        <div className="py-4">
          <p className="text-center text-xs text-[color:var(--text-subtle)]">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
