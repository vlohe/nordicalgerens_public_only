import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image 
              src="/images/logo.png" 
              alt="Nordic Algerens" 
              width={200} 
              height={60}
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm">
              Din professionelle partner til algebehandling, rengøring og vedligeholdelse.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/handelsbetingelser" className="block hover:text-white">
                Handelsbetingelser
              </Link>
              <Link href="/servicefradrag" className="block hover:text-white">
                Servicefradrag
              </Link>
              <Link href="/kontakt" className="block hover:text-white">
                Kontakt os
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Nordic Algerens. Alle rettigheder forbeholdes.</p>
          <p className="mt-1">CVR: {siteConfig.cvr}</p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800 text-sm text-center text-gray-400">
          <a
            href="https://casefy.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 hover:text-white transition-colors"
          >
            <span>Website made by</span>
            <Image
              src="/images/casefy_logo.png"
              alt="casefy.dk"
              width={150}
              height={45}
              className="h-11 w-auto brightness-90 hover:brightness-100 transition-all"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
