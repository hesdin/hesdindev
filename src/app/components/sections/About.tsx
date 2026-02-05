"use client";

import Image from "next/image";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
import { useLanguage } from "../ui/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl border border-[color:var(--border)]" />
          <div className="relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
            <Image
              src="/images/profile.svg"
              alt="Hesdin portrait"
              width={640}
              height={640}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
        <div className="space-y-6">
          <SectionTitle
            title={t.about.title}
            subtitle={t.about.subtitle}
          />
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-7 text-[color:var(--text-muted)]">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-wrap gap-4">
            <Button href="#" variant="primary">
              {t.about.ctaPrimary}
            </Button>
            <Button href="#contact" variant="secondary">
              {t.about.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
