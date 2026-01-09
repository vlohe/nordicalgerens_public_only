"use client";

import { useState } from "react";
import { services } from "@/content/services";
import { PricingTable } from "@/components/pricing-table";
import { LeadForm } from "@/components/lead-form";

export default function ViTilbyderPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleSelectPackage = (serviceId: string, packageName: string) => {
    setSelectedService(serviceId);
    setSelectedPackage(packageName);
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <div className="py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Vores ydelser</h1>
          <p className="text-xl text-primary-100">
            Se hvad vi kan hjælpe dig med
          </p>
        </div>
      </div>

      {services.map((service) => (
        <PricingTable
          key={service.id}
          service={service}
          onSelectPackage={(pkg) => handleSelectPackage(service.id, pkg)}
        />
      ))}

      {showForm && (
        <div className="py-16" id="order-form">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <LeadForm
              type="order"
              defaultService={selectedService || undefined}
              defaultPackage={selectedPackage || undefined}
            />
          </div>
        </div>
      )}
    </>
  );
}
