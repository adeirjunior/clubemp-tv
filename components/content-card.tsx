import { Card, Chip } from "@heroui/react";
import NextLink from "next/link";
import { GraduationIcon, HeadphonesIcon, PlayIcon } from "@/components/icons";
import type { CatalogContent } from "@/lib/content-data";
import { kindLabels, tierLabels } from "@/lib/content-data";

function KindIcon({ kind }: { kind: CatalogContent["kind"] }) {
  const className = "size-4";

  if (kind === "podcast") {
    return <HeadphonesIcon className={className} />;
  }

  if (kind === "course") {
    return <GraduationIcon className={className} />;
  }

  return <PlayIcon className={className} />;
}

export function ContentCard({ content }: { content: CatalogContent }) {
  return (
    <NextLink
      href={`/conteudos/${content.slug}`}
      className="group block h-full"
    >
      <Card
        variant="default"
        className="h-full border border-border/60 bg-surface/90 transition-transform duration-200 group-hover:-translate-y-1 group-hover:border-foreground/15"
      >
        <Card.Header className="gap-4">
          <div
            className="relative overflow-hidden rounded-[calc(var(--radius)*2)] border border-white/10 p-5 text-white"
            style={{ background: content.cover }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_32%),linear-gradient(180deg,transparent,rgba(0,0,0,0.26))]" />
            <div className="relative flex min-h-44 flex-col justify-between gap-8">
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  <KindIcon kind={content.kind} />
                  {kindLabels[content.kind]}
                </span>
                <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs">
                  {content.duration}
                </span>
              </div>
              <div className="space-y-2">
                <p className="max-w-60 text-balance text-2xl font-semibold leading-tight">
                  {content.title}
                </p>
                <p className="max-w-72 text-sm text-white/84">{content.hook}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Chip
              color={content.tier === "free" ? "success" : "warning"}
              variant="soft"
            >
              {tierLabels[content.tier]}
            </Chip>
            <Chip variant="secondary">{content.category}</Chip>
            <Chip variant="tertiary">{content.level}</Chip>
          </div>
          <div className="space-y-2">
            <Card.Title className="text-xl">{content.title}</Card.Title>
            <Card.Description className="text-sm leading-6 text-muted">
              {content.summary}
            </Card.Description>
          </div>
        </Card.Header>
        <Card.Content className="mt-auto grid gap-4 pt-0">
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-border/60 pt-4 text-sm text-muted">
            <span>{content.author}</span>
            <span>{content.publishedAt}</span>
          </div>
        </Card.Content>
      </Card>
    </NextLink>
  );
}
