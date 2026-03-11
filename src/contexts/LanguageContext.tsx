import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "he";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  "nav.home": { en: "Home", he: "בית" },
  "nav.work": { en: "Work", he: "עבודות" },
  "nav.motion": { en: "Motion", he: "מושן" },
  "nav.studio": { en: "Studio", he: "סטודיו" },
  "nav.about": { en: "About", he: "אודות" },
  "nav.contact": { en: "Contact", he: "צור קשר" },

  // Hero
  "hero.name": { en: "Haim Bargig", he: "חיים ברגיג" },
  "hero.title": { en: "Commercial Photographer & Director of Photography", he: "צלם מסחרי ומנהל צילום" },
  "hero.subtitle": { en: "Cinematic Visuals for Brands, Artists and Productions", he: "חזון קולנועי למותגים, אמנים והפקות" },
  "hero.viewWork": { en: "View Work", he: "צפייה בעבודות" },
  "hero.showreel": { en: "Watch Showreel", he: "צפייה בשואוריל" },
  "hero.bookStudio": { en: "Book Studio", he: "הזמנת סטודיו" },

  // Work
  "work.title": { en: "Selected Work", he: "עבודות נבחרות" },
  "work.commercial": { en: "Commercial", he: "מסחרי" },
  "work.music": { en: "Music & Artists", he: "מוזיקה ואמנים" },
  "work.portraits": { en: "Portraits", he: "פורטרטים" },
  "work.personal": { en: "Personal Projects", he: "פרויקטים אישיים" },

  // Motion
  "motion.title": { en: "Motion", he: "מושן" },
  "motion.subtitle": { en: "Cinematography, Music Videos & Commercial Motion", he: "צילום קולנועי, קליפים ומושן מסחרי" },
  "motion.showreel": { en: "Showreel", he: "שואוריל" },

  // Studio
  "studio.title": { en: "Production Studio", he: "סטודיו הפקות" },
  "studio.subtitle": { en: "Professional production space available for rental", he: "חלל הפקות מקצועי להשכרה" },
  "studio.book": { en: "Book Studio", he: "הזמנת סטודיו" },
  "studio.inquiry": { en: "Studio Rental Inquiry", he: "פנייה להשכרת סטודיו" },
  "studio.space": { en: "The Space", he: "החלל" },
  "studio.spaceDesc": { en: "A 120sqm professional production studio with 4m ceiling height, blackout capabilities, and industrial aesthetic. Located in central Israel with easy access and parking.", he: "סטודיו הפקות מקצועי בשטח 120 מ"ר עם תקרה בגובה 4 מטר, יכולת האפלה מלאה ואסתטיקה תעשייתית. ממוקם במרכז הארץ עם גישה נוחה וחניה." },
  "studio.equipment": { en: "Equipment", he: "ציוד" },
  "studio.equipmentList": { en: "Profoto lighting system|Backdrop system (paper & fabric)|C-stands & grip equipment|Makeup station|Client lounge area|Wi-Fi & tethering setup", he: "מערכת תאורה Profoto|מערכת רקעים (נייר ובד)|C-stands וציוד גריפ|תחנת איפור|אזור לאונג' ללקוחות|Wi-Fi והגדרת Tethering" },
  "studio.lighting": { en: "Lighting", he: "תאורה" },
  "studio.lightingDesc": { en: "Full Profoto studio lighting setup including strobes, continuous lights, modifiers, and specialty lighting for both photography and video production.", he: "מערכת תאורת סטודיו מלאה של Profoto כולל סטרובים, תאורה רציפה, מודיפיירים ותאורה מיוחדת לצילום סטילס ווידאו." },
  "studio.production": { en: "Production Ready", he: "מוכן להפקה" },
  "studio.productionDesc": { en: "Suitable for commercial shoots, music videos, product photography, portraits, and creative productions of all scales.", he: "מתאים לצילומים מסחריים, קליפים, צילומי מוצר, פורטרטים והפקות יצירתיות בכל קנה מידה." },

  // About
  "about.title": { en: "About", he: "אודות" },
  "about.bio": { en: "Haim Bargig is a commercial photographer and director of photography based in Israel. With over a decade of experience in cinematic visual storytelling, he collaborates with advertising agencies, production companies, commercial brands, and artists to create compelling visual narratives.", he: "חיים ברגיג הוא צלם מסחרי ומנהל צילום המבוסס בישראל. עם למעלה מעשור של ניסיון בסטוריטלינג ויזואלי קולנועי, הוא משתף פעולה עם סוכנויות פרסום, חברות הפקה, מותגים מסחריים ואמנים ליצירת נרטיבים ויזואליים מרתקים." },
  "about.bio2": { en: "His work spans commercial photography, cinematography, music videos, portraiture, and conceptual personal projects. He approaches every project with the eye of a visual director, bringing cinematic depth and narrative to every frame.", he: "עבודתו משתרעת על צילום מסחרי, צילום קולנועי, קליפים, פורטרטים ופרויקטים אישיים קונספטואליים. הוא ניגש לכל פרויקט בעין של במאי ויזואלי, ומביא עומק קולנועי ונרטיב לכל פריים." },
  "about.readMore": { en: "Read Full Bio", he: "קראו עוד" },

  // Contact
  "contact.title": { en: "Get in Touch", he: "צרו קשר" },
  "contact.subtitle": { en: "For bookings, collaborations, and studio inquiries", he: "להזמנות, שיתופי פעולה ופניות בנוגע לסטודיו" },
  "contact.name": { en: "Name", he: "שם" },
  "contact.email": { en: "Email", he: "אימייל" },
  "contact.subject": { en: "Subject", he: "נושא" },
  "contact.message": { en: "Message", he: "הודעה" },
  "contact.send": { en: "Send Message", he: "שליחת הודעה" },

  // Footer
  "footer.rights": { en: "All rights reserved.", he: "כל הזכויות שמורות." },

  // Section titles
  "section.featuredWork": { en: "Featured Work", he: "עבודות נבחרות" },
  "section.motion": { en: "Motion Work", he: "עבודות מושן" },
  "section.studio": { en: "The Studio", he: "הסטודיו" },
  "section.about": { en: "About", he: "אודות" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  const isRTL = lang === "he";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
