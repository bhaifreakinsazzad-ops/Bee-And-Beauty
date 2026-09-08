import { useMemo, useState } from "react";
import StudioLayout from "@/components/studio/StudioLayout";
import PageHeader from "@/components/studio/PageHeader";
import PillarBadge from "@/components/studio/PillarBadge";
import CopyButton from "@/components/studio/CopyButton";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { contentPillars, type ContentPillarId } from "@/data/contentPillars";
import {
  captionLibrary,
  hashtagSets,
  postTemplates,
} from "@/data/captionLibrary";

const pillarFilters: { id: ContentPillarId | "all"; label: string }[] = [
  { id: "all", label: "All Pillars" },
  ...contentPillars.map((p) => ({ id: p.id, label: p.name })),
];

const ContentLibrary = () => {
  const [activePillar, setActivePillar] = useState<ContentPillarId | "all">(
    "all",
  );

  const filteredCaptions = useMemo(
    () =>
      activePillar === "all"
        ? captionLibrary
        : captionLibrary.filter((c) => c.pillar === activePillar),
    [activePillar],
  );

  return (
    <StudioLayout>
      <PageHeader
        eyebrow="Content Library"
        title="Captions, Templates & Hashtags"
        description="A ready-to-publish library organized by content pillar — caption copy, post templates, and curated hashtag sets for The Ordinary Serum and the Bee & Beauty brand."
      />

      <Tabs defaultValue="captions" className="w-full">
        <TabsList className="mb-8 h-auto flex-wrap gap-1 bg-muted p-1">
          <TabsTrigger value="captions" className="font-body">
            Caption Library
          </TabsTrigger>
          <TabsTrigger value="templates" className="font-body">
            Post Templates
          </TabsTrigger>
          <TabsTrigger value="hashtags" className="font-body">
            Hashtag Sets
          </TabsTrigger>
        </TabsList>

        {/* CAPTIONS */}
        <TabsContent value="captions">
          <div className="mb-6 flex flex-wrap gap-2">
            {pillarFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActivePillar(f.id)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 font-body text-xs font-medium transition-colors",
                  activePillar === f.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filteredCaptions.map((c) => (
              <Card
                key={c.id}
                className="flex flex-col border-border bg-card shadow-elegant"
              >
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <PillarBadge pillar={c.pillar} />
                    <Badge
                      variant="outline"
                      className="border-border font-body text-[11px] text-muted-foreground"
                    >
                      {c.platform} · {c.format}
                    </Badge>
                  </div>
                  <p className="font-display text-xl font-semibold leading-snug text-foreground">
                    {c.hook}
                  </p>
                  <p className="mt-3 whitespace-pre-line font-body text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                  <p className="mt-3 font-body text-sm font-medium text-primary">
                    {c.cta}
                  </p>
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-body text-[11px] uppercase tracking-wide text-muted-foreground">
                      Hashtag set:{" "}
                      {hashtagSets.find((h) => h.id === c.hashtagSet)?.label}
                    </span>
                    <CopyButton
                      text={`${c.hook}\n\n${c.body}\n\n${c.cta}`}
                      label="Copy caption"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* TEMPLATES */}
        <TabsContent value="templates">
          <div className="grid gap-6 lg:grid-cols-2">
            {postTemplates.map((t) => (
              <Card key={t.id} className="border-border bg-card shadow-elegant">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <PillarBadge pillar={t.pillar} />
                    <Badge
                      variant="outline"
                      className="border-border font-body text-[11px] text-muted-foreground"
                    >
                      {t.format}
                    </Badge>
                  </div>
                  <p className="font-display text-xl font-semibold text-foreground">
                    {t.name}
                  </p>
                  <ol className="mt-4 space-y-2">
                    {t.slides.map((s, i) => (
                      <li
                        key={i}
                        className="flex gap-3 font-body text-sm text-muted-foreground"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent font-body text-[11px] font-semibold text-accent-foreground">
                          {i + 1}
                        </span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* HASHTAGS */}
        <TabsContent value="hashtags">
          <div className="grid gap-6 sm:grid-cols-2">
            {hashtagSets.map((set) => (
              <Card
                key={set.id}
                className="border-border bg-card shadow-elegant"
              >
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="font-display text-xl font-semibold text-foreground">
                      {set.label}
                    </p>
                    <CopyButton text={set.tags.join(" ")} label="Copy set" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {set.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent px-2.5 py-1 font-body text-xs text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </StudioLayout>
  );
};

export default ContentLibrary;
