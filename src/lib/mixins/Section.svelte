<script>
  import { offtop } from '../js/util'

  export let name = ''
  export let ot = () => {}
  export let bord = false
</script>

<section
  backdrop="grayscale"
  bg="black/80"
  border={bord ? 'lt-xl:t gray-500' : void 0}
  flex
  relative
  w-screen
  use:offtop={{ update: ot }}
  {...$$restProps}
>
  <div data-aos="fade-right" flex="xl:~ 1 col" hidden>
    <div ml-auto p="t-6 b-32 xl:x-4" sticky top-0 type-7 write-vertical-left>
      <h1
        inline-block
        origin-center
        rotate-180
        select-none
        text="stroked gray-500"
      >
        {name}
      </h1>
    </div>
  </div>
  <slot />
  <div border={bord ? 't gray-500' : void 0} flex="xl:~ 1" hidden>
    <div mr-auto p="t-6 b-32 xl:x-4" top-0 type-7 write-vertical-left>
      <h1 inline-block origin-center rotate-180 select-none>&nbsp;</h1>
    </div>
  </div>
</section>
