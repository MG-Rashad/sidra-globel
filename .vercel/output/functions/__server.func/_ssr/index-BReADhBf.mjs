import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { S as ShieldCheck, G as Globe, C as Clock, T as TrendingUp, U as Users, A as Award, M as MapPin, a as Mail, P as Phone, F as Facebook, L as Linkedin, b as Twitter } from "../_libs/lucide-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
const LangContext = reactExports.createContext(null);
function LanguageProvider({ children }) {
  const [lang, setLangState] = reactExports.useState("ar");
  const [fade, setFade] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);
  reactExports.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      localStorage.setItem("lang", lang);
    }
  }, [lang]);
  const setLang = (l) => {
    setFade(true);
    setTimeout(() => {
      setLangState(l);
      setFade(false);
    }, 150);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LangContext.Provider, { value: { lang, setLang, t: translations[lang], dir: lang === "ar" ? "rtl" : "ltr" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { opacity: fade ? 0 : 1, transition: "opacity 0.2s ease" }, children }) });
}
function useI18n() {
  const c = reactExports.useContext(LangContext);
  if (!c) throw new Error("useI18n must be used within LanguageProvider");
  return c;
}
const translations = {
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", services: "خدماتنا", why: "لماذا نحن", industries: "القطاعات", contact: "تواصل معنا" },
    hero: {
      title: "شريكك الموثوق في قطاع النفط والطاقة",
      sub: "SIDRA GLOBAL — حلول متكاملة للتوريد والمشتريات في ليبيا",
      cta1: "اكتشف خدماتنا",
      cta2: "تواصل معنا"
    },
    about: {
      eyebrow: "من نحن",
      title: "شركة السدرة العالمية للنفط والطاقة",
      body: "شركة السدرة العالمية للنفط والطاقة هي شركة ليبية متخصصة في تقديم حلول متكاملة لسلاسل التوريد والمشتريات لقطاع النفط والغاز. نتشارك مع الشركات المصنّعة الدولية والمشغلين المحليين لتقديم منتجات وخدمات موثوقة تلبّي أعلى معايير الصناعة.",
      missionTitle: "رسالتنا",
      mission: "تقديم حلول عالمية المستوى لقطاع النفط من خلال الجودة والموثوقية والخدمة الاحترافية.",
      visionTitle: "رؤيتنا",
      vision: "أن نصبح أحد أكثر شركاء التوريد في مجال النفط والطاقة موثوقية في ليبيا."
    },
    services: {
      eyebrow: "خدماتنا",
      title: "حلول متكاملة لصناعة النفط",
      items: [
        {
          title: "المشتريات وسلاسل التوريد",
          list: ["التوريد الدولي", "إدارة الموردين", "المشتريات الصناعية", "تنسيق الخدمات اللوجستية"]
        },
        {
          title: "خدمات الحقول النفطية",
          list: ["دعم ميداني", "حلول الصيانة", "توريد معدات الموقع", "الدعم التشغيلي"]
        },
        {
          title: "حلول الطاقة",
          list: ["أنظمة الطاقة", "أنظمة UPS والبطاريات", "المعدات الكهربائية", "دعم الطاقة المتجددة"]
        },
        {
          title: "توريد المعدات التقنية",
          list: ["مضخات وصمامات", "أذرع التحميل", "أجهزة القياس", "معدات السلامة", "أدوات صناعية", "قطع الغيار"]
        }
      ]
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
        "الالتزام بالجودة والسلامة"
      ]
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
        "المشاريع الحكومية"
      ]
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
      companyName: "السدرة العالمية للنفط والطاقة"
    },
    footer: {
      tagline: "شريكك الموثوق في قطاع النفط والطاقة",
      rights: "© 2026 SIDRA GLOBAL Oil & Energy — جميع الحقوق محفوظة"
    }
  },
  en: {
    nav: { home: "Home", about: "About Us", services: "Services", why: "Why Us", industries: "Industries", contact: "Contact" },
    hero: {
      title: "Your Trusted Partner in Oil & Energy",
      sub: "SIDRA GLOBAL — Integrated procurement & supply solutions across Libya",
      cta1: "Discover Our Services",
      cta2: "Contact Us"
    },
    about: {
      eyebrow: "Who We Are",
      title: "SIDRA GLOBAL Oil & Energy",
      body: "SIDRA GLOBAL Oil & Energy is a Libyan company specialized in delivering integrated supply chain and procurement solutions to the oil and gas sector. We partner with international manufacturers and local operators to provide reliable products and services that meet the highest industry standards.",
      missionTitle: "Our Mission",
      mission: "To deliver world-class oil & gas solutions through quality, reliability, and professional service.",
      visionTitle: "Our Vision",
      vision: "To become one of the most trusted oil & energy supply partners in Libya."
    },
    services: {
      eyebrow: "Our Services",
      title: "End-to-end solutions for the oil industry",
      items: [
        {
          title: "Procurement & Supply Chain",
          list: ["International Sourcing", "Vendor Management", "Industrial Procurement", "Logistics Coordination"]
        },
        {
          title: "Oilfield Services",
          list: ["Field Support", "Maintenance Solutions", "Site Equipment Supply", "Operational Support"]
        },
        {
          title: "Energy Solutions",
          list: ["Power Systems", "UPS & Battery Systems", "Electrical Equipment", "Renewable Energy Support"]
        },
        {
          title: "Technical Equipment Supply",
          list: ["Pumps & Valves", "Loading Arms", "Instrumentation", "Safety Equipment", "Industrial Tools", "Spare Parts"]
        }
      ]
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
        "Commitment to Quality & Safety"
      ]
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
        "Government Projects"
      ]
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
      companyName: "SIDRA GLOBAL Oil & Energy"
    },
    footer: {
      tagline: "Your Trusted Partner in Oil & Energy",
      rights: "© 2026 SIDRA GLOBAL Oil & Energy — All rights reserved"
    }
  }
};
function useReveal() {
  const [ref, setRef] = reactExports.useState(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(ref);
    return () => io.disconnect();
  }, [ref]);
  return { setRef, visible };
}
function LangToggle({ lang, setLang }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center rounded-full border border-black/10 p-0.5 bg-white text-xs font-semibold", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setLang("ar"),
        className: `px-3 py-1.5 rounded-full transition-colors ${lang === "ar" ? "bg-[color:var(--brand-brown)] text-white" : "text-[color:var(--brand-ink)]/70"}`,
        children: "AR"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setLang("en"),
        className: `px-3 py-1.5 rounded-full transition-colors ${lang === "en" ? "bg-[color:var(--brand-brown)] text-white" : "text-[color:var(--brand-ink)]/70"}`,
        children: "EN"
      }
    )
  ] });
}
const logo = "/assets/logo-BWvFg1GM.png";
const NAV_IDS = ["home", "about", "services", "why", "industries", "contact"];
function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [active, setActive] = reactExports.useState("home");
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  const items = NAV_IDS.map((id) => ({ id, label: t.nav[id] }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `sticky top-0 z-50 w-full bg-white transition-shadow ${scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "border-b border-black/5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-3 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logo,
                alt: "SIDRA GLOBAL",
                className: "h-auto w-[60px] md:w-[80px] lg:w-[94px] py-1.5"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-col leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold tracking-tight text-[color:var(--brand-brown)]", children: lang === "ar" ? "شركة السدرة العالمية" : "SIDRA GLOBAL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-[color:var(--brand-ink)]/70", children: lang === "ar" ? "للنفط والطاقة" : "Oil & Energy" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `#${it.id}`,
              className: `px-3 py-2 text-sm font-medium rounded-md transition-colors ${active === it.id ? "text-[color:var(--brand-brown)]" : "text-[color:var(--brand-ink)]/70 hover:text-[color:var(--brand-brown)]"}`,
              children: [
                it.label,
                active === it.id && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-0.5 w-full bg-[color:var(--brand-gold)] mt-1 rounded-full" })
              ]
            },
            it.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LangToggle, { lang, setLang }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                "aria-label": "Menu",
                className: "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/10",
                onClick: () => setOpen(true),
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
                ] })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40", onClick: () => setOpen(false) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 bottom-0 w-80 max-w-[85vw] bg-white p-6 shadow-2xl ltr:right-0 rtl:left-0 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "SIDRA GLOBAL", className: "h-10 w-auto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  "aria-label": "Close",
                  className: "h-11 w-11 inline-flex items-center justify-center rounded-md border border-black/10",
                  onClick: () => setOpen(false),
                  children: "✕"
                }
              )
            ] }),
            items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `#${it.id}`,
                onClick: () => setOpen(false),
                className: "px-3 py-3 rounded-md text-base font-medium text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-cream)]",
                children: it.label
              },
              it.id
            ))
          ] })
        ] })
      ]
    }
  );
}
function Footer() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-[color:var(--brand-brown)] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/80 mb-8", children: t.services.items.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-x-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-[color:var(--brand-gold)] transition-colors", children: s.title }),
        i < t.services.items.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 hidden sm:inline", children: "|" })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", className: "grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-[color:var(--brand-gold)] hover:border-[color:var(--brand-gold)] hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "LinkedIn", className: "grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-[color:var(--brand-gold)] hover:border-[color:var(--brand-gold)] hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "X (Twitter)", className: "grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-[color:var(--brand-gold)] hover:border-[color:var(--brand-gold)] hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8 border-t border-white/10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/60", children: t.footer.rights }) })
  ] }) });
}
const heroSlide1 = "/assets/hero-slide-1-Mg4eW2C7.avif";
const heroSlide2 = "/assets/hero-slide-2-o9IIs_jj.avif";
const heroSlide3 = "/assets/hero-slide-3-ChGIPWO7.avif";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Site, {}) });
}
function Site() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-[color:var(--brand-ink)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Industries, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Reveal({
  children,
  className = ""
}) {
  const {
    setRef,
    visible
  } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: setRef, className, style: {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(16px)",
    transition: "opacity 0.5s ease, transform 0.5s ease"
  }, children });
}
function Eyebrow({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-gold)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[color:var(--brand-gold)]" }),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[color:var(--brand-gold)]" })
  ] });
}
const HERO_SLIDES = [{
  image: heroSlide1,
  alt: "Oil refinery at sunset"
}, {
  image: heroSlide2,
  alt: "Industrial energy complex"
}, {
  image: heroSlide3,
  alt: "Energy sector pipelines"
}];
function Hero() {
  const {
    t,
    lang
  } = useI18n();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  });
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);
  reactExports.useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6e3);
    return () => clearInterval(interval);
  }, [emblaApi]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative overflow-hidden bg-[color:var(--brand-brown)] flex items-center", style: {
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", ref: emblaRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full", children: HERO_SLIDES.map((slide, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-[0_0_100%] min-w-0 h-full min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear", style: {
      backgroundImage: `url(${slide.image})`
    } }) }, index)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 z-10", style: {
      background: "rgba(43, 26, 6, 0.6)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "SIDRA GLOBAL" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: `mt-6 font-bold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl leading-[1.15] ${lang === "ar" ? "font-[var(--font-arabic)]" : "font-[var(--font-display)]"}`, children: t.hero.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto", children: t.hero.sub }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "inline-flex items-center justify-center rounded-md bg-[color:var(--brand-gold)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[color:var(--brand-brown)]", children: t.hero.cta1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "inline-flex items-center justify-center rounded-md border border-white/80 bg-white/0 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[color:var(--brand-brown)]", children: t.hero.cta2 })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2", children: HERO_SLIDES.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => emblaApi?.scrollTo(index), className: `h-2 rounded-full transition-all duration-300 ${selectedIndex === index ? "w-8 bg-[color:var(--brand-gold)]" : "w-2 bg-white/40 hover:bg-white/60"}` }, index)) })
  ] });
}
function About() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "section-pad bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t.about.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-4xl font-bold text-[color:var(--brand-brown)]", children: t.about.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed text-[color:var(--brand-ink)]/80", children: t.about.body }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "grid gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: t.about.missionTitle, body: t.about.mission }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: t.about.visionTitle, body: t.about.vision })
      ] })
    ] })
  ] }) });
}
function Card({
  title,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg bg-white p-6 md:p-7 border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ltr:border-l-4 rtl:border-r-4 ltr:border-l-[color:var(--brand-gold)] rtl:border-r-[color:var(--brand-gold)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-bold text-[color:var(--brand-brown)]", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[color:var(--brand-ink)]/75 leading-relaxed", children: body })
  ] });
}
const SERVICE_ICONS = [/* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
] }), /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 22h16" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 22V8l4-5 4 5v14" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 12h8" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 16h8" })
] }), /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }) }), /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" }) })];
function Services() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "section-pad bg-[color:var(--brand-cream)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t.services.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-4xl font-bold text-[color:var(--brand-brown)]", children: t.services.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap justify-center gap-6", children: t.services.items.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative h-full rounded-lg bg-white p-6 border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-12px_rgba(74,44,10,0.25)] border-t-4 border-t-[color:var(--brand-gold)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 shrink-0 rounded-md bg-[color:var(--brand-cream)] text-[color:var(--brand-gold)] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-5 block", children: SERVICE_ICONS[i] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-[color:var(--brand-brown)]", children: s.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-[color:var(--brand-ink)]/80", children: s.list.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand-gold)] shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it })
      ] }, it)) })
    ] }) }, i)) })
  ] }) });
}
const WHY_US_ICONS = [ShieldCheck, Globe, Clock, TrendingUp, Users, Award];
function WhyUs() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why", className: "section-pad bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t.why.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-4xl font-bold text-[color:var(--brand-brown)]", children: t.why.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto mt-5 block h-0.5 w-16 bg-[color:var(--brand-gold)]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: t.why.items.map((item, i) => {
      const IconComponent = WHY_US_ICONS[i % WHY_US_ICONS.length];
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-lg border border-black/5 bg-white p-6 transition-all duration-300 hover:shadow-[0_8px_24px_-12px_rgba(74,44,10,0.18)] hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[color:var(--brand-cream)] text-[color:var(--brand-gold)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "h-5 w-5", strokeWidth: "2" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[color:var(--brand-ink)] pt-2 leading-relaxed", children: item })
      ] }) }, i);
    }) })
  ] }) });
}
function Industries() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "industries", className: "section-pad bg-[color:var(--brand-cream)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t.industries.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-4xl font-bold text-[color:var(--brand-brown)]", children: t.industries.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-10 flex flex-wrap justify-center gap-3", children: t.industries.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cursor-default rounded-full border border-[color:var(--brand-gold)] bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-brown)] transition-colors hover:bg-[color:var(--brand-gold)] hover:text-white", children: it }, it)) })
  ] }) });
}
function Contact() {
  const {
    t,
    lang,
    setLang
  } = useI18n();
  const contactTitle = lang === "ar" ? "معلومات الاتصال" : "Contact Info";
  const address = lang === "ar" ? "طرابلس - الشارع الرئيسي: النوقليين - المبنى المقابل للخير هوم الدور الثالث" : "Al Nufaliyeen Area, opposite Al Khair Home Building, Third Floor, Tripoli, Libya";
  const legalName = lang === "ar" ? "الاسم القانوني: شركة السدرة العالمية للنفط والغاز د.م.م" : "Legal Name: SIDRA GLOBAL OIL AND ENERGY L.L.C";
  const statCode = lang === "ar" ? "الرمز الاحصائي: 87 - 91595" : "Statistical Code: 87 - 91595";
  const topLine = lang === "ar" ? legalName : statCode;
  const bottomLine = lang === "ar" ? statCode : legalName;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "section-pad bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t.contact.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-4xl font-bold text-[color:var(--brand-brown)]", children: t.contact.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mt-12 grid grid-cols-1 md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center md:items-start text-center md:text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-white rounded-lg p-2 flex items-center justify-center mb-5 border border-black/10 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "SIDRA GLOBAL", className: "w-full h-full object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[color:var(--brand-ink)]/80 text-sm leading-relaxed mb-6 max-w-xs", children: t.footer.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-xs border-t border-black/10 pt-4 flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[color:var(--brand-brown)]", children: topLine }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[color:var(--brand-brown)]", children: bottomLine })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold uppercase tracking-wider text-[color:var(--brand-brown)] mb-6", children: contactTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm text-[color:var(--brand-ink)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 shrink-0 mt-1 text-[color:var(--brand-brown)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[color:var(--brand-ink)]", children: address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:info@sidraglobal.com", className: "flex items-center gap-3 text-[color:var(--brand-ink)] hover:text-[color:var(--brand-brown)] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 shrink-0 text-[color:var(--brand-brown)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", children: "info@sidraglobal.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:sales@sidraglobal.com", className: "flex items-center gap-3 text-[color:var(--brand-ink)] hover:text-[color:var(--brand-brown)] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 shrink-0 text-[color:var(--brand-brown)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", children: "sales@sidraglobal.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+218930111164", className: "flex items-center gap-3 text-[color:var(--brand-ink)] hover:text-[color:var(--brand-brown)] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 shrink-0 text-[color:var(--brand-brown)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "ltr", children: "+218 93 011 11 64" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center border-t border-black/10 pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LangToggle, { lang, setLang }) }) })
  ] }) });
}
export {
  Index as component
};
