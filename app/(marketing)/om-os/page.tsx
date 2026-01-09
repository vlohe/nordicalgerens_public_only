import Image from "next/image";
import { Check, Leaf, Award, Shield } from "lucide-react";

export default function OmOsPage() {
  const benefits = [
    "Certificerede og erfarne medarbejdere",
    "Kun miljøgodkendte produkter",
    "Professionelt udstyr af højeste kvalitet",
    "Konkurrencedygtige priser",
    "Hurtig og pålidelig service",
    "Langtidsholdbare løsninger",
  ];

  return (
    <>
      <div className="relative text-white pt-32 pb-12">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/alge.png"
            alt="Om os baggrund"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 -z-10 bg-gradient-to-b from-transparent from-40% via-[#1a9b8e]/70 via-70% to-[#1a9b8e]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center motion-reduce:animate-none animate-slide-in-left">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Om Nordic Algerens</h1>
          <p className="text-xl text-white/95 drop-shadow">
            Din pålidelige partner til algebehandling og rengøring
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 motion-reduce:animate-none animate-slide-in-right">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kvalitet i fokus</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Hos Nordic Algerens har vi specialiseret os i professionel algebehandling, 
              fliserens, tagrenderens og edderkoppebekæmpelse. Med mange års erfaring 
              og et stærkt fokus på kvalitet leverer vi altid resultater, der holder.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Vi bruger kun miljøvenlige og certificerede produkter, der er skånsomme 
              over for både din ejendom og naturen. Vores erfarne medarbejdere er 
              uddannede til at håndtere alle typer opgaver, fra små private hjem til 
              større erhvervsejendomme.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Miljø og bæredygtighed</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Vi tager ansvar for miljøet. Alle vores produkter er miljøgodkendte, og 
              vi arbejder konstant på at minimere vores miljøaftryk. Det betyder, at 
              du kan få en ren og velholdt ejendom med god samvittighed.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Professionelt udstyr</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Vi investerer løbende i det nyeste og mest effektive udstyr. Det sikrer, 
              at vi kan levere det bedste resultat på kortest mulig tid, uden at gå på 
              kompromis med kvaliteten.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 motion-reduce:animate-none animate-slide-in-left">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Hvorfor vælge Nordic Algerens?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/90 backdrop-blur p-6 rounded-lg shadow-sm"
              >
                <Check className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Miljøvenligt</h3>
              <p className="text-gray-600">
                Kun godkendte og miljøvenlige produkter
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certificeret</h3>
              <p className="text-gray-600">
                Uddannede og erfarne medarbejdere
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Garanti</h3>
              <p className="text-gray-600">
                Langtidsholdbare løsninger med garanti
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
