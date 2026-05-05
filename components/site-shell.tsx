import { Button, Chip, Surface } from "@heroui/react";
import NextLink from "next/link";

import { CatalogBrowser } from "@/components/catalog-browser";
import { SparkIcon } from "@/components/icons";
import { contentLibrary } from "@/lib/content-data";

const featured = contentLibrary[0];
const paidCount = contentLibrary.filter((item) => item.tier === "paid").length;
const freeCount = contentLibrary.filter((item) => item.tier === "free").length;

export function SiteShell() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,rgba(235,175,70,0.35),transparent_34%),radial-gradient(circle_at_top_right,rgba(39,117,255,0.18),transparent_26%),linear-gradient(180deg,rgba(255,248,236,0.92),transparent_72%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(235,175,70,0.20),transparent_34%),radial-gradient(circle_at_top_right,rgba(39,117,255,0.18),transparent_24%),linear-gradient(180deg,rgba(24,17,10,0.72),transparent_72%)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-5 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-20">
          <Surface
            variant="default"
            className="mx-auto flex items-center justify-between gap-4 rounded-full border border-border/60 px-4 py-3 backdrop-blur-xl"
          >
            <NextLink href="/" className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-foreground text-background">
                <SparkIcon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
                  Clubemp
                </p>
                <p className="text-lg font-semibold leading-none">TV</p>
              </div>
            </NextLink>
            <div className="hidden items-center gap-2 md:flex">
              <Chip variant="tertiary">{freeCount} gratuitos</Chip>
              <Chip color="warning" variant="soft">
                {paidCount} premium
              </Chip>
            </div>
          </Surface>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Surface className="overflow-hidden rounded-[2rem] border border-border/60 px-6 py-7 sm:px-8 sm:py-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="space-y-5">
                <Chip color="warning" variant="soft">
                  Template HeroUI v3
                </Chip>
                <div className="space-y-4">
                  <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    Vídeos, podcasts e cursos em um catálogo com cara de
                    produto.
                  </h1>
                  <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
                    Uma home editorial com filtros, destaque premium e páginas
                    de detalhe com comentários, curtir e compartilhar.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <NextLink href="#catalogo">
                    <Button size="lg">Explorar biblioteca</Button>
                  </NextLink>
                  <NextLink href={`/conteudos/${featured.slug}`}>
                    <Button size="lg" variant="outline">
                      Ver destaque
                    </Button>
                  </NextLink>
                </div>
              </div>

              <div
                className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-white/10 p-6 text-white shadow-[0_24px_80px_rgba(65,36,8,0.22)]"
                style={{ background: featured.cover }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_32%),linear-gradient(180deg,transparent,rgba(0,0,0,0.42))]" />
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    <Chip
                      variant="soft"
                      color={featured.tier === "free" ? "success" : "warning"}
                    >
                      {featured.tier === "free"
                        ? "Acesso livre"
                        : "Acesso premium"}
                    </Chip>
                    <Chip variant="tertiary">{featured.category}</Chip>
                  </div>
                  <div className="space-y-4">
                    <p className="max-w-sm text-3xl font-semibold leading-tight">
                      {featured.title}
                    </p>
                    <p className="max-w-md text-sm leading-7 text-white/86">
                      {featured.hook}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-white/80">
                      <span>{featured.duration}</span>
                      <span>{featured.author}</span>
                      <span>{featured.publishedAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Surface>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                label: "Modelo",
                value: "Site multiproduto",
                description:
                  "Um único hub para mídia, educação e catálogo premium.",
              },
              {
                label: "Acesso",
                value: "Free + Paid",
                description:
                  "Itens gratuitos e pagos sinalizados desde a navegação.",
              },
              {
                label: "Interação",
                value: "Curtir e comentar",
                description:
                  "Página de detalhe com feedback e compartilhamento.",
              },
            ].map((item) => (
              <Surface
                key={item.label}
                variant="secondary"
                className="rounded-[1.6rem] border border-border/50 p-5"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-muted">
                  {item.label}
                </p>
                <p className="mt-6 text-2xl font-semibold">{item.value}</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </Surface>
            ))}
          </div>
        </section>

        <section id="catalogo">
          <CatalogBrowser />
        </section>
      </div>
    </main>
  );
}
