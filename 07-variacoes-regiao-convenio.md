# Variações — 6 regiões do corpo + 2 convênio (2026-08-10)

## Contexto

Mesma lógica das variações do Dr. Gustavo Pimpão (1 página por queixa/ângulo
de campanha, adaptando a comunicação da página principal), mas **não é cópia
das páginas do Pimpão** — o Dr. Matheus tem stack diferente (HTML/CSS/JS
estático + Vite multi-página, sem React) e conteúdo próprio. A página
principal (`index.html`) é a base; cada variação altera só o necessário pra
focar a comunicação na região/unidade, sem inventar dado novo.

## O que muda por página (e o que NÃO muda)

**Muda:**
- `<title>`, meta description, og/twitter title+description, `canonical`,
  `og:url`, e os campos `@id`/`url` do JSON-LD — todos apontando pro path da
  variação (`/joelho/`, `/convenio-aguas-claras/`, etc.), domínio
  `drmatheuscavalcantidf.com.br`.
- `<h1>` e o parágrafo `hero-lead` — específicos da região/unidade.
- Ordem do grid "Regiões atendidas" (regiões) ou dos 2 blocos de localização
  (convênio) — a região/unidade da página sobe pro topo, sem remover as
  outras (o médico atende as 6 regiões e as 2 unidades de verdade, esconder
  isso seria informação incompleta, não foco).

**Não muda:** lista de 46 convênios, CRM/RQE, bio do médico, tratamentos,
FAQ, footer, imagens, CSS, JS, GTM. Tudo isso já é real e validado na página
principal — reescrever seria risco de inconsistência sem ganho.

## Fonte de cada copy (nada inventado)

Os textos de `hero-lead` de cada região são a descrição JÁ PUBLICADA no card
correspondente da seção "Regiões atendidas" da página principal, só
reformatada em frase (não são dado novo, é o mesmo texto que já está no ar
hoje, aprovado):

| Região | Texto-fonte (já publicado em `index.html`) |
|---|---|
| Joelho | "Dor, inchaço, instabilidade ou dificuldade para caminhar e subir escadas." |
| Ombro | "Dificuldade para elevar o braço, vestir-se, trabalhar ou dormir." |
| Coluna | "Dor cervical ou lombar que interfere na postura e nas atividades do dia." |
| Quadril | "Dor ao caminhar, sentar, levantar ou permanecer em uma mesma posição." |
| Punho e mão | "Dor, formigamento, perda de força ou limitação para atividades manuais." |
| Pé e tornozelo | "Dor, entorses, instabilidade ou dificuldade para apoiar o peso do corpo." |

Convênio: unidade/endereço de cada bairro (Fisio & Forma/Águas Claras,
Clínica Salus/Asa Norte) já publicados na seção "Atendimento" da página
principal.

## Arquitetura

Vite multi-página (`vite.config.js`, `build.rollupOptions.input`) — cada
pasta (`joelho/`, `ombro/`, `coluna/`, `quadril/`, `punho-mao/`,
`pe-tornozelo/`, `convenio-aguas-claras/`, `convenio-asa-norte/`) tem seu
próprio `index.html`, todas compartilhando o mesmo `script.js`/`src/style.css`
já bundlados/hasheados pelo build. Caminhos de imagem trocados de `./assets/`
(relativo, quebraria em subpasta) pra `/assets/` (absoluto, funciona em
qualquer profundidade).

## Verificação

- `npx vite build` — 9 entradas (principal + 8), build limpo, assets do
  `public/` copiados corretamente.
- Verificado ao vivo via `vite preview`: hero, H1, ordem do grid de regiões,
  ordem das localizações, canonical, contagem de convênios (46) e
  carregamento de imagem, em desktop e mobile (375×812).

## Pendência

- `[A VALIDAR]` Domínio/URL definitivos das novas rotas em campanhas do
  Google Ads (as páginas estão prontas e publicadas no domínio de produção,
  mas a criação dos grupos de anúncio/keywords no Ads Editor é passo
  separado, fora do escopo desta entrega de LP).
