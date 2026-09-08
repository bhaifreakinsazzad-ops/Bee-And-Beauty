import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Search, Sparkles } from "lucide-react";
import BeeMark from "@/components/studio/BeeMark";
import { useCart } from "@/context/CartContext";
import { brand } from "@/data/brand";
import { categoryTiles } from "@/data/store";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "The Serum", href: "#serum" },
  { label: "Bundles", href: "#bundles" },
  { label: "Gifting", href: "#gifting" },
  { label: "Minis", href: "#minis" },
  { label: "Our Story", href: "#story" },
];

const StoreHeader = () => {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="bg-gradient-hero px-4 py-2 text-center font-body text-[11px] font-medium uppercase tracking-widest text-primary-foreground sm:text-xs">
        Free honey-dropper gift on orders over $60 · Nature, refined.
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <Link to="/" className="flex items-center shrink-0">
          <BeeMark className="h-12 w-auto sm:h-14" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            aria-label="Search"
            className="hidden rounded-full p-2 text-foreground/70 hover:bg-accent sm:inline-flex"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link
            to="/studio"
            className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-body text-xs font-medium text-foreground/70 hover:border-primary/40 hover:text-primary lg:inline-flex"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Content Studio
          </Link>
          <a
            href="#serum"
            aria-label="Shopping bag"
            className="relative rounded-full p-2 text-foreground/70 hover:bg-accent"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-secondary px-1 font-body text-[10px] font-bold text-secondary-foreground">
                {count}
              </span>
            )}
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="rounded-full p-2 text-foreground/70 hover:bg-accent lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-72 bg-background p-6 shadow-elegant">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-4 top-4 rounded-md p-2 text-foreground/70 hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mt-10 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 font-body text-sm font-medium text-foreground hover:bg-accent"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/studio"
                onClick={() => setOpen(false)}
                className={cn(
                  "mt-3 flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 font-body text-sm font-medium text-foreground hover:bg-accent",
                )}
              >
                <Sparkles className="h-4 w-4 text-secondary" />
                Content Studio
              </Link>
            </div>
            <div className="mt-8 border-t border-border pt-6">
              {categoryTiles.map((c) => (
                <a
                  key={c.id}
                  href={c.anchor}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 font-body text-xs text-muted-foreground hover:bg-accent"
                >
                  <img
                    src={c.image}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default StoreHeader;
