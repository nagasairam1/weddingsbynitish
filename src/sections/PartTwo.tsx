import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CaptionTab, DrawRule, Icon, Label, Monogram, Plate, Reveal } from "../components/ui";
import { CONTACT } from "../data";

/* ══════════════════════════════════════════════════════════════
   08 — VENDOR COORDINATION
   ══════════════════════════════════════════════════════════════ */
const VENDORS: [string, string][] = [
  ["Venues", "Shortlisting, site inspections, capacity, access, power and load-in windows."],
  ["Caterers", "Menu planning, tastings, service style, dietary requirements and service timings."],
  ["Photographers & film", "Coverage briefs, shot lists, access, lighting needs and schedule alignment."],
  ["Florists", "Sourcing, seasonal substitutions, installation times and on-site refresh."],
  ["Decorators & contractors", "Stage build, drapery, furniture, rigging, safety and teardown."],
  ["Sound & lighting", "Rider requirements, power, positioning, operator briefs and rehearsal cues."],
  ["Artists & entertainment", "DJs, live musicians, performers, emcees and programme integration."],
  ["Transport & hospitality", "Guest movement, valet, accommodation, welcome desks and family care."],
];

export function VendorCoordination() {
  return (
    <section id="vendors" className="scroll-mt-6 bg-[#EDE4D3]/45 px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-20">
        <div>
          <Reveal>
            <Label index="08">Vendor Coordination</Label>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-[clamp(2.15rem,5.2vw,4.35rem)] font-light leading-[1.02] text-ink">
              The right suppliers,
              <em className="italic text-[#8C6A2E]"> properly managed.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <p className="text-[0.98rem] leading-[1.85] text-[#4A4238]">
            A celebration is only ever as good as the team behind it. We source, negotiate and supervise a network of
            trusted suppliers — and take responsibility for making sure every one of them is in the right place at the
            right time.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.18}>
        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[38rem] border-collapse text-left">
            <thead>
              <tr className="border-y border-[#C6A15B]/55">
                <th className="label py-4 pr-8 text-[#8C6A2E]">Category</th>
                <th className="label py-4 pr-8 text-[#8C6A2E]">What we handle</th>
                <th className="label w-24 py-4 text-right text-[#8C6A2E]">Scope</th>
              </tr>
            </thead>
            <tbody>
              {VENDORS.map(([cat, handle], i) => (
                <tr key={cat} className="ledger-row border-b border-[#C6A15B]/25 align-top">
                  <td className="w-[30%] py-6 pr-8">
                    <div className="flex items-baseline gap-4">
                      <span className="num text-[0.68rem] text-[#A5813F]">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-display text-[1.32rem] font-medium leading-tight text-ink">{cat}</span>
                    </div>
                  </td>
                  <td className="py-6 pr-8 text-[0.96rem] leading-[1.8] text-[#4A4238]">{handle}</td>
                  <td className="py-6 text-right">
                    <span className="label-sm text-[#8C6A2E]">End-to-end</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   09 — EVENT GALLERY
   ══════════════════════════════════════════════════════════════ */
const GALLERY = [
  {
    src: "images/ceremony-aisle.jpg",
    alt: "Ceremony aisle lined with glass lanterns and white petals at golden hour",
    cap: "Ceremony styling",
    h: "h-[22rem] sm:h-[30rem]",
    pos: "center 55%",
  },
  {
    src: "images/floral-detail.jpg",
    alt: "White and blush roses wrapped around a gilded pillar",
    cap: "Floral arrangements",
    h: "h-[26rem] sm:h-[36rem]",
    pos: "center 42%",
  },
  {
    src: "images/reception-table.jpg",
    alt: "Long banquet reception table with taper candles and gold-rimmed chargers",
    cap: "Reception tables",
    h: "h-[20rem] sm:h-[24rem]",
    pos: "center 55%",
  },
  {
    src: "images/entrance-arch.jpg",
    alt: "Entrance arch of ivory blooms with warm uplighting",
    cap: "Entrance décor",
    h: "h-[24rem] sm:h-[32rem]",
    pos: "center 45%",
  },
  {
    src: "images/cover-stage.jpg",
    alt: "Floral wedding stage lit with warm champagne uplighting",
    cap: "Wedding stages",
    h: "h-[21rem] sm:h-[27rem]",
    pos: "70% center",
  },
  {
    src: "images/navy-detail.jpg",
    alt: "Navy and gold place setting with an ivory menu card",
    cap: "Detail & tablescapes",
    h: "h-[19rem] sm:h-[23rem]",
    pos: "center 50%",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-6 px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal>
            <Label index="09">Event Gallery</Label>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 max-w-[18ch] font-display text-[clamp(2.35rem,6vw,5.15rem)] font-light leading-[0.99] text-ink">
              A mood board for
              <em className="italic text-[#8C6A2E]"> what is possible.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <div className="max-w-[24rem] border-l border-[#C6A15B] pl-6">
            <p className="text-[0.92rem] leading-[1.85] text-[#4A4238]">
              <span className="label block pb-2 text-[#8C6A2E]">Please note</span>
              The imagery in this presentation is illustrative — representative styling examples used to demonstrate
              creative direction. Work from our own events is shared privately with clients on request.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 [column-gap:1.5rem] sm:columns-2 lg:columns-3">
        {GALLERY.map((g, i) => (
          <Reveal key={g.src + i} delay={0.05 * (i % 3)} className="mb-6 break-inside-avoid">
            <Plate
              src={g.src}
              alt={g.alt}
              className={`w-full ${g.h}`}
              position={g.pos}
              scrim="bg-gradient-to-t from-[#0E1B2E]/45 via-transparent to-transparent"
            >
              <CaptionTab>{g.cap}</CaptionTab>
            </Plate>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   10 — OUR PROCESS
   ══════════════════════════════════════════════════════════════ */
const PROCESS = [
  ["Discover", "We listen — to the couple, the families, the budget and the feeling the day should leave behind."],
  ["Plan", "Budgets, venues, dates and a master schedule. The skeleton everything else hangs on."],
  ["Design", "Concept boards, palettes, materials and lighting schemes drawn and costed before anything is ordered."],
  ["Coordinate", "Suppliers briefed and confirmed, timelines aligned, responsibilities assigned and tracked."],
  ["Execute", "Setup inspected, cues run, the room managed live — from the first arrival to the final send-off."],
  ["Celebrate", "You are fully present with your guests. Everything else is already handled."],
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-6 bg-[#0E1B2E] px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal>
            <Label index="10" tone="light">
              Our Process
            </Label>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-[clamp(1.75rem,3.6vw,3.35rem)] font-light leading-[1.14] text-[#F7F2E9]">
              Discover <span className="foil italic">→</span> Plan <span className="foil italic">→</span> Design
            </h2>
            <h2 className="font-display text-[clamp(1.75rem,3.6vw,3.35rem)] font-light leading-[1.14] text-[#F7F2E9]">
              Coordinate <span className="foil italic">→</span> Execute <span className="foil italic">→</span>
              <em className="foil italic"> Celebrate</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <p className="max-w-[24rem] text-[0.98rem] leading-[1.85] text-[#F7F2E9]/75">
            A six-stage method refined across weddings and events of very different scales. You always know which stage
            we are in, what happens next and what we need from you.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-16">
        <div
          className="absolute left-0 right-0 top-[9px] hidden h-px bg-gradient-to-r from-[#C6A15B]/0 via-[#C6A15B]/55 to-[#C6A15B]/10 lg:block"
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-6">
          {PROCESS.map(([t, d], i) => (
            <Reveal key={t} delay={0.07 * i}>
              <div className="relative border-t border-[#C6A15B]/28 py-8 lg:border-t-0 lg:pt-0">
                <span
                  className="absolute left-0 top-[-3px] h-[6px] w-[6px] rotate-45 bg-[#C6A15B]"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-4 lg:mt-8">
                  <span className="num font-display text-[2.15rem] font-light leading-none text-[#C6A15B]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[1.55rem] font-medium leading-tight text-[#F7F2E9]">{t}</h3>
                </div>
                <p className="mt-4 text-[0.92rem] leading-[1.82] text-[#F7F2E9]/70">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   11 — WHY CHOOSE US
   ══════════════════════════════════════════════════════════════ */
const WHY = [
  [
    "Personalised service",
    "No two celebrations we plan look alike, because no two families are alike. Your brief is the brief.",
  ],
  [
    "Creative direction",
    "Design ideas drawn from your story and your setting — never lifted from a template.",
  ],
  ["Attention to detail", "The details guests never notice are exactly the ones we obsess over."],
  [
    "Organised planning",
    "Documented schedules, tracked budgets and one accountable point of contact throughout.",
  ],
  [
    "Budget-conscious coordination",
    "Beautiful results at the budget you set, with honest advice on where to spend and where to save.",
  ],
];

export function WhyChooseUs() {
  return (
    <section id="why" className="scroll-mt-6 px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal>
          <Label index="11">Why Choose Us</Label>
          <h2 className="mt-8 font-display text-[clamp(2.35rem,5.6vw,4.65rem)] font-light leading-[1.0] text-ink">
            The difference is
            <em className="italic text-[#8C6A2E]"> in the care.</em>
          </h2>
          <DrawRule className="mt-9 max-w-[18rem]" />
          <p className="mt-8 max-w-[30rem] text-[1.02rem] leading-[1.85] text-[#4A4238]">
            Anyone can book a venue and order flowers. What families remember is how the whole thing felt — the ease,
            the warmth, the sense that someone had already thought of it.
          </p>
          <div className="mt-10">
            <Plate
              src="images/navy-detail.jpg"
              alt="A considered place setting on navy linen with gold flatware"
              className="h-[18rem] w-full sm:h-[22rem]"
              position="center 55%"
            />
          </div>
        </Reveal>

        <div>
          {WHY.map(([t, d], i) => (
            <Reveal key={t} delay={0.06 * i} className="border-t border-[#C6A15B]/32 last:border-b">
              <div className="group grid grid-cols-[3.2rem_1fr] gap-5 py-8">
                <span className="num pt-2 text-[0.72rem] text-[#A5813F]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.05rem)] font-medium leading-tight text-ink transition-colors duration-500 group-hover:text-[#8C6A2E]">
                    {t}
                  </h3>
                  <p className="mt-2.5 max-w-[34rem] text-[0.98rem] leading-[1.84] text-[#4A4238]">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   12 — EXCITING UPDATES AHEAD (planned journal)
   ══════════════════════════════════════════════════════════════ */
const JOURNAL = [
  [
    "Wedding Planning Tips",
    "Budgets, timelines, guest lists and the questions worth asking before you book anything.",
  ],
  ["Décor Inspiration", "Palettes, floral trends, lighting ideas and styling notes from the design desk."],
  ["Event Ideas", "Themes, formats and small touches that make a celebration feel unmistakably yours."],
];

export function Journal() {
  return (
    <section id="blog" className="scroll-mt-6 px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <div>
          <Reveal>
            <Label index="12">Exciting Updates Ahead</Label>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-[clamp(2.35rem,5.6vw,4.65rem)] font-light leading-[1.0] text-ink">
              We are preparing
              <em className="italic text-[#8C6A2E]"> a journal.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-[32rem] text-[1.02rem] leading-[1.85] text-[#4A4238]">
              Planning a wedding raises more questions than most families expect. We are preparing a journal to share
              what we have learned — practical guidance, décor inspiration and ideas worth stealing for your own
              celebration.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 inline-flex items-center gap-4 border border-[#C6A15B]/50 px-6 py-3.5">
              <span className="h-[6px] w-[6px] rotate-45 bg-[#C6A15B]" aria-hidden="true" />
              <span className="label text-[#8C6A2E]">Planned — in development</span>
            </div>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="mt-8 max-w-[30rem] text-[0.92rem] leading-[1.85] text-[#4A4238]">
              Nothing has been published yet. Follow us on social media for the announcement, or send us a message if
              there is a topic you would like us to cover.
            </p>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="deck-link label mt-6 inline-flex items-center gap-3 text-[#8C6A2E] hover:text-[#12100E]"
            >
              Suggest a topic
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        {/* editorial card mock */}
        <Reveal delay={0.16}>
          <div className="relative border border-[#C6A15B]/45 bg-[#EDE4D3]/50 p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-3 border border-[#C6A15B]/22" aria-hidden="true" />
            <div className="relative">
              <p className="label text-[#8C6A2E]">Coming soon — three columns</p>
              <div className="mt-9">
                {JOURNAL.map(([t, d], i) => (
                  <div key={t} className="border-t border-[#C6A15B]/32 py-7">
                    <div className="flex items-baseline justify-between gap-6">
                      <h3 className="font-display text-[1.62rem] font-medium leading-tight text-ink">{t}</h3>
                      <span className="num text-[0.66rem] text-[#A5813F]">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="mt-2.5 text-[0.95rem] leading-[1.82] text-[#4A4238]">{d}</p>
                    <div className="mt-5 h-[3px] w-full bg-[#C6A15B]/25">
                      <div className="h-full w-[12%] bg-[#C6A15B]" />
                    </div>
                    <p className="label-sm mt-3 text-[#8C6A2E]">In preparation</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   13 — LET'S PLAN YOUR DREAM EVENT
   ══════════════════════════════════════════════════════════════ */
const BUDGETS = ["Under ₹5 lakh", "₹5 – 10 lakh", "₹10 – 25 lakh", "₹25 lakh and above", "Not sure yet"];

const BRIEF_ITEMS = [
  "Preferred date or season",
  "Approximate guest count",
  "Venues you are considering",
  "Preferred budget range",
  "The moments that matter most",
];

export function PlanBrief() {
  const [budget, setBudget] = useState<string>(BUDGETS[4]);
  const waHref = useMemo(
    () =>
      `${CONTACT.whatsapp}?text=${encodeURIComponent(
        `Hello DJ NITISH EVENTS (AGAPE GROUP), I would like to discuss planning an event. My preferred budget range is ${budget}.`,
      )}`,
    [budget],
  );

  return (
    <section id="plan" className="scroll-mt-6 bg-[#EDE4D3]/45 px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <Reveal>
            <Label index="13">Let&apos;s Plan Your Dream Event</Label>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-[clamp(2.35rem,6vw,5.15rem)] font-light leading-[0.99] text-ink">
              Tell us what
              <em className="italic text-[#8C6A2E]"> you are dreaming of.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-[34rem] text-[1.02rem] leading-[1.85] text-[#4A4238]">
              Bring us your requirements and your preferred budget — however early the idea. We will talk through what
              is possible, what it realistically takes, and how we would approach the celebration with you. There is no
              obligation and no charge for the first conversation.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-11">
              <p className="label text-[#8C6A2E]">Useful to bring to the conversation</p>
              <ul className="mt-6 border-t border-[#C6A15B]/32">
                {BRIEF_ITEMS.map((b, i) => (
                  <li key={b} className="flex items-center gap-5 border-b border-[#C6A15B]/22 py-4">
                    <span className="num text-[0.68rem] text-[#A5813F]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[1rem] text-[#4A4238]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* budget selector → live WhatsApp message */}
        <Reveal delay={0.16}>
          <div className="relative border border-[#C6A15B]/45 bg-[#F7F2E9] p-8 sm:p-11">
            <div className="pointer-events-none absolute inset-3 border border-[#C6A15B]/22" aria-hidden="true" />
            <div className="relative">
              <p className="label text-[#8C6A2E]">Preferred budget range</p>
              <p className="mt-4 font-display text-[1.45rem] font-light italic leading-[1.45] text-[#4A4238]">
                Select a range and we will open a message to us with it already noted.
              </p>

              <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label="Preferred budget range">
                {BUDGETS.map((b) => {
                  const active = b === budget;
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      aria-pressed={active}
                      className={`label border px-5 py-3 transition-colors duration-300 ${
                        active
                          ? "border-[#12100E] bg-[#12100E] text-[#F7F2E9]"
                          : "border-[#C6A15B]/55 text-[#4A4238] hover:border-[#12100E] hover:bg-[#EDE4D3]/70"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>

              <div className="mt-9 border-t border-[#C6A15B]/32 pt-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <span className="label text-[#8C6A2E]">Your note</span>
                  <span className="num text-[0.66rem] text-[#A5813F]">{CONTACT.phone}</span>
                </div>
                <p className="mt-4 text-[0.98rem] leading-[1.85] text-[#4A4238]">
                  “Hello DJ NITISH EVENTS (AGAPE GROUP), I would like to discuss planning an event. My preferred budget
                  range is <span className="font-medium text-[#12100E]">{budget}</span>.”
                </p>
              </div>

              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="group mt-9 flex w-full items-center justify-between gap-4 border border-[#12100E] bg-[#12100E] px-7 py-5 text-[#F7F2E9] transition-colors duration-500 hover:bg-transparent hover:text-[#12100E]"
              >
                <span className="flex items-center gap-3">
                  <Icon name="whatsapp" className="h-4 w-4" />
                  <span className="label">Continue on WhatsApp</span>
                </span>
                <Icon name="arrow" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
              </a>

              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                <a
                  href={CONTACT.phoneHref}
                  className="deck-link label inline-flex items-center gap-2.5 text-[#8C6A2E] hover:text-[#12100E]"
                >
                  <Icon name="phone" className="h-4 w-4" /> Call
                </a>
                <a
                  href={CONTACT.emailHref}
                  className="deck-link label inline-flex items-center gap-2.5 text-[#8C6A2E] hover:text-[#12100E]"
                >
                  <Icon name="mail" className="h-4 w-4" /> Email us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   14 — CONTACT (closing slide)
   ══════════════════════════════════════════════════════════════ */
export function ContactSlide() {
  const reduce = useReducedMotion();
  return (
    <section id="contact" className="relative scroll-mt-6 overflow-hidden bg-[#08111D]">
      <Plate
        fill
        src="images/closing-night.jpg"
        alt="An outdoor wedding reception at night under a canopy of warm string lights"
        className="h-full w-full"
        position="center 45%"
        border={false}
        scrim="bg-gradient-to-b from-[#08111D]/92 via-[#08111D]/84 to-[#08111D]/96"
      />

      <div className="relative px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[62rem] text-center">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, scale: 0.92 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto h-20 w-20 sm:h-24 sm:w-24"
          >
            <Monogram className="h-full w-full" gradientId="close-mg" />
          </motion.div>

          <Reveal delay={0.1}>
            <Label index="14" tone="light" className="mt-10 justify-center">
              Contact
            </Label>
          </Reveal>

          <Reveal delay={0.16}>
            <h2 className="mt-9 font-display text-[clamp(2.5rem,7.2vw,6.15rem)] font-light leading-[0.98] text-[#F7F2E9]">
              Let&apos;s turn your dream
              <em className="foil block italic">into a memory.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mx-auto mt-8 max-w-[36rem] text-[1.05rem] leading-[1.9] text-[#F7F2E9]/80">
              We would be honoured to hear what you are planning. Call, message or write to us — and let&apos;s begin
              with a conversation.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-[#C6A15B] bg-[#C6A15B] px-8 py-4 text-[#12100E] transition-colors duration-500 hover:bg-transparent hover:text-[#E3C88F]"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                <span className="label">WhatsApp {CONTACT.phone}</span>
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-3 border border-[#C6A15B]/60 px-8 py-4 text-[#F7F2E9] transition-colors duration-500 hover:border-[#C6A15B] hover:bg-[#C6A15B]/15"
              >
                <Icon name="phone" className="h-4 w-4" />
                <span className="label">Call us</span>
              </a>
              <a
                href={CONTACT.emailHref}
                className="inline-flex items-center gap-3 border border-[#C6A15B]/60 px-8 py-4 text-[#F7F2E9] transition-colors duration-500 hover:border-[#C6A15B] hover:bg-[#C6A15B]/15"
              >
                <Icon name="mail" className="h-4 w-4" />
                <span className="label">Email</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <div className="mx-auto mt-16 grid max-w-[52rem] grid-cols-1 gap-px border border-[#C6A15B]/28 bg-[#C6A15B]/25 sm:grid-cols-3">
              {[
                ["Phone & WhatsApp", CONTACT.phone, CONTACT.phoneHref],
                ["Email", CONTACT.email, CONTACT.emailHref],
                ["Social media", CONTACT.social, CONTACT.whatsapp],
              ].map(([k, v, href]) => (
                <a
                  key={k}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group bg-[#08111D] px-6 py-8 text-left transition-colors duration-500 hover:bg-[#0E1B2E]"
                >
                  <p className="label text-[#E3C88F]">{k}</p>
                  <p className="deck-link mt-4 inline-block break-words font-display text-[1.18rem] font-medium leading-tight text-[#F7F2E9] sm:text-[1.32rem]">
                    {v}
                  </p>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mx-auto mt-16 max-w-[42rem]">
              <div className="hairline-gold h-px w-full" />
              <p className="label mt-8 text-[#E3C88F]">{CONTACT.locations}</p>
              <p className="mt-4 text-[0.86rem] leading-[1.9] text-[#F7F2E9]/70">{CONTACT.locationNote}</p>
              <p className="label-sm mt-10 text-[#F7F2E9]/65">
                DJ Nitish Events — Agape Group · Turning Dreams into Memories
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
