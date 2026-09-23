import { MarketingFooter, MarketingHeader, MarketingShell } from "@sd/ui";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MarketingShell>
      <MarketingHeader />
      {children}
      <MarketingFooter />
    </MarketingShell>
  );
}
