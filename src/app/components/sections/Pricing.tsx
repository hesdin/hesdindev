"use client";

import { useMemo, useState } from "react";

import PricingCard from "../ui/PricingCard";
import SectionTitle from "../ui/SectionTitle";
import { pricingContent } from "../../lib/pricingData";
import { useLanguage } from "../ui/LanguageProvider";

export default function Pricing() {
  const { language } = useLanguage();
  const pricing = pricingContent[language];
  const [showMobile, setShowMobile] = useState(false);

  const { webPackages, mobilePackages } = useMemo(() => {
    const mobile = pricing.packages.filter(
      (item) => item.category === "mobile" || item.name.includes("Mobile App")
    );
    const web = pricing.packages.filter((item) => !mobile.includes(item));
    return { webPackages: web, mobilePackages: mobile };
  }, [pricing.packages]);

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionTitle title={pricing.title} />
          <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">
            {pricing.subtitle}
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {webPackages.map((item) => (
            <PricingCard key={item.name} packageData={item} />
          ))}
        </div>
        {mobilePackages.length > 0 && pricing.mobileReveal ? (
          <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-4 text-center">
            <p className="text-sm text-[color:var(--text-muted)]">
              {pricing.mobileReveal.teaser}
            </p>
            <button
              type="button"
              onClick={() => setShowMobile((prev) => !prev)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)] transition hover:opacity-80"
            >
              {pricing.mobileReveal.cta}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className={`h-4 w-4 transition-transform ${
                  showMobile ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        ) : null}
        {showMobile && mobilePackages.length > 0 ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {mobilePackages.map((item) => (
              <PricingCard key={item.name} packageData={item} />
            ))}
          </div>
        ) : null}
        {/*
        <div className="mt-10 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
          <h3 className="text-lg font-semibold text-[color:var(--text)]">
            {pricing.addonsTitle}
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {pricing.addons.map((addon) => (
              <div
                key={addon.title}
                className="flex items-center justify-between border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3 text-sm"
              >
                <span className="text-[color:var(--text-muted)]">
                  {addon.title}
                </span>
                <span className="font-semibold text-[color:var(--text)]">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
