import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/content/site";
import { LeadForm } from "@/components/lead-form";

export default function KontaktPage() {
  return (
    <>
      <div className="relative text-white pt-32 pb-12">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/alge.png"
            alt="Kontakt baggrund"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 -z-10 bg-gradient-to-b from-transparent from-40% via-[#1a9b8e]/70 via-70% to-[#1a9b8e]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center motion-reduce:animate-none animate-slide-in-left">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Kontakt os</h1>
          <p className="text-xl text-white/95 drop-shadow">
            Vi er klar til at hjælpe dig
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="motion-reduce:animate-none animate-slide-in-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformation</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 rounded-full p-3">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Åbningstider</h3>
                    <p className="text-gray-600">{siteConfig.openingHours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Hurtig respons</h3>
                <p className="text-gray-600">
                  Vi bestræber os på at besvare alle henvendelser inden for 24 timer på hverdage.
                </p>
              </div>
            </div>

            <div className="motion-reduce:animate-none animate-slide-in-right">
              <LeadForm type="callback" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
