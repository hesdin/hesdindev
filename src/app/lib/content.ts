import type {
  ContactInfo,
  FaqItem,
  GalleryItem,
  NavLink,
  Project,
  Service,
  SocialLink,
  TechItem,
} from "../types";

export type Language = "en" | "id";

type HeroContent = {
  location: string;
  headline: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  techLabel: string;
};

type ServicesContent = {
  title: string;
  description: string;
  cta: string;
  items: Service[];
};

type ProjectsContent = {
  title: string;
  featuredCta: string;
  items: Project[];
};

type GalleryContent = {
  title: string;
  counter: string;
  cta: string;
  items: GalleryItem[];
};

type AboutContent = {
  title: string;
  subtitle: string;
  paragraphs: string[];
  ctaPrimary: string;
  resumeUrl: string;
  ctaSecondary: string;
};

type FaqContent = {
  title: string;
  subtitle: string;
  items: FaqItem[];
};

type ContactContent = {
  label: string;
  title: string;
  description: string;
  form: {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    cta: string;
  };
};

type FooterContent = {
  brand: string;
  description: string;
  resumeCta: string;
  contactTitle: string;
  menuTitle: string;
  copyright: string;
};

type ContentBundle = {
  navLinks: NavLink[];
  contactButton: string;
  hero: HeroContent;
  techStack: TechItem[];
  services: ServicesContent;
  projects: ProjectsContent;
  gallery: GalleryContent;
  about: AboutContent;
  faq: FaqContent;
  contact: ContactContent;
  socialLinks: SocialLink[];
  contactDetails: ContactInfo[];
  footer: FooterContent;
};

const techStack: TechItem[] = [
  { name: "JavaScript" },
  { name: "Laravel" },
  { name: "Tailwind CSS" },
  { name: "Alpine.js" },
  { name: "Livewire" },
  { name: "Vue.js" },
  { name: "Flutter" },
  { name: "PHP" },
  { name: "MySQL" },
  { name: "PostgreSQL" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "WordPress" },
];

const socialLinks: SocialLink[] = [
  { name: "Dribbble", href: "#", icon: "dribbble" },
  { name: "GitHub", href: "https://github.com/hesdin/", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hesdin-mukhsin/",
    icon: "linkedin",
  },
  { name: "Twitter", href: "https://x.com/edinmukhsin", icon: "twitter" },
];

const contactDetails: ContactInfo[] = [
  { label: "Email", value: "hesdinmukhsin@gmail.com" },
  { label: "Phone", value: "+62 853-9873-7159" },
  { label: "Address", value: "Makassar . Indonesia" },
];

