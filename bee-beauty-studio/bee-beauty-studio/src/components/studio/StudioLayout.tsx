import { ReactNode, useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  LayoutGrid,
  CalendarDays,
  Sparkles,
  Store,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import BeeMark from "@/components/studio/BeeMark";
import { brand } from "@/data/brand";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/studio", label: "Brand Guidelines", icon: BookOpen },
  {
    to: "/studio/content-library",
    label: "Content Library",
    icon: LayoutGrid,
  },
  { to: "/studio/calendar", label: "Calendar", icon: CalendarDays },
  {
    to: "/studio/product-storytelling",
    label: "Product Storytelling",
    icon: Sparkles,
  },
];

interface StudioLayoutProps {
  children: ReactNode;
}

const StudioLayout = ({ children }: StudioLayoutProps) => {
  const [open, setOpen] = useState(false);

  const NavContent = (
    <div className="flex h-full flex-col">
      <div className="px-6 pb-6 pt-8">
        <BeeMark className="h-14 w-auto brightness-0 invert" />
        <p className="mt-2 font-body text-[11px] uppercase tracking-[0.2em] text-sidebar-foreground/60">
          Content Studio
        </p>
      </div>

      <nav className="flex-1 space-y-1 px-4">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="mb-3 flex items-center gap-3 rounded-lg border border-sidebar-border px-3 py-2.5 font-body text-sm text-sidebar-foreground/75 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <Store className="h-4 w-4" />
          Back to Store
        </NavLink>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/studio"}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm text-sidebar-foreground/75 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mx-4 mb-6 rounded-xl border border-sidebar-border bg-sidebar-accent/40 p-4">
        <p className="font-display text-base italic text-sidebar-foreground">
          "{brand.tagline}"
        </p>
        <p className="mt-2 font-body text-xs text-sidebar-foreground/60">
          {brand.website}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 bg-sidebar lg:block">
        {NavContent}
      </aside>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-sidebar px-4 py-3 lg:hidden">
        <div className="flex items-center">
          <BeeMark className="h-9 w-auto brightness-0 invert" />
        </div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md p-2 text-sidebar-foreground hover:bg-sidebar-accent"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 bg-sidebar shadow-elegant">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-md p-2 text-sidebar-foreground hover:bg-sidebar-accent"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
            {NavContent}
          </div>
        </div>
      )}

      <main className={cn("lg:pl-72")}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
          {children}
        </div>
      </main>
    </div>
  );
};

export default StudioLayout;
