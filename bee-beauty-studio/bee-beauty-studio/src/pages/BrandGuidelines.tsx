import { Check, X } from "lucide-react";
import StudioLayout from "@/components/studio/StudioLayout";
import PageHeader from "@/components/studio/PageHeader";
import BeeMark from "@/components/studio/BeeMark";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  brand,
  brandColors,
  typography,
  voiceTraits,
  imageryGuidelines,
  logoUsage,
} from "@/data/brand";

const BrandGuidelines = () => {
  return (
    <StudioLayout>
      <PageHeader
        eyebrow="Brand System"
        title="Brand Guidelines"
        description={`The reference system behind every piece of Bee & Beauty content — identity, palette, type, voice, and imagery direction, built around "${brand.tagline}"`}
      />

      {/* Mission & positioning */}
      <section className="mb-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card className="border-border bg-card shadow-elegant">
          <CardHeader>
            <CardTitle className="font-display text-2xl">Mission</CardTitle>
          </CardHeader>
          <CardContent className="font-body text-muted-foreground">
            <p className="leading-relaxed">{brand.mission}</p>
            <Separator className="my-5" />
            <p className="leading-relaxed">{brand.positioning}</p>
          </CardContent>
        </Card>
        <Card className="border-border bg-gradient-hero text-primary-foreground shadow-elegant">
          <CardContent className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
            <BeeMark className="h-20 w-auto brightness-0 invert" />
            <p className="font-display text-3xl italic">"{brand.tagline}"</p>
            <div className="flex gap-2">
              {brand.pillars3.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-primary-foreground/30 px-3 py-1 font-body text-xs uppercase tracking-widest"
                >
                  {p}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Logo usage */}
      <section className="mb-14">
        <h2 className="mb-5 font-display text-2xl font-semibold">
          Logo &amp; Mark
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="flex items-center justify-center border-border bg-card p-10 shadow-elegant lg:col-span-1">
            <BeeMark className="h-24 w-auto" />
          </Card>
          <Card className="border-border bg-card shadow-elegant lg:col-span-2">
            <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  Clear space
                </p>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {logoUsage.clearSpace}
                </p>
                <p className="mt-4 font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                  Minimum size
                </p>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {logoUsage.minSize}
                </p>
              </div>
              <div>
                <p className="mb-1 font-body text-xs font-semibold uppercase tracking-widest text-destructive">
                  Don't
                </p>
                <ul className="space-y-2">
                  {logoUsage.doNot.map((rule) => (
                    <li
                      key={rule}
                      className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                    >
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Color palette */}
      <section className="mb-14">
        <h2 className="mb-5 font-display text-2xl font-semibold">
          Color Palette
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {brandColors.map((c) => (
            <Card
              key={c.name}
              className="overflow-hidden border-border bg-card shadow-elegant"
            >
              <div
                className="h-24 w-full"
                style={{ backgroundColor: `hsl(${c.hsl})` }}
              />
              <CardContent className="p-4">
                <p className="font-display text-lg font-semibold">{c.name}</p>
                <p className="font-body text-xs uppercase tracking-wide text-muted-foreground">
                  {c.hex}
                </p>
                <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground">
                  {c.usage}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="mb-14">
        <h2 className="mb-5 font-display text-2xl font-semibold">Typography</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border bg-card shadow-elegant">
            <CardContent className="p-6">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                {typography.display.role}
              </p>
              <p className="mt-3 font-display text-5xl font-semibold">
                {typography.display.name}
              </p>
              <p className="mt-4 font-body text-sm text-muted-foreground">
                {typography.display.usage}
              </p>
              <p className="mt-4 font-display text-2xl italic text-muted-foreground">
                Nature, refined — one drop at a time.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border bg-card shadow-elegant">
            <CardContent className="p-6">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                {typography.body.role}
              </p>
              <p className="mt-3 font-body text-5xl font-semibold">
                {typography.body.name}
              </p>
              <p className="mt-4 font-body text-sm text-muted-foreground">
                {typography.body.usage}
              </p>
              <p className="mt-4 font-body text-base text-muted-foreground">
                ABCDEFGHIJKLM abcdefghijklm 0123456789
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Voice & tone */}
      <section className="mb-14">
        <h2 className="mb-5 font-display text-2xl font-semibold">
          Voice &amp; Tone
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {voiceTraits.map((v) => (
            <Card
              key={v.trait}
              className="border-border bg-card shadow-elegant"
            >
              <CardContent className="p-6">
                <p className="font-display text-xl font-semibold text-primary">
                  {v.trait}
                </p>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {v.description}
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2 rounded-md bg-accent/50 p-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="font-body text-sm text-foreground">
                      {v.doExample}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 rounded-md bg-muted p-2.5">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <p className="font-body text-sm text-muted-foreground">
                      {v.dontExample}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Imagery direction */}
      <section>
        <h2 className="mb-5 font-display text-2xl font-semibold">
          Imagery Direction
        </h2>
        <Card className="border-border bg-card shadow-elegant">
          <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
            {imageryGuidelines.map((g) => (
              <div key={g} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <p className="font-body text-sm text-muted-foreground">{g}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </StudioLayout>
  );
};

export default BrandGuidelines;
