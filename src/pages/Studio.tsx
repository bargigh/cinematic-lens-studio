import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";
import studioImage from "@/assets/studio-image.jpg";
import { Camera, Lightbulb, Film, ArrowRight } from "lucide-react";

const Studio = () => {
  const { t } = useLanguage();
  const equipmentList = t("studio.equipmentList").split("|");

  const features = [
    { icon: Camera, title: t("studio.space"), desc: t("studio.spaceDesc") },
    { icon: Lightbulb, title: t("studio.lighting"), desc: t("studio.lightingDesc") },
    { icon: Film, title: t("studio.production"), desc: t("studio.productionDesc") },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[70vh] mb-20 overflow-hidden">
        <img src={studioImage} alt="Production Studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
          <SectionReveal>
            <div className="text-center px-6">
              <h1 className="font-display text-4xl md:text-7xl text-foreground mb-4">
                {t("studio.title")}
              </h1>
              <p className="font-body text-sm text-muted-foreground tracking-wider mb-8">
                {t("studio.subtitle")}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] border border-primary/60 text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                {t("studio.book")} <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <SectionReveal key={feature.title} delay={i * 0.15}>
              <div className="border border-border/30 p-8 space-y-4">
                <feature.icon size={24} className="text-primary" />
                <h3 className="font-display text-xl text-foreground">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Equipment */}
      <section className="px-6 max-w-4xl mx-auto mb-20">
        <SectionReveal>
          <h2 className="font-display text-3xl text-foreground mb-8 text-center">
            {t("studio.equipment")}
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {equipmentList.map((item) => (
              <div key={item} className="flex items-center gap-3 py-3 border-b border-border/20">
                <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                <span className="font-body text-sm text-secondary-foreground">{item}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            {t("studio.inquiry")}
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-all duration-500"
          >
            {t("studio.book")} <ArrowRight size={14} />
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
};

export default Studio;
