import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/content/services";

const serviceImages: Record<string, string> = {
  alge: "/images/img1.webp",
  fliser: "/images/img3.webp",
  tagrender: "/images/img6.webp",
  edderkopper: "/images/img5.png",
};

interface ServiceCardsProps {
  onSelectService?: (serviceId: string) => void;
}

export function ServiceCards({ onSelectService }: ServiceCardsProps) {
  return (
    <div className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vi tilbyder</h2>
          <p className="text-lg text-gray-600">
            Professionelle løsninger til din ejendom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-xl overflow-hidden bg-white/90 backdrop-blur border border-white/40 shadow-lg hover:shadow-xl transition-shadow ring-1 ring-black/5"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={serviceImages[service.id]}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 min-h-[280px] flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">{service.startPrice}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {onSelectService ? (
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
                  >
                    Få pris / bestil
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href="/vi-tilbyder"
                    className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
                  >
                    Se pakker
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
