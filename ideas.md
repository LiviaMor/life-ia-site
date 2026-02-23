# Design Brainstorm — LIFE IA – Regulação Autônoma

## Abordagem 1: Modernismo Corporativo com Ênfase em Dados
**Probabilidade: 0.08**

**Design Movement:** Modernismo corporativo com influências de design de dados (data visualization aesthetic)

**Core Principles:**
- Hierarquia visual através de tipografia ousada e espaçamento generoso
- Uso estratégico de gráficos e visualizações abstratas como elementos decorativos
- Paleta de cores fria e profissional (azul profundo, cinza neutro, acentos em ciano)
- Assimetria controlada com blocos de conteúdo flutuantes

**Color Philosophy:**
- Primário: Azul profundo (`#0F3A7D`) — confiança, tecnologia, saúde
- Secundário: Cinza escuro (`#2D3E50`) — neutralidade, profissionalismo
- Acentos: Ciano vibrante (`#00D9FF`) — inovação, movimento, dados
- Fundo: Branco com texturas sutis (`#F8FAFB`)
- Intenção emocional: Precisão técnica, segurança, modernidade

**Layout Paradigm:**
- Hero section com imagem à esquerda, texto à direita (assimétrico)
- Seções alternadas: texto-esquerda/imagem-direita, depois invertido
- Cards flutuantes com sombras profundas para a seção de pipeline
- Grid de 3 colunas para diferenciais com ícones abstratos

**Signature Elements:**
1. Linhas diagonais e vetores de movimento em backgrounds
2. Badges com números/estatísticas em destaque (ex: "50ms latência reduzida")
3. Ícones customizados com estilo geométrico minimalista

**Interaction Philosophy:**
- Hover effects que revelam dados adicionais (tooltips com informações técnicas)
- Scroll triggers que ativam animações de entrada em elementos
- Botões com efeito de "ripple" ao clicar

**Animation:**
- Fade-in com slight slide-up ao entrar na viewport (200ms, ease-out)
- Hover em cards: elevação sutil (box-shadow expansion) + mudança de cor
- Números animados (counter animation) ao chegar na seção de estatísticas
- Linhas diagonais com movimento contínuo (SVG stroke animation)

**Typography System:**
- Display: "Poppins" Bold (700) para títulos principais (48px+)
- Heading: "Inter" SemiBold (600) para subtítulos (24-32px)
- Body: "Inter" Regular (400) para texto corrido (16px)
- Accent: "Poppins" Medium (500) para CTAs e labels (14-16px)

---

## Abordagem 2: Minimalismo Médico com Foco em Humanidade
**Probabilidade: 0.09**

**Design Movement:** Minimalismo médico + humanismo digital

**Core Principles:**
- Máxima clareza com mínimo visual
- Foco absoluto no conteúdo textual (tipografia como protagonista)
- Uso de espaço em branco como elemento estrutural
- Imagens grandes e impactantes com pouca interferência visual

**Color Philosophy:**
- Primário: Verde claro (`#10B981`) — saúde, esperança, vida
- Secundário: Cinza suave (`#6B7280`) — neutralidade, confiança
- Acentos: Laranja quente (`#F97316`) — urgência, ação, energia
- Fundo: Off-white (`#FAFBFC`)
- Intenção emocional: Cuidado, segurança, humanidade

**Layout Paradigm:**
- Full-width hero com imagem de fundo (parallax scroll)
- Seções com layout de "card único" — uma coluna larga, muito espaço
- Tipografia em destaque: títulos ocupam 60% da viewport
- Diferenciais em layout vertical com ícones grandes

**Signature Elements:**
1. Tipografia oversized como elemento visual principal
2. Ícones médicos simplificados (stroke-based, não preenchidos)
3. Citações em destaque com aspas grandes em background

**Interaction Philosophy:**
- Interações sutis: hover apenas muda opacidade ou cor
- Scroll suave sem animações agressivas
- Focus states claros para acessibilidade

**Animation:**
- Fade-in simples (300ms) ao entrar na viewport
- Hover em botões: mudança de cor + slight scale (1.02x)
- Scroll parallax na hero (velocidade reduzida)

**Typography System:**
- Display: "Playfair Display" Bold (700) para títulos (52px+)
- Heading: "Lato" SemiBold (600) para subtítulos (28px)
- Body: "Lato" Regular (400) para texto (16px)
- Accent: "Lato" Medium (500) para CTAs (15px)

---

## Abordagem 3: Futurismo Acessível com Gradientes Dinâmicos
**Probabilidade: 0.07**

**Design Movement:** Futurismo acessível + design de movimento

**Core Principles:**
- Gradientes suaves como base visual (não abusar, apenas em backgrounds)
- Movimento constante mas não distrativo (micro-animações)
- Tipografia moderna com kerning apertado
- Ícones 3D ou com efeito de profundidade

**Color Philosophy:**
- Primário: Roxo vibrante (`#7C3AED`) — inovação, futuro, tecnologia
- Secundário: Azul elétrico (`#0EA5E9`) — energia, movimento
- Acentos: Rosa quente (`#EC4899`) — destaque, chamada à ação
- Fundo: Gradiente sutil roxo→azul (`#F3E8FF` → `#E0F2FE`)
- Intenção emocional: Inovação, energia, modernidade

**Layout Paradigm:**
- Hero com gradiente animado de fundo
- Seções com blocos de conteúdo sobrepostos (z-index layering)
- Pipeline com cards em 3D perspective (CSS transform)
- Diferenciais em layout hexagonal ou circular

**Signature Elements:**
1. Gradientes animados em backgrounds (mudança de cor ao scroll)
2. Ícones com efeito de glow/brilho
3. Linhas curvas e orgânicas (SVG blobs)

**Interaction Philosophy:**
- Hover effects com transformação 3D (rotateX, rotateY)
- Clique em elementos revela camadas adicionais
- Scroll ativa mudanças de cor e animações

**Animation:**
- Entrance: fade-in + slide-up com bounce (400ms, cubic-bezier)
- Hover: scale (1.05x) + rotate (2deg) + shadow expansion
- Background gradients: mudança contínua de cores (20s loop)
- Elementos flutuam levemente (floating animation 3s infinite)

**Typography System:**
- Display: "Space Grotesk" Bold (700) para títulos (50px+)
- Heading: "Space Grotesk" SemiBold (600) para subtítulos (26px)
- Body: "Space Mono" Regular (400) para texto (16px) — monospace para tech feel
- Accent: "Space Grotesk" Medium (500) para CTAs (14px)

---

## Decisão: Abordagem 1 — Modernismo Corporativo com Ênfase em Dados

**Justificativa:**
A abordagem 1 (Modernismo Corporativo) é a escolha ideal para LIFE IA porque:

1. **Alinha com o público:** Secretarias de saúde, gestores hospitalares e reguladores respondem melhor a design profissional e técnico
2. **Comunica expertise:** A ênfase em dados e visualizações reforça a sofisticação técnica do pipeline (BioBERT, LLM, RAG)
3. **Diferenciação:** Evita clichês de healthcare (verde + branco) e se destaca no mercado
4. **Escalabilidade:** Fácil de adaptar para futuras landing pages de produtos específicos

**Elementos que serão mantidos:**
- Azul profundo como cor primária (confiança em saúde)
- Ciano como acento (inovação tecnológica)
- Tipografia Poppins + Inter (moderno, legível)
- Assimetria controlada (sofisticação visual)
- Animações sutis (profissionalismo)
