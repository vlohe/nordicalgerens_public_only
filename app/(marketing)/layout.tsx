import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="relative min-h-screen overflow-hidden bg-[length:200%_200%] animate-gradient-shift bg-gradient-to-br from-[#2cbfc7] via-[#35d2b5] to-[#36d8c9]">
        <div className="relative z-10">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
