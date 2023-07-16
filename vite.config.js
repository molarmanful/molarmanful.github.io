import { imagetools } from 'vite-imagetools'
import unocss from 'unocss/vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default {
  plugins: [
    imagetools(),
    unocss(),
    sveltekit(),
  ],
}