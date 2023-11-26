<script>
  import { fadeonly } from '../js/util'

  import { OffTop } from '.'

  export let name = ''
  export let bord = false
  export let ot = 0

  let fo = fadeonly()
</script>

<OffTop bind:ot let:useResizeObserver>
  <section
    backdrop="grayscale"
    border={bord ? 'lt-3xl:t gray-500' : void 0}
    flex
    relative
    w-screen
    use:useResizeObserver
    {...$$restProps}
  >
    <div
      class="lt-3xl:hidden"
      data-aos="fade-{$fo ? 'in' : 'right'}"
      flex="~ 3xl:(1 col)"
    >
      <div ml-auto p="t-6 b-32 xl:x-4" sticky top-0 type-7 write-vertical-left>
        <svelte:element
          this={name ? 'h1' : 'div'}
          inline-block
          origin-center
          rotate-180
          select-none
          text-stroked-gray-500
        >
          {name}
        </svelte:element>
      </div>
    </div>
    <div bg="black/69" flex="lt-3xl:1"><slot /></div>
    <div
      class="lt-3xl:hidden"
      bg="black/69"
      border={bord ? 't gray-500' : void 0}
      flex="3xl:1"
    ></div>
  </section>
</OffTop>
