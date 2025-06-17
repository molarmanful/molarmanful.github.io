import { sveltekit } from '@sveltejs/kit/vite'
import unocss from 'unocss/vite'
import { imagetools } from 'vite-imagetools'

export default {
  plugins: [
    imagetools(),
    unocss(),
    sveltekit(),
  ],
}
