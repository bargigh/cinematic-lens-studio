import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { key: "nav.home", path: "/" },
  { key: "nav.work", path: "/work" },
  { key: "nav.motion", path: "/motion" },
  { key: "nav.studio", path: "/studio" },
  { key: "nav.about", path: "/about" },
  { key: "nav.contact", path: "/contact" },
];

const Navigation = () => {
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-xl font-semibold tracking-wide text-foreground">
          HB
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`font-body text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "he" : "en")}
            className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300 border border-border/50 px-3 py-1 rounded"
          >
            {lang === "en" ? "עב" : "EN"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setLang(lang === "en" ? "he" : "en")}
            className="font-body text-xs text-muted-foreground border border-border/50 px-2 py-1 rounded"
          >
            {lang === "en" ? "עב" : "EN"}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/30 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-sm uppercase tracking-[0.15em] ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
