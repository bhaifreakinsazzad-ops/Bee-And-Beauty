// Bee & Beauty — core brand identity, product, and design system data.

export const brand = {
  name: "Bee & Beauty",
  tagline: "Nature, refined.",
  website: "beeandbeauty.online",
  facebook: "https://www.facebook.com/share/19R8WxHtg2/",
  mission:
    "Bee & Beauty translates the intelligence of the hive into modern, clinically-minded skincare — pairing honey, propolis and royal jelly with proven actives, so every formula is as honest as it is luxurious.",
  positioning:
    "A premium DTC clean-beauty house positioned between mass 'natural' brands and cold clinical labs — warm, ingredient-led, and trustworthy enough to educate, luxurious enough to covet.",
  pillars3: ["Nature", "Refined", "Trusted"],
};

export const heroProduct = {
  name: "The Ordinary Serum",
  fullName: "The Ordinary Serum — Honey Propolis Renewal Concentrate",
  tagline: "One drop of the hive. A lifetime of refinement.",
  size: "30ml / 1 fl oz — amber dropper bottle",
  priceAnchor: "$48",
  heroImage:
    "https://vibe.filesafe.space/1788045264032144954/assets/4b441dca-e975-435e-88e9-f11ee3521474.png",
  description:
    "Bee & Beauty's flagship serum, built around raw honey, purified propolis and royal jelly peptides, layered with niacinamide and low-molecular hyaluronic acid. It is the brand's proof-of-concept: nature-derived actives, dosed with clinical precision.",
  keyIngredients: [
    {
      name: "Raw Honey Extract",
      percent: "12%",
      role: "Humectant & antioxidant",
      story:
        "Sourced from small apiaries, honey pulls moisture into the skin and delivers natural enzymes that gently resurface dull, tired skin — the original refining ingredient.",
    },
    {
      name: "Purified Propolis",
      percent: "3%",
      role: "Barrier support & calming",
      story:
        "The hive's own defense system. Propolis is rich in flavonoids that soothe visible redness and reinforce the skin barrier against daily stressors.",
    },
    {
      name: "Royal Jelly Peptides",
      percent: "2%",
      role: "Renewal & firmness",
      story:
        "What turns a worker bee into a queen. Royal jelly's peptide complex signals collagen renewal, giving skin a firmer, more luminous finish over time.",
    },
    {
      name: "Niacinamide",
      percent: "5%",
      role: "Tone & texture",
      story:
        "The clinical backbone. Niacinamide visibly refines pores and evens tone, proving Bee & Beauty pairs nature with dermatologically-proven actives.",
    },
    {
      name: "Low-Molecular Hyaluronic Acid",
      percent: "1%",
      role: "Deep hydration",
      story:
        "Penetrates deeper than standard HA to plump from within, layering under the honey's surface hydration for round-the-clock dewiness.",
    },
  ],
  claims: [
    "Visibly refines texture in 14 days",
    "96% saw improved radiance in consumer testing",
    "Dermatologist-reviewed, fragrance-free option available",
    "Cruelty-free · Vegan-friendly propolis alternative available",
  ],
  beforeAfterAngle:
    "Position as a 14-day 'refinement journey' rather than an overnight fix — days 1-3 (hydration reset), days 4-9 (texture + tone), days 10-14 (visible glow) — so content can be sequenced as a believable, trust-building story instead of an exaggerated transformation.",
  campaignConcepts: [
    {
      title: "The Hive Diaries",
      format: "3-part Reel series",
      description:
        "Ep.1 introduces the apiary source, Ep.2 breaks down the formula on camera (ingredient macro shots + hand-drawn diagram overlay), Ep.3 is a real customer's 14-day skin diary.",
    },
    {
      title: "One Drop Ritual",
      format: "Static + carousel",
      description:
        "A slow-living morning routine campaign: pouring the dropper, warming between palms, pressing into skin — sells the sensorial ritual, not just the result.",
    },
    {
      title: "Ask a Formulator",
      format: "Q&A carousel / Story series",
      description:
        "Weekly community questions about the serum answered by 'the Bee & Beauty lab' voice — builds authority and trust while surfacing UGC questions as content.",
    },
  ],
};

