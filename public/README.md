# Public Assets

Placer dine billeder og logo her:

## Struktur

```
public/
├── logo.svg (eller .png)           # Hovedlogo til header
├── logo-white.svg                  # Hvid version til footer
├── favicon.ico                     # Browser favicon
└── images/
    ├── hero-bg.jpg                 # Hero baggrundsbillede (valgfri)
    ├── service-alge.jpg            # Billede til algebehandling
    ├── service-fliser.jpg          # Billede til fliserens
    ├── service-tagrender.jpg       # Billede til tagrenderens
    ├── service-edderkopper.jpg     # Billede til edderkoppebekæmpelse
    └── about/
        ├── team.jpg                # Team billede
        └── equipment.jpg           # Udstyr billede
```

## Brug i koden

Billeder refereres fra rod (`/`):

```tsx
// Logo i header
<Image src="/logo.svg" alt="Nordic Algerens" width={200} height={60} />

// Billede i komponenter
<Image src="/images/service-alge.jpg" alt="Algebehandling" />
```

## Anbefalede størrelser

- **Logo**: 400x120px (transparent baggrund, SVG foretrukket)
- **Hero baggrund**: 1920x1080px
- **Service billeder**: 800x600px
- **Om os billeder**: 1200x800px

## Optimering

Next.js optimerer automatisk billeder når du bruger `next/image` komponenten.
