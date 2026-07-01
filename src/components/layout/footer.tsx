import { useI18n } from "@/lib/i18n";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const { t } = useI18n();
  
  return (
    <footer className="bg-[color:var(--brand-brown)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        
        {/* TOP SECTION: Services with Pipes + Centered Social Media */}
        <div className="text-center">
          {/* Services Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/80 mb-8">
            {t.services.items.map((s, i) => (
              <span key={i} className="flex items-center gap-x-3">
                <a href="#services" className="hover:text-[color:var(--brand-gold)] transition-colors">
                  {s.title}
                </a>
                {/* Show pipe between items */}
                {i < t.services.items.length - 1 && (
                  <span className="text-white/30 hidden sm:inline">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Social Media Icons - Perfectly Centered */}
          <div className="flex items-center justify-center gap-3">
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-[color:var(--brand-gold)] hover:border-[color:var(--brand-gold)] hover:text-white">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-[color:var(--brand-gold)] hover:border-[color:var(--brand-gold)] hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="X (Twitter)" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-[color:var(--brand-gold)] hover:border-[color:var(--brand-gold)] hover:text-white">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-8 border-t border-white/10"></div>

        {/* BOTTOM BAR: Centered Copyright */}
        <div className="text-center">
          <p className="text-xs text-white/60">{t.footer.rights}</p>
        </div>
        
      </div>
    </footer>
  );
}