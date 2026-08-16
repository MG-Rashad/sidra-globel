import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LanguageProvider, useI18n, useReveal } from "@/lib/i18n";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LangToggle } from "@/components/layout/lang-toggle";
import { ShieldCheck, Globe, Clock, TrendingUp, Users, Award, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

// --- LOCAL IMAGE IMPORTS (.avif format) ---
import heroSlide1 from "@/assets/hero-slide-1.avif";
import heroSlide2 from "@/assets/hero-slide-2.avif";
import heroSlide4 from "@/assets/hero-slide-4.avif";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIDRA GLOBAL — Oil & Energy | شريكك الموثوق في النفط والطاقة" },
      { name: "description", content: "SIDRA GLOBAL Oil & Energy — Libyan procurement and supply partner for the oil, gas, and energy sector." },
      { property: "og:title", content: "SIDRA GLOBAL — Oil & Energy" },
      { property: "og:description", content: "Integrated procurement & supply solutions for oil, gas, and energy across Libya." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}

function Site() {
  return (
    <div className="min-h-screen bg-background text-[color:var(--brand-ink)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// --- SHARED SECTION HELPERS ---

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { setRef, visible } = useReveal();
  return (
    <div
      ref={setRef}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-gold)]">
      <span className="h-px w-8 bg-[color:var(--brand-gold)]" />
      {children}
      <span className="h-px w-8 bg-[color:var(--brand-gold)]" />
    </div>
  );
}

// --- 3 SLIDE PROFESSIONAL HERO CAROUSEL (CENTERED) ---

const HERO_SLIDES = [
  { image: heroSlide1, alt: "Oil refinery at sunset" },
  { image: heroSlide2, alt: "Industrial energy complex" },
  { image: heroSlide4, alt: "Energy sector pipelines" }
];

function Hero() {
  const { t, lang } = useI18n();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="home" className="relative overflow-hidden bg-[color:var(--brand-brown)] flex items-center" style={{ minHeight: "100vh" }}>
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {HERO_SLIDES.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full min-h-screen">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear" style={{ backgroundImage: `url(${slide.image})` }} />
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden className="absolute inset-0 z-10" style={{ background: "rgba(43, 26, 6, 0.6)" }} />
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <Reveal className="max-w-3xl mx-auto">
          <Eyebrow>SIDRA GLOBAL</Eyebrow>
          <h1 className={`mt-6 font-bold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl leading-[1.15] ${lang === "ar" ? "font-[var(--font-arabic)]" : "font-[var(--font-display)]"}`}>{t.hero.title}</h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">{t.hero.sub}</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href="#services" className="inline-flex items-center justify-center rounded-md bg-[color:var(--brand-gold)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[color:var(--brand-brown)]">{t.hero.cta1}</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/80 bg-white/0 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[color:var(--brand-brown)]">{t.hero.cta2}</a>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, index) => (
          <button key={index} onClick={() => emblaApi?.scrollTo(index)} className={`h-2 rounded-full transition-all duration-300 ${selectedIndex === index ? "w-8 bg-[color:var(--brand-gold)]" : "w-2 bg-white/40 hover:bg-white/60"}`} />
        ))}
      </div>
    </section>
  );
}

// --- HOMEPAGE SECTIONS ---

function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[color:var(--brand-brown)]">{t.about.title}</h2>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <Reveal><p className="text-base md:text-lg leading-relaxed text-[color:var(--brand-ink)]/80">{t.about.body}</p></Reveal>
          <Reveal className="grid gap-5">
            <Card title={t.about.missionTitle} body={t.about.mission} />
            <Card title={t.about.visionTitle} body={t.about.vision} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="relative rounded-lg bg-white p-6 md:p-7 border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ltr:border-l-4 rtl:border-r-4 ltr:border-l-[color:var(--brand-gold)] rtl:border-r-[color:var(--brand-gold)]">
      <h3 className="text-lg md:text-xl font-bold text-[color:var(--brand-brown)]">{title}</h3>
      <p className="mt-2 text-[color:var(--brand-ink)]/75 leading-relaxed">{body}</p>
    </div>
  );
}

