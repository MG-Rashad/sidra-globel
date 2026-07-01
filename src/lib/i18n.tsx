import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  dir: "rtl" | "ltr";
};

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setFade(true);
    setTimeout(() => {
      setLangState(l);
      setFade(false);
    }, 150);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] as Translations, dir: lang === "ar" ? "rtl" : "ltr" }}>
      <div style={{ opacity: fade ? 0 : 1, transition: "opacity 0.2s ease" }}>{children}</div>
    </LangContext.Provider>
  );
}

export function useI18n() {
  const c = useContext(LangContext);
  if (!c) throw new Error("useI18n must be used within LanguageProvider");
  return c;
}

export type Translations = {
  nav: { home: string; about: string; services: string; why: string; industries: string; contact: string };
  hero: { title: string; sub: string; cta1: string; cta2: string };
  about: { eyebrow: string; title: string; body: string; missionTitle: string; mission: string; visionTitle: string; vision: string };
  services: { eyebrow: string; title: string; items: { title: string; list: string[] }[] };
  why: { eyebrow: string; title: string; items: string[] };
  industries: { eyebrow: string; title: string; items: string[] };
  contact: {
    eyebrow: string; title: string; name: string; email: string; phone: string; message: string; send: string; sent: string;
    errors: { required: string; email: string };
    infoTitle: string; country: string; emailLabel: string; companyName: string;
  };
  footer: { tagline: string; rights: string };
};

