export type ServiceType = "alge" | "fliser" | "tagrender" | "edderkopper";
export type PackageType = "basis" | "plus" | "pro";

export interface ServicePackage {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface Service {
  id: ServiceType;
  title: string;
  slug: string;
  description: string;
  startPrice: string;
  bullets: string[];
  packages: ServicePackage[];
}

export const services: Service[] = [
  {
    id: "alge",
    title: "Algebehandling",
    slug: "algebehandling",
    description: "af tag, fliser eller andre overflader",
    startPrice: "Start pris 1400,-",
    bullets: [
      "Gælder standard overflader, op til 200 m²",
      "Max 8 meter til tagrende",
      "Ved fast årlig aftale 20% rabat kr. 1120,-"
    ],
    packages: [
      {
        name: "BASIS PAKKEN",
        price: "1400,-",
        features: [
          "Algebehandling op til 200 m² flade",
          "Gælder standard overflader, op til 200 m²",
          "Max 8 meter til tagrende",
          "Ved fast årlig aftale 20% rabat kr. 1120,-"
        ]
      },
      {
        name: "PLUS PAKKEN",
        price: "1900,-",
        features: [
          "Algebehandling fra 200 - 400 m² flade",
          "Gælder standard overflader, op til 200 - 400 m²",
          "Max 8 meter til tagrende",
          "Ved fast årlig aftale 20% rabat kr. 1520,-"
        ]
      }
    ]
  },
  {
    id: "fliser",
    title: "Fliserens",
    slug: "fliserens",
    description: "giv dine fliser et \"nyt\" liv",
    startPrice: "50,- pr m²",
    bullets: [
      "Dybdegående fliserens",
      "Fjerner alle typer snavs og pletter",
      "Processen indebærer normalt brug af specialudstyr og rengøringsmidler"
    ],
    packages: [
      {
        name: "Basis",
        price: "50,- pr m²",
        features: [
          "Startpakke af min. 50 m² = 2500,-",
          "Dybdegående fliserens"
        ]
      },
      {
        name: "Premium",
        price: "65,- pr m²",
        features: [
          "Startpakke af min. 50 m² = 3250,-",
          "Dybdegående fliserens",
          "Algebehandling af fliser",
          "Forsegler dine fliser med imprægnering"
        ],
        popular: true
      },
      {
        name: "Pro",
        price: "80,- pr m²",
        features: [
          "Startpakke af min. 50 m² = 4000,-",
          "Dybdegående fliserens",
          "Algebehandling af fliser",
          "Forsegler dine fliser med imprægnering",
          "Levering af fugesand",
          "*Udlægning af fugesand kan tilkøbes"
        ]
      }
    ]
  },
  {
    id: "tagrender",
    title: "Tagrenderens",
    slug: "tagrenderens",
    description: "Rensning af tagrender og nedløbsrør for optimal afledning",
    startPrice: "45,- pr meter",
    bullets: [
      "Opstarts pris på 1200,- inkl. miljøtillæg",
      "Rensning af tagrender",
      "Oprydning af affald"
    ],
    packages: [
      {
        name: "TAGRENDE STUEPLAN",
        price: "45,- pr meter",
        features: [
          "Max 8 meter til tagrende",
          "Opstarts pris på 1200,- inkl. miljøtillæg",
          "Rensning af tagrender",
          "Oprydning af affald",
          "Anbefales sammen med algebehandling (tilkøb)"
        ]
      },
      {
        name: "TAGRENDE 1. SAL MM.",
        price: "55,- pr meter",
        features: [
          "Over 8 meter til tagrende",
          "Opstarts pris på 1200,- inkl. miljøtillæg",
          "Rensning af tagrender",
          "Oprydning af affald",
          "Anbefales sammen med algebehandling (tilkøb)"
        ]
      }
    ]
  },
  {
    id: "edderkopper",
    title: "Edderkoppebekæmpelse",
    slug: "edderkoppebekaempelse",
    description: "slip for spind og kryb!",
    startPrice: "1500,-",
    bullets: [
      "Reducerer antallet af edderkopper markant",
      "Forhindrer nye spind i at danne sig",
      "Efterlader dine overflader rene og indbydende",
      "Er skånsom mod miljøet og sikkert for både børn og kæledyr"
    ],
    packages: [
      {
        name: "PAKKE 1",
        price: "1500,-",
        features: [
          "1-2 plans villa op til 140 m²",
          "Grundig bekæmpelse i mod edderkopper, spind og pupper",
          "Op til 140 m²",
          "kr. 200,- ved 2 plan"
        ]
      },
      {
        name: "PAKKE 2",
        price: "1700,-",
        features: [
          "1-2 plans villa op til 200 m²",
          "Grundig bekæmpelse i mod edderkopper, spind og pupper",
          "Op til 200 m²",
          "kr. 200,- ved 2 plan"
        ],
        popular: true
      },
      {
        name: "ERHVERS TILBUD",
        price: "Kontakt os",
        features: [
          "Se nedenfor",
          "Udfyld vores kontaktformular eller kontakt os på +45 30 817 817"
        ]
      }
    ]
  }
];

export const uspCards = [
  {
    title: "Din algepartner",
    description: "Som kunde hos Nordic Algerens, sikre vi dig den bedste kvalitet af vores behandlinger – din personlige alge partner.",
    icon: "award"
  },
  {
    title: "Nordic Rens",
    description: "Vi sætter stor fokus på miljøet, og anvender udelukkende miljøgodkendte produkter. Hos os kan du nemt få et skarpt tilbud, som er 100% uforpligtende. Vi sørger for det passer netop til dig",
    icon: "leaf"
  },
  {
    title: "Kvalitet i top",
    description: "Certificerede medarbejdere og professionelt udstyr sikrer den bedste kvalitet i alle vores ydelser.",
    icon: "zap"
  }
];
