import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[0_20px_80px_var(--shadow-soft)] ${className}`}
    >
      {children}
    </div>
  );
}
