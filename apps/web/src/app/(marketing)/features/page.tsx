import type { Metadata } from "next";
import {
  FeatureGrid,
  MarketingCallout,
  MarketingHero,
  ProofStrip,
  Workflow,
} from "@sd/ui";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Explore the DriveTrack workflow for availability, student-scoped booking, lesson management, and instructor-approved recaps.",
  alternates: { canonical: "/features" },
};

const operatingPrinciples = [
  {
    label: "Scheduling policy",
    value: "Instructor-owned",
    detail:
      "Useful warnings remain warnings; hard conflicts remain hard conflicts.",
  },
  {
    label: "Student experience",
    value: "No login required",
    detail: "Secure links provide only the access needed for that booking.",
  },
  {
    label: "Communication",
    value: "Email-first",
    detail:
      "Confirmations and approved recaps arrive where students already look.",
  },
] as const;

const planningFeatures = [
  {
    index: "01",
    title: "Today is a command surface",
    description:
      "See the next lesson, contact the student, manage a change, and clear outstanding debriefs without navigating a dashboard maze.",
    detail:
      "Mobile is designed around between-lesson decisions, not a compressed desktop grid.",
  },
  {
    index: "02",
    title: "The calendar carries operational meaning",
    description:
      "Draft, open, booked, awaiting-debrief, and completed states are distinct and actionable across the week.",
    detail:
      "Date, view, and focused-slot state survive refresh and browser navigation.",
  },
  {
    index: "03",
    title: "Availability stays flexible",
    description:
      "Start from a two-hour lesson, customise it when needed, and duplicate sensible openings across selected days.",
    detail:
      "The weekly booking allowance defaults to multiple and can be intentionally restricted.",
  },
  {
    index: "04",
    title: "Student context stays lightweight",
    description:
      "Keep the details required to teach and communicate without building a student portal or heavyweight CRM.",
    detail:
      "History and private notes are instructor-owned and workspace-scoped.",
  },
] as const;

const trustFeatures = [
  {
    index: "05",
    title: "Booking is committed before it is celebrated",
    description:
      "Concurrent claims, cancellations, and reschedules resolve against the database before the interface confirms success.",
    detail: "A lost replacement never destroys the student's original booking.",
  },
  {
    index: "06",
    title: "Communication can recover",
    description:
      "A provider outage cannot roll back a release, booking, or saved debrief. Delivery remains visible and retryable.",
    detail: "Operational truth and email delivery status remain separate.",
  },
  {
    index: "07",
    title: "Private notes stay private",
    description:
      "Only shared recap fields may enter the optional AI polish request. Private observations never cross that boundary.",
    detail:
      "Every generated recap remains an editable draft until the instructor approves it.",
  },
  {
    index: "08",
    title: "Important changes leave evidence",
    description:
      "Release, override, cancellation, reschedule, deletion, and recap actions create safe operational events.",
    detail:
      "Logs omit secure tokens, private notes, and unnecessary student content.",
  },
] as const;

const workflow = [
  {
    number: "01",
    title: "Shape supply",
    description: "Create only the hours you genuinely want to teach.",
  },
  {
    number: "02",
    title: "Invite",
    description: "Release selected slots to the right students.",
  },
  {
    number: "03",
    title: "Operate",
    description: "Run the day from one focused mobile surface.",
  },
  {
    number: "04",
    title: "Remember",
    description: "Capture useful outcomes without carrying admin home.",
  },
] as const;

export default function FeaturesPage() {
  return (
    <main>
      <MarketingHero
        compact
        eyebrow="The operating system for your teaching week"
        title="Every part of the week,"
        accent="connected and under control."
        description="From the first open slot to the approved lesson recap, DriveTrack keeps the details moving without adding another layer of admin."
      />
      <ProofStrip items={operatingPrinciples} />
      <FeatureGrid
        eyebrow="Plan and teach"
        title="The week stays legible, even when it changes."
        description="DriveTrack keeps planning, student context, and the working day connected without turning the product into a generic business suite."
        items={planningFeatures}
      />
      <Workflow items={workflow} />
      <FeatureGrid
        eyebrow="Trust by construction"
        title="Calm interfaces backed by hard operational guarantees."
        description="The polished surface is supported by explicit transactions, secure links, private data boundaries, and recoverable communications."
        items={trustFeatures}
      />
      <MarketingCallout />
    </main>
  );
}
