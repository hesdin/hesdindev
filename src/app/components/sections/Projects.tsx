"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";
import { useLanguage } from "../ui/LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();
  const defaultFeatured =
    t.projects.items.find((project) => project.featured) ??
    t.projects.items[0];
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
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--text-muted)] transition hover:text-[color:var(--text)]"
              >
                {t.projects.featuredCta}
              </Link>
            </div>
            <div className="space-y-2">
              {projects.map((project) => {
                const isActive = project.title === featured.title;
                return (
                <div
                  key={project.title}
                  className="border-b border-[color:var(--border)] pb-3"
                >
                  <button
                    type="button"
                    onClick={() => setActiveTitle(project.title)}
                    className={`w-full text-left text-base transition ${
                      isActive
                        ? "font-semibold text-[color:var(--primary)]"
                        : "font-medium text-[color:var(--text)] hover:text-[color:var(--primary)]"
                    }`}
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
          <div
            className={`w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[0_24px_80px_var(--shadow-strong)] transition-all duration-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              width={900}
              height={560}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
