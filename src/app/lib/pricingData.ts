export type PricingPackage = {
  name: string;
  price: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  duration: string;
  revisions: string;
  ctaLabel: string;
  ctaHref: string;
};

export type PricingAddon = {
  title: string;
  price: string;
};

export type PricingContent = {
  title: string;
  subtitle: string;
  addonsTitle: string;
  packages: PricingPackage[];
  addons: PricingAddon[];
};

export const pricingContent: Record<"id" | "en", PricingContent> = {
  id: {
    title: "Paket & Harga",
    subtitle:
      "Pilih paket sesuai kebutuhan. Harga dapat menyesuaikan kompleksitas fitur.",
    addonsTitle: "Tambahan",
    packages: [
      {
        name: "Basic Website",
        price: "Mulai dari Rp 2.000.000",
        features: [
          "1-5 halaman (Home, About, Services, Portfolio, Contact)",
          "Desain modern & clean",
          "Responsive (Mobile, Tablet, Desktop)",
          "Basic SEO (Meta title & description)",
          "Form kontak (Email / WhatsApp)",
          "Deployment (Vercel / Hosting klien)",
        ],
        duration: "Waktu pengerjaan: 5-7 hari",
        revisions: "Revisi: 7x",
        ctaLabel: "Konsultasi Sekarang",
        ctaHref: "https://wa.me/628XXXXXXXXXX",
      },
      {
        name: "Professional Website",
        price: "Mulai dari Rp 5.000.000",
        highlighted: true,
        badge: "Recommended",
        features: [
          "6-10 halaman",
          "Custom UI Design (bukan template)",
          "Responsive & performance optimized",
          "SEO on-page",
          "Animasi ringan (hover & scroll)",
          "Editable content (CMS ringan)",
          "Integrasi WhatsApp / Email / Google Maps",
        ],
        duration: "Waktu pengerjaan: 10-14 hari",
        revisions: "Revisi: 10x",
        ctaLabel: "Konsultasi Sekarang",
        ctaHref: "https://wa.me/628XXXXXXXXXX",
      },
      {
        name: "Premium Website",
        price: "Mulai dari Rp 8.000.000",
        features: [
          "Unlimited halaman (sesuai scope)",
          "Full custom UI/UX",
          "Advanced SEO structure",
          "High performance optimization",
          "Admin panel / dashboard (opsional)",
          "API & database integration",
          "Advanced animation / dark mode",
          "Maintenance 1 bulan",
        ],
        duration: "Waktu pengerjaan: 3-5 minggu",
        revisions: "Revisi: Unlimited (selama scope tetap)",
        ctaLabel: "Konsultasi Sekarang",
        ctaHref: "https://wa.me/628XXXXXXXXXX",
      },
    ],
    addons: [
      { title: "Tambahan halaman", price: "Rp 400.000 / halaman" },
      { title: "Blog / CMS", price: "Rp 1.000.000" },
      { title: "Admin dashboard", price: "Rp 2.000.000+" },
      { title: "SEO lanjutan", price: "Rp 1.500.000" },
      { title: "Maintenance bulanan", price: "Rp 500.000 / bulan" },
    ],
  },
  en: {
    title: "Packages & Pricing",
    subtitle:
      "Choose the package that fits your needs. Pricing may adjust based on feature complexity.",
    addonsTitle: "Add-ons",
    packages: [
      {
        name: "Basic Website",
        price: "Starting at Rp 2.000.000",
        features: [
          "1-5 pages (Home, About, Services, Portfolio, Contact)",
          "Modern & clean design",
          "Responsive (Mobile, Tablet, Desktop)",
          "Basic SEO (Meta title & description)",
          "Contact form (Email / WhatsApp)",
          "Deployment (Vercel / Client hosting)",
        ],
        duration: "Timeline: 5-7 days",
        revisions: "Revisions: 7x",
        ctaLabel: "Consult Now",
        ctaHref: "https://wa.me/628XXXXXXXXXX",
      },
      {
        name: "Professional Website",
        price: "Starting at Rp 5.000.000",
        highlighted: true,
        badge: "Recommended",
        features: [
          "6-10 pages",
          "Custom UI Design (no template)",
          "Responsive & performance optimized",
          "On-page SEO",
          "Light animations (hover & scroll)",
          "Editable content (lightweight CMS)",
          "WhatsApp / Email / Google Maps integration",
        ],
        duration: "Timeline: 10-14 days",
        revisions: "Revisions: 10x",
        ctaLabel: "Consult Now",
        ctaHref: "https://wa.me/628XXXXXXXXXX",
      },
      {
        name: "Premium Website",
        price: "Starting at Rp 8.000.000",
        features: [
          "Unlimited pages (based on scope)",
          "Full custom UI/UX",
          "Advanced SEO structure",
          "High performance optimization",
          "Admin panel / dashboard (optional)",
          "API & database integration",
          "Advanced animation / dark mode",
          "1 month maintenance",
        ],
        duration: "Timeline: 3-5 weeks",
        revisions: "Revisions: Unlimited (within scope)",
        ctaLabel: "Consult Now",
        ctaHref: "https://wa.me/628XXXXXXXXXX",
      },
    ],
    addons: [
      { title: "Additional page", price: "Rp 400.000 / page" },
      { title: "Blog / CMS", price: "Rp 1.000.000" },
      { title: "Admin dashboard", price: "Rp 2.000.000+" },
      { title: "Advanced SEO", price: "Rp 1.500.000" },
      { title: "Monthly maintenance", price: "Rp 500.000 / month" },
    ],
  },
};
