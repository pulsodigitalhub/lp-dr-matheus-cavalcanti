# Landing Page — Dr. Matheus Cavalcanti

Landing page de campanha para avaliação em Ortopedia e Traumatologia em Brasília.

## Arquitetura

- HTML semântico estático.
- CSS responsivo em `src/style.css`.
- JavaScript progressivo em `script.js` para tracking, atribuição e interações.
- Build e preview com Vite.

## Conversão

- Destino oficial: Pulso/WhatsApp.
- Eventos `dataLayer`: `click_whatsapp`, `click_phone`, `click_map` e `faq_open`.
- Parâmetros preservados: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `gbraid` e `wbraid`.

## Publicação

O preview é publicado no GitHub Pages por workflow da branch `main`. A versão de produção deve usar o domínio aprovado e receber a configuração final de analytics, canonical e revisão dos convênios.

