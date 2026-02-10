"use client";

import SocialIcon from "../ui/SocialIcon";
import { useLanguage } from "../ui/LanguageProvider";

export default function Contact() {
  const { t, language } = useLanguage();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    const lineBreak = language === "id" ? "\n" : "\n";
    const text = [
      `${t.contact.form.fullName}: ${payload.name}`,
      `${t.contact.form.email}: ${payload.email}`,
      payload.phone ? `${t.contact.form.phone}: ${payload.phone}` : "",
      payload.subject ? `${t.contact.form.subject}: ${payload.subject}` : "",
      `${t.contact.form.message}: ${payload.message}`,
    ]
      .filter(Boolean)
      .join(lineBreak);

    const phoneNumber = "6285398737159";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-6">
            <p className="text-xs font-medium tracking-[0.08em] text-[color:var(--text-subtle)]">
              {t.contact.label}
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="text-base leading-7 text-[color:var(--text-muted)]">
              {t.contact.description}
            </p>
            <div className="flex items-center gap-4 pt-2">
              {t.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center text-[color:var(--text-muted)] transition hover:text-[color:var(--text)]"
                  aria-label={social.name}
                >
                  <SocialIcon icon={social.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid gap-8 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-[color:var(--text-muted)]">
                {t.contact.form.fullName}
                <input
                  type="text"
                  name="name"
                  placeholder=""
                  required
                  className="w-full border-b border-[color:var(--border)] bg-transparent pb-2 text-sm text-[color:var(--text)] focus:border-[color:var(--border-strong)] focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[color:var(--text-muted)]">
                {t.contact.form.email}
                <input
                  type="email"
                  name="email"
                  placeholder=""
                  required
                  className="w-full border-b border-[color:var(--border)] bg-transparent pb-2 text-sm text-[color:var(--text)] focus:border-[color:var(--border-strong)] focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[color:var(--text-muted)]">
                {t.contact.form.phone}
                <input
                  type="tel"
                  name="phone"
                  placeholder=""
                  className="w-full border-b border-[color:var(--border)] bg-transparent pb-2 text-sm text-[color:var(--text)] focus:border-[color:var(--border-strong)] focus:outline-none"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[color:var(--text-muted)]">
                {t.contact.form.subject}
                <input
                  type="text"
                  name="subject"
                  placeholder=""
                  className="w-full border-b border-[color:var(--border)] bg-transparent pb-2 text-sm text-[color:var(--text)] focus:border-[color:var(--border-strong)] focus:outline-none"
                />
              </label>
            </div>
            <label className="block space-y-2 text-sm font-medium text-[color:var(--text-muted)]">
              {t.contact.form.message}
              <textarea
                name="message"
                rows={4}
                required
                className="w-full border-b border-[color:var(--border)] bg-transparent pb-2 text-sm text-[color:var(--text)] focus:border-[color:var(--border-strong)] focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-[color:var(--button-primary-bg)] px-6 py-3 text-sm font-semibold text-[color:var(--button-primary-text)] transition hover:bg-[color:var(--button-primary-hover)]"
            >
              {t.contact.form.cta}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
