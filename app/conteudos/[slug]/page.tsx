import { Breadcrumbs, Button, Card, Chip, Surface } from "@heroui/react";
import type { Metadata } from "next";
import NextLink from "next/link";
import { notFound } from "next/navigation";

import { CommentsPanel } from "@/components/comments-panel";
import { ContentActions } from "@/components/content-actions";
import { ContentCard } from "@/components/content-card";
import { GraduationIcon, HeadphonesIcon, PlayIcon } from "@/components/icons";
import {
  contentLibrary,
  getContentBySlug,
  getRelatedContent,
  kindLabels,
  tierLabels,
} from "@/lib/content-data";

type DetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return contentLibrary.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentBySlug(slug);

  if (!content) {
    return {
      title: "Conteúdo não encontrado | Clubemp TV",
    };
  }

  return {
    title: `${content.title} | Clubemp TV`,
    description: content.summary,
  };
}

function DetailIcon({ kind }: { kind: "video" | "podcast" | "course" }) {
  const className = "size-5";

  if (kind === "podcast") {
    return <HeadphonesIcon className={className} />;
  }

  if (kind === "course") {
    return <GraduationIcon className={className} />;
  }

  return <PlayIcon className={className} />;
}

export default async function ContentDetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const content = getContentBySlug(slug);

  if (!content) {
    notFound();
  }

  const related = getRelatedContent(content);

  return (
    <main className="relative flex-1 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(235,175,70,0.28),transparent_32%),linear-gradient(180deg,rgba(255,248,236,0.88),transparent_72%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(235,175,70,0.18),transparent_32%),linear-gradient(180deg,rgba(24,17,10,0.7),transparent_72%)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Breadcrumbs className="text-sm">
            <Breadcrumbs.Item href="/">Início</Breadcrumbs.Item>
            <Breadcrumbs.Item href="/#catalogo">Biblioteca</Breadcrumbs.Item>
            <Breadcrumbs.Item>{content.title}</Breadcrumbs.Item>
          </Breadcrumbs>
          <NextLink href="/">
            <Button variant="ghost">Voltar</Button>
          </NextLink>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Surface className="overflow-hidden rounded-[2rem] border border-border/60 p-6 sm:p-8">
            <div
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 p-6 text-white"
              style={{ background: content.cover }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_30%),linear-gradient(180deg,transparent,rgba(0,0,0,0.5))]" />
              <div className="relative flex min-h-[24rem] flex-col justify-between gap-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-3 py-1 text-sm backdrop-blur-sm">
                    <DetailIcon kind={content.kind} />
                    {kindLabels[content.kind]}
                  </span>
                  <Chip
                    color={content.tier === "free" ? "success" : "warning"}
                    variant="soft"
                  >
                    {tierLabels[content.tier]}
                  </Chip>
                </div>

                <div className="space-y-4">
                  <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
                    {content.title}
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-white/84 sm:text-lg">
                    {content.hook}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
                    <span>{content.author}</span>
                    <span>{content.duration}</span>
                    <span>{content.level}</span>
                    <span>{content.publishedAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </Surface>

          <div className="grid gap-4">
            <Surface
              variant="secondary"
              className="rounded-[1.75rem] border border-border/50 p-6"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-muted">
                Sobre este conteúdo
              </p>
              <p className="mt-4 text-sm leading-8 text-foreground/88">
                {content.detail.about}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {content.tags.map((tag) => (
                  <Chip key={tag} variant="secondary">
                    {tag}
                  </Chip>
                ))}
              </div>
            </Surface>

            <Surface className="rounded-[1.75rem] border border-border/60 p-6">
              <div className="space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted">
                    Acesso
                  </p>
                  <p className="mt-3 text-2xl font-semibold">
                    {content.tier === "free"
                      ? "Disponível para todos"
                      : "Disponível para assinantes"}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {content.tier === "free"
                      ? "Este item demonstra um conteúdo aberto, ideal para aquisição e descoberta."
                      : "Este item demonstra uma página premium com sinalização de valor e acesso restrito."}
                  </p>
                </div>
                <ContentActions
                  title={content.title}
                  initialLikes={content.stats.likes}
                />
              </div>
            </Surface>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Card className="rounded-[1.75rem] border border-border/60">
              <Card.Header className="space-y-3">
                <Card.Title className="text-2xl">
                  O que você vai encontrar
                </Card.Title>
                <Card.Description className="text-sm leading-7 text-muted">
                  Resumo rápido do valor entregue por esta página de
                  demonstração.
                </Card.Description>
              </Card.Header>
              <Card.Content className="grid gap-4">
                {content.detail.takeaways.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-border/50 bg-surface-secondary/60 p-4 text-sm leading-7"
                  >
                    {item}
                  </div>
                ))}
              </Card.Content>
            </Card>

            <Card className="rounded-[1.75rem] border border-border/60">
              <Card.Header>
                <Card.Title className="text-2xl">Estrutura</Card.Title>
                <Card.Description className="text-sm leading-7 text-muted">
                  Blocos que compõem o conteúdo e sustentam a navegação premium.
                </Card.Description>
              </Card.Header>
              <Card.Content className="grid gap-3">
                {content.detail.outline.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-[1.25rem] border border-border/50 bg-background/70 px-4 py-3"
                  >
                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </Card.Content>
            </Card>
          </div>

          <CommentsPanel initialComments={content.comments} />
        </section>

        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted">
                Relacionados
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Continue navegando
              </h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <ContentCard key={item.slug} content={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
