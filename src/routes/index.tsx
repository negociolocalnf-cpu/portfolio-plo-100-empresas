import { createFileRoute } from "@tanstack/react-router";
import { CaseMarquee } from "@/components/CaseMarquee";
import { rows, cases } from "@/data/cases";

const WHATSAPP_URL =
  "https://wa.me/5522981605225?text=Ol%C3%A1%2C%20olhei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20a%20an%C3%A1lise%20do%20meu%20perfil%20no%20Google.";

const TITLE = "Método P.L.O — Portfólio de Perfis no Google";
const DESCRIPTION =
  "Mais de 100 empresas atendidas e 34 cases reais de perfis no Google gerenciados com o Método P.L.O — Posicionamento Local Orgânico.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "100+", label: "empresas atendidas" },
  { value: String(cases.length), label: "cases neste portfólio" },
  { value: "20+", label: "segmentos diferentes" },
  { value: "3", label: "estados (RJ, GO, PR)" },
];

function Index() {
  return (
    <main className="bg-hero min-h-screen">
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-10 text-center sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Método P.L.O · Portfólio visual
        </span>
        <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-balance sm:text-6xl">
          Mais de 100 empresas atendidas.{" "}
          <em className="text-gradient-gold not-italic">Provas reais.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg">
          Cada card abaixo é um perfil real, gerenciado por mim no Google — resultados de
          empresas que atendi e apliquei meu Método P.L.O. É o trabalho acontecendo.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-glow mt-9 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 sm:text-base"
        >
          Quero minha análise gratuita →
        </a>
      </section>

      <section aria-label="Cases atendidos" className="py-6">
        <CaseMarquee items={rows[0]} direction="left" duration={75} />
        <CaseMarquee items={rows[1]} direction="right" duration={85} />
        <CaseMarquee items={rows[2]} direction="left" duration={95} />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-center text-xs font-semibold tracking-widest text-primary uppercase">
          Os números por trás do portfólio
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-2xl font-bold text-balance sm:text-4xl">
          Não é sorte. É método aplicado, repetidamente.
        </h2>
        <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="shadow-card rounded-2xl border border-border bg-card px-5 py-7 text-center"
            >
              <dt className="text-gradient-gold text-3xl font-bold sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="shadow-card rounded-3xl border border-border bg-card px-7 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-balance sm:text-3xl">
            Sua empresa pode ser o próximo card desse portfólio
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Envie o link do seu perfil no Google e receba uma análise gratuita com os
            pontos que podem estar te fazendo perder cliente pro concorrente.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-glow mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 sm:text-base"
          >
            Quero minha análise gratuita →
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Cássio Domingos · Método P.L.O — Posicionamento Local Orgânico
      </footer>
    </main>
  );
}
