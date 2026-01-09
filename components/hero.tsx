"use client";

import Image from "next/image";
import { LeadForm } from "@/components/lead-form";

export function Hero() {
  return (
    <div className="relative z-10 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/alge.png"
          alt="Nordic Algerens baggrund"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[#1a9b8e]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-24 sm:pb-28 lg:pb-32">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start xl:items-center">
          <div className="text-center lg:text-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] motion-reduce:animate-none animate-slide-in-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-5">
              Nordic Algerens
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-white/95 font-semibold">
              Professionel ejendomsservice – dit hjem fortjener det bedste
            </p>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl lg:max-w-none leading-relaxed">
              Hos Nordic Algerens leverer vi grundig og skånsom ejendomsservice, der holder dit hus flot, sundt og velholdt hele året.
            </p>

            <div className="mt-6 text-white/90 max-w-2xl lg:max-w-none">
              <p className="text-lg font-semibold tracking-wide">Vores ydelser inkluderer bl.a.:</p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5 text-lg leading-relaxed">
                <li>Fliserens</li>
                <li>Algebehandling</li>
                <li>Rens af tagrender</li>
                <li>Edderkoppebekæmpning</li>
              </ul>
            </div>

            <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl lg:max-w-none leading-relaxed">
              Alle services er udført med fokus på kvalitet, holdbarhed og et synligt flot resultat. Vi går ikke, før du er tilfreds – for hos Nordic Algerens er glade kunder det vigtigste.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-xl p-2 sm:p-3 shadow-2xl w-full max-w-xl mx-auto xl:mx-0 motion-reduce:animate-none animate-slide-in-right">
            <div className="text-gray-900">
              <LeadForm variant="calculator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
