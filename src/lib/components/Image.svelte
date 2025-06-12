<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import hashesRaw from '$common/hashes.json'
  import { ws } from '$common/meta'
  import { art, covers, media } from '$lib/ts/meta'

  interface Props extends HTMLImgAttributes {
    name?: string
    b: string | ['covers' | 'art' | 'media']
    mt?: boolean
    clazz?: string
    sizes?: string
  }

  const { name, b, sizes, clazz = '', ...rest }: Props = $props()

  const imgs = { covers, art, media }
  const hashes = hashesRaw as Record<'covers' | 'art' | 'media', Record<string, string>>

  const ws1 = ws.reverse()
  const url = (name?: string, w = ws1.at(-1), x = 'jpg') =>
    Array.isArray(b)
      ? `https://cdn.benpa.ng/${b[0]}%40${name}%40${hashes[b[0]][name!]}%40${w}.${x}`
      : 'INVALID'
  const urls = (name?: string, x = 'jpg') =>
    ws1.map(w => `${url(name, w, x)} ${w}w`).join(', ')

  const [lqip, meta] = $derived(
    Array.isArray(b) ? [imgs[b[0]][0].get(name ?? ''), imgs[b[0]][1].get(name ?? '')] : [],
  )

  const src = $derived(Array.isArray(b) ? url(name) : b)
  const srcsets: Record<string, string> = $derived({
    avif: urls(name, 'avif'),
    webp: urls(name, 'webp'),
    jpg: urls(name, 'jpg'),
  })

  let loaded = $state(false)

  $effect(() => {
    if (Array.isArray(b) && name === void 0)
      console.error('missing name with', b)
  })
</script>

<picture>
  {#if Array.isArray(b)}
    {#each ['avif', 'webp'] as x}
      <source {sizes} srcset={srcsets[x]} type='image/{x}'>
    {/each}
  {/if}
  <img
    style:background={lqip && `url(${lqip}) center center / contain no-repeat`}
    class='lazy  text-0 max-h-screen w-screen object-contain {clazz}'
    class:loaded
    alt={name}
    decoding='async'
    height={meta?.height}
    loading='lazy'
    onload={() => loaded = true}
    {sizes}
    {src}
    srcset={srcsets.jpg}
    width={meta?.width}
    {...rest}
  />
</picture>
