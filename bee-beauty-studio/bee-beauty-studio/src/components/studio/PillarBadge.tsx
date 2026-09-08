import { contentPillars, type ContentPillarId } from "@/data/contentPillars";
import { cn } from "@/lib/utils";

interface PillarBadgeProps {
  pillar: ContentPillarId;
  className?: string;
}

const PillarBadge = ({ pillar, className }: PillarBadgeProps) => {
  const info = contentPillars.find((p) => p.id === pillar);
  if (!info) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-wide text-foreground",
        className,
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: `hsl(var(${info.colorVar}))` }}
      />
      {info.name}
    </span>
  );
};

export default PillarBadge;
