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

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Designs", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faq" },
];

export const techStack: TechItem[] = [
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

export const services: Service[] = [
  {
    title: "Front-End Development",
    description:
      "Responsive, accessible, and performance-driven interfaces built with modern frameworks and component systems.",
    icon: "frontend",
  },
  {
    title: "Back-End Development",
    description:
      "Robust APIs, secure authentication, and scalable data flows that keep your product reliable and fast.",
    icon: "backend",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, conversion-focused experiences with wireframes, prototypes, and polished visual systems.",
    icon: "design",
  },
  {
    title: "Performance Optimization",
    description:
      "Speed audits, Core Web Vitals tuning, and code-splitting strategies for lightning-fast delivery.",
    icon: "performance",
  },
];

export const projects: Project[] = [
  {
    title: "MSC Science Club",
    description:
      "A vibrant platform for science outreach with events, media libraries, and member management.",
    image: "/images/projects/project-1.svg",
    link: "#",
    tags: ["Next.js", "TypeScript", "CMS"],
    featured: true,
  },
  {
    title: "Weather Compass",
    description:
      "A forecasting dashboard with location intelligence and animated data storytelling.",
    image: "/images/projects/project-2.svg",
    link: "#",
    tags: ["React", "API", "Charts"],
  },
  {
    title: "Astro Fest 1.0",
    description:
      "Event landing page and ticketing flow for a community science festival.",
    image: "/images/projects/project-3.svg",
    link: "#",
    tags: ["Landing", "Branding", "SEO"],
  },
  {
    title: "Colorize Store",
    description:
      "E-commerce experience with custom product configuration and fast checkout.",
    image: "/images/projects/project-4.svg",
    link: "#",
    tags: ["Commerce", "Payments", "UX"],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Checkout Experience",
    description: "A minimal checkout flow with bold CTAs and clear hierarchy.",
    image: "/images/gallery/gallery-1.svg",
  },
  {
    title: "Admin Panel",
    description: "Data-heavy dashboard with clean typography and flexible modules.",
    image: "/images/gallery/gallery-2.svg",
  },
  {
    title: "Portfolio Concept",
    description: "Dark-mode portfolio with sharp spacing and elegant motion.",
    image: "/images/gallery/gallery-3.svg",
  },
  {
    title: "Product Launch",
    description: "Hero-first marketing page with layered storytelling sections.",
    image: "/images/gallery/gallery-4.svg",
  },
  {
    title: "Mobile UI",
    description: "Compact card layout for mobile interactions and rapid scanning.",
    image: "/images/gallery/gallery-5.svg",
  },
];

export const faqs: FaqItem[] = [
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
];

export const socialLinks: SocialLink[] = [
  { name: "Dribbble", href: "#", icon: "dribbble" },
  { name: "GitHub", href: "#", icon: "github" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Twitter", href: "#", icon: "twitter" },
];

export const contactDetails: ContactInfo[] = [
  { label: "Email", value: "hello@hesdin.dev" },
  { label: "Phone", value: "+1 (555) 024-8821" },
  { label: "Address", value: "Remote • United States" },
];
