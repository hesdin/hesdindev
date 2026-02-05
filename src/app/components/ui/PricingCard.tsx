import type { PricingPackage } from "../../lib/pricingData";

type PricingCardProps = {
  packageData: PricingPackage;
};

export default function PricingCard({ packageData }: PricingCardProps) {
  const { name, price, features, duration, revisions, ctaLabel, ctaHref, badge } =
    packageData;

  return (
    <article
      className={`relative flex h-full flex-col rounded-xl border border-[color:var(--border)] p-6 ${
        packageData.highlighted
          ? "bg-[color:var(--surface-strong)] shadow-[0_24px_80px_var(--shadow-strong)]"
          : "bg-[color:var(--surface)]"
      }`}
    >
      {badge ? (
        <span className="absolute -top-3 right-4 rounded-md border border-[color:var(--border)] bg-[color:var(--surface-nav)] px-3 py-1 text-[12px] font-semibold uppercase text-[color:var(--text-muted)]">
          {badge}
        </span>
      ) : null}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-[color:var(--text)]">
          {name}
        </h3>
        <p className="text-2xl font-semibold text-[color:var(--text)]">
          {price}
        </p>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-[color:var(--text-muted)]">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--text-muted)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 space-y-2 text-sm text-[color:var(--text-muted)]">
        <p>{duration}</p>
        <p>{revisions}</p>
      </div>
      <div className="mt-auto pt-4">
        <a
          href={ctaHref}
          className="inline-flex w-full items-center justify-center rounded-md border border-[color:var(--border-soft)] bg-[color:var(--surface-nav)] px-4 py-2 text-sm font-semibold text-[color:var(--text)] transition hover:border-[color:var(--border-strong)]"
          target="_blank"
          rel="noreferrer"
        >
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}
