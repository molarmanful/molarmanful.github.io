<script>
  import { offtop } from '../js/util'

  export let name = ''
  export let ot = _ => {}
  export let bord = false
</script>

<section
  relative
  flex
  w-screen
  bg-black
  use:offtop={{ update: ot }}
  border={bord ? 'lt-xl:t gray-500' : void 0}
  {...$$props}
>
  <div hidden flex="xl:~ 1 col" data-aos="fade-right">
    <div type-7 write-vertical-left sticky top-0 p="t-4 b-32 xl:x-5" ml-auto>
      <h1
        text="stroked stroked-gray-500"
        origin-center
        rotate-180
        inline-block
        select-none
      >
        {name}
      </h1>
    </div>
  </div>
  <slot />
  <div hidden flex="xl:~ 1" border={bord ? 't gray-500' : void 0}>
    <div type-7 write-vertical-left top-0 p="t-4 b-32 xl:x-5" mr-auto>
      <h1
        text="stroked stroked-gray-500"
        origin-center
        rotate-180
        inline-block
        select-none
      >
        &nbsp;
      </h1>
    </div>
  </div>
</section>
