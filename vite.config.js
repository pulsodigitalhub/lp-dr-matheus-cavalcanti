import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

const r = (p) => fileURLToPath(new URL(p, import.meta.url))

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: r('index.html'),
        joelho: r('joelho/index.html'),
        ombro: r('ombro/index.html'),
        coluna: r('coluna/index.html'),
        quadril: r('quadril/index.html'),
        'punho-mao': r('punho-mao/index.html'),
        'pe-tornozelo': r('pe-tornozelo/index.html'),
        'convenio-aguas-claras': r('convenio-aguas-claras/index.html'),
        'convenio-asa-norte': r('convenio-asa-norte/index.html'),
      },
    },
  },
})
