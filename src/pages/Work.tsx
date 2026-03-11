import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";
import commercialWork from "@/assets/commercial-work.jpg";
import musicWork from "@/assets/music-work.jpg";
import portraitWork from "@/assets/portrait-work.jpg";
import personalWork from "@/assets/personal-work.jpg";
import { X } from "lucide-react"; // Import X icon for the close button

// Import dialog components
import {
  Dialog,
  DialogContent,
  // DialogClose is rendered internally by DialogContent in dialog.tsx
} from "@/components/ui/dialog";

const categories = ["commercial", "music", "portraits", "personal"] as const;

// Define the type for project data
type ProjectData = {
  id: number;
  image: string; // Assuming imports resolve to string URLs
  title: string;
  category: (typeof categories)[number]; // Use the specific type for category
};

const projects: ProjectData[] = [
  { id: 1, image: commercialWork, title: "Brand Campaign", category: "commercial" },
  { id: 2, image: musicWork, title: "Artist Session", category: "music" },
  { id: 3, image: portraitWork, title: "Editorial Portrait", category: "portraits" },
  { id: 4, image: personalWork, title: "Shadows & Light", category: "personal" },
  { id: 5, image: commercialWork, title: "Product Launch", category: "commercial" },
  { id: 6, image: musicWork, title: "Album Cover", category: "music" },
  { id: 7, image: portraitWork, title: "Studio Portrait", category: "portraits" },
  { id: 8, image: personalWork, title: "Conceptual Series", category: "personal" },
];

const Work = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // selectedImage will store the src and alt of the image to be displayed
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const categoryLabels: Record<string, string> = {
    all: t("nav.work"),
    commercial: t("work.commercial"),
    music: t("work.music"),
    portraits: t("work.portraits"),
    personal: t("work.personal"),
  };

  const filtered = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  // This function will be called when an image is clicked
  const handleImageClick = (imageSrc: string, imageAlt: string) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
    setIsDialogOpen(true);
  };

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
            {[...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs uppercase tracking-[0.2em] pb-1 transition-all duration-300 ${activeCategory === cat
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
              <div
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(project.image, project.title)} // Pass src and alt
              >
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

        {/* Dialog for Enlarged Image */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl h-[80vh] flex items-center justify-center p-0 border-none shadow-none bg-transparent">
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
            {/* The close button is rendered by DialogContent itself in dialog.tsx */}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Work;
