import { Quote } from "lucide-react";
import { testimonials } from "@/data/store";

const TestimonialSection = () => {
  return (
    <section className="bg-[hsl(var(--plum-deep))] py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            Trust &amp; Proof
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Real Skin, Real Reviews
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
            >
              <Quote className="h-6 w-6 text-secondary" />
              <p className="mt-4 font-display text-lg italic leading-relaxed">
                "{t.quote}"
              </p>
              <p className="mt-5 font-body text-sm font-semibold text-primary-foreground">
                {t.name}
              </p>
              <p className="font-body text-xs text-primary-foreground/60">
                {t.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
