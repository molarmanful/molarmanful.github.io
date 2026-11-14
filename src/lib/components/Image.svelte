<script lang='ts'>
  import type { ClassValue, HTMLImgAttributes } from 'svelte/elements'

  import type { Imgs } from '#lib/ts/meta.ts'

  import { ws } from '#common/meta.js'

  const { type, imgs, name, sizes, class: clazz, ...rest }:
    & Omit<HTMLImgAttributes, 'class'>
    & {
      type: 'covers' | 'art' | 'media'
      imgs: Imgs
      name: string
      class?: ClassValue
      sizes?: string
    } = $props()

  const ws1 = ws.toReversed()
  const url = (w = ws1.at(-1) ?? 0, x = 'jpg') =>
    `https://cdn.benpa.ng/${type}%40${name}%40${
      imgs.hash[name]
    }%40${w.toString()}.${x}`
  const urls = (x = 'jpg') =>
    ws1.map(w => `${url(w, x)} ${w.toString()}w`).join(', ')

  const lqip = $derived(imgs.lqip[name])
  const meta = $derived(imgs.size[name])

  const srcsets = $derived({
    avif: urls('avif'),
    webp: urls('webp'),
    jpg: urls('jpg'),
  })

  let isLoaded = $state(false)
</script>

<picture>
  {#each ['avif', 'webp'] as const as x (x)}
    <source {sizes} srcset={srcsets[x]} type='image/{x}' />
  {/each}

  <img
    style:background={lqip && `url(${lqip}) center center / contain no-repeat`}
    class={[
      'max-h-screen w-screen lazy object-contain text-[0rem]',
      { loaded: isLoaded },
      clazz,
    ]}
    alt={name}
    decoding='async'
    height={meta.height}
    loading='lazy'
    onload={() => isLoaded = true}
    {sizes}
    src={url()}
    srcset={srcsets.jpg}
    width={meta.width}
    {...rest}
  />
</picture>
