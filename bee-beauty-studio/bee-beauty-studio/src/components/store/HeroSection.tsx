import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { brand, heroProduct } from "@/data/brand";

const HERO_IMAGE =
  "https://vibe.filesafe.space/1788045264032144954/assets/f84a9209-4dba-4109-b95d-703fec1ed74d.png";

const HeroSection = () => {
  const { addItem } = useCart();

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:py-28">
        <div className="relative z-10 text-primary-foreground">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Bee You, Be Beauty!
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {brand.tagline}
          </h1>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-primary-foreground/80">
            Glow like never before. Shine with confidence — because beauty isn't
            just a look, it's a lifestyle. Meet{" "}
            <span className="text-secondary">{heroProduct.name}</span>, the
            honey-propolis ritual behind it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-secondary font-body text-base text-secondary-foreground hover:bg-secondary/90"
              onClick={() =>
                addItem({
                  id: "serum-full",
                  name: heroProduct.name,
                  price: 48,
                })
              }
            >
              Shop The Serum — $48
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="#story"
              className="font-body text-sm font-semibold text-primary-foreground/80 underline underline-offset-4 hover:text-primary-foreground"
            >
              Read our story
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            <div>
              <p className="font-display text-2xl font-semibold text-secondary">
                96%
              </p>
              <p className="font-body text-xs text-primary-foreground/60">
                saw improved radiance
              </p>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <p className="font-display text-2xl font-semibold text-secondary">
                14 days
              </p>
              <p className="font-body text-xs text-primary-foreground/60">
                to visible refinement
              </p>
            </div>
            <div className="h-10 w-px bg-primary-foreground/20" />
            <div>
              <p className="font-display text-2xl font-semibold text-secondary">
                100%
              </p>
              <p className="font-body text-xs text-primary-foreground/60">
                cruelty-free formula
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-full bg-secondary/20 blur-3xl" />
          <img
            src={HERO_IMAGE}
            alt="The Ordinary Serum, an amber dropper bottle by Bee & Beauty, styled with honeycomb light and golden tones"
            className="w-full rounded-3xl object-cover shadow-elegant"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
