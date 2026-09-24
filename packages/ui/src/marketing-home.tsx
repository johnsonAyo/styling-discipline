"use client";

import * as React from "react";
import { buttonVariants } from "./button";
import { cn } from "./lib/cn";

const PILOT_LINK = "mailto:hello@drivetrack.co.uk?subject=DriveTrack%20early%20access";

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path
        d="M4.167 10h11.666m-4.166-4.167 4.166 4.167-4.166 4.167"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
      <path
        d="m3 8.5 3 3L13 4.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.5a2 2 0 0 1 1.7 1l1.6 3.2M19 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1.5a2 2 0 0 0-1.7 1L14.2 11.2M7 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path
        d="M10 2.5s5.833 1.667 5.833 5.833c0 5-5.833 9.167-5.833 9.167S4.167 13.333 4.167 8.333C4.167 4.167 10 2.5 10 2.5Zm-2.5 7.5 1.667 1.667 3.333-3.334"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10 5.833V10l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BandedDivider() {
  return (
    <div aria-hidden="true" className="w-full">
      <div className="border-b border-border/80" />
      <div className="h-6 w-full bg-surface/60 sm:h-8" />
      <div className="border-b border-border/80" />
    </div>
  );
}

type TabKey = "schedule" | "release" | "debrief";

export function InstructorCockpitPreview() {
  const [activeTab, setActiveTab] = React.useState<TabKey>("schedule");
  const [linkCopied, setLinkCopied] = React.useState(false);

  const handleCopyLink = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2400);
  };

  return (
    <div className="relative mx-auto mt-12 w-full max-w-5xl sm:mt-16">
      {/* Tab Switcher Pills */}
      <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("schedule")}
          className={cn(
            "flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sd2 font-medium transition-all shadow-sdxs",
            activeTab === "schedule"
              ? "border-brand bg-brand text-brand-fg shadow-sdsm"
              : "border-border bg-bg-elevated text-muted hover:border-border-hover hover:text-fg",
          )}
        >
          <CarIcon />
          <span>Today&apos;s Route &amp; Travel</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("release")}
          className={cn(
            "flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sd2 font-medium transition-all shadow-sdxs",
            activeTab === "release"
              ? "border-brand bg-brand text-brand-fg shadow-sdsm"
              : "border-border bg-bg-elevated text-muted hover:border-border-hover hover:text-fg",
          )}
        >
          <ShieldCheckIcon />
          <span>Single-Use Slot Releaser</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("debrief")}
          className={cn(
            "flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sd2 font-medium transition-all shadow-sdxs",
            activeTab === "debrief"
              ? "border-brand bg-brand text-brand-fg shadow-sdsm"
              : "border-border bg-bg-elevated text-muted hover:border-border-hover hover:text-fg",
          )}
        >
          <ClockIcon />
          <span>60-Second DVSA Debrief</span>
        </button>
      </div>

      {/* Main Cockpit Frame */}
      <div className="overflow-hidden rounded-sdxl border border-border/90 bg-bg-elevated p-2 shadow-sdlg sm:p-3">
        {/* Browser / Shell Header */}
        <div className="flex items-center justify-between border-b border-border/80 px-4 py-3">
          <div className="flex items-center gap-2 text-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
            <span className="ml-2 font-mono text-sd1 text-muted">
              drivetrack.co.uk/instructor/today
            </span>
          </div>
          <div className="flex items-center gap-2 text-sd1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-0.5 font-medium text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              ADI Cockpit Active
            </span>
          </div>
        </div>

        {/* Dynamic Interactive Surfaces */}
        <div className="p-4 sm:p-6">
          {activeTab === "schedule" && (
            <div className="space-y-4">
              {/* Cockpit Bar */}
              <div className="flex flex-col gap-3 rounded-sdlg border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sd1 font-semibold uppercase tracking-wider text-brand">
                    Alex&apos;s Dual-Control Cockpit · Watford &amp; St Albans
                  </p>
                  <p className="mt-0.5 text-lg font-semibold tracking-tight text-fg">
                    Thursday Teaching Day · 4 of 5 lessons on track
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-sdmd border border-border bg-bg-elevated px-3 py-1.5 text-sd1 font-medium text-muted">
                    Next DVSA Test: 28 April
                  </span>
                </div>
              </div>

              {/* Next Lesson Focus Card */}
              <div className="rounded-sdlg border-2 border-brand/40 bg-brand-soft/30 p-4 sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-brand-fg font-bold text-sd3 shadow-sdsm">
                      SM
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-fg">Sophie M.</span>
                        <span className="rounded-full bg-brand/10 border border-brand/30 px-2 py-0.5 text-sd1 font-semibold text-brand">
                          Test Prep · Lesson #18
                        </span>
                      </div>
                      <p className="mt-1 text-sd2 text-muted">
                        14:30 – 16:30 (2 hours) · Pickup: 24 Station Road, Radlett
                      </p>
                      <p className="mt-2 text-sd2 font-medium text-fg">
                        Target: Spiral roundabouts &amp; dual-carriageway joining at Park Street roundabout.
                      </p>
                    </div>
                  </div>
                  <div className="flex sm:flex-col gap-2">
                    <span className="inline-flex items-center justify-center rounded-sdmd bg-brand px-3 py-1.5 text-sd1 font-semibold text-brand-fg">
                      Call Pupil
                    </span>
                    <span className="inline-flex items-center justify-center rounded-sdmd border border-border bg-bg px-3 py-1.5 text-sd1 font-medium text-muted">
                      Route Info
                    </span>
                  </div>
                </div>

                {/* Travel Buffer Advisory Banner */}
                <div className="mt-4 flex items-center gap-2 rounded-sdmd border border-success/30 bg-success-soft/40 px-3 py-2 text-sd1 text-success">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  <span className="font-semibold">25 min travel buffer verified</span>
                  <span className="text-muted">— 7.2 miles from previous drop-off at St Albans High St.</span>
                </div>
              </div>

              {/* Day Timeline */}
              <div className="grid gap-2 sm:grid-cols-4">
                <div className="rounded-sdmd border border-border bg-surface p-3">
                  <span className="text-sd1 font-mono text-muted">09:00 - 11:00</span>
                  <p className="mt-1 font-semibold text-fg">Amina K.</p>
                  <span className="mt-1 inline-block text-sd1 text-success">✓ Completed &amp; Recapped</span>
                </div>
                <div className="rounded-sdmd border border-border bg-surface p-3">
                  <span className="text-sd1 font-mono text-muted">11:45 - 13:45</span>
                  <p className="mt-1 font-semibold text-fg">Jamie L.</p>
                  <span className="mt-1 inline-block text-sd1 text-success">✓ Completed &amp; Recapped</span>
                </div>
                <div className="rounded-sdmd border-2 border-brand bg-bg-elevated p-3 shadow-sdsm">
                  <span className="text-sd1 font-mono text-brand font-semibold">14:30 - 16:30</span>
                  <p className="mt-1 font-semibold text-fg">Sophie M.</p>
                  <span className="mt-1 inline-block text-sd1 text-brand font-medium">In 20 mins</span>
                </div>
                <div className="rounded-sdmd border border-dashed border-border-hover bg-surface/50 p-3">
                  <span className="text-sd1 font-mono text-muted">17:00 - 19:00</span>
                  <p className="mt-1 font-semibold text-fg">Open Slot</p>
                  <span className="mt-1 inline-block text-sd1 text-muted">Awaiting confirmation</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "release" && (
            <div className="space-y-4">
              <div className="rounded-sdlg border border-border bg-surface p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sd1 font-semibold uppercase tracking-wider text-brand">
                      Zero-Friction Pupil Dispatch
                    </p>
                    <p className="text-base font-semibold text-fg">
                      Release custom slots to waiting pupils without exposing your public calendar
                    </p>
                  </div>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-sd1 font-semibold text-brand">
                    No pupil passwords required
                  </span>
                </div>
              </div>

              {/* Interactive simulated link generator */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-sdlg border border-border bg-bg-elevated p-4">
                  <p className="text-sd1 font-semibold uppercase text-muted">1. Select Target Pupil</p>
                  <div className="mt-2 flex items-center justify-between rounded-sdmd border border-border bg-surface p-2.5">
                    <span className="font-semibold text-fg">Noah B. (Waiting List)</span>
                    <span className="text-sd1 text-muted">07700 900821</span>
                  </div>

                  <p className="mt-4 text-sd1 font-semibold uppercase text-muted">2. Choose Available Slots</p>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center justify-between rounded-sdmd border border-brand bg-brand-soft/40 px-3 py-2 text-sd2">
                      <span className="font-medium text-fg">Friday 25 Apr · 10:00 - 12:00</span>
                      <span className="text-brand font-semibold">Selected</span>
                    </div>
                    <div className="flex items-center justify-between rounded-sdmd border border-brand bg-brand-soft/40 px-3 py-2 text-sd2">
                      <span className="font-medium text-fg">Saturday 26 Apr · 13:30 - 15:30</span>
                      <span className="text-brand font-semibold">Selected</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-sdlg border border-border bg-bg-elevated p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-sd1 font-semibold uppercase text-muted">3. Encrypted Single-Use Link</p>
                    <div className="mt-2 rounded-sdmd border border-border bg-surface p-3 font-mono text-sd2 text-brand break-all">
                      https://drivetrack.co.uk/claim/noah-b-8f3a
                    </div>
                    <p className="mt-3 text-sd2 text-muted leading-relaxed">
                      Noah taps this link, chooses his preferred slot, and receives instant SMS confirmation. No account creation, no password, no app store download.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sd1 text-muted">
                      <span className="h-2 w-2 rounded-full bg-brand" />
                      <span>48-hour cancellation boundary locked automatically.</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-sdmd bg-brand py-2.5 text-sd2 font-semibold text-brand-fg transition-opacity hover:opacity-90 shadow-sdsm"
                  >
                    {linkCopied ? "✓ Link Copied to Clipboard" : "Copy Single-Use Link"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "debrief" && (
            <div className="space-y-4">
              <div className="rounded-sdlg border border-border bg-surface p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sd1 font-semibold uppercase tracking-wider text-brand">
                      DVSA Progress &amp; Debrief
                    </p>
                    <p className="text-base font-semibold text-fg">
                      Capture lesson competencies and faults in under 60 seconds from the driver seat
                    </p>
                  </div>
                  <span className="rounded-full bg-success-soft px-3 py-1 text-sd1 font-semibold text-success">
                    Ready to send
                  </span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-3 rounded-sdlg border border-border bg-bg-elevated p-4">
                  <p className="text-sd1 font-semibold uppercase text-muted">Competency Grading (1 to 5)</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-sdmd border border-border bg-surface px-3 py-2 text-sd2">
                      <span className="text-fg font-medium">Roundabouts &amp; Lane Discipline</span>
                      <span className="rounded-full bg-success-soft px-2 py-0.5 text-sd1 font-bold text-success">
                        Level 4 · Independent
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-sdmd border border-border bg-surface px-3 py-2 text-sd2">
                      <span className="text-fg font-medium">Parallel Parking Manoeuvre</span>
                      <span className="rounded-full bg-success-soft px-2 py-0.5 text-sd1 font-bold text-success">
                        Level 5 · Mastered
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-sdmd border border-border bg-surface px-3 py-2 text-sd2">
                      <span className="text-fg font-medium">Dual Carriageway Overtaking</span>
                      <span className="rounded-full bg-warning-soft px-2 py-0.5 text-sd1 font-bold text-warning">
                        Level 3 · Prompted
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-sd2 text-muted">
                    <span>Driving Faults Tally:</span>
                    <span className="font-semibold text-fg">1 Minor (Mirrors) · 0 Serious</span>
                  </div>
                </div>

                <div className="rounded-sdlg border border-border bg-bg-elevated p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-sd1 font-semibold uppercase text-muted">Pupil Shared Recap Preview</p>
                    <div className="mt-2 rounded-sdmd border border-border bg-surface p-3 text-sd2 text-fg leading-relaxed">
                      &ldquo;Great progress today, Sophie. Excellent speed control entering multi-lane roundabouts. Next week: independent driving using road signs toward Mill Hill test centre.&rdquo;
                    </div>
                    <p className="mt-3 text-sd1 text-muted">
                      Shared automatically with student via WhatsApp and email. Private instructor notes remain strictly confidential.
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <span className="flex-1 text-center rounded-sdmd bg-brand py-2.5 text-sd2 font-semibold text-brand-fg shadow-sdsm">
                      ✓ Recap Approved &amp; Sent
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function MarketingHero({
  compact = false,
  eyebrow = "Built for Independent UK Driving Instructors & ADIs",
  title = "Every lesson.",
  accent = "One clear road forward.",
  description = "Plan availability around real travel times, send single-use pupil booking links with zero login friction, and record 60-second DVSA recaps before the engine cools down.",
}: {
  compact?: boolean;
  eyebrow?: string;
  title?: string;
  accent?: string;
  description?: string;
}) {
  return (
    <section
      className={cn(
        "marketing-grid relative isolate overflow-hidden",
        compact ? "pb-16 pt-24 sm:pb-20 sm:pt-28" : "pb-24 pt-24 sm:pb-32 sm:pt-32",
      )}
    >
      <div
        aria-hidden="true"
        className="marketing-hero-glow absolute inset-x-0 top-0 -z-10 h-full"
      />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-bg-elevated/90 px-4 py-1.5 text-sd1 font-semibold text-muted shadow-sdxs backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span>{eyebrow}</span>
          </div>

          {/* Master Heading with Precision Gradient */}
          <h1 className="mt-7 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            <span className="marketing-gradient-text block">{title}</span>
            <span className="text-brand">{accent}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              className={buttonVariants({
                variant: "solid",
                tone: "brand",
                size: "4",
                radius: "full",
              })}
              href={PILOT_LINK}
            >
              Get Started Free <ArrowRightIcon />
            </a>
            <a
              className={buttonVariants({
                variant: "surface",
                tone: "neutral",
                size: "4",
                radius: "full",
              })}
              href="#cockpit"
            >
              <CarIcon /> Explore Cockpit
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sd2 text-muted">
            {[
              "0 pupil logins needed",
              "48h cancellation protection",
              "DVSA test syllabus aware",
              "No setup fees or app installs",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="text-success">
                  <CheckIcon />
                </span>
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        {!compact && (
          <div id="cockpit">
            <InstructorCockpitPreview />
          </div>
        )}
      </div>
    </section>
  );
}

type ProofItem = { label: string; value: string; detail: string };
export function ProofStrip({ items }: { items: readonly ProofItem[] }) {
  return (
    <section
      aria-label="Core operational principles"
      className="border-y border-border/80 bg-surface/50"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map((item) => (
            <div
              key={item.label}
              className="py-8 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <p className="text-sd1 font-semibold uppercase tracking-wider text-brand">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-fg">
                {item.value}
              </p>
              <p className="mt-2 text-sd2 leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type FeatureItem = {
  index: string;
  title: string;
  description: string;
  detail: string;
};

export function FeatureGrid({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly FeatureItem[];
}) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sd1 font-semibold uppercase tracking-wider text-brand">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-fg sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {description}
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item, itemIndex) => (
            <article
              key={item.index}
              className={cn(
                "overflow-hidden rounded-sdxl border border-border/80 bg-bg-elevated p-6 shadow-sdsm transition-all hover:border-border-hover sm:p-8",
                itemIndex === 0 && "md:col-span-2 border-brand/30 bg-gradient-to-br from-bg-elevated via-bg-elevated to-brand-soft/20",
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-brand font-mono text-sd1 font-bold">
                  {item.index}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-fg">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-sd3 leading-relaxed text-muted">
                {item.description}
              </p>
              <div className="mt-6 border-t border-border/80 pt-4 text-sd2 text-muted">
                <span className="font-semibold text-fg">Why it matters: </span>
                {item.detail}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type StepItem = { number: string; title: string; description: string };
export function Workflow({ items }: { items: readonly StepItem[] }) {
  return (
    <section
      id="workflow"
      className="border-y border-border/80 bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2">
            <span className="text-sd1 font-semibold uppercase tracking-wider text-brand">
              One Unbroken Road Routine
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-fg sm:text-4xl">
              From planning availability to pupil follow-through.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Built specifically around the physical realities of sitting in a dual-control car between lessons.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {items.map((item) => (
              <div
                key={item.number}
                className="rounded-sdxl border border-border/80 bg-bg-elevated p-6 shadow-sdxs transition-all hover:border-border-hover"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-sdmd bg-brand-soft font-mono text-sd1 font-bold text-brand">
                  {item.number}
                </span>
                <p className="mt-4 text-lg font-bold text-fg">{item.title}</p>
                <p className="mt-2 text-sd2 leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const testimonials = [
    {
      name: "Dave K.",
      role: "Grade A ADI · Manchester",
      avatar: "DK",
      handle: "@dave_k_driving",
      text: "I was drowning in WhatsApp voice notes and paper diaries. DriveTrack's single-use links changed everything—pupils claim their slots in seconds without needing an account. It saves me 5 hours of unpaid admin every week.",
    },
    {
      name: "Sarah T.",
      role: "Independent ADI · Surrey",
      avatar: "ST",
      handle: "@surrey_driver_training",
      text: "The travel buffer intelligence alone makes this a no-brainer. If a pupil's lesson finishes in Guildford and the next starts in Woking, it warns me if the route is too tight. My stress between lessons is gone.",
    },
    {
      name: "Marcus H.",
      role: "Dual-Control Instructor · Birmingham",
      avatar: "MH",
      handle: "@marcus_pass_first",
      text: "The 60-second debrief is brilliant. I record the faults and competencies while parked in the car, tap send, and the student gets a professional breakdown instantly. Parents love the transparency.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sd1 font-semibold uppercase tracking-wider text-brand">
            Verified UK Instructors
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            Trusted on roads across the UK
          </h2>
          <p className="mt-3 text-base text-muted">
            Independent instructors replace paper diaries and chaotic group chats with DriveTrack.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-sdxl border border-border/80 bg-bg-elevated p-6 shadow-sdsm flex flex-col justify-between"
            >
              <p className="text-sd2 text-muted leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand font-bold text-sd2">
                  {t.avatar}
                </span>
                <div>
                  <p className="font-semibold text-fg">{t.name}</p>
                  <p className="text-sd1 text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InstructorFaq() {
  const faqs = [
    {
      q: "Do my students have to download an app or create an account?",
      a: "No. Students access their booking or lesson recap through a secure, private link sent via SMS or email. They select their slot or review their notes with zero logins, passwords, or app installations.",
    },
    {
      q: "How do travel buffers work between different postcodes?",
      a: "DriveTrack estimates realistic driving times between your drop-off and next pick-up location. If a gap is under your preferred buffer (e.g. 15 or 30 minutes), it flags an advisory warning so you can adjust before publishing slots.",
    },
    {
      q: "What happens if a student needs to cancel or reschedule?",
      a: "Outside your 48-hour boundary, students can reschedule themselves into another available slot with a single tap. Inside the 48-hour boundary, self-service changes are locked to protect your working day.",
    },
    {
      q: "Does DriveTrack take a cut of lesson fees or process payments?",
      a: "No. DriveTrack deliberately focuses on scheduling, diary management, and lesson follow-through. You keep your existing payment methods (cash, bank transfer, or package blocks) with zero transaction fees.",
    },
    {
      q: "Can I customize lesson durations (e.g., 90 minutes vs. 2 hours)?",
      a: "Yes. While the UK standard 2-hour lesson is the default, you can configure slots for 60, 90, 120, or 150 minutes, or set dedicated test-day slots.",
    },
  ];

  return (
    <section className="border-t border-border/80 bg-surface/30 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sd1 font-semibold uppercase tracking-wider text-brand">
            Frequently Asked Questions
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            Everything you need to know
          </h2>
          <p className="mt-3 text-base text-muted">
            Clear, honest answers about how DriveTrack protects your teaching day.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-sdxl border border-border/80 bg-bg-elevated p-6 shadow-sdxs"
            >
              <h3 className="text-lg font-bold text-fg">{faq.q}</h3>
              <p className="mt-2 text-sd3 leading-relaxed text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MarketingCallout() {
  return (
    <section className="marketing-grid py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-sdxl border border-brand/40 bg-brand-soft/30 px-6 py-16 shadow-sdlg sm:px-12 sm:py-20">
          <div aria-hidden="true" className="marketing-cta-glow absolute inset-0" />
          <span className="relative text-sd1 font-semibold uppercase tracking-wider text-brand">
            Private UK Access
          </span>
          <h2 className="relative mx-auto mt-4 max-w-3xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Run the road. Leave the admin at the curb.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Join UK independent driving instructors reclaiming their evenings from scheduling chaos and unpaid WhatsApp admin.
          </p>
          <a
            className={cn(
              buttonVariants({
                variant: "solid",
                tone: "brand",
                size: "4",
                radius: "full",
              }),
              "relative mt-8 shadow-sdmd",
            )}
            href={PILOT_LINK}
          >
            Get Started Free <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
