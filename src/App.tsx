import { useCallback, useEffect, useRef, useState } from "react";
import { Monogram } from "./components/ui";
import { SECTIONS } from "./data";
import { About, Cover, DayOfCoordination, DecorStyling, FullPlanning, Services, VisionMission } from "./sections/PartOne";
import {
  ContactSlide,
  Gallery,
  Journal,
  PlanBrief,
  Process,
  VendorCoordination,
  WhyChooseUs,
} from "./sections/PartTwo";

export default function App() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const activeRef = useRef<string>(SECTIONS[0].id);

  /* ── which slide is on screen ───────────────────────────────── */
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!els.length) return;

    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
        let best = "";
        let bestRatio = 0;
        ratios.forEach((r, id) => {
          if (r > bestRatio) {
            bestRatio = r;
            best = id;
          }
        });
        if (best && best !== activeRef.current) {
          activeRef.current = best;
          setActive(best);
        }
      },
      { threshold: [0, 0.15, 0.3, 0.5, 0.75, 1] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── presentation keyboard: arrows step through slides ─────── */
  const go = useCallback((dir: 1 | -1) => {
    const idx = SECTIONS.findIndex((s) => s.id === activeRef.current);
    const next = SECTIONS[Math.min(SECTIONS.length - 1, Math.max(0, (idx < 0 ? 0 : idx) + dir))];
    if (next) document.getElementById(next.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <div className="grain relative min-h-screen bg-[#F7F2E9]">
      {/* ══ LEFT SPINE — the printed folio edge ══════════════════ */}
      <aside
        className="fixed inset-y-0 left-0 z-40 hidden w-14 flex-col items-center justify-between border-r border-[#C6A15B]/30 bg-[#F7F2E9] py-8 md:flex"
        aria-label="Brand"
      >
        <a href="#cover" className="opacity-90 transition-opacity hover:opacity-100" aria-label="Back to cover slide">
          <Monogram className="h-8 w-8" gradientId="spine-mg" />
        </a>
        <div className="flex flex-1 items-center">
          <p className="vertical-rl label-sm whitespace-nowrap text-[#8C6A2E]">
            DJ Nitish Events&nbsp;&nbsp;—&nbsp;&nbsp;Agape Group
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="h-16 w-px bg-gradient-to-b from-transparent via-[#C6A15B] to-transparent" />
          <span className="num text-[0.58rem] text-[#C6A15B]">14</span>
        </div>
      </aside>

      {/* ══ RIGHT SLIDE INDEX RAIL ══════════════════════════════ */}
      <nav
        className="fixed inset-y-0 right-0 z-40 hidden w-20 flex-col items-center justify-center bg-[#F7F2E9] md:flex"
        aria-label="Presentation slides"
      >
        <ul className="flex w-full flex-col items-end gap-0 pr-6">
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id} className="group relative w-full">
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="flex w-full items-center justify-end gap-3 py-[7px]"
                >
                  <span
                    className={`num text-[0.6rem] transition-colors duration-500 ${
                      isActive ? "text-[#8C6A2E]" : "text-[#4A4238]/38 group-hover:text-[#4A4238]"
                    }`}
                  >
                    {s.index}
                  </span>
                  <span
                    className={`h-px transition-all duration-500 ${
                      isActive ? "w-9 bg-[#C6A15B]" : "w-4 bg-[#C6A15B]/32 group-hover:w-7 group-hover:bg-[#C6A15B]/70"
                    }`}
                  />
                </a>
                {/* hover label, like a tipped-in index tab */}
                <span className="pointer-events-none absolute right-[calc(100%+0.35rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap border border-[#C6A15B]/35 bg-[#F7F2E9] px-3 py-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
                  <span className="label-sm text-[#4A4238]">{s.short}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ══ THE DECK ════════════════════════════════════════════ */}
      <main className="relative md:pl-14 md:pr-20">
        <Cover />
        <About />
        <VisionMission />
        <Services />
        <FullPlanning />
        <DecorStyling />
        <DayOfCoordination />
        <VendorCoordination />
        <Gallery />
        <Process />
        <WhyChooseUs />
        <Journal />
        <PlanBrief />
        <ContactSlide />
      </main>

      {/* ══ mobile quick contact ════════════════════════════════ */}
      <a
        href="https://wa.me/917013807022"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp with DJ Nitish Events"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#C6A15B] bg-[#12100E] text-[#E3C88F] shadow-[0_18px_40px_-16px_rgba(18,16,14,0.6)] transition-colors duration-300 hover:bg-[#C6A15B] hover:text-[#12100E] md:hidden"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
          <path d="M3.6 20.4 5 16.6A8.4 8.4 0 1 1 8 19.3l-4.4 1.1Z" />
          <path d="M9 8.4c.3-.6.6-.6.9-.6h.7c.2 0 .5 0 .7.6l.8 1.9c.1.3 0 .5-.1.7l-.5.6c-.2.2-.2.4-.1.6a7 7 0 0 0 3.2 2.8c.3.1.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.3.4.5a2 2 0 0 1-1.4 1.7c-.6.2-1.6.2-3.4-.6a11 11 0 0 1-5-5c-.7-1.5-.8-2.6-.5-3.3Z" />
        </svg>
      </a>
    </div>
  );
}
