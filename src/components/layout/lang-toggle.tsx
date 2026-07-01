import { useI18n, type Lang } from "@/lib/i18n";

export function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="inline-flex items-center rounded-full border border-black/10 p-0.5 bg-white text-xs font-semibold">
      <button
        onClick={() => setLang("ar")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          lang === "ar" ? "bg-[color:var(--brand-brown)] text-white" : "text-[color:var(--brand-ink)]/70"
        }`}
      >
        AR
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          lang === "en" ? "bg-[color:var(--brand-brown)] text-white" : "text-[color:var(--brand-ink)]/70"
        }`}
      >
        EN
      </button>
    </div>
  );
}