const SERVICE_ICONS = [
  (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>),
  (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16" /><path d="M8 22V8l4-5 4 5v14" /><path d="M8 12h8" /><path d="M8 16h8" /></svg>),
  (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>),
  (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" /></svg>),
];

function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="section-pad bg-[color:var(--brand-cream)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>{t.services.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[color:var(--brand-brown)]">{t.services.title}</h2>
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {t.services.items.map((s, i) => (
            <Reveal key={i} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <article className="group relative h-full rounded-lg bg-white p-6 border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-12px_rgba(74,44,10,0.25)] border-t-4 border-t-[color:var(--brand-gold)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 shrink-0 rounded-md bg-[color:var(--brand-cream)] text-[color:var(--brand-gold)] flex items-center justify-center"><span className="h-5 w-5 block">{SERVICE_ICONS[i]}</span></div>
                  <h3 className="text-lg font-bold text-[color:var(--brand-brown)]">{s.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-[color:var(--brand-ink)]/80">
                  {s.list.map((it) => (<li key={it} className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--brand-gold)] shrink-0" /><span>{it}</span></li>))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY_US_ICONS = [ShieldCheck, Globe, Clock, TrendingUp, Users, Award];

function WhyUs() {
  const { t } = useI18n();
  return (
    <section id="why" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>{t.why.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[color:var(--brand-brown)]">{t.why.title}</h2>
          <span className="mx-auto mt-5 block h-0.5 w-16 bg-[color:var(--brand-gold)]" />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => {
            const IconComponent = WHY_US_ICONS[i % WHY_US_ICONS.length];
            return (
              <Reveal key={i}>
                <div className="flex items-start gap-4 rounded-lg border border-black/5 bg-white p-6 transition-all duration-300 hover:shadow-[0_8px_24px_-12px_rgba(74,44,10,0.18)] hover:-translate-y-1">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[color:var(--brand-cream)] text-[color:var(--brand-gold)]"><IconComponent className="h-5 w-5" strokeWidth="2" /></span>
                  <span className="font-semibold text-[color:var(--brand-ink)] pt-2 leading-relaxed">{item}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const { t } = useI18n();
  return (
    <section id="industries" className="section-pad bg-[color:var(--brand-cream)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal className="text-center">
          <Eyebrow>{t.industries.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[color:var(--brand-brown)]">{t.industries.title}</h2>
        </Reveal>
        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          {t.industries.items.map((it) => (<span key={it} className="cursor-default rounded-full border border-[color:var(--brand-gold)] bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-brown)] transition-colors hover:bg-[color:var(--brand-gold)] hover:text-white">{it}</span>))}
        </Reveal>
      </div>
    </section>
  );
}

// --- WHITE CONTACT SECTION ---
function Contact() {
  const { t, lang, setLang } = useI18n();

  const contactTitle = lang === "ar" ? "معلومات الاتصال" : "Contact Info";
  const address = lang === "ar" 
    ? "طرابلس - الشارع الرئيسي: النوقليين - المبنى المقابل للخير هوم الدور الثالث" 
    : "Al Nufaliyeen Area, opposite Al Khair Home Building, Third Floor, Tripoli, Libya";
  const legalName = lang === "ar" 
    ? "الاسم القانوني: شركة السدرة العالمية للنفط والغاز د.م.م" 
    : "Legal Name: SIDRA GLOBAL OIL AND ENERGY L.L.C";
  const statCode = lang === "ar" 
    ? "الرمز الاحصائي: 87 - 91595" 
    : "Statistical Code: 87 - 91595";

  // Arabic: Legal Name first (top), then Stat Code below
  // English: Stat Code first (top), then Legal Name below
  const topLine = lang === "ar" ? legalName : statCode;
  const bottomLine = lang === "ar" ? statCode : legalName;

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[color:var(--brand-brown)]">{t.contact.title}</h2>
        </Reveal>
        
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* COLUMN 1: LOGO & CORPORATE INFO */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <div className="w-20 h-20 bg-white rounded-lg p-2 flex items-center justify-center mb-5 border border-black/10 shadow-sm">
              <img src={logo} alt="SIDRA GLOBAL" className="w-full h-full object-contain" />
            </div>
            <p className="text-[color:var(--brand-ink)]/80 text-sm leading-relaxed mb-6 max-w-xs">
              {t.footer.tagline}
            </p>
            {/* Stacked text — follows language direction automatically */}
            <div className="w-full max-w-xs border-t border-black/10 pt-4 flex flex-col gap-1.5">
              <p className="text-xs font-semibold text-[color:var(--brand-brown)]">
                {topLine}
              </p>
              <p className="text-xs font-semibold text-[color:var(--brand-brown)]">
                {bottomLine}
              </p>
            </div>
          </div>

          {/* COLUMN 2: CONTACT INFO */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-brown)] mb-6">
              {contactTitle}
            </h4>
            <div className="space-y-4 text-sm text-[color:var(--brand-ink)]">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-1 text-[color:var(--brand-brown)]" />
                <span className="text-[color:var(--brand-ink)]">
                  {address}
                </span>
              </div>
              
              <a href="mailto:info@sidraglobal.com" className="flex items-center gap-3 text-[color:var(--brand-ink)] hover:text-[color:var(--brand-brown)] transition-colors">
                <Mail className="h-4 w-4 shrink-0 text-[color:var(--brand-brown)]" />
                <span dir="ltr">info@sidraglobal.com</span>
              </a>

              <a href="mailto:sales@sidraglobal.com" className="flex items-center gap-3 text-[color:var(--brand-ink)] hover:text-[color:var(--brand-brown)] transition-colors">
                <Mail className="h-4 w-4 shrink-0 text-[color:var(--brand-brown)]" />
                <span dir="ltr">sales@sidraglobal.com</span>
              </a>

              <a href="tel:+218930111164" className="flex items-center gap-3 text-[color:var(--brand-ink)] hover:text-[color:var(--brand-brown)] transition-colors">
                <Phone className="h-4 w-4 shrink-0 text-[color:var(--brand-brown)]" />
                <span dir="ltr">+218 93 011 11 64</span>
              </a>
            </div>
          </div>

        </Reveal>

        {/* LANGUAGE SWITCHER */}
        <div className="mt-12 text-center border-t border-black/10 pt-6">
          <div className="inline-flex">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </div>

      </div>
    </section>
  );
}