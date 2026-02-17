"use client";

import { type MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
import { useLanguage } from "../ui/LanguageProvider";

export default function About() {
  const { t } = useLanguage();
  const [isResumeAvailable, setIsResumeAvailable] = useState(true);
  const [resumeNotice, setResumeNotice] = useState("");

  useEffect(() => {
    let isMounted = true;

    const checkResumeFile = async () => {
      try {
        const response = await fetch(t.about.resumeUrl, {
          method: "HEAD",
          cache: "no-store",
        });
        if (isMounted) {
          setIsResumeAvailable(response.ok);
        }
      } catch {
        if (isMounted) {
          setIsResumeAvailable(false);
        }
      }
    };

    void checkResumeFile();

    return () => {
      isMounted = false;
    };
  }, [t.about.resumeUrl]);

  const handleResumeClick = (
    event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (!isResumeAvailable) {
      event.preventDefault();
      setResumeNotice("Maaf, file belum tersedia.");
      return;
    }

    setResumeNotice("");
  };

  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl border border-[color:var(--border)]" />
          <div className="relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
            <Image
              src="/images/hesdin-img.png"
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
            <Button
              href={t.about.resumeUrl}
              variant="primary"
              download={isResumeAvailable}
              onClick={handleResumeClick}
            >
              {t.about.ctaPrimary}
            </Button>
            <Button href="#contact" variant="secondary">
              {t.about.ctaSecondary}
            </Button>
          </div>
          {resumeNotice ? (
            <p className="text-sm text-[color:var(--text-muted)]">{resumeNotice}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
