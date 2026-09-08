import { categoryTiles } from "@/data/store";

const CategoryShowcase = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
      <h2 className="mb-8 text-center font-display text-3xl font-semibold text-foreground">
        Shop by Ritual
      </h2>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        {categoryTiles.map((c) => (
          <a
            key={c.id}
            href={c.anchor}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center shadow-elegant transition-transform hover:-translate-y-1"
          >
            <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-accent sm:h-24 sm:w-24">
              <img
                src={c.image}
                alt={`${c.label} — Bee & Beauty`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="font-body text-sm font-semibold uppercase tracking-wide text-foreground">
              {c.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;
