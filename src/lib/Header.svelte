<script>
  import { getContext } from 'svelte'

  import { HeaderSplash, HeaderTitle } from './mixins'

  const { top = () => {} } = $props()
  const { factor, mouse, fo, rm } = getContext('D')

  const fac_inv = $derived(Math.max(0, 1 - factor.x))

  const mouse_rel = $derived(
    rm.matches || factor.x >= 1
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

<header id='top' relative screen>
  <div
    style:filter='hue-rotate({factor.x * -69}deg)'
    class={fo.matches || !fac_inv ? '' : 'will-change-transform,filter,opacity'}
    fixed
    flex
    full
  >
    <HeaderSplash
      class={factor.x >= 1 ? 'scale-100' : ''}
      absolute=""
      h='lvh'
      mx='auto'
      right='0 media-squarish:40%'
      {scale}
      {splash_rel}
      top='0'
      transition='transform-100'
      un-transform='~ translate-x-[var(--t-x,0%)] media-squarish:translate-x-[calc(50%+var(--t-x,0%))]'
    />
    <div
      style:opacity={Math.max(0, 1 - factor.x * 2)}
      style:--un-skew-x='{title_rel.x}deg'
      style:--un-skew-y='{title_rel.y}deg'
      style:--un-rotate-x='{title_rel.y}deg'
      style:--un-rotate-y='{title_rel.y}deg'
      style:--un-translate-y='{-!fo.matches * (1 - fac_inv) * 10}%'
      absolute
      duration-100
      inset-0
      transform
      transition-transform,opacity
    >
      <HeaderTitle {mouse_rel} />
    </div>
  </div>
</header>
