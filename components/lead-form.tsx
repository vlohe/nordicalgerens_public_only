"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { leadFormSchema, type LeadFormData } from "@/lib/validations";
import { services } from "@/content/services";

interface LeadFormProps {
  defaultService?: string;
  defaultPackage?: string;
  type?: "quote" | "callback" | "order";
  variant?: "default" | "calculator";
  hideServiceSelect?: boolean;
  hidePackageSelect?: boolean;
  showOnlyM2?: boolean;
}

export function LeadForm({ defaultService, defaultPackage, type = "quote", variant = "default", hideServiceSelect = false, hidePackageSelect = false, showOnlyM2 = false }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      type,
      service: (defaultService as any) || "alge",
      package: (defaultPackage as any) || undefined,
      algeTargets: [],
      meters: undefined,
      consent: false,
    },
  });

  useEffect(() => {
    if (defaultService) {
      setValue("service", defaultService as any, { shouldDirty: true });
    }
    if (defaultPackage) {
      setValue("package", defaultPackage as any, { shouldDirty: true });
    }
  }, [defaultService, defaultPackage, setValue]);

  const selectedServiceId = watch("service") as any;
  const selectedService = services.find((s) => s.id === selectedServiceId);
  const selectedPackageName = watch("package") as unknown as string | undefined;
  const defaultServiceObj = defaultService ? services.find((s) => s.id === defaultService) : null;
  const areaM2Value = watch("areaM2") as unknown as number | undefined;
  const metersValue = watch("meters") as unknown as number | undefined;

  useEffect(() => {
    if (variant !== "calculator") return;
    if (!selectedService) return;

    const shouldSelectPackage = ["fliser", "tagrender", "edderkopper"].includes(selectedService.id);
    if (!shouldSelectPackage) return;

    const firstPkg = selectedService.packages?.[0]?.name;
    if (!selectedPackageName && firstPkg) {
      setValue("package", firstPkg as any, { shouldDirty: false });
    }
  }, [selectedPackageName, selectedService, setValue, variant]);

  const parseNumber = (value: string) => {
    const normalized = value.replace(/\./g, "").replace(",", ".");
    const match = normalized.match(/\d+(?:\.\d+)?/);
    if (!match) return undefined;
    const num = Number(match[0]);
    return Number.isFinite(num) ? num : undefined;
  };

  const formatDkk = (amount: number) => {
    const rounded = Math.round(amount);
    return `${rounded.toLocaleString("da-DK")},-`;
  };

  const getEstimate = ():
    | { label: string; detail?: string }
    | undefined => {
    if (variant !== "calculator") return undefined;
    if (!selectedService) return undefined;

    if (selectedService.id === "alge") {
      const m2 = typeof areaM2Value === "number" && !Number.isNaN(areaM2Value) ? areaM2Value : undefined;
      if (!m2) return { label: "Indtast antal m² for pris" };
      if (m2 <= 200) return { label: "1.400,-" };
      if (m2 <= 400) return { label: "1.900,-" };
      return { label: "Kontakt os for pris" };
    }

    if (selectedService.id === "fliser") {
      const pkg = selectedPackageName || "Basis";
      const rate = pkg === "Premium" ? 65 : pkg === "Pro" ? 80 : 50;
      const startPrice = pkg === "Premium" ? 3250 : pkg === "Pro" ? 4000 : 2500;
      const m2 = typeof areaM2Value === "number" && !Number.isNaN(areaM2Value) ? areaM2Value : 50;
      const totalM2 = Math.max(50, m2);
      const extraM2 = Math.max(0, totalM2 - 50);
      const totalPrice = startPrice + (rate * extraM2);
      return { label: formatDkk(totalPrice), detail: `Startpris ${formatDkk(startPrice)} + ${extraM2 > 0 ? `${extraM2} m² × ${rate},-` : 'inkl. første 50 m²'}` };
    }

    if (selectedService.id === "tagrender") {
      const pkg = selectedPackageName || "TAGRENDE STUEPLAN";
      const rate = pkg === "TAGRENDE 1. SAL MM." ? 55 : 45;
      const meters = typeof metersValue === "number" && !Number.isNaN(metersValue) ? metersValue : undefined;
      if (!meters) return { label: "Opstart 1.200,- + pris pr. meter" };
      const total = 1200 + rate * meters;
      return { label: formatDkk(total), detail: `1.200,- + ${rate},- x ${meters} m` };
    }

    if (selectedService.id === "edderkopper") {
      const pkgName = selectedPackageName;
      const pkg = selectedService.packages.find((p) => p.name === pkgName) || selectedService.packages[0];
      if (!pkg) return undefined;
      if (pkg.price.toLowerCase().includes("kontakt")) return { label: "Kontakt os for pris" };
      const priceNum = parseNumber(pkg.price);
      if (!priceNum) return { label: pkg.price };
      return { label: formatDkk(priceNum) };
    }

    return undefined;
  };

  const estimate = getEstimate();
  const selectedPackage =
    selectedService?.packages.find((p) => p.name === selectedPackageName) ||
    selectedService?.packages?.[0];
  const packageContents =
    selectedServiceId === "alge"
      ? selectedService?.bullets
      : selectedPackage?.features;

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);

    try {
      const payload = {
        ...data,
        sourcePage: window.location.pathname,
        referrer: document.referrer,
        utmSource: new URLSearchParams(window.location.search).get("utm_source") || undefined,
        utmMedium: new URLSearchParams(window.location.search).get("utm_medium") || undefined,
        utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || undefined,
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Der opstod en fejl. Prøv venligst igen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 text-center">
        <h3 className="text-lg font-bold text-primary-900 mb-3">Tak for din henvendelse!</h3>
        <p className="text-primary-800 mb-6">
          Vi har modtaget din besked og vender tilbage hurtigst muligt.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-primary-600 font-semibold hover:text-primary-700"
        >
          Send en ny henvendelse
        </button>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-lg shadow-md p-5 sm:p-6 pt-11 sm:pt-13" id="lead-form">
      {variant === "calculator" ? (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 -mt-2">
          <div className="relative inline-flex max-w-[calc(100vw-3rem)] sm:max-w-none sm:whitespace-nowrap">
            <div className="relative rounded-full p-[3px] overflow-hidden">
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <rect
                  x="1"
                  y="1"
                  width="98"
                  height="38"
                  rx="12"
                  ry="12"
                  fill="none"
                  stroke="rgba(255,255,255,0.95)"
                  strokeWidth="3"
                  pathLength="100"
                  strokeDasharray="10 90"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-100"
                    dur="2.6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
              <div className="relative inline-flex items-center text-center rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-2 text-base font-extrabold tracking-wide text-white shadow-xl ring-1 ring-white/30 transition-transform motion-reduce:transition-none hover:-translate-y-0.5 sm:px-8 sm:py-3 sm:text-2xl">
                PRØV VORES PRISBEREGNER
              </div>
            </div>
          </div>
        </div>
      ) : null}
      
      {showOnlyM2 && defaultServiceObj && (
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          {defaultServiceObj.title}{defaultPackage ? ` "${defaultPackage}"` : ""}
        </h3>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {(hideServiceSelect || showOnlyM2) && (
          <input type="hidden" {...register("service")} value={defaultService || "andet"} />
        )}
        {showOnlyM2 && defaultPackage && (
          <input type="hidden" {...register("package")} value={defaultPackage} />
        )}
        {showOnlyM2 ? (
          <div>
            {selectedServiceId === "tagrender" ? (
              <>
                <label htmlFor="meters" className="block text-xs font-medium text-gray-700 mb-1">
                  Antal meter (valgfri)
                </label>
                <input
                  {...register("meters", { valueAsNumber: true })}
                  type="number"
                  inputMode="numeric"
                  id="meters"
                  min={1}
                  className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {errors.meters && (
                  <p className="mt-1 text-sm text-red-600">{errors.meters.message as any}</p>
                )}
              </>
            ) : (
              <>
                <label htmlFor="areaM2" className="block text-xs font-medium text-gray-700 mb-1">
                  Antal m² (valgfri)
                </label>
                <input
                  {...register("areaM2", { valueAsNumber: true })}
                  type="number"
                  inputMode="numeric"
                  id="areaM2"
                  min={selectedServiceId === "fliser" ? 50 : 1}
                  className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
                />

                {errors.areaM2 && (
                  <p className="mt-1 text-sm text-red-600">{errors.areaM2.message as any}</p>
                )}
              </>
            )}
          </div>
        ) : (
          <div className={`grid grid-cols-1 ${hideServiceSelect ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-2 sm:gap-3`}>
            {!hideServiceSelect && (
              <div>
                <label htmlFor="service" className="block text-xs font-medium text-gray-700 mb-1">
                  {variant === "calculator" ? "Vælg service" : "Vælg service *"}
                </label>
                <select
                  {...register("service")}
                  id="service"
                  className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                  <option value="andet">Andet</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                )}
              </div>
            )}

            {!hideServiceSelect && (
              <div>
                {selectedServiceId === "tagrender" ? (
                  <>
                    <label htmlFor="meters" className="block text-xs font-medium text-gray-700 mb-1">
                      {variant === "calculator" ? "Vælg antal meter" : "Antal meter (valgfri)"}
                    </label>
                    <input
                      {...register("meters", { valueAsNumber: true })}
                      type="number"
                      inputMode="numeric"
                      id="meters"
                      min={1}
                      className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                    {errors.meters && (
                      <p className="mt-1 text-sm text-red-600">{errors.meters.message as any}</p>
                    )}
                  </>
                ) : (
                  <>
                    <label htmlFor="areaM2" className="block text-xs font-medium text-gray-700 mb-1">
                      {variant === "calculator" ? "Vælg antal m2" : "Antal m² (valgfri)"}
                    </label>
                    <input
                      {...register("areaM2", { valueAsNumber: true })}
                      type="number"
                      inputMode="numeric"
                      id="areaM2"
                      min={selectedServiceId === "fliser" ? 50 : 1}
                      className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
                    />

                    {errors.areaM2 && (
                      <p className="mt-1 text-sm text-red-600">{errors.areaM2.message as any}</p>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {variant === "calculator" && ["fliser", "tagrender", "edderkopper"].includes(selectedServiceId) && !hideServiceSelect && !hidePackageSelect && !showOnlyM2 && (
          <div>
            <label htmlFor="package" className="block text-xs font-medium text-gray-700 mb-1">
              Vælg pakke
            </label>
            <select
              {...register("package")}
              id="package"
              className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
            >
              {selectedService?.packages.map((pkg) => (
                <option key={pkg.name} value={pkg.name}>
                  {pkg.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {variant === "calculator" && estimate && (
          <div className="rounded-lg border border-primary-200 bg-primary-50 p-3">
            <div className="text-xs font-semibold text-primary-900">Estimeret pris</div>
            <div className="mt-1 flex flex-col md:flex-row md:items-start md:gap-4">
              <div className="md:flex-1">
                <div className="text-base font-bold text-primary-900">{estimate.label}</div>
                {estimate.detail && (
                  <div className="mt-1 text-xs text-primary-800">{estimate.detail}</div>
                )}
              </div>

              {packageContents?.length ? (
                <div className="mt-2 md:mt-0 md:w-[52%] text-[11px] leading-snug text-primary-900">
                  <ul className="m-0 list-disc pl-4 space-y-0.5">
                    {packageContents.slice(0, 5).map((item, idx) => (
                      <li key={idx} className="text-primary-900/90">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        )}

        {variant === "calculator" && selectedService && (
          <div className="pt-2">
            <h3 className="text-base font-bold text-gray-900">
              {selectedService.title}{selectedPackageName ? ` "${selectedPackageName}"` : ""}
            </h3>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
              Navn *
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
              Telefon *
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="zip" className="block text-xs font-medium text-gray-700 mb-1">
              Postnummer *
            </label>
            <input
              {...register("zip")}
              type="text"
              id="zip"
              className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
            />
            {errors.zip && (
              <p className="mt-1 text-sm text-red-600">{errors.zip.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-xs font-medium text-gray-700 mb-1">
              Adresse
            </label>
            <input
              {...register("address")}
              type="text"
              id="address"
              className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">{errors.address.message as any}</p>
            )}
          </div>
        </div>

        {variant !== "calculator" && !hideServiceSelect && !hidePackageSelect && !showOnlyM2 && (
          <div>
            <label htmlFor="package" className="block text-xs font-medium text-gray-700 mb-1">
              Vælg pakke (valgfri)
            </label>
            <select
              {...register("package")}
              id="package"
              className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="">Vælg pakke...</option>
              {selectedService?.packages.map((pkg) => (
                <option key={pkg.name} value={pkg.name}>
                  {pkg.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {variant !== "calculator" && (
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
              Besked (valgfri)
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows={3}
              className="w-full rounded-md border border-gray-300 px-2.5 py-1.5 text-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        )}

        <div className="flex items-start gap-3">
          <input
            {...register("consent")}
            type="checkbox"
            id="consent"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <label htmlFor="consent" className="text-xs text-gray-700">
            Jeg accepterer at Nordic Algerens kontakter mig vedrørende min henvendelse *
          </label>
        </div>
        {errors.consent && (
          <p className="text-sm text-red-600">{errors.consent.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2 inline-block"></span>
              Sender...
            </>
          ) : (
            "Få mit tilbud nu"
          )}
        </button>
      </form>
    </div>
  );
}
