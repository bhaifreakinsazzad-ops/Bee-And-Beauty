import StoreHeader from "@/components/store/StoreHeader";
import StoreFooter from "@/components/store/StoreFooter";
import HeroSection from "@/components/store/HeroSection";
import CategoryShowcase from "@/components/store/CategoryShowcase";
import ProductSection from "@/components/store/ProductSection";
import IngredientBanner from "@/components/store/IngredientBanner";
import TrustSection from "@/components/store/TrustSection";
import TestimonialSection from "@/components/store/TestimonialSection";
import { productVariants } from "@/data/store";

const serumProducts = productVariants.filter((p) => p.category === "serum");
const bundleProducts = productVariants.filter((p) => p.category === "bundles");
const giftingProducts = productVariants.filter((p) => p.category === "gifting");
const miniProducts = productVariants.filter((p) => p.category === "minis");

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <StoreHeader />
      <main>
        <h1 className="sr-only">
          Bee &amp; Beauty — Nature, refined. The Ordinary Serum, luxury clean
          beauty
        </h1>
        <HeroSection />
        <CategoryShowcase />
        <ProductSection
          id="serum"
          eyebrow="Our Hero Formula"
          title="The Ordinary Serum"
          description="Raw honey, purified propolis and royal jelly peptides — the proof-of-concept behind everything Bee & Beauty makes."
          products={
            serumProducts.length ? serumProducts : productVariants.slice(0, 1)
          }
        />
        <IngredientBanner />
        <ProductSection
          id="bundles"
          eyebrow="More Ritual, Less Spend"
          title="Bundles & Value Sets"
          description="Stock up or share the ritual — bundles built around The Ordinary Serum."
          products={bundleProducts}
          tone="muted"
        />
        <TrustSection />
        <ProductSection
          id="gifting"
          eyebrow="Gift the Glow"
          title="Gifting Edits"
          description="Thoughtfully wrapped sets for the beauty-lover in your life."
          products={giftingProducts}
        />
        <ProductSection
          id="minis"
          eyebrow="Try It First"
          title="Travel Minis"
          description="Pocket-sized versions of The Ordinary Serum, perfect for first-timers and frequent flyers."
          products={miniProducts}
          tone="muted"
        />
        <TestimonialSection />
      </main>
      <StoreFooter />
    </div>
  );
};

export default HomePage;