export const content: Record<Language, ContentBundle> = {
  en: {
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Designs", href: "#gallery" },
      { label: "About", href: "#about" },
      { label: "FAQs", href: "#faq" },
    ],
    contactButton: "Contact",
    hero: {
      location: "Makassar, Indonesia",
      headline: "I'm Hesdin, Freelance Web App Developer",
      description:
        "Technical partner for corporations, business owners, and SMEs in building web apps and digital systems that are secure, reliable, and ready to scale.",
      ctaPrimary: "Start a Project",
      ctaSecondary: "See My Work",
      techLabel: "Technologies I use",
    },
    techStack,
    services: {
      title: "Services Offered",
      description:
        "Custom technology solutions for corporations, businesses, and SMEs. From startup scale to enterprise.",
      cta: "Learn More",
      items: [
        {
          title: "Custom System Development",
          description:
            "Transform business processes into digital operations with precise solutions. Built from scratch and fully tailored to your workflows.",
          icon: "frontend",
        },
        {
          title: "Backend Development",
          description:
            "Building a strong, fast digital foundation with APIs, integrations, and database optimization so systems stay stable and ready to grow.",
          icon: "backend",
        },
        {
          title: "Mobile App Development",
          description:
            "One codebase for iOS and Android with Flutter. Smooth UX, stable performance, and easy to extend.",
          icon: "design",
        },
        {
          title: "Technology Consulting",
          description:
            "System audits, architecture planning, and tech-stack advice so technical decisions stay on track.",
          icon: "performance",
        },
      ],
    },
    projects: {
      // title: "Reliable Digital Systems",
      title: "Selected Portfolio Projects",
      featuredCta: "View demo →",
      items: [
        {
          title: "Invest Project",
          description:
            "Invest Project is a sharia-compliant business project investment platform that connects investors with project issuers through listings, proposals, and transparent contract and profit-sharing schemes.",
          image: "/images/projects/investproject.webp",
          link: "https://investproject.hesdin.cloud/",
          tags: ["Fintech", "Syariah", "Investment"],
        },
        {
          title: "Frame Update",
          description:
            "Digital news platform serving breaking news, trending topics, and polls in one ecosystem, complete with search, bookmarks, and member notifications.",
          image: "/images/projects/frameupdate.webp",
          link: "https://frameupdate.cloud/",
          tags: ["News", "Media", "Engagement"],
        },
        {
          title: "Marketplace UMKM",
          description:
            "Marketplace is a B2B marketplace connecting MSMEs/stores with buyers for goods and services procurement, complete with product catalogs, promos, chat, and integrated payments.",
          image: "/images/projects/marketplace.webp",
          link: "https://marketplace.hesdin.cloud/",
          tags: ["Marketplace", "B2B", "E-commerce"],
        },
        {
          title: "WZCRM Memberships",
          description:
            "Nationwide Restaurant CRM & Ordering. WZCRM is an integrated loyalty platform connecting dozens of restaurant branches into one ordering ecosystem with a strong membership program.",
          image: "/images/projects/wizzmie.webp",
          link: "https://wizzmiecms.devta.id/login",
          tags: ["CRM", "Loyalty", "Ordering"],
          featured: true,
        },
        // {
        //   title: "2RCargo",
        //   description:
        //     "2RCargo is an integrated logistics platform for shipping goods and vehicles across Indonesia, complete with shipping cost checks, tracking, and invoice/manifest management.",
        //   image: "/images/projects/project-4.svg",
        //   link: "#",
        //   tags: ["Logistics", "Tracking", "Shipping"],
        // },
      ],
    },
    gallery: {
      title: "Design Explorations for Clients",
      counter: "1/4",
      cta: "Learn more →",
      items: [
        {
          title: "Checkout",
          description:
            "Checkout flow for Astro Mart with a clean, premium e-commerce experience.",
          image: "/images/gallery/flower-shop.webp",
        },
        {
          title: "Admin Panel",
          description:
            "MSCSC Admin Panel to streamline updates with simple, clear controls.",
          image: "/images/gallery/cms-wizzmie.webp",
        },
        {
          title: "Umrah Haji",
          description:
            "Umrah Haji service landing page with clear package information, schedules, and a structured booking flow.",
          image: "/images/gallery/hajj-umrah.webp",
        },
        // {
        //   title: "Product UI",
        //   description:
        //     "Product showcase UI with strong visual hierarchy and layout.",
        //   image: "/images/gallery/gallery-4.svg",
        // },
        {
          title: "Mobile UI",
          description:
            "Mobile-first UI exploration for rapid scanning and clarity.",
          image: "/images/gallery/mobile-ui.webp",
        },
      ],
    },
    about: {
      title: "My Experience",
      subtitle: "My journey started in 2022.",
      paragraphs: [
        "Since 2022, experience handling enterprise systems has shaped the quality standards and engineering professionalism upheld to this day.",
        "Working remotely and collaboratively with client teams to ensure solutions are secure, easy to maintain, and ready to scale.",
      ],
      ctaPrimary: "Download Resume",
      resumeUrl: "/resume.pdf",
      ctaSecondary: "Contact Me",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Quick answers to common questions about working together.",
      items: [
        {
          question: "Who are you, and what do you do?",
          answer:
            "I'm Hesdin, a freelance web app developer helping businesses build secure, scalable digital systems.",
        },
        {
          question: "What services do you provide?",
          answer:
            "Custom system development, backend, mobile apps with Flutter, and technology consulting.",
        },
        {
          question: "What technologies do you work with?",
          answer:
            "Laravel, TALL Stack (Tailwind, Alpine, Livewire), Vue.js, Flutter, PostgreSQL/MySQL, and modern tooling.",
        },
        {
          question: "How do you approach a new project?",
          answer:
            "I start with discovery and goal alignment, then system design and staged delivery with clear updates.",
        },
        {
          question: "Can you integrate or modernize an existing system?",
          answer:
            "Yes. I can integrate legacy systems, improve performance, and modernize the architecture without disrupting operations.",
        },
        {
          question: "How can I collaborate with you?",
          answer:
            "Share your needs via the contact form and I'll reply with scope, timeline, and next steps.",
        },
      ],
    },
    contact: {
      label: "Contact me",
      title: "Get in touch",
      description:
        "Tell me about your needs, and I'll respond with scope, timeline, and next steps.",
      form: {
        fullName: "Full name",
        email: "Email address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Write your message here",
        cta: "Send Message",
      },
    },
    socialLinks,
    contactDetails,
    footer: {
      brand: "Hesdin",
      description:
        "Freelance web app developer helping businesses build secure, scalable digital systems.",
      resumeCta: "My Resume",
      contactTitle: "Contact me",
      menuTitle: "Menu",
      copyright:
        "Copyright © 2026 Hesdin - All rights reserved || Designed By: Hesdin",
    },
  },
  id: {
    navLinks: [
      { label: "Beranda", href: "#home" },
      { label: "Layanan", href: "#services" },
      { label: "Proyek", href: "#projects" },
      { label: "Desain", href: "#gallery" },
      { label: "Tentang", href: "#about" },
      { label: "FAQ", href: "#faq" },
    ],
    contactButton: "Hubungi",
    hero: {
      location: "Makassar, Indonesia",
      headline: "Saya Hesdin, Freelance Web App Developer",
      description:
        "Partner teknis untuk korporasi, pemilik bisnis, dan UMKM dalam membangun web app serta sistem digital yang aman, andal, dan siap skala besar.",
      ctaPrimary: "Mulai Proyek",
      ctaSecondary: "Lihat Karya",
      techLabel: "Teknologi yang saya gunakan",
    },
    techStack,
    services: {
      title: "Layanan yang Ditawarkan",
      description:
        "Solusi teknologi kustom untuk korporasi, bisnis, dan UMKM. Dari skala startup hingga enterprise.",
      cta: "Pelajari",
      items: [
        {
          title: "Pengembangan Sistem Kustom",
          description:
            "Transformasi proses bisnis ke ranah digital melalui solusi yang presisi. Sistem dibangun dari nol dan disesuaikan sepenuhnya dengan alur kerja bisnis.",
          icon: "frontend",
        },
        {
          title: "Backend Development",
          description:
            "Membangun fondasi digital yang kokoh dan cepat, dengan API, integrasi, serta optimasi database agar sistem tetap stabil dan siap berkembang.",
          icon: "backend",
        },
        {
          title: "Mobile App Development",
          description:
            "Satu codebase untuk iOS dan Android dengan Flutter. UX mulus, performa stabil, dan mudah dikembangkan.",
          icon: "design",
        },

        {
          title: "Konsultasi Teknologi",
          description:
            "Audit sistem, perencanaan arsitektur, dan advis tech stack agar keputusan teknis tetap tepat.",
          icon: "performance",
        },
      ],
    },
    projects: {
      // title: "Sistem Digital yang Andal",
      title: "Beberapa Portofolio Project",
      featuredCta: "Lihat demo →",
      items: [
        {
          title: "Invest Project",
          description:
            "Invest Project adalah platform investasi proyek bisnis syariah yang mempertemukan pemodal dengan penerbit proyek melalui listing project, proposal, serta skema akad dan bagi hasil yang transparan.",
          image: "/images/projects/investproject.webp",
          link: "https://investproject.hesdin.cloud/",
          tags: ["Fintech", "Syariah", "Investment"],
        },
        {
          title: "Frame Update",
          description:
            "Platform berita digital yang menyajikan breaking news, trending, dan polling dalam satu ekosistem, dilengkapi fitur pencarian, bookmark, serta notifikasi untuk member.",
          image: "/images/projects/frameupdate.webp",
          link: "https://frameupdate.cloud/",
          tags: ["News", "Media", "Engagement"],
        },
        {
          title: "Marketplace UMKM",
          description:
            "Marketplace adalah platform marketplace B2B yang menghubungkan UMKM/toko dengan pembeli untuk pengadaan barang dan jasa, lengkap dengan katalog produk, promo, chat, dan pembayaran terintegrasi.",
          image: "/images/projects/marketplace.webp",
          link: "https://marketplace.hesdin.cloud/",
          tags: ["Marketplace", "B2B", "E-commerce"],
        },
        {
          title: "WZCRM Memberships",
          description:
            "Nationwide Restaurant CRM & Ordering. WZCRM adalah platform loyalitas terintegrasi yang menghubungkan puluhan cabang restoran dalam satu ekosistem pemesanan dan program membership yang kuat.",
          image: "/images/projects/wizzmie.webp",
          link: "https://wizzmiecms.devta.id/login",
          tags: ["CRM", "Loyalty", "Ordering"],
          featured: true,
        },
        // {
        //   title: "2RCargo",
        //   description:
        //     "2RCargo adalah platform logistik terintegrasi untuk pengiriman barang dan kendaraan ke seluruh Indonesia, lengkap dengan cek ongkir, tracking resi, dan pengelolaan invoice/manifest.",
        //   image: "/images/projects/project-4.svg",
        //   link: "#",
        //   tags: ["Logistik", "Tracking", "Pengiriman"],
        // },
      ],
    },
    gallery: {
      title: "Eksplorasi Desain untuk Klien",
      counter: "1/4",
      // cta: "Pelajari →",
      cta: "",
      items: [
        {
          title: "Checkout",
          description:
            "Checkout page untuk Astro Mart dengan pengalaman e-commerce yang rapi dan premium.",
          image: "/images/gallery/flower-shop.webp",
        },
        {
          title: "Admin Panel",
          description:
            "Admin Panel WIZZMIE untuk mempercepat update event dan konten.",
          image: "/images/gallery/cms-wizzmie.webp",
        },
        {
          title: "Umrah Haji",
          description:
            "Landing page layanan Umrah Haji dengan informasi paket, jadwal, dan alur pemesanan yang terstruktur.",
          image: "/images/gallery/hajj-umrah.webp",
        },
        // {
        //   title: "Product UI",
        //   description:
        //     "UI produk dengan hirarki visual yang jelas.",
        //   image: "/images/gallery/gallery-4.svg",
        // },
        {
          title: "Mobile UI",
          description:
            "Eksplorasi UI mobile dengan layout, hirarki, dan interaksi intuitif untuk pencarian cepat.",
          image: "/images/gallery/mobile-ui.webp",
        },
      ],
    },
    about: {
      title: "Pengalaman yang Saya Miliki",
      subtitle: "Perjalanan saya dimulai sejak 2020.",
      paragraphs: [
        "Sejak 2020, pengalaman menangani sistem enterprise membentuk standar kualitas dan profesionalisme engineering yang dijaga hingga saat ini.",
        "Bekerja secara remote dan kolaboratif bersama tim klien untuk memastikan solusi yang dibangun aman, mudah dirawat, dan siap dikembangkan.",
      ],
      ctaPrimary: "Unduh Resume",
      resumeUrl: "/resume.pdf",
      ctaSecondary: "Hubungi Saya",
    },
    faq: {
      title: "Pertanyaan yang Sering Ditanyakan",
      subtitle: "Jawaban singkat seputar cara kerja dan layanan.",
      items: [
        {
          question: "Siapa kamu dan apa yang kamu kerjakan?",
          answer:
            "Saya Hesdin, freelance web app developer yang membantu bisnis membangun sistem digital yang aman dan scalable.",
        },
        {
          question: "Layanan apa yang kamu berikan?",
          answer:
            "Pengembangan sistem kustom, backend, mobile app dengan Flutter, dan konsultasi teknologi.",
        },
        {
          question: "Teknologi apa yang kamu gunakan?",
          answer:
            "Laravel, TALL Stack (Tailwind, Alpine, Livewire), Vue.js, Flutter, PostgreSQL/MySQL, dan tools modern.",
        },
        {
          question: "Bagaimana proses kamu memulai project?",
          answer:
            "Mulai dari discovery dan penyamaan tujuan, lalu desain sistem dan delivery bertahap dengan update yang jelas.",
        },
        {
          question: "Bisa integrasi atau modernisasi sistem yang sudah ada?",
          answer:
            "Bisa. Saya dapat mengintegrasikan sistem lama, meningkatkan performa, dan merapikan arsitektur tanpa mengganggu operasional.",
        },
        {
          question: "Bagaimana cara kerja sama dengan kamu?",
          answer:
            "Kirim detail project lewat form kontak, lalu saya balas dengan scope, timeline, dan langkah berikutnya.",
        },
      ],
    },
    contact: {
      label: "Hubungi saya",
      title: "Mari terhubung",
      description:
        "Ceritakan kebutuhan Anda, saya akan balas dengan scope, timeline, dan langkah berikutnya.",
      form: {
        fullName: "Nama lengkap",
        email: "Alamat email",
        phone: "Nomor telepon",
        subject: "Subjek",
        message: "Tulis pesan Anda di sini",
        cta: "Kirim Pesan",
      },
    },
    socialLinks,
    contactDetails,
    footer: {
      brand: "Hesdin",
      description:
        "Freelance web app developer yang membantu bisnis membangun sistem digital yang aman dan siap skala.",
      resumeCta: "Resume Saya",
      contactTitle: "Hubungi saya",
      menuTitle: "Menu",
      copyright:
        "Copyright © 2026 Hesdin - All rights reserved || Designed By: Hesdin",
    },
  },
};
