import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";
import heroImage from "@/assets/hero-image.jpg";
import commercialWork from "@/assets/commercial-work.jpg";
import musicWork from "@/assets/music-work.jpg";
import portraitWork from "@/assets/portrait-work.jpg";
import motionImage from "@/assets/motion-image.jpg";
import studioImage from "@/assets/studio-image.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import { ArrowRight, Play } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  const featuredWork = [
    { image: commercialWork, label: t("work.commercial"), link: "/work" },
    { image: musicWork, label: t("work.music"), link: "/work" },
    { image: portraitWork, label: t("work.portraits"), link: "/work" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Haim Bargig Photography" className="w-full h-full object-cover" />
          <div className="cinematic-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <SectionReveal>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-4 tracking-wide">
              {t("hero.name")}
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-sm md:text-base text-primary uppercase tracking-[0.25em] mb-3">
              {t("hero.title")}
            </p>
          </SectionReveal>
          <SectionReveal delay={0.4}>
            <p className="font-body text-sm text-muted-foreground mb-10 max-w-xl mx-auto">
              {t("hero.subtitle")}
            </p>
          </SectionReveal>
          <SectionReveal delay={0.6}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/work"
                className="font-body text-xs uppercase tracking-[0.2em] border border-primary/60 text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                {t("hero.viewWork")}
              </Link>
              <Link
                to="/motion"
                className="font-body text-xs uppercase tracking-[0.2em] border border-foreground/20 text-foreground/80 px-8 py-3 hover:border-foreground/50 transition-all duration-500 flex items-center gap-2"
              >
                <Play size={12} /> {t("hero.showreel")}
              </Link>
              <Link
                to="/studio"
                className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground px-8 py-3 hover:text-foreground transition-all duration-500"
              >
                {t("hero.bookStudio")}
              </Link>
            </div>
          </SectionReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-foreground" />
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-16 text-center">
              {t("section.featuredWork")}
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {featuredWork.map((item, i) => (
              <SectionReveal key={item.label} delay={i * 0.15}>
                <Link to={item.link} className="group relative block aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-foreground">
                      {item.label}
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div className="text-center mt-12">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-primary hover:text-foreground transition-colors duration-300"
              >
                {t("nav.work")} <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Motion Section */}
      <section className="relative py-24 md:py-32">
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img src={motionImage} alt="Motion Work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <SectionReveal>
              <div className="text-center">
                <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
                  {t("section.motion")}
                </h2>
                <Link
                  to="/motion"
                  className="inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] border border-primary/60 text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                >
                  <Play size={14} /> {t("motion.showreel")}
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <SectionReveal>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={studioImage} alt="Production Studio" className="w-full h-full object-cover" />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-5xl text-foreground">
                {t("section.studio")}
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t("studio.subtitle")}
              </p>
              <Link
                to="/studio"
                className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] border border-primary/60 text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                {t("studio.book")} <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <SectionReveal delay={0.1}>
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-5xl text-foreground">
                {t("section.about")}
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t("about.bio")}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-primary hover:text-foreground transition-colors duration-300"
              >
                {t("about.readMore")} <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
          <SectionReveal>
            <div className="aspect-[3/4] max-w-sm mx-auto overflow-hidden">
              <img src={aboutPortrait} alt="Haim Bargig" className="w-full h-full object-cover" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
