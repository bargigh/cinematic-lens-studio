import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start pt-12">
        <SectionReveal>
          <div className="sticky top-24">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={aboutPortrait} alt="Haim Bargig" className="w-full h-full object-cover" />
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="space-y-8">
            <h1 className="font-display text-4xl md:text-6xl text-foreground">
              {t("about.title")}
            </h1>
            <div className="w-12 h-px bg-primary" />
            <p className="font-body text-sm text-secondary-foreground leading-[1.8]">
              {t("about.bio")}
            </p>
            <p className="font-body text-sm text-secondary-foreground leading-[1.8]">
              {t("about.bio2")}
            </p>

            <div className="pt-8 space-y-4">
              <div className="border-t border-border/30 pt-4">
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary block mb-1">Services</span>
                <span className="font-body text-sm text-muted-foreground">Commercial Photography · Cinematography · Music Videos · Portraits · Creative Direction</span>
              </div>
              <div className="border-t border-border/30 pt-4">
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary block mb-1">Clients</span>
                <span className="font-body text-sm text-muted-foreground">Advertising Agencies · Production Companies · Brands · Record Labels · Artists</span>
              </div>
              <div className="border-t border-border/30 pt-4">
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary block mb-1">Based In</span>
                <span className="font-body text-sm text-muted-foreground">Israel · Available Worldwide</span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default About;
