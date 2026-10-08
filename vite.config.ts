import adapter from '@sveltejs/adapter-static'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { svelteSitemap } from 'svelte-sitemap/vite'
import { imagetools } from 'vite-imagetools'

const cfg = {
  plugins: [
    imagetools(),
    tailwindcss(),
    sveltekit({
      adapter: adapter({ fallback: '404.html' }),
      paths: { relative: false },
    }),
    svelteSitemap({ domain: 'https://benpa.ng' }),
  ],
}

export default cfg
