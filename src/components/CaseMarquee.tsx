import type { CaseCard } from "@/data/cases";

type Props = {
  items: CaseCard[];
  direction?: "left" | "right";
  duration?: number;
};

export function CaseMarquee({ items, direction = "left", duration = 70 }: Props) {
  const loop = [...items, ...items];

  return (
    <div className="group relative overflow-hidden py-3">
      <div
        className={`marquee-track flex w-max gap-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {loop.map((item, index) => (
          <figure
            key={`${item.id}-${index}`}
            className="w-[240px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1 sm:w-[280px]"
          >
            <img
              src={item.image}
              alt={`Perfil no Google de ${item.name} gerenciado pelo Método P.L.O`}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="border-t border-border px-4 py-3 text-sm font-medium text-muted-foreground">
              {item.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
