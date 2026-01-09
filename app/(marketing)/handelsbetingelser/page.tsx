import Image from "next/image";

export default function HandelsbetingelserPage() {
  return (
    <>
      <div className="relative text-white pt-32 pb-12">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/alge.png"
            alt="Handelsbetingelser baggrund"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 -z-10 bg-gradient-to-b from-transparent from-40% via-[#1a9b8e]/70 via-70% to-[#1a9b8e]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center motion-reduce:animate-none animate-slide-in-left">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Handelsbetingelser</h1>
          <p className="text-xl text-white/95 drop-shadow">
            Gældende for alle ydelser fra Nordic Algerens
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Generelt</h2>
            <p className="text-gray-600 mb-6">
              Disse handelsbetingelser gælder for alle aftaler mellem Nordic Algerens og kunden 
              om levering af ydelser. Ved accept af tilbud eller bestilling accepterer kunden 
              disse handelsbetingelser.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Tilbud og aftale</h2>
            <p className="text-gray-600 mb-6">
              Alle tilbud er uforpligtende og gældende i 30 dage fra tilbudsdato, medmindre 
              andet er angivet. En aftale er først bindende, når kunden har accepteret tilbuddet 
              skriftligt (email eller signeret kontrakt), og Nordic Algerens har bekræftet modtagelsen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Priser og betaling</h2>
            <p className="text-gray-600 mb-6">
              Alle priser er angivet i danske kroner ekskl. moms, medmindre andet er anført. 
              Betaling skal ske senest 14 dage efter fakturadato. Ved forsinket betaling 
              forbeholder Nordic Algerens sig ret til at opkræve renter i henhold til renteloven.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Udførelse af arbejde</h2>
            <p className="text-gray-600 mb-6">
              Nordic Algerens udfører arbejdet professionelt og i overensstemmelse med gældende 
              standarder. Kunden skal sikre adgang til arbejdsområdet og informere om eventuelle 
              særlige forhold. Hvis vejrforholdene forhindrer udførelse af arbejdet, aftales 
              ny dato uden ekstra omkostninger for kunden.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fortrydelsesret</h2>
            <p className="text-gray-600 mb-6">
              For privatkunder gælder forbrugeraftalelovens regler om fortrydelsesret på 14 dage 
              fra aftalens indgåelse. Fortrydelsesretten bortfalder, hvis arbejdet er påbegyndt 
              efter kundens udtrykkelige ønske. Erhvervskunder har ikke fortrydelsesret.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Reklamation og garanti</h2>
            <p className="text-gray-600 mb-6">
              Reklamation skal ske skriftligt uden ugrundet ophold efter, at manglen er opdaget 
              eller burde være opdaget. Nordic Algerens yder garanti i henhold til den enkelte 
              pakkeløsning. Garantien dækker ikke skader opstået som følge af kundens forhold 
              eller force majeure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Ansvar</h2>
            <p className="text-gray-600 mb-6">
              Nordic Algerens er ansvarsforsikret og påtager sig ansvar for skader forvoldt ved 
              grov uagtsomhed eller forsæt. Ansvaret er begrænset til det beløb, der er dækket 
              af vores erhvervsansvarsforsikring. Nordic Algerens er ikke ansvarlig for indirekte 
              tab, herunder driftstab eller tabt fortjeneste.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Tvister</h2>
            <p className="text-gray-600 mb-6">
              Eventuelle tvister søges løst i mindelighed. Hvis dette ikke er muligt, afgøres 
              tvisten ved danske domstole i overensstemmelse med dansk ret.
            </p>

            <div className="mt-12 p-6 bg-white/80 backdrop-blur border border-white/25 rounded-lg">
              <p className="text-sm text-gray-600">
                Sidst opdateret: Januar 2025
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Nordic Algerens forbeholder sig ret til at ændre disse handelsbetingelser. 
                Ændringer træder i kraft ved offentliggørelse på hjemmesiden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
