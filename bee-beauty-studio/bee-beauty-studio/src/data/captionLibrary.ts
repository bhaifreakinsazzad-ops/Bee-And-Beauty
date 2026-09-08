// Bee & Beauty — ready-to-publish caption library, organized by content pillar.

import type { ContentPillarId } from "./contentPillars";

export type Caption = {
  id: string;
  pillar: ContentPillarId;
  platform: "Instagram" | "Facebook" | "Both";
  format: string;
  hook: string;
  body: string;
  cta: string;
  hashtagSet: string;
};

export const captionLibrary: Caption[] = [
  {
    id: "prod-1",
    pillar: "product",
    platform: "Both",
    format: "Reel / Static",
    hook: "One drop of the hive changes everything.",
    body: "The Ordinary Serum was built the way the hive builds — with purpose, not excess. Raw honey, purified propolis and royal jelly peptides, dosed alongside niacinamide and hyaluronic acid for a finish that feels indulgent and reads as refined.\n\nThis is nature, refined. This is Bee & Beauty.",
    cta: "Tap the link in bio to start your 14-day refinement journey.",
    hashtagSet: "serum-launch",
  },
  {
    id: "prod-2",
    pillar: "product",
    platform: "Instagram",
    format: "Carousel",
    hook: "What's actually in your serum?",
    body: "Swipe through the five actives inside The Ordinary Serum — and why each one earned its place in the formula. No filler ingredients. No exaggerated claims. Just the hive, refined by science.",
    cta: "Save this for your next skincare aisle debate.",
    hashtagSet: "serum-launch",
  },
  {
    id: "prod-3",
    pillar: "product",
    platform: "Both",
    format: "Static",
    hook: "Morning ritual, refined.",
    body: "Warm two drops between your palms. Press — don't rub — into damp skin. Let the honey do what honey has always done: pull in moisture, calm what's tired, and leave behind a quiet glow.\n\nThe Ordinary Serum is the one step that makes the rest of your routine work harder.",
    cta: "Shop The Ordinary Serum — link in bio.",
    hashtagSet: "brand-core",
  },
  {
    id: "ing-1",
    pillar: "ingredient",
    platform: "Instagram",
    format: "Carousel",
    hook: "Propolis: the hive's own pharmacy.",
    body: "Before it ever reaches your skin, propolis has one job — protect the hive from bacteria, fungus and stress. We simply borrowed the formula. In The Ordinary Serum, purified propolis calms visible redness and reinforces your skin's own barrier.",
    cta: "Read the full ingredient breakdown — link in bio.",
    hashtagSet: "ingredient-education",
  },
  {
    id: "ing-2",
    pillar: "ingredient",
    platform: "Both",
    format: "Reel",
    hook: "Why royal jelly, and not just 'honey'?",
    body: "Royal jelly is what turns an ordinary worker bee into a queen — a concentrated peptide-rich substance that signals growth and renewal. That's the logic we apply to skin: royal jelly peptides in The Ordinary Serum support visible firmness over time.",
    cta: "Comment 'QUEEN' and we'll send you the full formula sheet.",
    hashtagSet: "ingredient-education",
  },
  {
    id: "ing-3",
    pillar: "ingredient",
    platform: "Instagram",
    format: "Static macro shot",
    hook: "Honey is a humectant. Here's what that actually means.",
    body: "A humectant pulls water into the skin rather than just sitting on top of it. Raw honey has done this since long before 'humectant' was a marketing word. We kept the ratio high enough to matter — 12% raw honey extract in every batch.",
    cta: "Save this for the next time someone asks what a humectant is.",
    hashtagSet: "ingredient-education",
  },
  {
    id: "edu-1",
    pillar: "education",
    platform: "Both",
    format: "Carousel",
    hook: "Where does a serum actually go in your routine?",
    body: "Cleanse. Tone (optional). Serum. Moisturizer. SPF (AM only). The Ordinary Serum is water-light, so it should always go on before your moisturizer, on slightly damp skin, so it can lock in the most hydration.",
    cta: "Which step are you skipping? Tell us below.",
    hashtagSet: "brand-core",
  },
  {
    id: "edu-2",
    pillar: "education",
    platform: "Instagram",
    format: "Reel",
    hook: "Myth: 'natural' means 'gentle'. Fact: it depends on the dose.",
    body: "Natural ingredients can still be potent — and potency without dosing discipline is how brands cause irritation and call it 'detoxing'. Every active in The Ordinary Serum is dosed the way a lab would dose it, sourced the way an apiary would source it.",
    cta: "Follow for more skin-science, minus the fear-mongering.",
    hashtagSet: "brand-core",
  },
  {
    id: "edu-3",
    pillar: "education",
    platform: "Both",
    format: "Static",
    hook: "How long until you see results?",
    body: "Day 1-3: hydration resets, skin feels less tight. Day 4-9: texture and tone visibly even out. Day 10-14: the glow everyone starts asking about. Skincare is a relationship, not a reflex — give The Ordinary Serum its 14 days.",
    cta: "Screenshot this and check back in on day 14.",
    hashtagSet: "serum-launch",
  },
  {
    id: "trust-1",
    pillar: "trust",
    platform: "Both",
    format: "Static / quote card",
    hook: '"My dermatologist asked what I was using."',
    body: "— Amara T., verified Bee & Beauty customer.\n\nWe don't chase virality with claims we can't stand behind. Every batch of The Ordinary Serum is dermatologist-reviewed before it reaches your door.",
    cta: "Read more verified reviews — link in bio.",
    hashtagSet: "trust-reviews",
  },
  {
    id: "trust-2",
    pillar: "trust",
    platform: "Instagram",
    format: "Carousel",
    hook: "From hive to bottle: full sourcing transparency.",
    body: "We work with small, accountable apiaries — not industrial honey farms. Swipe to see exactly how raw honey and propolis travel from hive to lab to your bottle, and why that chain of custody matters for both the bees and your skin.",
    cta: "Ask us anything about sourcing in the comments.",
    hashtagSet: "trust-reviews",
  },
  {
    id: "trust-3",
    pillar: "trust",
    platform: "Both",
    format: "Static",
    hook: "96% saw improved radiance in 14 days.*",
    body: "*Consumer perception study, 32 participants, twice-daily use. We publish our numbers because we trust our formula — not because a number looks good on a graphic.",
    cta: "See the full study summary — link in bio.",
    hashtagSet: "trust-reviews",
  },
  {
    id: "comm-1",
    pillar: "community",
    platform: "Both",
    format: "Repost / UGC",
    hook: "This is why we do this.",
    body: "@skinbyjade's 14-day check-in, unedited. Thank you for trusting The Ordinary Serum with your skin — and for letting us share it. Tag us in your ritual and you might be next.",
    cta: "Tag @beeandbeauty in your next serum selfie.",
    hashtagSet: "community-ugc",
  },
  {
    id: "comm-2",
    pillar: "community",
    platform: "Facebook",
    format: "Community post",
    hook: "Ask the hive: what should we make next?",
    body: "The Ordinary Serum was our first proof of concept. We're already formulating what comes next — and we want the community that got us here to help shape it. Drop your dream product below.",
    cta: "Comment your #1 skincare want-list item.",
    hashtagSet: "community-ugc",
  },
  {
    id: "comm-3",
    pillar: "community",
    platform: "Instagram",
    format: "Story series / behind-the-scenes",
    hook: "A day inside the Bee & Beauty lab.",
    body: "From weighing raw honey batches to bottling the final serum by hand — a behind-the-scenes look at how small-batch actually looks, not just how it sounds on a label.",
    cta: "Swipe up for the full lab tour video.",
    hashtagSet: "brand-core",
  },
];

