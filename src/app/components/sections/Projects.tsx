"use client";

import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";
import { useLanguage } from "../ui/LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();
  const featured =
    t.projects.items.find((project) => project.featured) ??
    t.projects.items[0];
  const secondary = t.projects.items.filter((project) => project !== featured);

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionTitle title={t.projects.title} />
          <div className="mt-8 space-y-6">
            <div className="space-y-4">
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
              {secondary.map((project) => (
                <div
                  key={project.title}
                  className="border-b border-[color:var(--border)] pb-3"
                >
                  <p className="text-base font-semibold text-[color:var(--text)]">
                    {project.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[0_24px_80px_var(--shadow-strong)]">
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
