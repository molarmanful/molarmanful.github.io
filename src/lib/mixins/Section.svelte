<script>
  import { OffTop } from '.'

  export let name = ''
  export let bord = false
  export let ot = 0
</script>

<OffTop bind:ot let:useResizeObserver>
  <section
    backdrop="grayscale"
    border={bord ? 'lt-xl:t gray-500' : void 0}
    flex
    relative
    w-screen
    use:useResizeObserver
    {...$$restProps}
  >
    <div data-aos="fade-right" flex="xl: 1 col" hidden>
      <div ml-auto p="t-6 b-32 xl:x-4" sticky top-0 type-7 write-vertical-left>
        <svelte:element
          this={name ? 'h1' : 'div'}
          inline-block
          origin-center
          rotate-180
          select-none
          text="stroked gray-500"
        >
          {name}
        </svelte:element>
      </div>
    </div>
    <div bg="black/80">
      <slot />
    </div>
    <div
      bg="black/80"
      border={bord ? 't gray-500' : void 0}
      flex="xl: 1"
      hidden
    ></div>
  </section>
</OffTop>
