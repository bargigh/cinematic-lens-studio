import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";
import commercialWork from "@/assets/commercial-work.jpg";
import musicWork from "@/assets/music-work.jpg";
import portraitWork from "@/assets/portrait-work.jpg";
import personalWork from "@/assets/personal-work.jpg";

const categories = ["commercial", "music", "portraits", "personal"] as const;

const projects = [
  { id: 1, image: commercialWork, title: "Brand Campaign", category: "commercial" as const },
  { id: 2, image: musicWork, title: "Artist Session", category: "music" as const },
  { id: 3, image: portraitWork, title: "Editorial Portrait", category: "portraits" as const },
  { id: 4, image: personalWork, title: "Shadows & Light", category: "personal" as const },
  { id: 5, image: commercialWork, title: "Product Launch", category: "commercial" as const },
  { id: 6, image: musicWork, title: "Album Cover", category: "music" as const },
  { id: 7, image: portraitWork, title: "Studio Portrait", category: "portraits" as const },
  { id: 8, image: personalWork, title: "Conceptual Series", category: "personal" as const },
];

const Work = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryLabels: Record<string, string> = {
    all: t("nav.work"),
    commercial: t("work.commercial"),
    music: t("work.music"),
    portraits: t("work.portraits"),
    personal: t("work.personal"),
  };

  const filtered = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-12 text-center">
            {t("work.title")}
          </h1>
        </SectionReveal>

        {/* Category Filter */}
        <SectionReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {["all", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs uppercase tracking-[0.2em] pb-1 transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-primary border-b border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {filtered.map((project, i) => (
            <SectionReveal key={project.id} delay={i * 0.1}>
              <div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary block mb-1">
                      {categoryLabels[project.category]}
                    </span>
                    <span className="font-display text-xl text-foreground">{project.title}</span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