export const hashtagSets: { id: string; label: string; tags: string[] }[] = [
  {
    id: "brand-core",
    label: "Brand Core",
    tags: [
      "#BeeAndBeauty",
      "#NatureRefined",
      "#CleanBeauty",
      "#SkincareRitual",
      "#HoneySkincare",
      "#IngredientLed",
      "#SlowBeauty",
      "#LuxurySkincare",
    ],
  },
  {
    id: "ingredient-education",
    label: "Ingredient Education",
    tags: [
      "#PropolisSkincare",
      "#RoyalJelly",
      "#HoneyExtract",
      "#SkinBarrier",
      "#Humectant",
      "#ApiarySourced",
      "#FormulatedWithPurpose",
      "#SkinScience",
    ],
  },
  {
    id: "serum-launch",
    label: "Serum Launch",
    tags: [
      "#TheOrdinarySerum",
      "#OneDropRitual",
      "#SerumFirst",
      "#GlowJourney",
      "#14DayGlow",
      "#HoneyPropolisSerum",
      "#RefinementRitual",
      "#NewInSkincare",
    ],
  },
  {
    id: "trust-reviews",
    label: "Trust & Reviews",
    tags: [
      "#DermReviewed",
      "#RealResults",
      "#VerifiedReviews",
      "#TransparentBeauty",
      "#CrueltyFree",
      "#ClinicallyMinded",
      "#SourcedWithCare",
      "#ProvenIngredients",
    ],
  },
  {
    id: "community-ugc",
    label: "Community & UGC",
    tags: [
      "#BeeAndBeautyCommunity",
      "#TaggedAndGlowing",
      "#HiveToBottle",
      "#SkincareCommunity",
      "#RealSkinRealResults",
      "#BehindTheHive",
      "#CustomerLove",
      "#ShareYourGlow",
    ],
  },
];

