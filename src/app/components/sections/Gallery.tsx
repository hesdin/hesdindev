"use client";

import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { useLanguage } from "../ui/LanguageProvider";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="space-y-4">
            <SectionTitle title={t.gallery.title} />
            <p className="text-sm text-[color:var(--text-muted)]">
              {t.gallery.counter}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text-muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text-muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
        <div className="mt-10 flex gap-10 overflow-x-auto pb-6">
          {t.gallery.items.map((item) => (
            <article key={item.title} className="min-w-[320px] max-w-[360px]">
              <div className="border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={640}
                  height={420}
                  className="h-auto w-full"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[color:var(--text)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">
                {item.description}
              </p>
              <button
                type="button"
                className="mt-3 text-sm font-semibold text-[color:var(--text-muted)]"
              >
                {t.gallery.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
