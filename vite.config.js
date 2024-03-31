import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from '@zerodevx/svelte-img/vite'
import unocss from 'unocss/vite'

export default {
  plugins: [
    imagetools({
      profiles: {
        run: new URLSearchParams('w=1920&format=avif;webp;jpg'),
      },
    }),
    unocss(),
    sveltekit(),
  ],
}
