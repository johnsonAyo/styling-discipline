import {
  MarketingFooter,
  MarketingHeader,
  MarketingNotFound,
  MarketingShell,
} from "@sd/ui";

export default function NotFoundPage() {
  return (
    <MarketingShell>
      <MarketingHeader />
      <MarketingNotFound />
      <MarketingFooter />
    </MarketingShell>
  );
}
