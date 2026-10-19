import { motion, useReducedMotion } from "framer-motion";
import { CaptionTab, DrawRule, Icon, Label, Monogram, Plate, Reveal } from "../components/ui";
import { CONTACT } from "../data";

/* ══════════════════════════════════════════════════════════════
   01 — COVER
   ══════════════════════════════════════════════════════════════ */
export function Cover() {
  const reduce = useReducedMotion();
  return (
    <section id="cover" className="relative min-h-[100svh] scroll-mt-0">
      <div className="grid min-h-[100svh] grid-cols-1 lg:grid-cols-[1.06fr_0.94fr]">
        {/* ── letterpress field ── */}
        <div className="relative flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16 lg:py-24">
          {/* inset hairline frames, like a debossed card edge */}
          <div
            className="pointer-events-none absolute inset-4 border border-[#C6A15B]/30 sm:inset-6 lg:inset-8"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-[22px] border border-[#C6A15B]/15 sm:inset-[32px] lg:inset-[42px]"
            aria-hidden="true"
          />

          <div className="relative">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, scale: 0.92 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-9 h-20 w-20 sm:h-24 sm:w-24"
            >
              <Monogram className="h-full w-full" gradientId="cover-mg" />
              {/* specular sheen passing over the foil */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 32% 22%, rgba(255,255,255,0.55), rgba(255,255,255,0) 62%)",
                  mixBlendMode: "overlay",
                }}
                animate={reduce ? undefined : { opacity: [0.15, 0.85, 0.15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <Reveal delay={0.1}>
              <Label>AGAPE Group — Event Management &amp; Wedding Planning</Label>
            </Reveal>

            <Reveal delay={0.18}>
              <h1 className="mt-7 font-display text-[clamp(2.6rem,5.2vw,6.4rem)] font-semibold uppercase leading-[0.92] tracking-[0.02em] text-ink">
                DJ Nitish
                <span className="block pl-[0.12em] text-[#8C6A2E]">Events</span>
              </h1>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 max-w-[34rem]">
                <DrawRule />
                <p className="foil mt-6 font-display text-[clamp(1.85rem,4.4vw,3.15rem)] font-light italic leading-[1.06]">
                  Turning Dreams
                  <span className="block pl-[0.6em] sm:pl-[1.4em]">into Memories</span>
                </p>
                <p className="label mt-7 text-[#4A4238]">Our Passion for Unique Events</p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border border-[#12100E] px-7 py-3.5 text-ink transition-colors duration-500 hover:bg-[#12100E] hover:text-[#F7F2E9]"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  <span className="label">Plan With Us</span>
                </a>
                <a href={CONTACT.phoneHref} className="deck-link label text-[#8C6A2E] hover:text-[#12100E]">
                  {CONTACT.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-14 flex items-start gap-4">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-[#8C6A2E]" />
                <p className="label-sm max-w-[26rem] leading-[1.9] text-[#4A4238]">{CONTACT.locations}</p>
              </div>
            </Reveal>
          </div>

          {/* scroll cue */}
          <div className="absolute bottom-9 left-6 hidden items-center gap-4 sm:left-12 lg:left-16 lg:flex">
            <span className="label-sm text-[#8C6A2E]">Scroll — 14 slides</span>
            <span className="h-px w-16 bg-[#C6A15B]/50" />
          </div>
        </div>

        {/* ── tipped-in photographic plate ── */}
        <div className="relative min-h-[58svh] lg:min-h-full">
          <Plate
            fill
            src="images/cover-stage.jpg"
            alt="A candlelit floral wedding stage at dusk with white blooms and brass candle stands"
            className="h-full w-full"
            position="72% center"
            border={false}
            scrim="bg-gradient-to-r from-[#F7F2E9] via-[#F7F2E9]/12 to-[#0E1B2E]/25 lg:from-[#F7F2E9] lg:via-transparent"
          />
          <div className="absolute bottom-6 right-6 z-10 max-w-[15rem] text-right">
            <p className="label-sm text-[#F7F2E9]">Wedding stages · Floral design · Reception styling</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   02 — ABOUT US
   ══════════════════════════════════════════════════════════════ */
export function About() {
  return (
    <section id="about" className="scroll-mt-6 px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div>
          <Reveal>
            <Label index="02">About Us</Label>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-[clamp(2.15rem,5.2vw,4.25rem)] font-light leading-[1.02] text-ink">
              We plan celebrations that feel like
              <em className="font-normal italic text-[#8C6A2E]"> the people at their centre.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <DrawRule className="mt-10 max-w-[22rem]" />
          </Reveal>
          <div className="mt-10 grid gap-7 sm:grid-cols-2">
            <Reveal delay={0.18}>
              <p className="text-[1.02rem] leading-[1.85] text-[#4A4238]">
                DJ NITISH EVENTS is the wedding planning and event management practice of AGAPE GROUP. We work with
                couples and families who want a celebration that feels considered rather than assembled — where the
                décor, the timing, the lighting and the hundred small details all point back to one story.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="text-[1.02rem] leading-[1.85] text-[#4A4238]">
                Every engagement begins with listening. We learn what your families hold dear, what the evening should
                feel like when the last guest leaves — and only then do we begin to plan. From the first budget
                conversation to the final supplier settlement, we stay close, organised and honest.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.32}>
            <dl className="mt-12 border-t border-[#C6A15B]/35">
              {[
                [
                  "Disciplines",
                  "Wedding planning · Event management · Décor & styling · Day-of coordination · Vendor management",
                ],
                ["Service locations", CONTACT.locations],
                ["Reach us", `${CONTACT.phone} · ${CONTACT.email}`],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-2 border-b border-[#C6A15B]/22 py-5 sm:grid-cols-[10.5rem_1fr] sm:gap-6">
                  <dt className="label pt-1 text-[#8C6A2E]">{k}</dt>
                  <dd className="text-[0.98rem] leading-[1.8] text-[#4A4238]">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* offset plate + pull quote card */}
        <Reveal delay={0.2} className="relative lg:pt-14">
          <Plate
            src="images/floral-detail.jpg"
            alt="Close detail of white and blush roses wrapped around a gilded pillar with fairy lights"
            className="h-[30rem] w-full sm:h-[38rem] lg:h-[46rem]"
            position="center 40%"
            scrim="bg-gradient-to-t from-[#0E1B2E]/45 via-transparent to-transparent"
          />
          <div className="relative z-10 -mt-16 max-w-[22rem] border-l-2 border-[#C6A15B] bg-[#F7F2E9] p-8 shadow-[0_24px_60px_-32px_rgba(18,16,14,0.45)] sm:-mt-20 sm:ml-auto sm:mr-6">
            <p className="font-display text-[1.55rem] font-light italic leading-[1.32] text-ink">
              “Our passion is for the unique — the celebration no one else could have.”
            </p>
            <p className="label mt-5 text-[#8C6A2E]">AGAPE Group</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   03 — VISION & MISSION
   ══════════════════════════════════════════════════════════════ */
export function VisionMission() {
  return (
    <section id="vision" className="scroll-mt-6 px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-0">
        {/* Vision — ivory */}
        <Reveal className="lg:col-span-5 lg:pr-16">
          <Label index="03">Vision &amp; Mission</Label>
          <p className="label mt-10 text-[#C6A15B]">Our Vision</p>
          <h2 className="mt-5 font-display text-[clamp(1.95rem,3.6vw,3.05rem)] font-light leading-[1.14] text-ink">
            To build a trusted event management brand through
            <em className="italic text-[#8C6A2E]"> creativity, personalisation and professional execution.</em>
          </h2>
          <DrawRule className="mt-9 max-w-[18rem]" />
          <p className="mt-8 text-[1.02rem] leading-[1.85] text-[#4A4238]">
            We want families across Andhra Pradesh and Telangana to think of DJ NITISH EVENTS when the occasion matters
            most — because the work is imaginative, the planning is disciplined, and the day itself feels effortless.
          </p>
        </Reveal>

        {/* Mission — navy reception-menu card */}
        <Reveal delay={0.12} className="lg:col-span-7">
          <div className="relative h-full border border-[#C6A15B]/45 bg-[#0E1B2E] px-7 py-12 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-3 border border-[#C6A15B]/22" aria-hidden="true" />
            <p className="label text-[#E3C88F]">Our Mission</p>
            <p className="mt-6 font-display text-[clamp(1.6rem,2.7vw,2.25rem)] font-light italic leading-[1.3] text-[#F7F2E9]">
              To deliver beautifully personal celebrations with the calm, precision and care they deserve.
            </p>
            <ul className="mt-11">
              {[
                [
                  "Design around people, not templates",
                  "Every theme, palette and detail begins with the couple and the families it honours.",
                ],
                [
                  "Plan with discipline",
                  "Clear budgets, clear timelines, clear accountability at every stage of the engagement.",
                ],
                [
                  "Coordinate every vendor",
                  "So the family experiences the day itself — never the logistics behind it.",
                ],
                [
                  "Protect the budget",
                  "Transparent recommendations, considered trade-offs and no surprises on the invoice.",
                ],
              ].map(([t, d], i) => (
                <li key={t} className="grid grid-cols-[2.6rem_1fr] gap-4 border-t border-[#C6A15B]/25 py-6">
                  <span className="num pt-1 text-[0.72rem] text-[#C6A15B]">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-[1.35rem] font-medium leading-tight text-[#F7F2E9]">{t}</h3>
                    <p className="mt-2 text-[0.95rem] leading-[1.8] text-[#F7F2E9]/70">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   04 — PREMIUM SERVICES (the ledger)
   ══════════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    n: "01",
    title: "Full Wedding Planning",
    copy: "End-to-end stewardship from the first budget conversation to the final send-off — venue, schedule, suppliers and preparation held in one plan.",
    tags: ["Budget", "Venue", "Timeline", "Suppliers"],
    href: "#planning",
  },
  {
    n: "02",
    title: "Design & Styling",
    copy: "Wedding stages, floral architecture, lighting schemes, entrance décor and reception styling built around one coherent visual story.",
    tags: ["Stages", "Florals", "Lighting", "Themes"],
    href: "#decor",
  },
  {
    n: "03",
    title: "Day-of Coordination",
    copy: "We run the day so you can live it — timeline management, supplier coordination, setup checks and on-site execution from start to finish.",
    tags: ["Timeline", "Setup", "On-site", "Execution"],
    href: "#coordination",
  },
  {
    n: "04",
    title: "Vendor Management",
    copy: "Sourcing, negotiation and supervision of venues, caterers, photographers, florists, decorators and sound & lighting providers.",
    tags: ["Sourcing", "Negotiation", "Supervision"],
    href: "#vendors",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-6 bg-[#EDE4D3]/45 px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_20rem] lg:items-end lg:gap-16">
        <div>
          <Reveal>
            <Label index="04">Premium Services</Label>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-[clamp(2.35rem,6vw,5.25rem)] font-light leading-[0.98] text-ink">
              Four disciplines,
              <em className="italic text-[#8C6A2E]"> one seamless</em> celebration.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.16}>
          <p className="text-[0.98rem] leading-[1.85] text-[#4A4238]">
            Engage us for the complete journey or for the part you need most. Each discipline is delivered to the same
            standard of detail — and each is documented so you always know where things stand.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_20rem] lg:gap-16">
        {/* ledger */}
        <div className="border-t border-[#C6A15B]/45">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={0.06 * i}>
              <a
                href={s.href}
                className="ledger-row group grid grid-cols-1 gap-x-8 gap-y-4 border-b border-[#C6A15B]/28 py-9 pr-2 hover:pl-5 sm:grid-cols-[5.5rem_1fr] sm:py-11"
              >
                <span className="num font-display text-[2.9rem] font-light leading-none text-[#A5813F] transition-colors duration-500 group-hover:text-[#8C6A2E]">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-[clamp(1.65rem,3vw,2.35rem)] font-medium leading-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[40rem] text-[1rem] leading-[1.8] text-[#4A4238]">{s.copy}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                    {s.tags.map((t) => (
                      <span key={t} className="label-sm text-[#8C6A2E]">
                        {t}
                      </span>
                    ))}
                    <span className="ml-auto hidden items-center gap-2 text-[#8C6A2E] opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:flex">
                      <span className="label-sm">View</span>
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* offset photographic plate */}
        <Reveal delay={0.2} className="hidden lg:block">
          <Plate
            src="images/entrance-arch.jpg"
            alt="An entrance arch of white and ivory blooms with hurricane candles lining the approach"
            className="h-[38rem] w-full"
            position="center 45%"
            scrim="bg-gradient-to-t from-[#0E1B2E]/55 via-transparent to-transparent"
          >
            <CaptionTab>Entrance décor</CaptionTab>
          </Plate>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   05 — FULL WEDDING PLANNING
   ══════════════════════════════════════════════════════════════ */
const PLANNING = [
  [
    "Budget planning",
    "A realistic budget built with you, tracked line by line, with considered trade-offs whenever priorities shift.",
  ],
  [
    "Venue selection",
    "Shortlists, site visits, capacity and logistics review, and negotiation on your behalf.",
  ],
  [
    "Schedules & timelines",
    "A master schedule spanning every function, rehearsal, setup window and supplier arrival.",
  ],
  [
    "Vendor coordination",
    "One point of contact for every supplier — briefs, confirmations, payments and follow-ups.",
  ],
  [
    "Event preparation",
    "Checklists, run sheets, seating, hospitality and contingencies finalised well before the day.",
  ],
];

export function FullPlanning() {
  return (
    <section id="planning" className="scroll-mt-6 px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
        <Reveal>
          <Plate
            src="images/ceremony-aisle.jpg"
            alt="A petal-strewn wedding ceremony aisle lined with glass lanterns at golden hour"
            className="h-[26rem] w-full sm:h-[36rem] lg:h-[44rem]"
            position="center 55%"
            scrim="bg-gradient-to-t from-[#0E1B2E]/40 via-transparent to-transparent"
          >
            <CaptionTab>Full wedding planning</CaptionTab>
          </Plate>
          <div className="mt-8 border-l border-[#C6A15B] pl-6">
            <p className="font-display text-[1.28rem] font-light italic leading-[1.5] text-[#4A4238]">
              One plan, one point of contact, one accountable team — from the first conversation to the final settlement.
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Label index="05">Full Wedding Planning</Label>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-[clamp(2.15rem,5vw,4.15rem)] font-light leading-[1.02] text-ink">
              Everything held
              <em className="italic text-[#8C6A2E]"> in one plan.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 max-w-[38rem] text-[1.02rem] leading-[1.85] text-[#4A4238]">
              Wedding planning is a hundred decisions made in the right order. We take ownership of that order, so the
              months leading up to your celebration feel calm and the day itself feels effortless.
            </p>
          </Reveal>

          <ol className="mt-11">
            {PLANNING.map(([t, d], i) => (
              <Reveal key={t} delay={0.05 * i}>
                <li className="grid grid-cols-[3.2rem_1fr] gap-5 border-t border-[#C6A15B]/32 py-7">
                  <span className="num pt-2 text-[0.72rem] text-[#A5813F]">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-[1.55rem] font-medium leading-tight text-ink">{t}</h3>
                    <p className="mt-2.5 max-w-[36rem] text-[0.98rem] leading-[1.82] text-[#4A4238]">{d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   06 — DÉCOR & STYLING
   ══════════════════════════════════════════════════════════════ */
const DECOR = [
  [
    "Wedding stages",
    "The centrepiece of the reception — proportion, backdrop, florals and lighting designed as one composition.",
  ],
  [
    "Floral arrangements",
    "Seasonal, considered florals for mandaps, aisles, tables, entrances and family seating.",
  ],
  [
    "Lighting design",
    "Warm ambient schemes, uplighting, candlelight and pin-spotting that flatter both the room and the photographs.",
  ],
  [
    "Entrance décor",
    "Arches, drapery, signage and thresholds that set the tone before a guest is even seated.",
  ],
  [
    "Themes & palettes",
    "A single visual language — colour, material and motif — carried consistently across every function.",
  ],
  [
    "Reception styling",
    "Tablescapes, place settings, lounge areas and detail styling for the evening celebration.",
  ],
];

export function DecorStyling() {
  return (
    <section id="decor" className="scroll-mt-6 bg-[#0E1B2E] px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
        <div>
          <Reveal>
            <Label index="06" tone="light">
              Décor &amp; Styling
            </Label>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-[clamp(2.35rem,6vw,5.15rem)] font-light leading-[0.99] text-[#F7F2E9]">
              Rooms that feel
              <em className="foil italic"> designed,</em>
              <span className="block">not decorated.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-[38rem] text-[1.02rem] leading-[1.85] text-[#F7F2E9]/75">
              We treat décor as architecture at human scale — how a space is entered, where the eye settles, how the
              light falls at seven in the evening and at ten at night. Every scheme is drawn, sampled and costed before a
              single stem is ordered.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2">
            {DECOR.map(([t, d], i) => (
              <Reveal key={t} delay={0.05 * i} className="border-t border-[#C6A15B]/28">
                <div className="py-7 pr-6 sm:pr-10">
                  <div className="flex items-baseline gap-4">
                    <span className="num text-[0.68rem] text-[#E3C88F]">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-[1.42rem] font-medium leading-tight text-[#F7F2E9]">{t}</h3>
                  </div>
                  <p className="mt-2.5 pl-[2.05rem] text-[0.94rem] leading-[1.8] text-[#F7F2E9]/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* stacked plates */}
        <div className="flex flex-col gap-8 lg:pt-20">
          <Reveal delay={0.12}>
            <Plate
              src="images/reception-table.jpg"
              alt="A long banquet reception table with ivory linen, gold-rimmed chargers and taper candles"
              className="h-[24rem] w-full sm:h-[30rem]"
              position="center 55%"
            >
              <CaptionTab>Reception styling</CaptionTab>
            </Plate>
          </Reveal>
          <Reveal delay={0.2}>
            <Plate
              src="images/navy-detail.jpg"
              alt="A black-tie place setting on deep navy linen with gold flatware and a blank ivory menu card"
              className="h-[22rem] w-full sm:h-[26rem]"
              position="center 50%"
            >
              <CaptionTab>Tablescapes &amp; detail</CaptionTab>
            </Plate>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   07 — DAY-OF COORDINATION
   ══════════════════════════════════════════════════════════════ */
const RUN_OF_DAY = [
  [
    "Pre-dawn",
    "Supplier confirmations",
    "Final calls to every vendor; deliveries and access verified against the master schedule.",
  ],
  [
    "Morning",
    "Setup & inspection",
    "Décor, stage, sound and lighting installed and checked against the design drawing.",
  ],
  [
    "Midday",
    "Family briefing",
    "Key family members walked through the timeline, cues and points of contact.",
  ],
  [
    "Evening",
    "Live coordination",
    "Ceremony cues, hospitality, catering flow and programme managed in real time.",
  ],
  [
    "Late",
    "Execution & close",
    "Final function executed to schedule, suppliers settled and the venue handed back.",
  ],
];

export function DayOfCoordination() {
  return (
    <section id="coordination" className="scroll-mt-6 px-6 py-24 sm:px-12 lg:px-16 lg:py-32">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal>
            <Label index="07">Day-of Coordination</Label>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 max-w-[24ch] font-display text-[clamp(2.15rem,5vw,4.15rem)] font-light leading-[1.02] text-ink">
              You experience the day.
              <em className="italic text-[#8C6A2E]"> We run it.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <p className="max-w-[26rem] text-[0.98rem] leading-[1.85] text-[#4A4238]">
            On the day itself, our coordinators are the calm centre of the room — managing the timeline, the suppliers
            and the details so that nothing is announced twice and nothing is missed.
          </p>
        </Reveal>
      </div>

      {/* run-of-day timeline */}
      <Reveal delay={0.2}>
        <div className="mt-16">
          <div className="flex items-center gap-4">
            <span className="label-sm text-[#8C6A2E]">Illustrative run-of-day structure</span>
            <span className="h-px flex-1 bg-[#C6A15B]/35" />
          </div>
          <div className="mt-8 grid grid-cols-1 border-t border-[#C6A15B]/45 sm:grid-cols-2 lg:grid-cols-5">
            {RUN_OF_DAY.map(([when, title, copy], i) => (
              <Reveal key={title} delay={0.06 * i}>
                <div className="relative h-full border-b border-[#C6A15B]/25 py-8 pr-8 lg:border-b-0 lg:border-r lg:pl-6 lg:last:border-r-0">
                  <span
                    className="absolute -top-[3px] left-0 h-[5px] w-[5px] rotate-45 bg-[#C6A15B]"
                    aria-hidden="true"
                  />
                  <p className="label-sm text-[#8C6A2E]">{when}</p>
                  <h3 className="mt-4 font-display text-[1.35rem] font-medium leading-tight text-ink">{title}</h3>
                  <p className="mt-2.5 text-[0.92rem] leading-[1.78] text-[#4A4238]">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* responsibilities */}
      <div className="mt-16 grid grid-cols-1 gap-x-16 sm:grid-cols-2">
        {[
          [
            "Timeline management",
            "A minute-by-minute run sheet held live, so the programme moves when it should and waits when it must.",
          ],
          [
            "Supplier coordination",
            "Every vendor briefed, greeted, positioned and paid on schedule — with a single point of contact.",
          ],
          [
            "Setup checks",
            "Décor, staging, sound, lighting and seating inspected against the plan before guests arrive.",
          ],
          [
            "Event execution",
            "Cues, hospitality and the unexpected handled on-site, quietly, from first arrival to final send-off.",
          ],
        ].map(([t, d], i) => (
          <Reveal key={t} delay={0.05 * i} className="border-t border-[#C6A15B]/32">
            <div className="flex items-start gap-5 py-7">
              <Icon name="arrow" className="mt-1.5 h-4 w-4 shrink-0 text-[#A5813F]" />
              <div>
                <h3 className="font-display text-[1.42rem] font-medium leading-tight text-ink">{t}</h3>
                <p className="mt-2 max-w-[32rem] text-[0.96rem] leading-[1.82] text-[#4A4238]">{d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
