"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site";

const navigation = [
  { name: "Forside", href: "/" },
  { name: "Om\u00A0os", href: "/om-os" },
];

const servicesNavigation = [
  { name: "Algebehandling", href: "/algebehandling" },
  { name: "Fliserens", href: "/fliserens" },
  { name: "Tagrenderens", href: "/tagrenderens" },
  { name: "Edderkoppebekæmpelse", href: "/edderkoppebekaempelse" },
  { name: "Pakketilbud", href: "/pakketilbud" },
];

const infoNavigation = [
  { name: "Kontakt", href: "/kontakt" },
  { name: "Handelsbetingelser", href: "/handelsbetingelser" },
  { name: "Servicefradrag", href: "/servicefradrag" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [infoMenuOpen, setInfoMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isMarketingPage = pathname !== "/";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClassName = "fixed top-0 left-0 right-0 z-50";

  const navLinkClassName = isHome || isMarketingPage
    ? "text-lg font-semibold tracking-wide text-white/90 hover:text-white transition-colors whitespace-nowrap drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
    : "text-lg font-semibold tracking-wide text-gray-700 hover:text-primary-600 transition-colors whitespace-nowrap drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]";

  const infoButtonClassName = isHome || isMarketingPage
    ? "inline-flex items-center gap-1 text-lg font-semibold tracking-wide text-white/90 hover:text-white transition-colors whitespace-nowrap drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
    : "inline-flex items-center gap-1 text-lg font-semibold tracking-wide text-gray-700 hover:text-primary-600 transition-colors whitespace-nowrap drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]";

  const phoneClassName = isHome || isMarketingPage
    ? "inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/90 hover:scale-105 transition-all duration-200"
    : "inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 hover:scale-105 transition-all duration-200";

  return (
    <header className={headerClassName}>
      <div className="relative">
        {/* Blur background for navbar */}
        <div className="absolute inset-0 backdrop-blur-md"></div>
        {/* Fade-out blur effect below navbar only */}
        <div className="absolute top-full left-0 right-0 h-6 backdrop-blur-md pointer-events-none" style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.15) 90%, rgba(0,0,0,0.05) 95%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.15) 90%, rgba(0,0,0,0.05) 95%, rgba(0,0,0,0) 100%)'
        }}></div>
        {/* Navbar content on top */}
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20" aria-label="Top">
        <div className="flex h-20 items-center justify-between md:grid md:grid-cols-3">
          <div className="flex items-center mt-2 relative z-30">
            <Link href="/" className="flex items-center relative z-30">
              <Image 
                src="/images/logo.png" 
                alt="Nordic Algerens" 
                width={200} 
                height={60}
                className="h-16 sm:h-20 lg:h-24 w-auto relative z-30"
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center md:gap-8 lg:gap-10 whitespace-nowrap">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={navLinkClassName}
              >
                {item.name}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesMenuOpen((v) => !v)}
                className={infoButtonClassName}
                aria-haspopup="menu"
                aria-expanded={servicesMenuOpen}
              >
                Services & priser
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesMenuOpen && (
                <div
                  role="menu"
                  className="absolute left-1/2 -translate-x-1/2 pt-2 w-56 z-30"
                >
                  <div className="rounded-md border border-white/30 bg-white/85 backdrop-blur shadow-lg py-2">
                    {servicesNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        role="menuitem"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-white/40 hover:text-primary-600"
                        onClick={() => setServicesMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setInfoMenuOpen(true)}
              onMouseLeave={() => setInfoMenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => setInfoMenuOpen((v) => !v)}
                className={infoButtonClassName}
                aria-haspopup="menu"
                aria-expanded={infoMenuOpen}
              >
                Info
                <ChevronDown className={`h-4 w-4 transition-transform ${infoMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {infoMenuOpen && (
                <div
                  role="menu"
                  className="absolute left-1/2 -translate-x-1/2 pt-2 w-56 z-30"
                >
                  <div className="rounded-md border border-white/30 bg-white/85 backdrop-blur shadow-lg py-2">
                    {infoNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        role="menuitem"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-white/40 hover:text-primary-600"
                        onClick={() => setInfoMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:justify-end">
            <a
              href={`tel:${siteConfig.phone}`}
              className={phoneClassName}
            >
              <Phone className="h-4 w-4" />
              <span className="flex flex-col items-center leading-tight text-center">
                <span className="text-xs font-medium opacity-90">Ring gerne på telefon</span>
                <span className="inline-block text-2xl sm:text-3xl font-bold leading-none animate-phone-pop">{siteConfig.phone}</span>
              </span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
                isHome ? "text-white" : "text-gray-700"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Åbn menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-white/25 bg-white/80 backdrop-blur rounded-b-lg shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-white/40 hover:text-primary-600 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <button
              type="button"
              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-white/40 hover:text-primary-600 rounded-md"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
            >
              <span>Services & priser</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 space-y-1">
                {servicesNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-white/40 hover:text-primary-600 rounded-md"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <button
              type="button"
              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-white/40 hover:text-primary-600 rounded-md"
              onClick={() => setMobileInfoOpen((v) => !v)}
              aria-expanded={mobileInfoOpen}
            >
              <span>Info</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileInfoOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileInfoOpen && (
              <div className="pl-3 space-y-1">
                {infoNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-white/40 hover:text-primary-600 rounded-md"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileInfoOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 mx-3 mt-4 text-base font-semibold text-primary-600 hover:text-primary-700"
            >
              <Phone className="h-4 w-4" />
              <span className="flex flex-col items-center leading-tight text-center">
                <span className="text-xs font-medium opacity-90">Ring gerne på telefon</span>
                <span className="inline-block text-2xl font-bold leading-none animate-phone-pop">{siteConfig.phone}</span>
              </span>
            </a>
          </div>
        )}
        </nav>
      </div>
    </header>
  );
}
