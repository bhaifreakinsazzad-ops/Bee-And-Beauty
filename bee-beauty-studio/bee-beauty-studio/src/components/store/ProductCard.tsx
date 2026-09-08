import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import type { ProductVariant } from "@/data/store";

interface ProductCardProps {
  product: ProductVariant;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const hasDiscount =
    product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-elegant transition-transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-muted">
        {product.badge && (
          <Badge className="absolute left-3 top-3 z-10 bg-secondary font-body text-[11px] font-semibold uppercase tracking-wide text-secondary-foreground shadow-gold">
            {product.badge}
          </Badge>
        )}
        <img
          src={product.image}
          alt={`${product.name}, ${product.size} — Bee & Beauty`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-body text-[11px] font-semibold uppercase tracking-wide text-secondary">
          {product.size}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold leading-snug text-foreground">
          {product.name}
        </h3>
        <p className="mt-1 font-body text-xs text-muted-foreground">
          {product.subtitle}
        </p>
        <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
          {product.blurb}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold text-primary">
              ${product.price}
            </span>
            {hasDiscount && (
              <span className="font-body text-sm text-muted-foreground line-through">
                ${product.compareAtPrice}
              </span>
            )}
          </div>
          <Button
            size="sm"
            className="bg-primary font-body text-primary-foreground hover:bg-primary/90"
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
              })
            }
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Bag
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
