export type NavLink = {
  label: string;
  href: string;
};

export type TechItem = {
  name: string;
};

export type Service = {
  title: string;
  description: string;
  teaser?: string;
  revealLabel?: string;
  icon: "frontend" | "backend" | "design" | "performance";
};

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  featured?: boolean;
};

export type GalleryItem = {
  title: string;
  description: string;
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: "dribbble" | "github" | "linkedin" | "twitter";
};

export type ContactInfo = {
  label: string;
  value: string;
};
