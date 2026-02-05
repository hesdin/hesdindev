"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-md border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-0.5 text-xs font-semibold text-[color:var(--text-muted)]">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-md px-2.5 py-1 transition ${
          language === "en"
            ? "bg-[color:var(--button-primary-bg)] text-[color:var(--button-primary-text)]"
            : "hover:text-[color:var(--text)]"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("id")}
        className={`rounded-md px-2.5 py-1 transition ${
          language === "id"
            ? "bg-[color:var(--button-primary-bg)] text-[color:var(--button-primary-text)]"
            : "hover:text-[color:var(--text)]"
        }`}
      >
        ID
      </button>
    </div>
  );
}
