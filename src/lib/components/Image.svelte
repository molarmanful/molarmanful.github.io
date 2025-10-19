<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import hashesRaw from '$common/hashes.json'
  import { ws } from '$common/meta'
  import { art, covers, media } from '$lib/ts/meta'

  interface Props extends Omit<HTMLImgAttributes, 'class'> {
    type: 'covers' | 'art' | 'media'
    name: string
    mt?: boolean
    class?: string | unknown[]
    sizes?: string
  }

  const { type, name, sizes, class: clazz = [], ...rest }: Props = $props()

  const imgs = { covers, art, media }
  const hashes = hashesRaw as Record<
    'covers' | 'art' | 'media',
    Record<string, string>
  >

  const ws1 = ws.toReversed()
  const url = (name: string, w = ws1.at(-1) ?? 0, x = 'jpg') =>
    `https://cdn.benpa.ng/${type}%40${name}%40${
      hashes[type][name]
    }%40${w.toString()}.${x}`
  const urls = (name: string, x = 'jpg') =>
    ws1.map(w => `${url(name, w, x)} ${w.toString()}w`).join(', ')

  const lqip = $derived(imgs[type][0][name])
  const meta = $derived(imgs[type][1][name])

  const srcsets = $derived({
    avif: urls(name, 'avif'),
    webp: urls(name, 'webp'),
    jpg: urls(name, 'jpg'),
  })

  let loaded = $state(false)
</script>

<picture>
  {#each ['avif', 'webp'] as const as x}
    <source {sizes} srcset={srcsets[x]} type='image/{x}'>
  {/each}

  <img
    style:background={lqip && `url(${lqip}) center center / contain no-repeat`}
    class={[
      'max-h-screen w-screen lazy object-contain text-[0rem]',
      { loaded },
      clazz,
    ]}
    alt={name}
    decoding='async'
    height={meta.height}
    loading='lazy'
    onload={() => loaded = true}
    {sizes}
    src={url(name)}
    srcset={srcsets.jpg}
    width={meta.width}
    {...rest}
  />
</picture>
