"use client";

import Button from "../ui/Button";
import { useLanguage } from "../ui/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  const headlineParts = t.hero.headline.split(",");
  const headlineFirst = headlineParts[0];
  const headlineSecond = headlineParts.slice(1).join(",").trim();

  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--glow),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[linear-gradient(180deg,var(--hero-line),transparent)]" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-sm text-[color:var(--text-muted)]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-4 w-4"
              >
                <path d="M12 13.5c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Z" />
                <path d="M19.5 10.5c0 5.25-7.5 10.5-7.5 10.5S4.5 15.75 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </span>
            <span>{t.hero.location}</span>
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl lg:text-6xl">
            {headlineSecond ? (
              <>
                {headlineFirst},
                <br />
                {headlineSecond}
              </>
            ) : (
              t.hero.headline
            )}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--text-muted)] sm:text-lg">
            {t.hero.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              href="#contact"
              variant="primary"
              size="xs"
              className="w-[140px] whitespace-nowrap rounded-md bg-[#f2f2f2] px-2.5 py-0.5 text-[13px] font-medium text-[#111] shadow-none hover:bg-[#e6e6e6]"
            >
              {t.hero.ctaPrimary}
            </Button>
            <Button
              href="#projects"
              variant="secondary"
              size="xs"
              className="w-[140px] whitespace-nowrap rounded-md border border-[#2f2f2f] bg-[#242424] px-1.5 py-0.5 text-[13px] font-medium text-[#e5e5e5] shadow-none hover:border-[#3a3a3a] hover:bg-[#2c2c2c]"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
          <div className="mt-12 w-full">
            <p className="text-xs font-medium tracking-[0.08em] text-[color:var(--text-subtle)]">
              {t.hero.techLabel}
            </p>
            <div className="edge-fade mt-6">
              <div className="flex w-full justify-start overflow-x-auto px-2 sm:justify-center sm:overflow-visible">
                <div className="flex w-max items-center gap-3 px-4 sm:px-0">
                  {t.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="whitespace-nowrap rounded-[6px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-2 text-[11px] font-medium text-[color:var(--text-muted)]"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
