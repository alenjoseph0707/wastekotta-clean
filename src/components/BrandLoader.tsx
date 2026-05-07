import { useEffect, useState } from "react";
import logo from "@/assets/wastekotta-logo.png";

const TRANSLATIONS = [
  { lang: "ml", text: "കൊട്ട" },
  { lang: "ta", text: "கூடை" },
  { lang: "hi", text: "टोकरी" },
  { lang: "te", text: "బుట్ట" },
  { lang: "kn", text: "ಬುಟ್ಟಿ" },
  { lang: "mr", text: "टोपली" },
  { lang: "bn", text: "ঝুড়ি" },
];

const ANTICIPATION = 800;
const LOGO_IN = 900;
const WASTE_IN = 700;
const PER_LANG = 1100;
const FINAL_HOLD = 900;
const FADE_OUT = 700;

export function BrandLoader() {
  const [phase, setPhase] = useState<"anticipation" | "logo" | "waste" | "cycle" | "final" | "gone">(
    "anticipation",
  );
  const [langIdx, setLangIdx] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timers: number[] = [];
    timers.push(window.setTimeout(() => setPhase("logo"), ANTICIPATION));
    timers.push(window.setTimeout(() => setPhase("waste"), ANTICIPATION + LOGO_IN));
    timers.push(
      window.setTimeout(() => setPhase("cycle"), ANTICIPATION + LOGO_IN + WASTE_IN),
    );

    const cycleStart = ANTICIPATION + LOGO_IN + WASTE_IN;
    TRANSLATIONS.forEach((_, i) => {
      timers.push(window.setTimeout(() => setLangIdx(i), cycleStart + i * PER_LANG));
    });

    const finalAt = cycleStart + TRANSLATIONS.length * PER_LANG;
    timers.push(window.setTimeout(() => setPhase("final"), finalAt));
    timers.push(window.setTimeout(() => setHide(true), finalAt + FINAL_HOLD));
    timers.push(window.setTimeout(() => setPhase("gone"), finalAt + FINAL_HOLD + FADE_OUT));

    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={hide}
    >
      {/* Ambient green glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div
          className="absolute left-1/2 top-1/2 h-[40vmin] w-[40vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-glow/30 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        {/* Floating particles */}
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1.5 w-1.5 rounded-full bg-primary/40"
            style={{
              left: `${(i * 67) % 100}%`,
              top: `${(i * 43) % 100}%`,
              animation: `floatY ${4 + (i % 5)}s ease-in-out ${i * 0.3}s infinite alternate`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes floatY {
          from { transform: translateY(0px); }
          to { transform: translateY(-24px); }
        }
      `}</style>

      <div className="relative flex flex-col items-center gap-6 px-6 text-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Wastekotta"
          className={`h-24 w-24 md:h-28 md:w-28 object-contain transition-all duration-1000 ease-out ${
            phase === "anticipation"
              ? "opacity-0 scale-75"
              : "opacity-100 scale-100 drop-shadow-[0_0_24px_oklch(var(--primary)/0.35)]"
          }`}
        />

        {/* Wordmark */}
        <div className="flex items-baseline justify-center gap-2 min-h-[3.5rem] md:min-h-[4.5rem]">
          <span
            className={`text-4xl md:text-6xl font-extrabold tracking-tight text-primary transition-all duration-700 ease-out ${
              phase === "anticipation" || phase === "logo"
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            Waste
          </span>

          <span className="relative inline-block min-w-[6ch] text-left">
            {/* Cycling translations */}
            {(phase === "cycle") &&
              TRANSLATIONS.map((t, i) => (
                <span
                  key={t.lang}
                  className={`absolute left-0 top-0 text-4xl md:text-6xl font-extrabold tracking-tight text-foreground transition-all duration-500 ease-out ${
                    i === langIdx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                >
                  {t.text}
                </span>
              ))}

            {/* Final brand word */}
            <span
              className={`text-4xl md:text-6xl font-extrabold tracking-tight text-foreground transition-all duration-700 ease-out ${
                phase === "final"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              Kotta
            </span>
          </span>
        </div>

        <span
          className={`text-xs uppercase tracking-[0.3em] text-muted-foreground transition-opacity duration-700 ${
            phase === "final" ? "opacity-100" : "opacity-0"
          }`}
        >
          Smarter waste, greener tomorrow
        </span>
      </div>
    </div>
  );
}
