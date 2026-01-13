import Image from "next/image";
import { Check, Info } from "lucide-react";
import { siteConfig } from "@/content/site";

export default function ServicefradragPage() {
  const steps = [
    {
      title: "1. Bestil ydelsen",
      description: "Kontakt os og bestil den ønskede service. Vi leverer en faktura med vores CVR-nummer.",
    },
    {
      title: "2. Vi udfører arbejdet",
      description: "Vores professionelle team udfører arbejdet som aftalt.",
    },
    {
      title: "3. Betal og gem dokumentation",
      description: "Betal fakturaen med dankort, MobilePay eller netbank, og gem dokumentationen for det udførte arbejde.",
    },
    {
      title: "4. Oplys fradraget selv",
      description: "Du skal selv logge på TastSelv og oplyse dit servicefradrag under 'Håndværkerfradrag og Servicefradrag'. Vi håndterer ikke servicefradrag for dig.",
    },
  ];

  const eligibleServices = [
    "Fliserensning af terrasser, indkørsler m.v. (giver fradrag fra 2025)",
    "Rensning af tagrender (giver fradrag fra 2025)",
    "Græsslåning, klipning af hæk, lugning og beskæring",
    "Snerydning inkl. saltning",
    "Rengøring og vinduespudsning",
    "Børnepasning i hjemmet",
    "Installation af tyverialarm (fra 2025)",
    "Reparation af hårde hvidevarer (fra 2025)",
  ];

  return (
    <>
      <div className="relative text-white pt-32 pb-12">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/alge.png"
            alt="Servicefradrag baggrund"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 -z-10 bg-gradient-to-b from-transparent from-40% via-[#1a9b8e]/70 via-70% to-[#1a9b8e]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center motion-reduce:animate-none animate-slide-in-left">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Servicefradrag</h1>
          <p className="text-xl text-white/95 drop-shadow">
            Få op til 18.300 kr. i fradrag om året (2026)
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 motion-reduce:animate-none animate-slide-in-right">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-6">
            <div className="flex gap-3">
              <Info className="h-6 w-6 text-yellow-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-yellow-900 mb-2">Vigtigt: Du skal selv oplyse servicefradraget</h3>
                <p className="text-yellow-800">
                  Vi håndterer ikke servicefradrag for dig. Du skal selv logge på TastSelv og oplyse fradraget. 
                  Vi leverer kun fakturaen med vores CVR-nummer, som du skal bruge ved oplysning.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur border border-primary-200 rounded-lg p-6 mb-12">
            <div className="flex gap-3">
              <Info className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary-900 mb-2">Hvad er servicefradrag?</h3>
                <p className="text-primary-800">
                  Servicefradrag er en skattemæssig fordel, der giver dig mulighed for at få 
                  fradrag for arbejdsløn ved serviceydelser i hjemmet. Du kan få op til 18.300 kr. 
                  i fradrag om året pr. person i 2026 (17.500 kr. i 2025). Servicefradragets værdi 
                  er ca. 26%. Hvis du har betalt 1.000 kr. for en serviceydelse, sparer du ca. 260 kr. i skat.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sådan fungerer det</h2>
          
          <div className="space-y-6 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hvilke ydelser er omfattet?</h2>
          <div className="bg-white/85 backdrop-blur rounded-lg p-6 mb-12">
            <ul className="space-y-3">
              {eligibleServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Betingelser</h2>
          <div className="prose prose-lg max-w-none mb-12">
            <ul className="text-gray-600 space-y-2">
              <li>Du skal betale med dankort, MobilePay eller netbank (ikke kontanter)</li>
              <li>Gem din dokumentation for det udførte arbejde</li>
              <li>Arbejde, som er udført i 2025, skal være betalt senest 28. februar 2026, for at du kan få fradrag</li>
              <li>Fradraget gives kun for arbejdsløn - ikke for materialer</li>
              <li>Arbejdet skal udføres i din private bolig eller fritidsbolig i Danmark</li>
              <li>Du kan ikke få fradrag for abonnementsydelser til fx snerydning og havearbejde</li>
            </ul>
          </div>

          <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Vores CVR-nummer</h3>
            <p className="text-4xl font-bold mb-4">{siteConfig.cvr}</p>
            <p className="text-primary-100">
              Dette nummer findes på din faktura. Du skal selv oplyse det i TastSelv, når du indgiver dit servicefradrag.
            </p>
          </div>

          <div className="mt-12 p-6 bg-white/85 backdrop-blur rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Vigtigt at vide</h3>
            <p className="text-gray-600 mb-4">
              <strong>Vi håndterer ikke servicefradrag for dig.</strong> Du skal selv oplyse servicefradraget i TastSelv. 
              Vi leverer kun fakturaen med vores CVR-nummer, som du skal bruge, når du oplyser fradraget.
            </p>
            <p className="text-gray-600 mb-4">
              Har du spørgsmål om servicefradrag, kan du kontakte Skat på 72 22 28 28 eller læse mere på{" "}
              <a
                href="https://skat.dk/borger/fradrag/servicefradrag/servicefradrag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                skat.dk
              </a>
              .
            </p>
            <p className="text-gray-600">
              Har du spørgsmål om vores ydelser, kan du kontakte os på {siteConfig.phone} eller {siteConfig.email}.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
