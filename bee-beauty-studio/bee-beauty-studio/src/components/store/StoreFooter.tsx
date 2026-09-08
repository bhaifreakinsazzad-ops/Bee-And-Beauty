import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import BeeMark from "@/components/studio/BeeMark";
import NewsletterSignup from "@/components/store/NewsletterSignup";
import { brand } from "@/data/brand";

const footerColumns = [
  {
    title: "Shop",
    links: ["The Ordinary Serum", "Duo Set", "Gift Set", "Travel Minis"],
  },
  {
    title: "Learn",
    links: ["Ingredient Guide", "Our Story", "Reviews", "FAQs"],
  },
  {
    title: "Support",
    links: ["Contact Us", "Shipping & Returns", "Track My Order"],
  },
];

const StoreFooter = () => {
  return (
    <footer
      id="story"
      className="bg-[hsl(var(--plum-deep))] text-primary-foreground"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-primary-foreground/5 p-8 lg:flex-row lg:items-center">
          <div>
            <p className="font-display text-2xl font-semibold sm:text-3xl">
              Join the hive.
            </p>
            <p className="mt-1 font-body text-sm text-primary-foreground/70">
              Ingredient education, early access, and 10% off your first order.
            </p>
          </div>
          <NewsletterSignup variant="dark" />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <BeeMark className="h-14 w-auto brightness-0 invert" />
            </div>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-primary-foreground/70">
              {brand.mission}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={brand.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Bee & Beauty on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-secondary hover:text-secondary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Bee & Beauty on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-secondary hover:text-secondary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 font-body text-sm text-primary-foreground/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                {brand.website}
              </li>
              <li className="flex items-start gap-2 font-body text-sm text-primary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                Sourced from small apiaries, formulated for the world
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 sm:flex-row">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="font-display text-sm italic text-primary-foreground/70">
            "{brand.tagline}"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default StoreFooter;
