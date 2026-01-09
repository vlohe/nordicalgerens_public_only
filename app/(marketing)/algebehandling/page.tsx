"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/content/services";
import { LeadForm } from "@/components/lead-form";
import { Check, Star } from "lucide-react";

export default function AlgebehandlingPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const service = services.find((s) => s.id === "alge");

  if (!service) return null;

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const benefits = [
    "Forlænger levetiden på tag, fliser og facader",
    "Genskaber et flot og ensartet udseende",
    "Forebygger frostsprængninger og skader",
    "Miljøvenlig behandling uden højtryk",
    "Langvarig effekt – holder algerne væk i op til 1–2 år"
  ];

  return (
    <>
      <div className="relative min-h-screen pt-40 pb-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/alge.png"
            alt="Algebehandling baggrund"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 -z-10 bg-gradient-to-b from-transparent from-40% via-[#1a9b8e]/70 via-70% to-[#1a9b8e]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16 max-w-6xl mx-auto">
            <div className="flex flex-col justify-start space-y-6 motion-reduce:animate-none animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg leading-tight">
                Algebehandling af tage og overflader
              </h2>

              <p className="text-lg text-white/95 drop-shadow leading-relaxed">
                Alger, mos og flisepest gør ikke kun dit hus grimt – de nedbryder også overfladerne over tid. Med professionel algebehandling fjernes belægningerne skånsomt, så dit tag, fliser og facader igen fremstår pæne og velholdte – uden brug af højtryk.
              </p>
            </div>

            <div className="flex flex-col justify-start motion-reduce:animate-none animate-slide-in-right">
              <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-4">Fordele ved algebehandling:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-white mt-0.5 flex-shrink-0 drop-shadow" />
                    <span className="text-lg text-white/95 drop-shadow leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {service.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-lg border-2 p-4 bg-white/90 backdrop-blur ${
                  pkg.popular
                    ? "border-primary-600 shadow-2xl ring-4 ring-primary-200"
                    : "border-white/40 shadow-xl"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-600 px-3 py-0.5 text-xs font-semibold text-white">
                      <Star className="h-3 w-3" />
                      Mest populær
                    </span>
                  </div>
                )}

                <div className="text-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-primary-600">{pkg.price}</p>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPackage(pkg.name)}
                  className={`w-full rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-primary-600 text-white hover:bg-primary-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Bestil her
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showForm && (
        <div className="relative py-16" id="order-form">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/alge.png"
              alt="Algebehandling baggrund"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-black/50" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#1a9b8e] via-[#1a9b8e]/70 to-[#1a9b8e]" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <LeadForm
              type="order"
              defaultService={service.id}
              defaultPackage={selectedPackage || undefined}
            />
          </div>
        </div>
      )}
    </>
  );
}
