# Nordic Algerens - Marketing Website

Professionel marketing-site til Nordic Algerens med Next.js App Router, Tailwind CSS og taskmanager-integration.

## 🚀 Features

- **6 sider**: Forside, Vi tilbyder, Om os, Kontakt, Handelsbetingelser, Servicefradrag
- **Genbrugelige komponenter**: Hero, USP-kort, Service-kort, Pricing-tabel, Lead-formular
- **Taskmanager-ready**: Standardiseret lead-payload til integration
- **Responsivt design**: Mobile-first med Tailwind CSS
- **Form-validering**: Zod + React Hook Form
- **SEO-optimeret**: Metadata og semantisk HTML

## 📁 Projektstruktur

```
nordic-alge/
├── app/
│   ├── (marketing)/          # Marketing sider
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Forside
│   │   ├── vi-tilbyder/
│   │   ├── om-os/
│   │   ├── kontakt/
│   │   ├── handelsbetingelser/
│   │   └── servicefradrag/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts      # Lead API endpoint
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── hero.tsx
│   ├── usp-cards.tsx
│   ├── service-cards.tsx
│   ├── quality-section.tsx
│   ├── pricing-table.tsx
│   └── lead-form.tsx
├── content/
│   ├── site.ts               # Site config (telefon, email, CVR)
│   └── services.ts           # Ydelser, pakker, priser
├── lib/
│   ├── utils.ts
│   └── validations.ts        # Zod schemas
└── package.json
```

## 🛠️ Installation

```bash
npm install
```

## 🏃 Kør udvikling

```bash
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000) i browseren.

## 📝 Lead-payload struktur

Alle formularer sender standardiseret payload til `/api/leads`:

```typescript
{
  type: "quote" | "callback" | "order",
  service: "alge" | "fliser" | "tagrender" | "edderkopper" | "andet",
  package?: "basis" | "plus" | "pro",
  name: string,
  email: string,
  phone: string,
  zip: string,
  address?: string,
  message?: string,
  consent: boolean,
  sourcePage?: string,
  utmSource?: string,
  utmMedium?: string,
  utmCampaign?: string,
  referrer?: string
}
```

## 🔗 Taskmanager integration

### Option 1: Samme database (monorepo)

Rediger `app/api/leads/route.ts` og tilføj direkte database-kald:

```typescript
// Eksempel med Prisma
import { prisma } from "@/lib/prisma";

const lead = await prisma.lead.create({
  data: {
    type: validatedData.type,
    service: validatedData.service,
    // ... resten af felterne
  },
});
```

### Option 2: Separat taskmanager API

Rediger `app/api/leads/route.ts` og tilføj API-kald:

```typescript
const response = await fetch("https://your-taskmanager.com/api/leads", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.TASKMANAGER_API_KEY}`,
  },
  body: JSON.stringify(validatedData),
});
```

Tilføj til `.env.local`:
```
TASKMANAGER_API_KEY=your_secret_key
```

## 📊 Tilpas indhold

### Site-info (telefon, email, adresse)
Rediger `content/site.ts`

### Ydelser og priser
Rediger `content/services.ts`

### Farver
Rediger `tailwind.config.ts` under `colors.primary`

## 🚢 Deploy

```bash
npm run build
npm start
```

Eller deploy til Vercel:
```bash
vercel
```

## 📄 Licens

Proprietary - Nordic Algerens
