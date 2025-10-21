import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'
import { imagetools } from 'vite-imagetools'

export default {
  plugins: [
    imagetools(),
    tailwindcss(),
    sveltekit(),
    legacy({
      modernPolyfills: ['proposals/set-methods-v2'],
      renderLegacyChunks: false,
    }),
  ],
}
