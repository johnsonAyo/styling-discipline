import type { Metadata } from "next";
import { PolicyPage, PolicySection } from "@sd/ui";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How DriveTrack handles instructor and student information during its private UK pilot.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Plain-English pilot notice"
      title="Privacy at DriveTrack"
      summary="DriveTrack handles the minimum information needed to schedule driving lessons, communicate changes, and help instructors complete lesson follow-through."
      updated="23 September 2026"
    >
      <PolicySection title="What we handle">
        <p>
          Instructor information includes the account email, display and
          business names, telephone number, timezone, preferences, and the
          operational records created while using DriveTrack.
        </p>
        <p>
          Student information is supplied by the instructor and may include a
          name, email, telephone number, pickup address, transmission
          preference, test date, booking history, lesson outcomes, and
          instructor-authored notes.
        </p>
      </PolicySection>
      <PolicySection title="Why we use it">
        <p>
          We use this information to provide the scheduling service, send
          booking and lesson communications, secure student-specific links,
          prevent conflicting bookings, support the instructor, and protect the
          reliability of the pilot.
        </p>
        <p>
          DriveTrack does not contain student advertising profiles, payment
          information, or a student account system.
        </p>
      </PolicySection>
      <PolicySection title="AI-assisted recaps">
        <p>
          AI polishing is optional and starts only when an instructor requests
          it. The request is limited to the shared recap fields needed to
          propose clearer wording and practice goals.
        </p>
        <p>
          Private instructor notes are excluded. Generated text is treated as an
          editable draft and cannot be sent until the instructor reviews and
          approves it.
        </p>
      </PolicySection>
      <PolicySection title="Sharing and security">
        <p>
          We use carefully selected infrastructure, email, and optional AI
          providers to operate DriveTrack. Providers receive only the
          information required for their role and are subject to contractual and
          technical safeguards.
        </p>
        <p>
          Public student actions use purpose-scoped, time-limited links.
          Application records are isolated by instructor workspace, and
          sensitive tokens are stored in a non-recoverable form.
        </p>
      </PolicySection>
      <PolicySection title="Retention and choices">
        <p>
          Information is retained only as long as required to provide the pilot,
          meet legitimate operational and legal needs, and support recoverable
          deletion. Final retention periods will be confirmed before external
          pilot onboarding.
        </p>
        <p>
          To ask about access, correction, deletion, or this notice, email
          hello@drivetrack.co.uk.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
