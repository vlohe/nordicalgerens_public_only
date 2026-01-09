"use client";

import { Hero } from "@/components/hero";
import { UspCards } from "@/components/usp-cards";
import { ServiceCards } from "@/components/service-cards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <UspCards />
      <ServiceCards />
    </>
  );
}
