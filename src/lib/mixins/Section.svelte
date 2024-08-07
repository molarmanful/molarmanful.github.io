<script>
  import { fadeonly, offtop } from '../js/util.svelte'

  let { name = '', nav = '', top, bord = false, children, ...props } = $props()

  let el = $state()
  offtop(
    () => el,
    ot => top?.({ name: nav, n: ot })
  )

  let fo = fadeonly()
</script>

<section
  bind:this={el}
  backdrop="grayscale"
  border={bord ? 'lt-3xl:t gray-500' : void 0}
  flex=""
  relative=""
  w="screen"
  {...props}
>
  <div
    class="lt-3xl:hidden"
    data-aos="fade-{fo.matches ? 'in' : 'right'}"
    flex="~ 3xl:(1 col)"
  >
    <div ml-auto p="t-6 b-32 xl:x-4" sticky top-0 type-7 write-vertical-left>
      <svelte:element
        this={name ? 'h1' : 'div'}
        inline="block"
        origin="center"
        rotate="180"
        select="none"
        text="stroked-gray-500"
      >
        {name}
      </svelte:element>
    </div>
  </div>
  <div bg="black/85" flex="lt-3xl:1">{@render children()}</div>
  <div
    class="lt-3xl:hidden"
    bg="black/85"
    border={bord ? 't gray-500' : void 0}
    flex="3xl:1"
  ></div>
</section>
