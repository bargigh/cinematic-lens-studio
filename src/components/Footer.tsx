import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/30 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg text-foreground">Haim Bargig</span>
        <span className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} {t("footer.rights")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
