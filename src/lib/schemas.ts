import { z } from "zod";

/**
 * Every content file starts with a "frontmatter" block between --- lines.
 * These schemas define which fields are allowed. `npm run content:check`
 * (and the GitHub check on every change) reports mistakes in plain language.
 */
const text = z.string().trim();
const img = z.string().trim().optional();

export const section = z.object({
  title: text,
  description: text.optional(),
  /** team only: display order of the role groups */
  roles: z.array(text).optional(),
});

export const project = z.object({
  title: text,
  description: text.optional(),
  timespan: text.optional(), // e.g. "2019 - 2021"
  status: text.optional(), // e.g. "Active", "Completed"
  images: z.array(text).optional(),
  link: text.optional(),
  order: z.number().optional(),
});

export const hardware = z.object({
  title: text,
  description: text.optional(),
  image: img,
  order: z.number().optional(),
});

export const work = z.object({
  title: text,
  description: text.optional(),
  image: img,
  link: text.optional(),
  order: z.number().optional(),
});

export const team = z.object({
  name: text,
  role: text,
  description: text.optional(),
  image: img,
  extern: text.optional(), // external affiliation shown in brackets, e.g. HTW
  scholar: text.optional(), // Google Scholar URL
  website: text.optional(),
  email: text.optional(),
  order: z.number().optional(),
});

export const teaching = z.object({
  title: text, // module name
  semester: text.optional(), // e.g. "Winter semester"
  sws: z.union([z.number(), text]).optional(),
  description: text.optional(),
  image: img,
  link: text.optional(), // module handbook
  order: z.number().optional(),
});

export const publication = z.object({
  title: text,
  order: z.number().optional(),
});

export const home = z.object({
  title: text,
  heroTitle: text,
  heroSubtitle: text.optional(),
  heroImage: img,
  images: z.array(text).optional(),
  logos: z.array(text).optional(),
});

export const page = z.object({
  title: text,
  mapImage: img,
});

export const site = z.object({
  siteName: text,
  nav: z.object({
    home: text,
    projects: text,
    hardware: text,
    work: text,
    team: text,
    teaching: text,
    publications: text,
    contact: text,
  }),
  footer: z.object({
    contact: text,
    disclaimer: text,
    note: text.optional(),
  }),
  ui: z.object({
    readMore: text,
    notTranslated: text,
    language: text,
    all: text,
    empty: text,
  }),
});

export const collections = {
  projects: project,
  hardware,
  work,
  team,
  teaching,
  publications: publication,
} as const;

export type CollectionName = keyof typeof collections;
export type Project = z.infer<typeof project>;
export type Hardware = z.infer<typeof hardware>;
export type Work = z.infer<typeof work>;
export type Team = z.infer<typeof team>;
export type Teaching = z.infer<typeof teaching>;
export type Publication = z.infer<typeof publication>;
export type Site = z.infer<typeof site>;
