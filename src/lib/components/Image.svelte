<script lang='ts'>
  import type { HTMLImgAttributes } from 'svelte/elements'

  import { ws } from '$common/meta'
  import { cD } from '$lib/js/contexts'

  interface Props extends HTMLImgAttributes {
    name?: string
    b: string | ['covers' | 'art' | 'media']
    mt?: boolean
    clazz?: string
    sizes?: string
  }

  const { name, b, sizes, mt = false, clazz = '', ...rest }: Props = $props()
  const { D } = cD.get()

  const [lqip, meta] = $derived(
    Array.isArray(b) ? [D[b[0]][0].get(name ?? ''), D[b[0]][1].get(name ?? '')] : [],
  )

  const ws1 = ws.reverse()

  const url = (name?: string, w = ws1.at(-1), x = 'jpg') =>
    `https://cdn.benpa.ng/${b[0]}@${name}@${w}.${x}`
  const urls = (name?: string, x = 'jpg') =>
    ws1.map(w => `${url(name, w, x)} ${w}w`).join(', ')

  const src = $derived(Array.isArray(b) ? url(name) : b)
  const srcsets: Record<string, string> = $derived({
    avif: urls(name, 'avif'),
    webp: urls(name, 'webp'),
    jpg: urls(name, 'jpg'),
  })

  let loaded = $state(false)
</script>

<picture>
  {#if Array.isArray(b)}
    {#each ['avif', 'webp'] as x}
      <source {sizes} srcset={srcsets[x]} type='image/{x}' />
    {/each}
  {/if}
  <img
    style:background={lqip && `url(${lqip}) center center / cover no-repeat`}
    class="{loaded ? 'loaded' : ''} {mt ? 'mt-0' : 'mt-6 md:mt-8'} laz bg-contain! mx-auto max-h-full object-contain text-0 w-screen max-w-full {clazz}"
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
