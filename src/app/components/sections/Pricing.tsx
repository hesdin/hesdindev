"use client";

import PricingCard from "../ui/PricingCard";
import SectionTitle from "../ui/SectionTitle";
import { pricingContent } from "../../lib/pricingData";
import { useLanguage } from "../ui/LanguageProvider";

export default function Pricing() {
  const { language } = useLanguage();
  const pricing = pricingContent[language];

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
          {pricing.packages.map((item) => (
            <PricingCard key={item.name} packageData={item} />
          ))}
        </div>
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
