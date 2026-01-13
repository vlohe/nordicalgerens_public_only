"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { services } from "@/content/services";
import { LeadForm } from "@/components/lead-form";
import { Modal } from "@/components/modal";
import { Check, X, ShoppingCart } from "lucide-react";

interface SelectedService {
  serviceId: string;
  packageName: string;
  price: string;
  squareMeters?: number;
  pricePerSqm?: number;
}

export default function PakketilbudPage() {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [squareMetersInput, setSquareMetersInput] = useState<Record<string, number>>({});

  const isPricePerSqm = (price: string) => {
    return price.includes('pr m²') || price.includes('pr. m²');
  };

  const extractPricePerSqm = (price: string): number | null => {
    const match = price.match(/(\d+),-\s*pr\.?\s*m²/);
    return match ? parseInt(match[1]) : null;
  };

  const handleToggleService = (serviceId: string, packageName: string, price: string) => {
    const key = `${serviceId}-${packageName}`;
    const exists = selectedServices.find(
      (s) => s.serviceId === serviceId && s.packageName === packageName
    );

    if (exists) {
      // Remove this specific package
      setSelectedServices(selectedServices.filter(
        (s) => !(s.serviceId === serviceId && s.packageName === packageName)
      ));
      const newInput = { ...squareMetersInput };
      delete newInput[key];
      setSquareMetersInput(newInput);
    } else {
      // Remove any existing packages from the same service category first
      const otherServicesInCategory = selectedServices.filter(
        (s) => s.serviceId === serviceId
      );
      const newSelectedServices = selectedServices.filter(
        (s) => s.serviceId !== serviceId
      );
      
      // Remove square meter inputs for removed packages
      const newInput = { ...squareMetersInput };
      otherServicesInCategory.forEach((s) => {
        const oldKey = `${s.serviceId}-${s.packageName}`;
        delete newInput[oldKey];
      });
      
      // Add the new package
      const pricePerSqm = extractPricePerSqm(price);
      const sqm = newInput[key] || (pricePerSqm ? 50 : undefined);
      setSelectedServices([...newSelectedServices, { 
        serviceId, 
        packageName, 
        price,
        squareMeters: sqm,
        pricePerSqm: pricePerSqm || undefined
      }]);
      
      if (pricePerSqm && !newInput[key]) {
        newInput[key] = 50;
      }
      setSquareMetersInput(newInput);
    }
  };

  const handleSquareMetersChange = (serviceId: string, packageName: string, value: number) => {
    const key = `${serviceId}-${packageName}`;
    setSquareMetersInput({ ...squareMetersInput, [key]: value });
    
    setSelectedServices(selectedServices.map(s => {
      if (s.serviceId === serviceId && s.packageName === packageName) {
        return { ...s, squareMeters: value };
      }
      return s;
    }));
  };

  const isSelected = (serviceId: string, packageName: string) => {
    return selectedServices.some(
      (s) => s.serviceId === serviceId && s.packageName === packageName
    );
  };


  const handleOrderClick = () => {
    if (selectedServices.length > 0) {
      setShowForm(true);
    }
  };

  return (
    <>
      <div className="relative min-h-screen pt-40 pb-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/alge.png"
            alt="Pakketilbud baggrund"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 -z-10 bg-gradient-to-b from-transparent from-40% via-[#1a9b8e]/70 via-70% to-[#1a9b8e]" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-4">
              Sammensæt dit eget pakketilbud
            </h1>
            <p className="text-xl text-white/95 drop-shadow max-w-3xl mx-auto">
              Vælg de services du har brug for og få en samlet pris. Kombiner flere ydelser og spar!
            </p>
          </div>

          {selectedServices.length > 0 && (
            <div className="mb-8 bg-white/95 backdrop-blur rounded-xl p-6 shadow-2xl max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6 text-primary-600" />
                  Din valgte pakke
                </h3>
                <button
                  onClick={() => setSelectedServices([])}
                  className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
                >
                  <X className="h-4 w-4" />
                  Ryd alle
                </button>
              </div>
              
              <div className="space-y-3 mb-4">
                {selectedServices.map((selected, index) => {
                  const service = services.find((s) => s.id === selected.serviceId);
                  const key = `${selected.serviceId}-${selected.packageName}`;
                  return (
                    <div key={index} className="py-3 border-b border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-semibold text-gray-900">{service?.title}</span>
                          <span className="text-gray-600"> - {selected.packageName}</span>
                        </div>
                        <button
                          onClick={() => handleToggleService(selected.serviceId, selected.packageName, selected.price)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      {selected.pricePerSqm && (
                        <div className="flex items-center gap-3 mt-2">
                          <label className="text-sm text-gray-600">Kvadratmeter:</label>
                          <input
                            type="number"
                            min="1"
                            value={squareMetersInput[key] || 50}
                            onChange={(e) => handleSquareMetersChange(selected.serviceId, selected.packageName, parseInt(e.target.value) || 50)}
                            className="w-24 px-3 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <span className="text-sm text-gray-600">m²</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleOrderClick}
                className="w-full mt-6 bg-primary-600 text-white rounded-lg px-6 py-4 text-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Indhent tilbud nu
              </button>
            </div>
          )}

          <div className="space-y-12">
            {[...services].sort((a, b) => {
              const order = ['tagrender', 'alge', 'fliser', 'edderkopper'];
              return order.indexOf(a.id) - order.indexOf(b.id);
            }).map((service) => {
              const numPackages = service.packages.length;
              const gridClass = numPackages === 2 
                ? "grid grid-cols-1 md:grid-cols-2 gap-4"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";
              
              return (
              <div key={service.id} className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-xl">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                  <p className="text-lg text-gray-600">{service.description}</p>
                </div>

                <div className={gridClass}>
                  {service.packages.map((pkg) => {
                    const selected = isSelected(service.id, pkg.name);
                    const key = `${service.id}-${pkg.name}`;
                    const hasPricePerSqm = isPricePerSqm(pkg.price);
                    const pricePerSqm = extractPricePerSqm(pkg.price);
                    return (
                      <div
                        key={pkg.name}
                        className={`relative rounded-lg border-2 p-4 transition-all ${
                          selected
                            ? "border-primary-600 bg-primary-50 shadow-lg ring-2 ring-primary-200"
                            : "border-gray-200 hover:border-primary-300 hover:shadow-md"
                        }`}
                      >
                        <div 
                          className="cursor-pointer"
                          onClick={() => handleToggleService(service.id, pkg.name, pkg.price)}
                        >
                          <div className="absolute top-4 right-4">
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                selected
                                  ? "bg-primary-600 border-primary-600"
                                  : "border-gray-300 bg-white"
                              }`}
                            >
                              {selected && <Check className="h-4 w-4 text-white" />}
                            </div>
                          </div>

                          <div className="mb-3 pr-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{pkg.name}</h3>
                          </div>

                          <ul className="space-y-1.5">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {selected && hasPricePerSqm && pricePerSqm && (
                          <div className="mt-4 pt-4 border-t border-gray-300" onClick={(e) => e.stopPropagation()}>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Indtast kvadratmeter:
                            </label>
                            <div className="flex items-center gap-2">
                              <input
                                type="number"
                                min="1"
                                value={squareMetersInput[key] || 50}
                                onChange={(e) => handleSquareMetersChange(service.id, pkg.name, parseInt(e.target.value) || 50)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="50"
                              />
                              <span className="text-sm text-gray-600 whitespace-nowrap">m²</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </div>

      <Modal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title="Indhent tilbud på din pakke"
      >
        <div className="mb-6 p-4 bg-primary-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Valgte services:</h3>
          <ul className="space-y-1">
            {selectedServices.map((selected, index) => {
              const service = services.find((s) => s.id === selected.serviceId);
              return (
                <li key={index} className="text-gray-700">
                  • {service?.title} - {selected.packageName}
                  {selected.squareMeters && selected.pricePerSqm && (
                    <span> ({selected.squareMeters} m²)</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <LeadForm type="order" hideServiceSelect={true} />
      </Modal>
    </>
  );
}
