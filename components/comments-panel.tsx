"use client";

import { Avatar, Button, Surface, TextArea } from "@heroui/react";
import { startTransition, useState } from "react";

import type { ContentComment } from "@/lib/content-data";

type CommentsPanelProps = {
  initialComments: ContentComment[];
};

export function CommentsPanel({ initialComments }: CommentsPanelProps) {
  const [comments, setComments] = useState(initialComments);
  const [draft, setDraft] = useState("");

  function handlePublish() {
    const value = draft.trim();

    if (!value) {
      return;
    }

    startTransition(() => {
      setComments((current) => [
        {
          id: `draft-${current.length + 1}`,
          author: "Você",
          role: "Visitante",
          body: value,
          postedAt: "agora",
        },
        ...current,
      ]);
      setDraft("");
    });
  }

  return (
    <div className="space-y-6">
      <Surface
        variant="secondary"
        className="rounded-[calc(var(--radius)*3)] p-5"
      >
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Comentários</h3>
            <p className="text-sm text-muted">
              Demonstração local com envio client-side e dados mockados.
            </p>
          </div>
          <TextArea
            fullWidth
            rows={4}
            value={draft}
            variant="secondary"
            placeholder="Escreva sua opinião sobre este conteúdo"
            onChange={(event) => setDraft(event.target.value)}
          />
          <div className="flex justify-end">
            <Button onPress={handlePublish}>Publicar comentário</Button>
          </div>
        </div>
      </Surface>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Surface
            key={comment.id}
            variant="default"
            className="rounded-[calc(var(--radius)*3)] border border-border/60 p-5"
          >
            <div className="flex gap-4">
              <Avatar color="accent" variant="soft">
                <Avatar.Fallback>
                  {comment.author
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </Avatar.Fallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="font-medium">{comment.author}</p>
                  <span className="text-sm text-muted">{comment.role}</span>
                  <span className="text-sm text-muted">{comment.postedAt}</span>
                </div>
                <p className="text-sm leading-7 text-foreground/88">
                  {comment.body}
                </p>
              </div>
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );
}
