"use client";

import { Button } from "@heroui/react";
import { useState } from "react";

import { HeartIcon, ShareIcon } from "@/components/icons";

type ContentActionsProps = {
  title: string;
  initialLikes: number;
};

export function ContentActions({ title, initialLikes }: ContentActionsProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [shareLabel, setShareLabel] = useState("Compartilhar");

  async function handleShare() {
    const shareData = {
      title,
      text: `Confira este conteúdo: ${title}`,
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(shareData);
      setShareLabel("Compartilhado");
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    setShareLabel("Link copiado");
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant={liked ? "primary" : "outline"}
        onPress={() => {
          setLiked((current) => {
            const next = !current;
            setLikes((count) => count + (next ? 1 : -1));
            return next;
          });
        }}
      >
        <HeartIcon className="size-4" />
        {liked ? "Curtido" : "Curtir"}
        <span className="text-muted">{likes}</span>
      </Button>
      <Button variant="secondary" onPress={() => void handleShare()}>
        <ShareIcon className="size-4" />
        {shareLabel}
      </Button>
    </div>
  );
}
