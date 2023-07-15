import { sveltekit } from '@sveltejs/kit/vite'
import favicon from 'vite-plugin-favicons-inject'
import unocss from 'unocss/vite'

export default {
  plugins: [
    unocss(),
    // favicon('./src/lib/media/logo.png'),
    sveltekit(),
  ],
}