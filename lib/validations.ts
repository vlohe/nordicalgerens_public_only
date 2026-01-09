import { z } from "zod";

export const leadFormSchema = z.object({
  type: z.enum(["quote", "callback", "order"]),
  service: z.enum(["alge", "fliser", "tagrender", "edderkopper", "andet"]),
  package: z.string().optional(),
  algeTargets: z.array(z.enum(["tag", "fliser", "facade"])).optional(),
  areaM2: z.preprocess(
    (val) => (val === "" || val === null || val === undefined ? undefined : val),
    z.coerce.number().positive()
  ).optional(),
  meters: z.preprocess(
    (val) => (val === "" || val === null || val === undefined ? undefined : val),
    z.coerce.number().positive()
  ).optional(),
  name: z.string().min(2, "Navn skal være mindst 2 tegn"),
  email: z.string().email("Ugyldig email"),
  phone: z.string().min(8, "Telefonnummer skal være mindst 8 cifre"),
  zip: z.string().min(4, "Postnummer skal være 4 cifre"),
  address: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Du skal acceptere betingelserne",
  }),
  sourcePage: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  referrer: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