export type PostTemplate = {
  id: string;
  pillar: ContentPillarId;
  name: string;
  format: "Carousel" | "Reel" | "Static" | "Story series";
  slides: string[];
};

export const postTemplates: PostTemplate[] = [
  {
    id: "tpl-ingredient-carousel",
    pillar: "ingredient",
    name: "Ingredient Spotlight Carousel",
    format: "Carousel",
    slides: [
      "Cover: macro shot of the raw ingredient + serif headline naming it",
      "Slide 2: where it comes from (apiary / source story)",
      "Slide 3: what it does in the formula (role + % if available)",
      "Slide 4: how it shows up in The Ordinary Serum specifically",
      "Slide 5: CTA — save / shop / ask a question",
    ],
  },
  {
    id: "tpl-education-carousel",
    pillar: "education",
    name: "Skin-Science Lesson Carousel",
    format: "Carousel",
    slides: [
      "Cover: a bold, specific question (e.g. 'Where does a serum go in your routine?')",
      "Slide 2-4: step-by-step answer, one idea per slide, plain language",
      "Slide 5: myth vs. fact recap",
      "Slide 6: CTA — comment / save / follow for more",
    ],
  },
  {
    id: "tpl-trust-static",
    pillar: "trust",
    name: "Verified Review Quote Card",
    format: "Static",
    slides: [
      "Full-bleed quote card: customer quote in Cormorant Garamond, plum on cream",
      "Small caption below with name + 'verified customer'",
      "Optional footnote citing study or review source",
      "CTA in caption: link to reviews page",
    ],
  },
  {
    id: "tpl-product-reel",
    pillar: "product",
    name: "One Drop Ritual Reel",
    format: "Reel",
    slides: [
      "Shot 1: pouring the dropper, slow motion, honey-gold light",
      "Shot 2: warming serum between palms",
      "Shot 3: pressing into skin, close-up on texture",
      "Shot 4: finished glow, satisfied expression",
      "Text overlay: 'One drop of the hive.' + product name lower third",
    ],
  },
  {
    id: "tpl-community-story",
    pillar: "community",
    name: "Behind-the-Hive Story Series",
    format: "Story series",
    slides: [
      "Frame 1: raw footage teaser + poll sticker ('Guess what we're making')",
      "Frame 2-4: process footage (weighing, mixing, bottling)",
      "Frame 5: team member intro, first-person caption",
      "Frame 6: swipe-up / link sticker to full video",
    ],
  },
];
