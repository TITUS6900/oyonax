export default function Section({
  title,
  id,
  children,
  muted = false,
}: {
  title?: string;
  id?: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={[id ? "scroll-mt-20" : "", muted ? "bg-surface-muted" : ""].filter(Boolean).join(" ") || undefined}
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {title ? (
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">{title}</h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
