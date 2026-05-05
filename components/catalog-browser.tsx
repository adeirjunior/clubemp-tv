"use client";

import { Input, Tabs } from "@heroui/react";
import { useDeferredValue, useState } from "react";

import { ContentCard } from "@/components/content-card";
import { type ContentKind, contentLibrary } from "@/lib/content-data";

const tabConfig: Array<{ id: ContentKind | "all"; label: string }> = [
  { id: "all", label: "Tudo" },
  { id: "video", label: "Vídeos" },
  { id: "podcast", label: "Podcasts" },
  { id: "course", label: "Cursos" },
];

export function CatalogBrowser() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  return (
    <Tabs defaultSelectedKey="all" className="w-full gap-6" variant="secondary">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted">
            Biblioteca
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Um catálogo editorial com vídeos, podcasts e cursos
          </h2>
        </div>
        <div className="w-full max-w-md">
          <Input
            aria-label="Buscar conteúdos"
            className="w-full"
            fullWidth
            placeholder="Busque por título, categoria ou tag"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>

      <Tabs.ListContainer className="overflow-x-auto">
        <Tabs.List
          aria-label="Tipos de conteúdo"
          className="w-fit rounded-full border border-border/60 bg-surface-secondary/70 p-1 *:rounded-full *:px-4 *:py-2 *:text-sm *:font-medium *:transition-colors *:data-[selected=true]:bg-foreground *:data-[selected=true]:text-background"
        >
          {tabConfig.map((tab, index) => (
            <Tabs.Tab key={tab.id} id={tab.id}>
              {index > 0 ? <Tabs.Separator className="hidden" /> : null}
              {tab.label}
              <Tabs.Indicator />
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs.ListContainer>

      {tabConfig.map((tab) => {
        const items = contentLibrary.filter((item) => {
          const matchesKind = tab.id === "all" || item.kind === tab.id;
          const haystack = [
            item.title,
            item.category,
            item.summary,
            item.author,
            ...item.tags,
          ]
            .join(" ")
            .toLowerCase();
          const matchesQuery =
            !normalizedQuery || haystack.includes(normalizedQuery);

          return matchesKind && matchesQuery;
        });

        return (
          <Tabs.Panel key={tab.id} id={tab.id} className="pt-1">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-sm text-muted">
                {items.length} item{items.length === 1 ? "" : "s"} disponível
                {items.length === 1 ? "" : "is"}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {items.map((content) => (
                <ContentCard key={content.slug} content={content} />
              ))}
            </div>
          </Tabs.Panel>
        );
      })}
    </Tabs>
  );
}
