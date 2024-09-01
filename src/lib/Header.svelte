<script lang='ts'>
  import { cD } from './js/contexts'
  import { HeaderSplash, HeaderTitle } from './components'

  interface Props {
    top: (a: string) => void
  }

  const { top = () => {} }: Props = $props()
  const { factor, mouse, fo, rm } = cD.get()

  const fac_inv = $derived(Math.max(0, 1 - factor.x))

  const mouse_rel = $derived(
    rm?.matches || factor.x >= 1
      ? { x: 0, y: 0 }
      : {
        x: (mouse.x * 2 - 1) * fac_inv,
        y: (mouse.y * 2 - 1) * fac_inv,
      },
  )
  const scale = $derived(1 + 0.1 * fac_inv)

  const splash_rel = $derived({
    x: -mouse_rel.x,
    y: -mouse_rel.y,
  })
  const title_rel = $derived({
    x: 0.5 * mouse_rel.x,
    y: 0.5 * mouse_rel.y,
  })

  top('top')
</script>

<header id='top' class='relative screen'>
  <div
    style:filter='hue-rotate({factor.x * -69}deg)'
    class="{fo?.matches || !fac_inv ? '' : 'will-change-transform,filter,opacity'} fixed flex full"
  >
    <HeaderSplash
      class="{factor.x >= 1 ? 'scale-100' : ''} absolute right-0 top-0 mx-auto transform-translate-x-[var(--t-x,0%)] transform h-lvh media-squarish:right-40% media-squarish:transform-translate-x-[calc(50%+var(--t-x,0%))] transition-transform-200"
      {scale}
      {splash_rel}
    />
    <div
      style:opacity={Math.max(0, 1 - factor.x * 2)}
      style:--un-skew-x='{title_rel.x}deg'
      style:--un-skew-y='{title_rel.y}deg'
      style:--un-rotate-x='{title_rel.y}deg'
      style:--un-rotate-y='{title_rel.y}deg'
      style:--un-translate-y='{-!fo?.matches * (1 - fac_inv) * 10}%'
      class='absolute inset-0 transform transition-transform,opacity duration-200'
    >
      <HeaderTitle {mouse_rel} />
    </div>
  </div>
</header>
