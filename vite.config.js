import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from '@zerodevx/svelte-img/vite'
import unocss from 'unocss/vite'

export default {
  plugins: [
    imagetools({
      profiles: {
        run: new URLSearchParams('h=1080&format=avif;webp;jpg'),
      },
    }),
    unocss(),
    sveltekit(),
  ],
}
