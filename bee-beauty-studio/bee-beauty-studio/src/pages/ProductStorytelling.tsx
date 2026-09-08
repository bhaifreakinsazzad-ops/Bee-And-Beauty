import { Droplet, CalendarClock, Megaphone } from "lucide-react";
import StudioLayout from "@/components/studio/StudioLayout";
import PageHeader from "@/components/studio/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { heroProduct } from "@/data/brand";

const timelineStages = [
  {
    range: "Day 1–3",
    label: "Hydration Reset",
    detail: "Skin feels less tight; honey + HA rebuild the moisture barrier.",
  },
  {
    range: "Day 4–9",
    label: "Texture + Tone",
    detail: "Propolis and niacinamide visibly refine texture and even tone.",
  },
  {
    range: "Day 10–14",
    label: "Visible Glow",
    detail:
      "Royal jelly peptides support firmness; the signature glow emerges.",
  },
];

const ProductStorytelling = () => {
  return (
    <StudioLayout>
      <PageHeader
        eyebrow="Hero Product"
        title={heroProduct.name}
        description={heroProduct.description}
      />

      {/* Hero visual */}
      <section className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-center">
        <Card className="overflow-hidden border-border shadow-elegant">
          <img
            src={heroProduct.heroImage}
            alt="The Ordinary Serum amber dropper bottle with honey-gold accents on a cream backdrop"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </Card>
        <div>
          <Badge className="mb-4 bg-secondary font-body text-secondary-foreground">
            {heroProduct.size}
          </Badge>
          <p className="font-display text-3xl italic text-primary">
            "{heroProduct.tagline}"
          </p>
          <p className="mt-4 font-body text-sm text-muted-foreground">
            {heroProduct.fullName}
          </p>
          <Separator className="my-6" />
          <div className="space-y-2">
            {heroProduct.claims.map((claim) => (
              <div key={claim} className="flex items-start gap-2">
                <Droplet className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <p className="font-body text-sm text-foreground">{claim}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredient story */}
      <section className="mb-14">
        <h2 className="mb-5 font-display text-2xl font-semibold">
          Ingredient-Led Story
        </h2>
        <div className="grid gap-5 lg:grid-cols-2">
          {heroProduct.keyIngredients.map((ing) => (
            <Card
              key={ing.name}
              className="border-border bg-card shadow-elegant"
            >
              <CardContent className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-display text-xl font-semibold text-foreground">
                    {ing.name}
                  </p>
                  <span className="font-body text-sm font-semibold text-secondary">
                    {ing.percent}
                  </span>
                </div>
                <p className="mt-1 font-body text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {ing.role}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {ing.story}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 14-day journey */}
      <section className="mb-14">
        <h2 className="mb-2 font-display text-2xl font-semibold">
          The 14-Day Refinement Journey
        </h2>
        <p className="mb-6 max-w-2xl font-body text-sm text-muted-foreground">
          {heroProduct.beforeAfterAngle}
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {timelineStages.map((stage, i) => (
            <Card
              key={stage.range}
              className="relative overflow-hidden border-border bg-card shadow-elegant"
            >
              <div className="absolute right-4 top-4 font-display text-5xl font-semibold text-accent">
                {i + 1}
              </div>
              <CardContent className="p-6">
                <CalendarClock className="mb-3 h-5 w-5 text-secondary" />
                <p className="font-body text-xs font-semibold uppercase tracking-wide text-secondary">
                  {stage.range}
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-foreground">
                  {stage.label}
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  {stage.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Campaign concepts */}
      <section>
        <h2 className="mb-5 font-display text-2xl font-semibold">
          Campaign Concepts
        </h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {heroProduct.campaignConcepts.map((c) => (
            <Card
              key={c.title}
              className="border-border bg-gradient-hero text-primary-foreground shadow-elegant"
            >
              <CardContent className="p-6">
                <Megaphone className="mb-3 h-5 w-5 text-secondary" />
                <Badge
                  variant="outline"
                  className="mb-3 border-primary-foreground/30 font-body text-[11px] text-primary-foreground"
                >
                  {c.format}
                </Badge>
                <p className="font-display text-xl font-semibold">{c.title}</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-primary-foreground/80">
                  {c.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </StudioLayout>
  );
};

export default ProductStorytelling;
