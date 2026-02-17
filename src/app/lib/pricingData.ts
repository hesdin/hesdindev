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
  category?: "web" | "mobile";
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
  mobileReveal?: {
    teaser: string;
    cta: string;
  };
};

export const pricingContent: Record<"id" | "en", PricingContent> = {
  id: {
    title: "Paket & Harga",
    subtitle:
      "Pilih paket sesuai kebutuhan. Harga dapat menyesuaikan kompleksitas fitur.",
    addonsTitle: "Tambahan",
    mobileReveal: {
      teaser: "Butuh mobile app?",
      cta: "Cek di sini",
    },
    packages: [
      {
        name: "Basic Website",
        price: "Mulai dari Rp 2.500.000",
        category: "web",
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
        ctaHref: "https://wa.me/6285398737159",
      },
      {
        name: "Professional Website",
        price: "Mulai dari Rp 5.000.000",
        highlighted: true,
        badge: "Recommended",
        category: "web",
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
        ctaHref: "https://wa.me/6285398737159",
      },
      {
        name: "Premium Website",
        price: "Mulai dari Rp 8.000.000",
        category: "web",
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
        ctaHref: "https://wa.me/6285398737159",
      },
      {
        name: "Basic Mobile App",
        price: "Mulai dari Rp 6.000.000",
        category: "mobile",
        features: [
          "1 aplikasi (Flutter) untuk iOS & Android",
          "UI sederhana & clean",
          "Autentikasi dasar (login/register)",
          "Integrasi API dasar",
          "Bantuan publikasi ke store",
        ],
        duration: "Waktu pengerjaan: 3-5 minggu",
        revisions: "Revisi: 6x",
        ctaLabel: "Konsultasi Sekarang",
        ctaHref: "https://wa.me/6285398737159",
      },
      {
        name: "Professional Mobile App",
        price: "Mulai dari Rp 10.000.000",
        highlighted: true,
        badge: "Recommended",
        category: "mobile",
        features: [
          "UI/UX custom (bukan template)",
          "Fitur inti lengkap sesuai scope",
          "Integrasi API & database",
          "Push notification",
          "Analitik dasar",
        ],
        duration: "Waktu pengerjaan: 6-8 minggu",
        revisions: "Revisi: 10x",
        ctaLabel: "Konsultasi Sekarang",
        ctaHref: "https://wa.me/6285398737159",
      },
      {
        name: "Premium Mobile App",
        price: "Mulai dari Rp 15.000.000",
        category: "mobile",
        features: [
          "Full custom UI/UX",
          "Arsitektur scalable & modular",
          "Fitur real-time (opsional)",
          "Kemampuan offline-first",
          "CI/CD & maintenance 1 bulan",
        ],
        duration: "Waktu pengerjaan: 8-12 minggu",
        revisions: "Revisi: Unlimited (selama scope tetap)",
        ctaLabel: "Konsultasi Sekarang",
        ctaHref: "https://wa.me/6285398737159",
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
    mobileReveal: {
      teaser: "Need a mobile app?",
      cta: "Check here",
    },
    packages: [
      {
        name: "Basic Website",
        price: "Starting at Rp 2.500.000",
        category: "web",
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
        ctaHref: "https://wa.me/6285398737159",
      },
      {
        name: "Professional Website",
        price: "Starting at Rp 5.000.000",
        highlighted: true,
        badge: "Recommended",
        category: "web",
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
        ctaHref: "https://wa.me/6285398737159",
      },
      {
        name: "Premium Website",
        price: "Starting at Rp 8.000.000",
        category: "web",
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
        ctaHref: "https://wa.me/6285398737159",
      },
      {
        name: "Basic Mobile App",
        price: "Starting at Rp 6.000.000",
        category: "mobile",
        features: [
          "1 app (Flutter) for iOS & Android",
          "Simple & clean UI",
          "Basic authentication (login/register)",
          "Basic API integration",
          "Store publishing assistance",
        ],
        duration: "Timeline: 3-5 weeks",
        revisions: "Revisions: 6x",
        ctaLabel: "Consult Now",
        ctaHref: "https://wa.me/6285398737159",
      },
      {
        name: "Professional Mobile App",
        price: "Starting at Rp 10.000.000",
        highlighted: true,
        badge: "Recommended",
        category: "mobile",
        features: [
          "Custom UI/UX (no template)",
          "Core features based on scope",
          "API & database integration",
          "Push notifications",
          "Basic analytics",
        ],
        duration: "Timeline: 6-8 weeks",
        revisions: "Revisions: 10x",
        ctaLabel: "Consult Now",
        ctaHref: "https://wa.me/6285398737159",
      },
      {
        name: "Premium Mobile App",
        price: "Starting at Rp 15.000.000",
        category: "mobile",
        features: [
          "Full custom UI/UX",
          "Scalable & modular architecture",
          "Real-time features (optional)",
          "Offline-first capabilities",
          "CI/CD & 1 month maintenance",
        ],
        duration: "Timeline: 8-12 weeks",
        revisions: "Revisions: Unlimited (within scope)",
        ctaLabel: "Consult Now",
        ctaHref: "https://wa.me/6285398737159",
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
