import type { CaseCard } from "@/data/cases";

type Props = {
  items: CaseCard[];
  direction?: "left" | "right";
  duration?: number;
};

export function CaseMarquee({ items, direction = "left", duration = 70 }: Props) {
  return (
    <div className="marquee-fade relative overflow-hidden py-3">
      <div
        className={`marquee-track flex w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {[false, true].map((duplicate) => (
          <div
            key={duplicate ? "duplicate" : "original"}
            className="flex shrink-0 gap-4 pr-4"
            aria-hidden={duplicate || undefined}
          >
            {items.map((item) => (
              <figure
                key={item.id}
                className="w-[240px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1 sm:w-[280px]"
              >
                <img
                  src={item.image}
                  alt={
                    duplicate
                      ? ""
                      : `Perfil no Google de ${item.name} gerenciado pelo Método P.L.O`
                  }
                  loading="lazy"
                  draggable={false}
                  className="aspect-[4/5] w-full select-none object-cover"
                />
                <figcaption className="border-t border-border px-4 py-3 text-sm font-medium text-muted-foreground">
                  {item.name}
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