export const translations: Record<Lang, Translations> = {
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", services: "خدماتنا", why: "لماذا نحن", industries: "القطاعات", contact: "تواصل معنا" },
    hero: {
      title: "شريكك الموثوق في قطاع النفط والطاقة",
      sub: "SIDRA GLOBAL — حلول متكاملة للتوريد والمشتريات في ليبيا",
      cta1: "اكتشف خدماتنا",
      cta2: "تواصل معنا",
    },
    about: {
      eyebrow: "من نحن",
      title: "شركة السدرة العالمية للنفط والطاقة",
      body:
        "شركة السدرة العالمية للنفط والطاقة هي شركة ليبية متخصصة في تقديم حلول متكاملة لسلاسل التوريد والمشتريات لقطاع النفط والغاز. نتشارك مع الشركات المصنّعة الدولية والمشغلين المحليين لتقديم منتجات وخدمات موثوقة تلبّي أعلى معايير الصناعة.",
      missionTitle: "رسالتنا",
      mission: "تقديم حلول عالمية المستوى لقطاع النفط من خلال الجودة والموثوقية والخدمة الاحترافية.",
      visionTitle: "رؤيتنا",
      vision: "أن نصبح أحد أكثر شركاء التوريد في مجال النفط والطاقة موثوقية في ليبيا.",
    },
    services: {
      eyebrow: "خدماتنا",
      title: "حلول متكاملة لصناعة النفط",
      items: [
        {
          title: "المشتريات وسلاسل التوريد",
          list: ["التوريد الدولي", "إدارة الموردين", "المشتريات الصناعية", "تنسيق الخدمات اللوجستية"],
        },
        {
          title: "خدمات الحقول النفطية",
          list: ["دعم ميداني", "حلول الصيانة", "توريد معدات الموقع", "الدعم التشغيلي"],
        },
        {
          title: "حلول الطاقة",
          list: ["أنظمة الطاقة", "أنظمة UPS والبطاريات", "المعدات الكهربائية", "دعم الطاقة المتجددة"],
        },
        {
          title: "توريد المعدات التقنية",
          list: ["مضخات وصمامات", "أذرع التحميل", "أجهزة القياس", "معدات السلامة", "أدوات صناعية", "قطع الغيار"],
        },
      ],
    },
    why: {
      eyebrow: "لماذا نحن",
      title: "لماذا تختار السدرة العالمية؟",
      items: [
        "فريق متخصص وذو خبرة",
        "شبكة موردين دولية",
        "عملية مشتريات سريعة",
        "أسعار تنافسية",
        "توصيل موثوق في جميع أنحاء ليبيا",
        "الالتزام بالجودة والسلامة",
      ],
    },
    industries: {
      eyebrow: "القطاعات",
      title: "القطاعات التي نخدمها",
      items: [
        "شركات النفط والغاز",
        "المصافي",
        "مصانع البتروكيماويات",
        "الطاقة والمرافق",
        "البناء والبنية التحتية",
        "المشاريع الحكومية",
      ],
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "لنبدأ العمل معًا",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      message: "الرسالة",
      send: "إرسال",
      sent: "تم إرسال رسالتك. سنتواصل معك قريبًا.",
      errors: { required: "هذا الحقل مطلوب", email: "بريد إلكتروني غير صالح" },
      infoTitle: "معلومات الشركة",
      country: "الدولة: ليبيا",
      emailLabel: "البريد الإلكتروني",
      companyName: "السدرة العالمية للنفط والطاقة",
    },
    footer: {
      tagline: "شريكك الموثوق في قطاع النفط والطاقة",
      rights: "© 2026 SIDRA GLOBAL Oil & Energy — جميع الحقوق محفوظة",
    },
  },
  en: {
    nav: { home: "Home", about: "About Us", services: "Services", why: "Why Us", industries: "Industries", contact: "Contact" },
    hero: {
      title: "Your Trusted Partner in Oil & Energy",
      sub: "SIDRA GLOBAL — Integrated procurement & supply solutions across Libya",
      cta1: "Discover Our Services",
      cta2: "Contact Us",
    },
    about: {
      eyebrow: "Who We Are",
      title: "SIDRA GLOBAL Oil & Energy",
      body:
        "SIDRA GLOBAL Oil & Energy is a Libyan company specialized in delivering integrated supply chain and procurement solutions to the oil and gas sector. We partner with international manufacturers and local operators to provide reliable products and services that meet the highest industry standards.",
      missionTitle: "Our Mission",
      mission: "To deliver world-class oil & gas solutions through quality, reliability, and professional service.",
      visionTitle: "Our Vision",
      vision: "To become one of the most trusted oil & energy supply partners in Libya.",
    },
    services: {
      eyebrow: "Our Services",
      title: "End-to-end solutions for the oil industry",
      items: [
        {
          title: "Procurement & Supply Chain",
          list: ["International Sourcing", "Vendor Management", "Industrial Procurement", "Logistics Coordination"],
        },
        {
          title: "Oilfield Services",
          list: ["Field Support", "Maintenance Solutions", "Site Equipment Supply", "Operational Support"],
        },
        {
          title: "Energy Solutions",
          list: ["Power Systems", "UPS & Battery Systems", "Electrical Equipment", "Renewable Energy Support"],
        },
        {
          title: "Technical Equipment Supply",
          list: ["Pumps & Valves", "Loading Arms", "Instrumentation", "Safety Equipment", "Industrial Tools", "Spare Parts"],
        },
      ],
    },
    why: {
      eyebrow: "Why Us",
      title: "Why Choose SIDRA GLOBAL?",
      items: [
        "Experienced Industry Team",
        "International Supplier Network",
        "Fast Procurement Process",
        "Competitive Pricing",
        "Reliable Delivery Across Libya",
        "Commitment to Quality & Safety",
      ],
    },
    industries: {
      eyebrow: "Industries",
      title: "Industries We Serve",
      items: [
        "Oil & Gas Companies",
        "Refineries",
        "Petrochemical Plants",
        "Energy & Utilities",
        "Construction & Infrastructure",
        "Government Projects",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's start working together",
      name: "Full Name",
      email: "Email",
      phone: "Phone Number",
      message: "Message",
      send: "Send Message",
      sent: "Your message has been sent. We'll be in touch shortly.",
      errors: { required: "This field is required", email: "Invalid email address" },
      infoTitle: "Company Information",
      country: "Country: Libya",
      emailLabel: "Email",
      companyName: "SIDRA GLOBAL Oil & Energy",
    },
    footer: {
      tagline: "Your Trusted Partner in Oil & Energy",
      rights: "© 2026 SIDRA GLOBAL Oil & Energy — All rights reserved",
    },
  },
};

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const [ref, setRef] = useState<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(ref);
    return () => io.disconnect();
  }, [ref]);
  return { setRef, visible };
}