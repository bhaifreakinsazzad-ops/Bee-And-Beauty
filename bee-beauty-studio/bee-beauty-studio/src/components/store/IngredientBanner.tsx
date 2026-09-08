import { Link } from "react-router-dom";
import { ArrowRight, Droplet } from "lucide-react";
import { heroProduct } from "@/data/brand";

const IngredientBanner = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
      <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-elegant lg:grid-cols-2 lg:items-center lg:p-12">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            Ingredient-Led
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            What's actually in your serum?
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
            {heroProduct.description}
          </p>
          <div className="mt-6 space-y-3">
            {heroProduct.keyIngredients.slice(0, 3).map((ing) => (
              <div key={ing.name} className="flex items-start gap-3">
                <Droplet className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <p className="font-body text-sm text-foreground">
                  <span className="font-semibold">{ing.name}</span> (
                  {ing.percent}) — {ing.role}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/studio/product-storytelling"
            className="mt-6 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary hover:underline"
          >
            Explore the full formula story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={heroProduct.heroImage}
            alt="The Ordinary Serum amber dropper bottle, macro detail"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default IngredientBanner;
