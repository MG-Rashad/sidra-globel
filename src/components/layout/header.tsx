import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { LangToggle } from "./lang-toggle";
import logo from "@/assets/logo.png";

const NAV_IDS = ["home", "about", "services", "why", "industries", "contact"] as const;

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const items = NAV_IDS.map((id) => ({ id, label: t.nav[id as keyof typeof t.nav] }));

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "border-b border-black/5"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        
        {/* Logo + Company Name */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="SIDRA GLOBAL"
            className="h-auto w-[60px] md:w-[80px] lg:w-[94px] py-1.5" // Slightly resized logo to fit the text nicely
          />
          {/* Text is hidden on small screens to prevent squishing, shows on large screens */}
          <div className="hidden lg:flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-[color:var(--brand-brown)]">
              {lang === "ar" ? "شركة السدرة العالمية" : "SIDRA GLOBAL"}
            </span>
            <span className="text-xs font-semibold text-[color:var(--brand-ink)]/70">
              {lang === "ar" ? "للنفط والطاقة" : "Oil & Energy"}
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                active === it.id
                  ? "text-[color:var(--brand-brown)]"
                  : "text-[color:var(--brand-ink)]/70 hover:text-[color:var(--brand-brown)]"
              }`}
            >
              {it.label}
              {active === it.id && (
                <span className="block h-0.5 w-full bg-[color:var(--brand-gold)] mt-1 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            aria-label="Menu"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/10"
            onClick={() => setOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Kept clean with just the logo) */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute top-0 bottom-0 w-80 max-w-[85vw] bg-white p-6 shadow-2xl ltr:right-0 rtl:left-0 flex flex-col gap-2">
            <div className="flex items-center justify-between mb-4">
              <img src={logo} alt="SIDRA GLOBAL" className="h-10 w-auto" />
              <button
                aria-label="Close"
                className="h-11 w-11 inline-flex items-center justify-center rounded-md border border-black/10"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-base font-medium text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-cream)]"
              >
                {it.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}