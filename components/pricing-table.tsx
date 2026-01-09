"use client";

import { Check, Star } from "lucide-react";
import { Service } from "@/content/services";

interface PricingTableProps {
  service: Service;
  onSelectPackage?: (packageName: string) => void;
}

export function PricingTable({ service, onSelectPackage }: PricingTableProps) {
  const isTwoColumn = service.packages.length === 2;

  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">{service.title}</h2>
          <p className="text-lg text-white/95 drop-shadow">{service.description}</p>
        </div>

        <div
          className={
            isTwoColumn
              ? "grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl md:mx-auto"
              : "grid grid-cols-1 md:grid-cols-3 gap-8"
          }
        >
          {service.packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-lg border-2 p-5 sm:p-6 bg-white/90 backdrop-blur ${
                pkg.popular
                  ? "border-primary-600 shadow-2xl md:scale-105 ring-4 ring-primary-200"
                  : "border-white/40 shadow-xl"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary-600 px-4 py-1 text-sm font-semibold text-white">
                    <Star className="h-4 w-4" />
                    Mest populær
                  </span>
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-3xl font-bold text-primary-600">{pkg.price}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectPackage?.(pkg.name)}
                className={`w-full rounded-md px-6 py-3 text-base font-semibold transition-colors ${
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
  );
}
