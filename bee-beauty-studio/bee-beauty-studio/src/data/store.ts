// Bee & Beauty — storefront catalog data. Single hero product (The Ordinary Serum)
// merchandised across four "collections" (Serum, Bundles, Gifting, Minis) the way
// a multi-SKU brand would, so the homepage can carry real shopping sections today.

import { heroProduct } from "./brand";

export type StoreCategory = "serum" | "bundles" | "gifting" | "minis";

export type ProductVariant = {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  category: StoreCategory;
  size: string;
  blurb: string;
  isNew?: boolean;
  isBestseller?: boolean;
};

const HERO_BOTTLE = heroProduct.heroImage;
const DUO_BOTTLES =
  "https://vibe.filesafe.space/1788045264032144954/assets/4d0c2d12-6c3e-4a99-b4d6-ae70d713ac66.png";
const GIFT_BOX =
  "https://vibe.filesafe.space/1788045264032144954/assets/05c6bf82-c8ea-4704-b9d4-995a619fcb26.png";
const GIFT_RIBBON_SET =
  "https://vibe.filesafe.space/1788045264032144954/assets/0b484bfd-8a63-49ef-9c17-133ecbc7a557.png";
const TRAVEL_MINI =
  "https://vibe.filesafe.space/1788045264032144954/assets/4fc72cd3-4beb-4346-bcc1-5351b957301b.png";

export const productVariants: ProductVariant[] = [
  {
    id: "serum-full",
    name: "The Ordinary Serum",
    subtitle: "Honey Propolis Renewal Concentrate",
    badge: "Bestseller",
    price: 48,
    compareAtPrice: 58,
    image: HERO_BOTTLE,
    category: "serum",
    size: "30ml",
    blurb:
      "Our flagship formula — raw honey, purified propolis and royal jelly peptides for visible refinement in 14 days.",
    isBestseller: true,
  },
  {
    id: "serum-duo",
    name: "The Ordinary Serum — Duo Set",
    subtitle: "Glow together, save together",
    badge: "New Launch",
    price: 86,
    compareAtPrice: 96,
    image: DUO_BOTTLES,
    category: "bundles",
    size: "2 × 30ml",
    blurb:
      "Two full-size bottles of The Ordinary Serum — one for you, one to share (or stock your ritual for months).",
    isNew: true,
  },
  {
    id: "serum-mini",
    name: "The Ordinary Serum — Travel Mini",
    subtitle: "Your ritual, pocket-sized",
    badge: "New",
    price: 18,
    image: TRAVEL_MINI,
    category: "minis",
    size: "10ml",
    blurb:
      "The full formula in a travel-friendly size — perfect for trying the ritual or topping up on the go.",
    isNew: true,
  },
  {
    id: "serum-gift-set",
    name: "The Ordinary Ritual Gift Set",
    subtitle: "Serum + honeycomb dish, gift-wrapped",
    badge: "Gifting",
    price: 64,
    compareAtPrice: 74,
    image: GIFT_RIBBON_SET,
    category: "gifting",
    size: "30ml + dish",
    blurb:
      "The Ordinary Serum paired with a hand-finished honeycomb ceramic dish, wrapped and ribboned — ready to give.",
  },
];

export const categoryTiles: {
  id: StoreCategory;
  label: string;
  image: string;
  anchor: string;
}[] = [
  { id: "serum", label: "The Serum", image: HERO_BOTTLE, anchor: "#serum" },
  { id: "bundles", label: "Bundles", image: DUO_BOTTLES, anchor: "#bundles" },
  { id: "gifting", label: "Gifting", image: GIFT_BOX, anchor: "#gifting" },
  { id: "minis", label: "Minis", image: TRAVEL_MINI, anchor: "#minis" },
];

export const trustBadges: { icon: string; label: string; detail: string }[] = [
  {
    icon: "ShieldCheck",
    label: "Dermatologist-Reviewed",
    detail: "Every batch reviewed before it reaches your door",
  },
  {
    icon: "Leaf",
    label: "Cruelty-Free",
    detail: "Never tested on animals, ever",
  },
  {
    icon: "PackageCheck",
    label: "Small-Batch Sourced",
    detail: "Honey & propolis from accountable apiaries",
  },
  {
    icon: "RotateCcw",
    label: "Easy 14-Day Returns",
    detail: "Not glowing? Send it back, no questions",
  },
];

export const testimonials: {
  quote: string;
  name: string;
  detail: string;
}[] = [
  {
    quote:
      "My dermatologist asked what I was using. Two weeks in and my skin has never felt this calm.",
    name: "Amara T.",
    detail: "Verified Bee & Beauty customer",
  },
  {
    quote:
      "The ritual itself feels like a five-minute vacation. The glow is just a bonus at this point.",
    name: "Priya N.",
    detail: "Verified Bee & Beauty customer",
  },
  {
    quote:
      "I've tried three 'clean' serums this year. This is the only one that actually explains what's in it.",
    name: "Farah K.",
    detail: "Verified Bee & Beauty customer",
  },
];
