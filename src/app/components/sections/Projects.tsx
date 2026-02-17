"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";
import { useLanguage } from "../ui/LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();
  const defaultFeatured = t.projects.items[0];
  const [activeTitle, setActiveTitle] = useState(defaultFeatured.title);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setActiveTitle(defaultFeatured.title);
  }, [defaultFeatured.title]);

  useEffect(() => {
    setIsVisible(false);
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [activeTitle]);

  const featured =
    t.projects.items.find((project) => project.title === activeTitle) ??
    defaultFeatured;
  const projects = t.projects.items;
  const isExternalLink =
    featured.link.startsWith("http://") || featured.link.startsWith("https://");

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionTitle title={t.projects.title} />
          <div className="mt-8 space-y-6">
            <div
              className={`space-y-4 transition-all duration-300 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <h3 className="text-lg font-semibold text-[color:var(--text)]">
                {featured.title}
              </h3>
              <p className="text-sm leading-6 text-[color:var(--text-muted)]">
                {featured.description}
              </p>
              <Link
                href={featured.link}
                target={isExternalLink ? "_blank" : undefined}
                rel={isExternalLink ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center rounded-md border border-[color:var(--button-secondary-border)] bg-[color:var(--button-secondary-bg)] px-3.5 py-1.5 text-xs font-semibold text-[color:var(--text)] transition hover:border-[color:var(--button-secondary-hover-border)] hover:bg-[color:var(--button-secondary-hover-bg)]"
              >
                {t.projects.featuredCta}
              </Link>
            </div>
            <div className="space-y-2">
              {projects.map((project) => {
                const isActive = project.title === featured.title;
                if (isActive) return null;
                return (
                <div
                  key={project.title}
                  className="border-b border-[color:var(--border)] pb-3"
                >
                  <button
                    type="button"
                    onClick={() => setActiveTitle(project.title)}
                    className="w-full text-left text-base font-medium text-[color:var(--text)] transition hover:text-[color:var(--primary)]"
                  >
                    {project.title}
                  </button>
                </div>
              );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Link
            href={featured.link}
            target={isExternalLink ? "_blank" : undefined}
            rel={isExternalLink ? "noopener noreferrer" : undefined}
            aria-label={`${t.projects.featuredCta} ${featured.title}`}
            className="group block w-full"
          >
            <div
              className={`relative w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[0_24px_80px_var(--shadow-strong)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_90px_var(--shadow-strong)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <Image
                src={featured.image}
                alt={featured.title}
                width={900}
                height={560}
                className="h-[20rem] w-full rounded-xl object-cover transition duration-500 ease-out group-hover:scale-[1.04] md:h-[24rem]"
              />
              <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-lg bg-black/45 px-3 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                {t.projects.featuredCta}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
