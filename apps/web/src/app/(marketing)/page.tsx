import type { Metadata } from "next";
import {
  BandedDivider,
  FeatureGrid,
  InstructorFaq,
  MarketingCallout,
  MarketingHero,
  ProofStrip,
  SocialProof,
  Workflow,
} from "@sd/ui";

export const metadata: Metadata = {
  title: "DriveTrack — The Cockpit for Independent UK Driving Instructors",
  description:
    "Plan availability, protect travel buffers, release pupil-scoped booking links, and record 60-second DVSA debriefs with DriveTrack.",
  alternates: { canonical: "/" },
};

const proof = [
  {
    label: "Default lesson",
    value: "2 hours",
    detail: "Intelligent travel buffers calculated between student postcodes.",
  },
  {
    label: "Pupil access",
    value: "Zero logins",
    detail: "Encrypted single-use links—no app download, profile, or password.",
  },
  {
    label: "Lesson debrief",
    value: "Under 60s",
    detail: "Capture competencies and driving faults before turning the ignition off.",
  },
] as const;

const features = [
  {
    index: "01",
    title: "Travel buffer intelligence that protects your teaching day",
    description:
      "Instructors don't teleport. DriveTrack computes realistic travel times between pupil postcodes and flags tight turnarounds before you commit.",
    detail:
      "Travel warnings stay advisory—because you know local roadworks and shortcuts better than an algorithm.",
  },
  {
    index: "02",
    title: "Release targeted slots without baby-sitting a public calendar",
    description:
      "Select a batch of openings, dispatch them to waiting pupils, and watch them claim their slot in one tap.",
    detail:
      "Pupils only see the openings meant for them—your private diary is never exposed to random public bookings.",
  },
  {
    index: "03",
    title: "The 48-hour self-service cancellation boundary",
    description:
      "Pupils can self-serve reschedule outside 48 hours. Inside 48 hours, self-service changes lock automatically to protect your teaching income.",
    detail:
      "No awkward WhatsApp negotiations. The boundary is clear, professional, and consistent.",
  },
  {
    index: "04",
    title: "DVSA syllabus progress tracking & pupil debriefs",
    description:
      "Track progress across the 27 DVSA driving competencies from Introduced (Level 1) to Independent (Level 5).",
    detail:
      "Pupils and parents get instant, transparent recaps via WhatsApp or email, building test readiness faster.",
  },
] as const;

const workflow = [
  {
    number: "01",
    title: "Shape the week",
    description:
      "Build your teaching availability around your preferred zones, test centres, and break times.",
  },
  {
    number: "02",
    title: "Dispatch openings",
    description:
      "Send private booking links to selected pupils with automatic 48h boundary enforcement.",
  },
  {
    number: "03",
    title: "Teach with clarity",
    description:
      "Today's cockpit keeps pupil notes, route goals, and contact shortcuts one tap away in the car.",
  },
  {
    number: "04",
    title: "Lock in the recap",
    description:
      "Score competencies and send the approved recap before starting the engine for the next drive.",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <MarketingHero />
      <BandedDivider />
      <ProofStrip items={proof} />
      <BandedDivider />
      <FeatureGrid
        eyebrow="Engineered for dual-control cockpits"
        title="Your teaching day, connected from first pickup to final recap."
        description="Replace messy WhatsApp voice notes, paper diaries, and double-booking anxieties with one calm cockpit."
        items={features}
      />
      <Workflow items={workflow} />
      <BandedDivider />
      <SocialProof />
      <div id="faq">
        <InstructorFaq />
      </div>
      <MarketingCallout />
    </main>
  );
}
