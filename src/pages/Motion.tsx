import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";
import motionImage from "@/assets/motion-image.jpg";
import { Play } from "lucide-react";

const motionProjects = [
  { id: 1, title: "Commercial Reel 2024", type: "Showreel", embedUrl: "" },
  { id: 2, title: "Music Video — Artist Name", type: "Music Video", embedUrl: "" },
  { id: 3, title: "Brand Film — Product Launch", type: "Commercial", embedUrl: "" },
  { id: 4, title: "Short Film — Untitled", type: "Short Film", embedUrl: "" },
];

const Motion = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[60vh] mb-20 overflow-hidden">
        <img src={motionImage} alt="Motion Work" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <SectionReveal>
            <div className="text-center px-6">
              <h1 className="font-display text-4xl md:text-7xl text-foreground mb-4">
                {t("motion.title")}
              </h1>
              <p className="font-body text-sm text-muted-foreground tracking-wider">
                {t("motion.subtitle")}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Showreel placeholder */}
      <section className="px-6 max-w-5xl mx-auto mb-20">
        <SectionReveal>
          <div className="aspect-video bg-secondary/50 border border-border/30 flex items-center justify-center cursor-pointer group">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-primary/60 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <Play size={24} className="text-primary ml-1" />
              </div>
              <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t("motion.showreel")}
              </span>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Motion Projects */}
      <section className="px-6 max-w-5xl mx-auto">
        <div className="space-y-8">
          {motionProjects.map((project, i) => (
            <SectionReveal key={project.id} delay={i * 0.1}>
              <div className="group border border-border/30 p-6 md:p-8 flex items-center justify-between cursor-pointer hover:border-primary/30 transition-colors duration-300">
                <div>
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary block mb-2">
                    {project.type}
                  </span>
                  <span className="font-display text-xl md:text-2xl text-foreground">
                    {project.title}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                  <Play size={14} className="text-muted-foreground group-hover:text-primary ml-0.5" />
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Motion;
