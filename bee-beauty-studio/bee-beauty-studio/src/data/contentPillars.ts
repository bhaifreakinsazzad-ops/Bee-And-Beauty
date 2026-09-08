// Bee & Beauty — content pillar taxonomy shared across Content Library & Calendar pages.

export type ContentPillarId =
  "ingredient" | "education" | "trust" | "community" | "product";

export const contentPillars: {
  id: ContentPillarId;
  name: string;
  goal: string;
  description: string;
  cadence: string;
  colorVar: string;
}[] = [
  {
    id: "product",
    name: "Serum Hero",
    goal: "Drive consideration & sales",
    description:
      "The Ordinary Serum front and center — launch beats, rituals, ingredient close-ups, offers.",
    cadence: "2x / week",
    colorVar: "--secondary",
  },
  {
    id: "ingredient",
    name: "Ingredient Story",
    goal: "Build differentiation",
    description:
      "Honey, propolis and royal jelly explained with the reverence of a fine-fragrance house.",
    cadence: "2x / week",
    colorVar: "--honey-light",
  },
  {
    id: "education",
    name: "Education",
    goal: "Build authority",
    description:
      "Skin-science lessons, routine order, myth-busting — positions Bee & Beauty as the informed choice.",
    cadence: "1-2x / week",
    colorVar: "--primary",
  },
  {
    id: "trust",
    name: "Trust & Proof",
    goal: "Reduce purchase risk",
    description:
      "Reviews, dermatologist notes, sourcing transparency, before/after check-ins.",
    cadence: "1x / week",
    colorVar: "--sage",
  },
  {
    id: "community",
    name: "Community & UGC",
    goal: "Build belonging",
    description:
      "Customer reposts, founder notes, behind-the-hive moments, comments-as-content.",
    cadence: "1-2x / week",
    colorVar: "--accent",
  },
];
