interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => (
  <header className="mb-10 max-w-3xl">
    <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
      {eyebrow}
    </p>
    <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
      {title}
    </h1>
    <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
      {description}
    </p>
  </header>
);

export default PageHeader;
