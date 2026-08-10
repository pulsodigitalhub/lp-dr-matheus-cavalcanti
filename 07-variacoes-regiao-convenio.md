# Variações — 6 regiões do corpo + 2 bairro + 1 convênio (2026-08-10)

## Contexto

Mesma lógica das variações do Dr. Gustavo Pimpão (repo `calilmf/lp-dr-gustavo-pimpao`),
verificada diretamente no repo dele antes de escrever qualquer HTML, não
assumida de memória. A referência real tem 3 tipos de página distintos:

1. **Página de região do corpo** (`/medico-ombro/` etc.) — conteúdo profundo:
   sintomas específicos da região, causas/queixas comuns específicas,
   FAQ próprio. Reescreve boa parte da página.
2. **Página de bairro** (`/ortopedista-aguas-claras/`, `/ortopedista-asa-sul/`,
   `/ortopedista-taguatinga/`) — só troca o título do hero
   (`heroLocationVariants`, um mapa pathname→título aplicado em cima do
   conteúdo padrão da home). Nada mais muda.
3. **Página de convênio** (`/convenio/`) — mesma lógica hero-only do item 2,
   **uma página só, sem nome de bairro**.

**Correção de rota:** a primeira versão desta entrega juntou bairro+convênio
em 2 páginas (`convenio-aguas-claras`, `convenio-asa-norte`) — não existe
esse padrão na referência real. Corrigido pra 3 páginas separadas (2 de
bairro + 1 de convênio genérica), e as 6 páginas de região ganharam o
conteúdo profundo que faltava (antes só trocavam o hero, igual bairro/convênio
— errado, região tem que ser tratamento igual ao item 1 acima).

## Estrutura final (9 páginas + a principal)

**Região (conteúdo profundo — sintomas + causas específicos):**
`joelho/`, `ombro/`, `coluna/`, `quadril/`, `punho-mao/`, `pe-tornozelo/`

**Bairro (hero-only):**
`ortopedista-aguas-claras/` → "Ortopedista em Águas Claras"
`ortopedista-asa-norte/` → "Ortopedista na Asa Norte"

**Convênio genérico (hero-only, sem bairro):**
`convenio/` → "Ortopedia pelo Convênio em Brasília"

## O que muda em cada tipo

**Todas:** `<title>`, meta description, og/twitter, `canonical`, `og:url`,
campos `@id`/`url` do JSON-LD → path da variação, domínio
`drmatheuscavalcantidf.com.br`. `<h1>` e `hero-lead`.

**Só região:** a seção "Regiões atendidas" (`id="sintomas"`) é substituída
por 6 cards de sintomas específicos da região (mesmo grid `.region-list`,
ícone do healthicon já usado pra essa região no site — repetido nos 6 cards,
não um ícone por sintoma, pra não arriscar ícone semanticamente errado sem
biblioteca de harvest+contact-sheet nesse repo). Logo depois, nova seção
"Possíveis causas" com mais 6 cards (ícone `fa-solid fa-bone`, Font Awesome
já carregado no site), causas/condições comuns daquela região.

**Só bairro/convênio:** ordem do grid de 2 unidades reordenada pra unidade
correspondente aparecer primeiro (bairro) ou mantida como está (convênio,
genérico, sem preferência de unidade).

**Nunca muda:** lista de 46 convênios, CRM/RQE, bio do médico, tratamentos,
comorbidades, como funciona, FAQ, footer, imagens, CSS, JS, GTM.

## Fonte do conteúdo (nada inventado)

Sintomas/causas por região são terminologia ortopédica padrão (ex.: hérnia
de disco, síndrome do túnel do carpo, fascite plantar) — condições reais que
qualquer ortopedista avalia, sem promessa de resultado, com a mesma cautela
de "a conduta é definida após avaliação" já usada no resto do site. Não são
depoimento, número ou dado específico do Dr. Matheus — não precisam de
`[A VALIDAR]`.

Hero-lead de bairro reaproveita endereço/clínica já publicados na seção
"Atendimento" da página principal (Fisio & Forma/Águas Claras, Clínica
Salus/Asa Norte).

## Arquitetura

Vite multi-página (`vite.config.js`, `build.rollupOptions.input`, 10 entradas:
principal + 9). Caminhos de imagem trocados de `./assets/` (relativo, quebra
em subpasta) pra `/assets/` (absoluto).

## Verificação

- `npx vite build` — build limpo, assets do `public/` copiados.
- Verificado ao vivo via `vite preview`: conteúdo de texto (region/causas/
  bairro/convênio) via leitura de DOM, ícones confirmados renderizando via
  JS (Font Awesome carregado, healthicon com mask-image correto, ambos com
  bounding box não-nulo) e via screenshot em viewport ampliado (o painel de
  preview não rolava de forma confiável nesta sessão — contornado com
  viewport alto o suficiente pra caber a seção sem rolagem).

## Pendência

- `[A VALIDAR]` Criação de grupos de anúncio/keywords no Google Ads Editor
  pra essas 9 rotas — fora do escopo desta entrega de LP.
