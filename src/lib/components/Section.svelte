<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cD } from '$lib/js/contexts'

  interface Props extends HTMLAttributes<HTMLElement> {
    name?: string
    nav: string
    top: (a: string) => void
    bord?: boolean
    children: Snippet
  }

  const {
    name = '',
    nav = '',
    top = () => {},
    bord = false,
    children,
    ...rest
  }: Props = $props()
  const { fo } = cD.get()

  top(nav)
</script>

<section
  id={nav}
  class="{bord ? 'lt-3xl:b-t b-bord' : ''} backdrop-grayscale flex relative w-screen"
  {...rest}
>
  <div
    class='flex 3xl:(flex-1 flex-col) lt-3xl:hidden'
    data-aos="fade-{fo?.matches ? 'in' : 'right'}"
  >
    <div class='sticky top-0 ml-auto pb-32 pt-6 write-vertical-left xl:px-4 type-7'>
      <svelte:element
        this={name ? 'h1' : 'div'}
        class='inline-block origin-center rotate-180 select-none text-(bord stroked)'
      >{name}</svelte:element>
    </div>
  </div>
  <div class='bg-black/80 lt-3xl:flex-1'>{@render children()}</div>
  <div class="{bord ? 'b-(t bord)' : ''} bg-black/80 3xl:flex-1 lt-3xl:hidden"></div>
</section>
