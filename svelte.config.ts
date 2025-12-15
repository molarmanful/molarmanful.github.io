import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  compilerOptions: {
    experimental: {
      async: true,
    },
  },
  preprocess: vitePreprocess,
  kit: {
    adapter: adapter({
      fallback: '404.html',
    }),
    paths: {
      relative: false,
    },
    alias: {
      $common: 'src/common',
    },
  },
}
