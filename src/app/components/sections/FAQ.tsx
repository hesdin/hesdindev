"use client";

import SectionTitle from "../ui/SectionTitle";
import { useLanguage } from "../ui/LanguageProvider";

export default function FAQ() {
  const { t } = useLanguage();
  const midpoint = Math.ceil(t.faq.items.length / 2);
  const firstColumn = t.faq.items.slice(0, midpoint);
  const secondColumn = t.faq.items.slice(midpoint);

  const renderItems = (items: typeof t.faq.items) =>
    items.map((item) => (
      <details
        key={item.question}
        className="group border-b border-[color:var(--border)] py-4"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-[color:var(--text-muted)]">
          {item.question}
          <span className="text-lg text-[color:var(--text-subtle)] transition group-open:rotate-45">
            +
          </span>
        </summary>
        <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">
          {item.answer}
        </p>
      </details>
    ));

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionTitle
            title={t.faq.title}
            subtitle={t.faq.subtitle}
            align="center"
          />
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">{renderItems(firstColumn)}</div>
          <div className="space-y-4">{renderItems(secondColumn)}</div>
        </div>
      </div>
    </section>
  );
}
