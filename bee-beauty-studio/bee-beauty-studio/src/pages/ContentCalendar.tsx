import { Instagram, Facebook, Clock } from "lucide-react";
import StudioLayout from "@/components/studio/StudioLayout";
import PageHeader from "@/components/studio/PageHeader";
import PillarBadge from "@/components/studio/PillarBadge";
import { Card, CardContent } from "@/components/ui/card";
import { contentCalendar } from "@/data/contentCalendar";
import { contentPillars } from "@/data/contentPillars";

const platformIcon = (platform: string) => {
  if (platform === "Instagram") return <Instagram className="h-3.5 w-3.5" />;
  if (platform === "Facebook") return <Facebook className="h-3.5 w-3.5" />;
  return (
    <span className="flex items-center gap-0.5">
      <Instagram className="h-3.5 w-3.5" />
      <Facebook className="h-3.5 w-3.5" />
    </span>
  );
};

const ContentCalendar = () => {
  return (
    <StudioLayout>
      <PageHeader
        eyebrow="Publishing Calendar"
        title="Content Calendar"
        description="A two-week launch cadence for The Ordinary Serum, balancing product, ingredient, education, trust and community pillars across Instagram and Facebook."
      />

      {/* Pillar legend */}
      <div className="mb-10 flex flex-wrap gap-2">
        {contentPillars.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: `hsl(var(${p.colorVar}))` }}
            />
            <span className="font-body text-xs font-medium text-foreground">
              {p.name}
            </span>
            <span className="font-body text-[11px] text-muted-foreground">
              · {p.cadence}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-10">
        {contentCalendar.map((week) => (
          <section key={week.week}>
            <h2 className="mb-4 font-display text-2xl font-semibold text-foreground">
              {week.week}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
              {week.entries.map((entry) => (
                <Card
                  key={`${week.week}-${entry.day}`}
                  className="flex flex-col border-border bg-card shadow-elegant"
                >
                  <CardContent className="flex flex-1 flex-col p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-display text-lg font-semibold text-foreground">
                        {entry.day}
                      </p>
                      <p className="font-body text-[11px] text-muted-foreground">
                        {entry.date}
                      </p>
                    </div>
                    <div className="my-3">
                      <PillarBadge pillar={entry.pillar} />
                    </div>
                    <p className="flex-1 font-body text-xs leading-relaxed text-muted-foreground">
                      {entry.note}
                    </p>
                    <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                      <span className="flex items-center gap-1 font-body text-[11px] text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {entry.time}
                      </span>
                      <span className="text-secondary">
                        {platformIcon(entry.platform)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </StudioLayout>
  );
};

export default ContentCalendar;
