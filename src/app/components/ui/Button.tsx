import Link from "next/link";
import type {
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
} from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md border border-transparent px-6 py-3 text-sm font-semibold transition duration-300";

const variants = {
  primary:
    "bg-[color:var(--button-primary-bg)] text-[color:var(--button-primary-text)] hover:bg-[color:var(--button-primary-hover)]",
  secondary:
    "border border-[color:var(--button-secondary-border)] bg-[color:var(--button-secondary-bg)] text-[color:var(--text)] hover:border-[color:var(--button-secondary-hover-border)] hover:bg-[color:var(--button-secondary-hover-bg)]",
  ghost: "text-[color:var(--text-muted)] hover:text-[color:var(--text)]",
};

const sizes = {
  xs: "px-4 py-1.5 text-xs",
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
  download?: string | boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

export default function Button({
  children,
  href,
  target,
  rel,
  download,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const useAnchor = Boolean(download || target || rel || onClick);

    if (useAnchor) {
      return (
        <a
          href={href}
          className={classes}
          target={target}
          rel={target === "_blank" ? rel ?? "noopener noreferrer" : rel}
          download={download}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
