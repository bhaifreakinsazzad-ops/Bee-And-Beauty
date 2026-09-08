import { ReactNode } from "react";
import ProductCard from "@/components/store/ProductCard";
import type { ProductVariant } from "@/data/store";

interface ProductSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  products: ProductVariant[];
  tone?: "cream" | "muted";
  aside?: ReactNode;
}

const ProductSection = ({
  id,
  eyebrow,
  title,
  description,
  products,
  tone = "cream",
  aside,
}: ProductSectionProps) => {
  return (
    <section
      id={id}
      className={tone === "muted" ? "bg-muted/50 py-16" : "py-16"}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              {eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
          {aside}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
