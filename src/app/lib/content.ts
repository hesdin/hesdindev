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
  { name: "Reactjs" },
  { name: "Node" },
  { name: "Express" },
  { name: "Bootstrap" },
  { name: "jQuery" },
  { name: "PHP" },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Figma" },
  { name: "WordPress" },
];

const socialLinks: SocialLink[] = [
  { name: "Dribbble", href: "#", icon: "dribbble" },
  { name: "GitHub", href: "#", icon: "github" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Twitter", href: "#", icon: "twitter" },
];

const contactDetails: ContactInfo[] = [
  { label: "Email", value: "hello@hesdin.dev" },
  { label: "Phone", value: "+1 (555) 024-8821" },
  { label: "Address", value: "Remote • United States" },
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
      location: "Boston, Massachusetts",
      headline: "I'm Hesdin, Web Developer",
      description:
        "I specialize in crafting modern, high-performing websites that help brands stand out and convert visitors into loyal clients.",
      ctaPrimary: "Hire Me",
      ctaSecondary: "See My Works",
      techLabel: "Technologies I use",
    },
    techStack,
    services: {
      title: "My Services",
      description:
        "Explore my range of services designed to elevate your digital presence with elegant, performant experiences.",
      cta: "Learn More",
      items: [
        {
          title: "Front-End Dev",
          description:
            "Bringing designs to life with clean, efficient, and optimized code. I build responsive, interactive web applications using the latest front-end technologies like React.",
          icon: "frontend",
        },
        {
          title: "Back-End Dev",
          description:
            "I develop robust server-side applications that power dynamic and data-driven websites. From API creation to database management, I ensure your web apps run smoothly.",
          icon: "backend",
        },
        {
          title: "UI/UX Design",
          description:
            "I design intuitive and visually compelling user interfaces that enhance engagement. My approach focuses on user behavior, accessibility, and aesthetics.",
          icon: "design",
        },
        {
          title: "Performance Optimization",
          description:
            "Slow websites lose visitors. I enhance website performance with code optimization, caching strategies, and SEO improvements for fast load times.",
          icon: "performance",
        },
      ],
    },
    projects: {
      title: "Projects I've Created for Clients",
      featuredCta: "Learn more →",
      items: [
        {
          title: "MSCSC",
          description:
            "A vibrant ReactJS website for MSCSC, celebrating science, math, and space exploration. The platform features engaging events and interactive content.",
          image: "/images/projects/project-1.svg",
          link: "#",
          tags: ["ReactJS", "Design", "CMS"],
          featured: true,
        },
        {
          title: "Weather Compass",
          description: "Weather forecasting platform with intuitive UI.",
          image: "/images/projects/project-2.svg",
          link: "#",
          tags: ["React", "API", "Charts"],
        },
        {
          title: "Astro Fest 1.0",
          description: "Event landing page and ticketing flow.",
          image: "/images/projects/project-3.svg",
          link: "#",
          tags: ["Landing", "Branding", "SEO"],
        },
        {
          title: "Colorize",
          description: "E-commerce experience with custom product flow.",
          image: "/images/projects/project-4.svg",
          link: "#",
          tags: ["Commerce", "Payments", "UX"],
        },
      ],
    },
    gallery: {
      title: "Creative Designs Made for Clients",
      counter: "1/5",
      cta: "Learn more →",
      items: [
        {
          title: "Checkout",
          description:
            "Checkout page designed for Astro Mart with a clean and premium e-commerce experience.",
          image: "/images/gallery/gallery-1.svg",
        },
        {
          title: "Admin Panel",
          description:
            "Admin Panel, The MSCSC Admin Panel streamlines management with simple controls.",
          image: "/images/gallery/gallery-2.svg",
        },
        {
          title: "Science Tech Club",
          description:
            "MSCSC club landing experience with clean hero and content system.",
          image: "/images/gallery/gallery-3.svg",
        },
        {
          title: "Product UI",
          description:
            "Product showcase UI with strong visual hierarchy and layout.",
          image: "/images/gallery/gallery-4.svg",
        },
        {
          title: "Mobile UI",
          description:
            "Mobile-first UI exploration for rapid scanning and clarity.",
          image: "/images/gallery/gallery-5.svg",
        },
      ],
    },
    about: {
      title: "I build calm, modern experiences",
      subtitle: "Full-stack developer helping brands build beautiful, performant websites.",
      paragraphs: [
        "I've spent the last several years collaborating with founders, agencies, and growing teams to design and ship digital experiences that are fast, accessible, and conversion focused.",
        "My workflow blends product strategy, thoughtful design, and clean engineering - ensuring every site feels premium while remaining easy to maintain.",
      ],
      ctaPrimary: "Download Resume",
      ctaSecondary: "Hire Me",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common questions about working together.",
      items: [
        {
          question: "Who are you, and what do you do?",
          answer:
            "I am Hesdin, a freelance full-stack web developer focused on building modern, high-performing digital experiences.",
        },
        {
          question: "What services do you provide?",
          answer:
            "Front-end and back-end development, UI/UX design, performance optimization, and ongoing product support.",
        },
        {
          question: "What technologies do you work with?",
          answer:
            "React, Next.js, TypeScript, Node, SQL databases, and modern design systems like Tailwind CSS.",
        },
        {
          question: "How do you approach a new project?",
          answer:
            "I start with research and discovery, align on goals, design the system, and build in short, clear milestones.",
        },
        {
          question: "Can you redesign an existing website?",
          answer:
            "Yes. I can refresh the UI, improve performance, and preserve brand equity while upgrading the codebase.",
        },
        {
          question: "How can I collaborate with you?",
          answer:
            "Send the project details through the contact form, and I will reply with scope, timeline, and next steps.",
        },
      ],
    },
    contact: {
      label: "Contact me",
      title: "Get in touch",
      description:
        "It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you.",
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
        "I'm a web developer with 3+ years of experience in front-end, back-end, and UI/UX design, creating modern, functional websites to help businesses grow.",
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
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Designs", href: "#gallery" },
      { label: "Tentang", href: "#about" },
      { label: "FAQ", href: "#faq" },
    ],
    contactButton: "Contact",
    hero: {
      location: "Boston, Massachusetts",
      headline: "I'm Hesdin, Web Developer",
      description:
        "Saya membantu brand membangun website modern dan berperforma tinggi agar tampil menonjol dan mengubah pengunjung menjadi klien.",
      ctaPrimary: "Hire Me",
      ctaSecondary: "See My Works",
      techLabel: "Technologies yang saya gunakan",
    },
    techStack,
    services: {
      title: "Layanan Saya",
      description:
        "Rangkaian layanan untuk memperkuat kehadiran digital Anda dengan pengalaman yang elegan dan performa tinggi.",
      cta: "Learn More",
      items: [
        {
          title: "Front-End Dev",
          description:
            "Mengubah desain menjadi pengalaman interaktif dengan code yang rapi dan efisien. Menggunakan React dan teknologi front-end modern.",
          icon: "frontend",
        },
        {
          title: "Back-End Dev",
          description:
            "Membangun aplikasi server-side yang stabil dan aman, mulai dari API sampai pengelolaan database agar web app berjalan mulus.",
          icon: "backend",
        },
        {
          title: "UI/UX Design",
          description:
            "Merancang UI/UX yang intuitif, fokus pada behavior pengguna, aksesibilitas, dan estetika yang modern.",
          icon: "design",
        },
        {
          title: "Performance Optimization",
          description:
            "Optimasi performa website dengan strategi caching, perbaikan Core Web Vitals, dan peningkatan SEO.",
          icon: "performance",
        },
      ],
    },
    projects: {
      title: "Projects yang Saya Buat untuk Clients",
      featuredCta: "Learn more →",
      items: [
        {
          title: "MSCSC",
          description:
            "Website ReactJS untuk komunitas sains yang menampilkan event, profil member, dan konten interaktif.",
          image: "/images/projects/project-1.svg",
          link: "#",
          tags: ["ReactJS", "Design", "CMS"],
          featured: true,
        },
        {
          title: "Weather Compass",
          description: "Platform cuaca dengan UI yang jelas dan cepat.",
          image: "/images/projects/project-2.svg",
          link: "#",
          tags: ["React", "API", "Charts"],
        },
        {
          title: "Astro Fest 1.0",
          description: "Landing page event dengan flow ticketing.",
          image: "/images/projects/project-3.svg",
          link: "#",
          tags: ["Landing", "Branding", "SEO"],
        },
        {
          title: "Colorize",
          description: "Pengalaman e-commerce dengan custom product flow.",
          image: "/images/projects/project-4.svg",
          link: "#",
          tags: ["Commerce", "Payments", "UX"],
        },
      ],
    },
    gallery: {
      title: "Creative Designs Made for Clients",
      counter: "1/5",
      cta: "Learn more →",
      items: [
        {
          title: "Checkout",
          description:
            "Checkout page untuk Astro Mart dengan pengalaman e-commerce yang rapi dan premium.",
          image: "/images/gallery/gallery-1.svg",
        },
        {
          title: "Admin Panel",
          description:
            "Admin Panel MSCSC untuk mempercepat update event dan konten.",
          image: "/images/gallery/gallery-2.svg",
        },
        {
          title: "Science Tech Club",
          description:
            "Landing page komunitas dengan hero dan konten yang terstruktur.",
          image: "/images/gallery/gallery-3.svg",
        },
        {
          title: "Product UI",
          description:
            "UI produk dengan hirarki visual yang jelas.",
          image: "/images/gallery/gallery-4.svg",
        },
        {
          title: "Mobile UI",
          description:
            "Eksplorasi UI mobile untuk scanning cepat.",
          image: "/images/gallery/gallery-5.svg",
        },
      ],
    },
    about: {
      title: "I build calm, modern experiences",
      subtitle: "Full-stack developer untuk brand yang ingin tampil modern.",
      paragraphs: [
        "Saya bekerja sama dengan founder, agency, dan team untuk membangun pengalaman digital yang cepat dan accessible.",
        "Workflow saya menggabungkan strategi produk, design yang matang, dan engineering yang bersih.",
      ],
      ctaPrimary: "Download Resume",
      ctaSecondary: "Hire Me",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Jawaban singkat untuk pertanyaan yang sering muncul.",
      items: [
        {
          question: "Siapa kamu dan apa yang kamu kerjakan?",
          answer:
            "Saya Hesdin, freelance full-stack web developer yang fokus membangun experience digital modern.",
        },
        {
          question: "Layanan apa yang kamu berikan?",
          answer:
            "Front-end, back-end, UI/UX design, performance optimization, dan support produk.",
        },
        {
          question: "Teknologi apa yang kamu gunakan?",
          answer:
            "React, Next.js, TypeScript, Node, SQL database, dan design system modern seperti Tailwind CSS.",
        },
        {
          question: "Bagaimana proses kamu memulai project?",
          answer:
            "Saya mulai dari riset, menyamakan tujuan, lalu desain sistem dan build dengan milestone yang jelas.",
        },
        {
          question: "Bisa redesign website yang sudah ada?",
          answer:
            "Bisa. Saya bisa refresh UI, meningkatkan performa, dan tetap menjaga brand equity.",
        },
        {
          question: "Bagaimana cara kerja sama dengan kamu?",
          answer:
            "Kirim detail project lewat form, lalu saya balas dengan scope, timeline, dan langkah berikutnya.",
        },
      ],
    },
    contact: {
      label: "Contact me",
      title: "Get in touch",
      description:
        "Penting bagi kita untuk selalu terhubung, jadi saya siap menjawab pertanyaan apa pun dari Anda.",
      form: {
        fullName: "Nama lengkap",
        email: "Alamat email",
        phone: "Nomor telepon",
        subject: "Subjek",
        message: "Tulis pesan Anda di sini",
        cta: "Send Message",
      },
    },
    socialLinks,
    contactDetails,
    footer: {
      brand: "Hesdin",
      description:
        "Saya web developer dengan 3+ tahun pengalaman di front-end, back-end, dan UI/UX design untuk membantu bisnis berkembang.",
      resumeCta: "My Resume",
      contactTitle: "Contact me",
      menuTitle: "Menu",
      copyright:
        "Copyright © 2026 Hesdin - All rights reserved || Designed By: Hesdin",
    },
  },
};
