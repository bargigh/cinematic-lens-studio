import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";
import { Send } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will integrate with backend later
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto pt-12">
        <SectionReveal>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4 text-center">
            {t("contact.title")}
          </h1>
          <p className="font-body text-sm text-muted-foreground text-center mb-16">
            {t("contact.subtitle")}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border/50 py-3 font-body text-sm text-foreground focus:border-primary outline-none transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border/50 py-3 font-body text-sm text-foreground focus:border-primary outline-none transition-colors duration-300"
                  required
                />
              </div>
            </div>
            <div>
              <label className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                {t("contact.subject")}
              </label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-transparent border-b border-border/50 py-3 font-body text-sm text-foreground focus:border-primary outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <label className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                {t("contact.message")}
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full bg-transparent border-b border-border/50 py-3 font-body text-sm text-foreground focus:border-primary outline-none transition-colors duration-300 resize-none"
                required
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-all duration-500"
              >
                {t("contact.send")} <Send size={14} />
              </button>
            </div>
          </form>
        </SectionReveal>
      </div>
    </div>
  );
};

export default Contact;
