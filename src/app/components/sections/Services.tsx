"use client";

import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
import { useLanguage } from "../ui/LanguageProvider";

const icons = {
  frontend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path d="M4 6h16v10H4z" />
      <path d="M8 20h8" />
      <path d="M9 10h6" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
      <circle cx="8" cy="7" r="1.5" />
      <circle cx="8" cy="12" r="1.5" />
      <circle cx="8" cy="17" r="1.5" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path d="M5 19c4-6 7-9 14-14" />
      <path d="M8 16l-3 3" />
      <path d="M13 11l3 3" />
      <path d="M7 7l4 4" />
    </svg>
  ),
  performance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  ),
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="space-y-6">
          <SectionTitle title={t.services.title} />
          <p className="text-sm leading-6 text-[color:var(--text-muted)]">
            {t.services.description}
          </p>
          <Button href="#contact" variant="secondary" size="sm">
            {t.services.cta}
          </Button>
        </div>
        <div className="space-y-6">
          {t.services.items.map((service, index) => (
            <div
              key={service.title}
              className={`flex gap-4 pb-6 ${
                index !== t.services.items.length - 1
                  ? "border-b border-[color:var(--border)]"
                  : ""
              }`}
            >
              <div className="mt-1 text-[color:var(--text-muted)]">
                {icons[service.icon]}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--text)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
