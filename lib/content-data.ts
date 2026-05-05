export type ContentKind = "video" | "podcast" | "course";
export type AccessTier = "free" | "paid";

export type ContentComment = {
  id: string;
  author: string;
  role: string;
  body: string;
  postedAt: string;
};

export type CatalogContent = {
  slug: string;
  title: string;
  kind: ContentKind;
  tier: AccessTier;
  category: string;
  duration: string;
  level: string;
  author: string;
  publishedAt: string;
  cover: string;
  summary: string;
  hook: string;
  tags: string[];
  stats: {
    likes: number;
    shares: number;
    comments: number;
  };
  detail: {
    about: string;
    takeaways: string[];
    outline: string[];
  };
  comments: ContentComment[];
};

export const contentLibrary: CatalogContent[] = [
  {
    slug: "estrategia-de-conteudo-que-vende",
    title: "Estratégia de Conteúdo Que Vende",
    kind: "video",
    tier: "free",
    category: "Marketing",
    duration: "24 min",
    level: "Intermediário",
    author: "Marina Costa",
    publishedAt: "02 Mai 2026",
    cover:
      "linear-gradient(135deg, oklch(0.82 0.15 82) 0%, oklch(0.67 0.14 46) 52%, oklch(0.54 0.16 20) 100%)",
    summary:
      "Uma aula direta sobre como transformar calendário editorial em pipeline previsível.",
    hook: "Modelo prático para atrair, nutrir e converter sem depender de improviso.",
    tags: ["Conteúdo", "Funil", "Posicionamento"],
    stats: {
      likes: 482,
      shares: 119,
      comments: 18,
    },
    detail: {
      about:
        "Esta demonstração mostra um vídeo gratuito voltado para donos de negócio e times de marketing que precisam criar um plano editorial com objetivo comercial claro.",
      takeaways: [
        "Como definir pilares editoriais por estágio do funil.",
        "Como separar conteúdo de autoridade, ativação e retenção.",
        "Como medir sinais de intenção em vez de apenas volume de views.",
      ],
      outline: [
        "Diagnóstico de posicionamento",
        "Mapa de temas e formatos",
        "Ritmo de distribuição",
        "Checklist de conversão por peça",
      ],
    },
    comments: [
      {
        id: "c-1",
        author: "Aline Prado",
        role: "Assinante Pro",
        body: "Gostei da parte sobre conteúdo de ativação. Está simples e aplicável.",
        postedAt: "há 2 horas",
      },
      {
        id: "c-2",
        author: "Rafael Souza",
        role: "Membro",
        body: "Seria útil ter um template de pauta derivado desse framework.",
        postedAt: "há 1 dia",
      },
    ],
  },
  {
    slug: "podcast-operacao-enxuta-para-criadores",
    title: "Operação Enxuta Para Criadores",
    kind: "podcast",
    tier: "free",
    category: "Operações",
    duration: "41 min",
    level: "Todos os níveis",
    author: "Pedro Muniz",
    publishedAt: "28 Abr 2026",
    cover:
      "linear-gradient(135deg, oklch(0.78 0.12 200) 0%, oklch(0.64 0.14 230) 45%, oklch(0.42 0.1 260) 100%)",
    summary:
      "Conversa sobre processos, agenda e produção recorrente sem sacrificar qualidade.",
    hook: "Bastidores de uma rotina de publicação sustentável para pequenos times.",
    tags: ["Processos", "Criadores", "Rotina"],
    stats: {
      likes: 316,
      shares: 87,
      comments: 12,
    },
    detail: {
      about:
        "Um episódio com foco em fluxo de trabalho, gestão de backlog e formas de evitar gargalos quando o time é enxuto e o volume de produção cresce.",
      takeaways: [
        "Como organizar produção semanal por blocos.",
        "Quando documentar processo e quando não vale a pena.",
        "Como tratar edição, aprovação e publicação como uma mesma operação.",
      ],
      outline: [
        "Rotina de gravação",
        "Fila de edição",
        "Aprovação sem retrabalho",
        "Indicadores operacionais",
      ],
    },
    comments: [
      {
        id: "c-3",
        author: "Camila Rocha",
        role: "Assinante Pro",
        body: "A parte sobre backlog respirável deveria ser regra em todo time.",
        postedAt: "há 3 horas",
      },
    ],
  },
  {
    slug: "curso-playbook-de-lancamento-digital",
    title: "Playbook de Lançamento Digital",
    kind: "course",
    tier: "paid",
    category: "Vendas",
    duration: "6h 20m",
    level: "Avançado",
    author: "Bianca Leal",
    publishedAt: "15 Abr 2026",
    cover:
      "linear-gradient(135deg, oklch(0.81 0.14 150) 0%, oklch(0.7 0.18 120) 38%, oklch(0.47 0.12 165) 100%)",
    summary:
      "Curso estruturado em módulos com planejamento, copy, tráfego e análise pós-campanha.",
    hook: "Para equipes que precisam repetir lançamentos com menos risco e mais controle.",
    tags: ["Lançamento", "Oferta", "Métricas"],
    stats: {
      likes: 691,
      shares: 204,
      comments: 29,
    },
    detail: {
      about:
        "Curso pago com trilha completa para modelagem de oferta, cronograma de campanha, distribuição e leitura de resultados. A página de demonstração simula um conteúdo premium.",
      takeaways: [
        "Como sequenciar aquecimento, captação e abertura de carrinho.",
        "Como identificar gargalos por etapa da campanha.",
        "Como montar uma leitura pós-lançamento sem autoengano.",
      ],
      outline: [
        "Arquitetura da oferta",
        "Calendário de lançamento",
        "Criativos e páginas",
        "Leitura de cohort e ROI",
      ],
    },
    comments: [
      {
        id: "c-4",
        author: "Lucas Tavares",
        role: "Aluno",
        body: "O módulo sobre análise pós-campanha foi o que mais elevou o nível aqui.",
        postedAt: "há 4 dias",
      },
      {
        id: "c-5",
        author: "Bruna Melo",
        role: "Assinante Pro",
        body: "Gostaria de ver um estudo de caso B2B na próxima atualização.",
        postedAt: "há 5 dias",
      },
    ],
  },
  {
    slug: "video-funil-de-vendas-b2b-sem-achismo",
    title: "Funil de Vendas B2B Sem Achismo",
    kind: "video",
    tier: "paid",
    category: "Revenue",
    duration: "32 min",
    level: "Intermediário",
    author: "Thiago Nunes",
    publishedAt: "10 Abr 2026",
    cover:
      "linear-gradient(135deg, oklch(0.78 0.15 335) 0%, oklch(0.62 0.19 355) 44%, oklch(0.42 0.13 25) 100%)",
    summary:
      "Framework visual para conectar aquisição, qualificação e fechamento com métricas úteis.",
    hook: "Diagnóstico de conversão por etapa para reduzir ruído de operação.",
    tags: ["B2B", "Pipeline", "Forecast"],
    stats: {
      likes: 402,
      shares: 98,
      comments: 16,
    },
    detail: {
      about:
        "Conteúdo premium voltado para líderes comerciais que precisam clareza sobre qualidade de oportunidade, tempo de ciclo e previsibilidade de receita.",
      takeaways: [
        "Como mapear stages por compromisso real do lead.",
        "Como diferenciar gargalo comercial de gargalo de marketing.",
        "Como usar taxa de avanço com contexto.",
      ],
      outline: [
        "Estrutura de stages",
        "Critérios de passagem",
        "Pipeline review",
        "Forecast operativo",
      ],
    },
    comments: [
      {
        id: "c-6",
        author: "Renata Lima",
        role: "Membro",
        body: "A definição de cada stage me ajudou a revisar o CRM da empresa.",
        postedAt: "há 6 horas",
      },
    ],
  },
  {
    slug: "podcast-design-de-oferta-premium",
    title: "Design de Oferta Premium",
    kind: "podcast",
    tier: "paid",
    category: "Produto",
    duration: "53 min",
    level: "Avançado",
    author: "Helena Barros",
    publishedAt: "05 Abr 2026",
    cover:
      "linear-gradient(135deg, oklch(0.84 0.12 18) 0%, oklch(0.7 0.13 8) 35%, oklch(0.48 0.09 325) 100%)",
    summary:
      "Discussão sobre percepção de valor, precificação e entrega para produtos de ticket mais alto.",
    hook: "Como estruturar uma oferta premium sem esconder fraquezas atrás de copy.",
    tags: ["Oferta", "Ticket Alto", "Valor"],
    stats: {
      likes: 255,
      shares: 61,
      comments: 9,
    },
    detail: {
      about:
        "Episódio pago com foco em valor percebido, desenho de promessa e coerência entre marketing, vendas e entrega do produto.",
      takeaways: [
        "O que sustenta uma oferta premium além da estética.",
        "Como evitar empilhar bônus que não aumentam conversão.",
        "Como alinhar promessa e experiência entregue.",
      ],
      outline: [
        "Diagnóstico da proposta",
        "Preço e ancoragem",
        "Oferta e provas",
        "Entrega premium",
      ],
    },
    comments: [
      {
        id: "c-7",
        author: "Daniel Ferreira",
        role: "Aluno",
        body: "Boa provocação sobre preço alto sem clareza de transformação.",
        postedAt: "há 2 dias",
      },
    ],
  },
  {
    slug: "curso-operacao-de-membership-recorrente",
    title: "Operação de Membership Recorrente",
    kind: "course",
    tier: "free",
    category: "Comunidade",
    duration: "3h 10m",
    level: "Intermediário",
    author: "Fernanda Alves",
    publishedAt: "29 Mar 2026",
    cover:
      "linear-gradient(135deg, oklch(0.86 0.12 110) 0%, oklch(0.7 0.17 85) 35%, oklch(0.46 0.1 120) 100%)",
    summary:
      "Mini curso gratuito sobre retenção, programação editorial e entrega contínua para comunidades pagas.",
    hook: "Base estrutural para quem está saindo do produto isolado para receita recorrente.",
    tags: ["Membership", "Retenção", "Comunidade"],
    stats: {
      likes: 523,
      shares: 142,
      comments: 22,
    },
    detail: {
      about:
        "Curso gratuito com visão operacional para negócios de assinatura, cobrindo onboarding, cadence de entrega e sinais de cancelamento.",
      takeaways: [
        "Como desenhar uma programação que sustenta recorrência.",
        "Como reduzir churn por onboarding ruim.",
        "Quais métricas importam nos 90 primeiros dias.",
      ],
      outline: [
        "Onboarding",
        "Ritmo de conteúdo",
        "Gestão de comunidade",
        "Saúde de retenção",
      ],
    },
    comments: [
      {
        id: "c-8",
        author: "Patrícia Gomes",
        role: "Membro",
        body: "Material enxuto e melhor que muita trilha longa por aí.",
        postedAt: "há 8 horas",
      },
    ],
  },
];

export const kindLabels: Record<ContentKind, string> = {
  video: "Vídeo",
  podcast: "Podcast",
  course: "Curso",
};

export const tierLabels: Record<AccessTier, string> = {
  free: "Gratuito",
  paid: "Pago",
};

export function getContentBySlug(slug: string) {
  return contentLibrary.find((item) => item.slug === slug);
}

export function getRelatedContent(content: CatalogContent) {
  return contentLibrary
    .filter((item) => item.slug !== content.slug)
    .filter(
      (item) =>
        item.kind === content.kind ||
        item.category === content.category ||
        item.tier === content.tier,
    )
    .slice(0, 3);
}
