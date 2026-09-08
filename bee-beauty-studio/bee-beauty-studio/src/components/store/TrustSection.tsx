import { ShieldCheck, Leaf, PackageCheck, RotateCcw } from "lucide-react";
import { trustBadges } from "@/data/store";

const iconMap = {
  ShieldCheck,
  Leaf,
  PackageCheck,
  RotateCcw,
} as const;

const TrustSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustBadges.map((b) => {
          const Icon = iconMap[b.icon as keyof typeof iconMap];
          return (
            <div
              key={b.label}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-elegant"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <Icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <p className="font-display text-lg font-semibold text-foreground">
                {b.label}
              </p>
              <p className="mt-1 font-body text-xs leading-relaxed text-muted-foreground">
                {b.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustSection;
