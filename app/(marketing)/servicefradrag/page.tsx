import Image from "next/image";
import { Check, Info } from "lucide-react";
import { siteConfig } from "@/content/site";

export default function ServicefradragPage() {
  const steps = [
    {
      title: "1. Bestil ydelsen",
      description: "Kontakt os og bestil den ønskede service. Husk at oplyse, at du ønsker servicefradrag.",
    },
    {
      title: "2. Vi udfører arbejdet",
      description: "Vores professionelle team udfører arbejdet som aftalt.",
    },
    {
      title: "3. Modtag faktura",
      description: "Du modtager en specificeret faktura med arbejdsløn og materialer adskilt.",
    },
    {
      title: "4. Betal og få fradrag",
      description: "Betal fakturaen, og fradraget trækkes automatisk fra dit skattekort.",
    },
  ];

  const eligibleServices = [
    "Algebehandling af facade og tag",
    "Rensning af fliser og belægning",
    "Tagrenderens og vedligeholdelse",
    "Almindelig rengøring og vedligeholdelse",
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
            Få op til 6.000 kr. i fradrag om året
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 motion-reduce:animate-none animate-slide-in-right">
          <div className="bg-white/85 backdrop-blur border border-primary-200 rounded-lg p-6 mb-12">
            <div className="flex gap-3">
              <Info className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary-900 mb-2">Hvad er servicefradrag?</h3>
                <p className="text-primary-800">
                  Servicefradrag er en skattemæssig fordel, der giver dig mulighed for at få 
                  fradrag for arbejdsløn ved serviceydelser i hjemmet. Du kan få op til 6.000 kr. 
                  i fradrag om året pr. person.
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
              <li>Du skal være fyldt 18 år</li>
              <li>Arbejdet skal udføres i din private bolig eller fritidsbolig i Danmark</li>
              <li>Du skal betale via bank, MobilePay eller anden sporbar betalingsmetode</li>
              <li>Virksomheden skal have et dansk CVR-nummer</li>
              <li>Fradraget gives kun for arbejdsløn, ikke for materialer</li>
            </ul>
          </div>

          <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Vores CVR-nummer</h3>
            <p className="text-4xl font-bold mb-4">{siteConfig.cvr}</p>
            <p className="text-primary-100">
              Husk at oplyse dette nummer, når du ansøger om servicefradrag
            </p>
          </div>

          <div className="mt-12 p-6 bg-white/85 backdrop-blur rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Har du spørgsmål?</h3>
            <p className="text-gray-600 mb-4">
              Kontakt os på {siteConfig.phone} eller {siteConfig.email}, så hjælper vi dig 
              med at få mest muligt ud af dit servicefradrag.
            </p>
            <p className="text-sm text-gray-500">
              Læs mere om servicefradrag på{" "}
              <a
                href="https://skat.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                skat.dk
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