export const brandColors = [
  {
    name: "Plum Primary",
    hsl: "330.6 74.3% 27.5%",
    hex: "#7A1245",
    usage: "Primary brand color — logo, headlines, key CTAs",
  },
  {
    name: "Plum Deep",
    hsl: "330 79.2% 9.4%",
    hex: "#2B0518",
    usage: "Backgrounds, footers, dramatic sections",
  },
  {
    name: "Honey Gold",
    hsl: "42 72.9% 44.9%",
    hex: "#C6941F",
    usage: "Accent — highlights, icons, secondary CTAs",
  },
  {
    name: "Honey Light",
    hsl: "42 70.5% 69.4%",
    hex: "#E8C77A",
    usage: "Gradients, hover states, subtle highlights",
  },
  {
    name: "Cream",
    hsl: "36 45% 97%",
    hex: "#FDF6EC",
    usage: "Primary background — warmth without stark white",
  },
  {
    name: "Blush",
    hsl: "339.3 54.7% 89.6%",
    hex: "#F3D6E0",
    usage: "Soft accents, tags, muted callouts",
  },
  {
    name: "Sage",
    hsl: "90 11.3% 48.6%",
    hex: "#7C8A6E",
    usage: "Trust/education accent — calm, natural counterpoint",
  },
];

export const typography = {
  display: {
    name: "Cormorant Garamond",
    role: "Display / Headlines",
    usage:
      "Used for all headlines, pull quotes and product names — elegant, editorial, high-end beauty tone.",
  },
  body: {
    name: "Karla",
    role: "Body / UI",
    usage:
      "Used for body copy, captions, UI labels — clean and highly legible against serif headlines.",
  },
};

export const voiceTraits: {
  trait: string;
  description: string;
  doExample: string;
  dontExample: string;
}[] = [
  {
    trait: "Warm Authority",
    description:
      "We know the science, but we explain it like a trusted friend, not a lab report.",
    doExample:
      '"Propolis calms redness because it reinforces your skin\'s own barrier."',
    dontExample:
      '"Our proprietary bio-active complex synergistically optimizes epidermal defense."',
  },
  {
    trait: "Quietly Confident",
    description:
      "We let ingredients and results speak; we don't shout or exaggerate.",
    doExample: '"96% saw improved radiance in 14 days."',
    dontExample: '"THE MOST POWERFUL SERUM YOU\'LL EVER TRY!!!"',
  },
  {
    trait: "Sensorial",
    description:
      "We describe texture, ritual and feeling — beauty is an experience, not just a spec sheet.",
    doExample: '"Warm two drops between your palms and press into damp skin."',
    dontExample: '"Apply serum to face as directed."',
  },
  {
    trait: "Honest",
    description:
      "We disclose sourcing, cite studies, and never promise overnight miracles.",
    doExample: '"Give it 14 days — here\'s what to expect at each stage."',
    dontExample: '"See results overnight or your money back!"',
  },
];

export const imageryGuidelines = [
  "Warm, low-contrast natural light — golden hour tones over flat studio lighting.",
  "Macro shots of texture: serum droplets, honey pulls, skin close-ups.",
  "Honeycomb geometry as a recurring background motif, used subtly, never literally as a sticker.",
  "Real skin, real texture — avoid over-retouched, poreless renders.",
  "Amber glass and gold hardware as recurring product-styling props.",
];

export const logoUsage = {
  clearSpace:
    "Maintain clear space equal to the height of the hexagon mark on all sides.",
  minSize: "Do not render the mark smaller than 24px tall in digital use.",
  doNot: [
    "Do not recolor the mark outside the approved plum/gold palette.",
    "Do not stretch, skew, or rotate the mark.",
    "Do not place the mark on busy photography without a solid or blurred backing.",
  ],
};
