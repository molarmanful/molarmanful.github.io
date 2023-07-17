<script>
  import { offtop } from '../js/util'

  export let name = ''
  export let ot = _ => {}
</script>

<section
  relative
  flex
  w-screen
  bg-black
  use:offtop={{ update: ot }}
  {...$$props}
>
  <div hidden class="lg:inline-block" data-aos="fade-right">
    <div write-vertical-left sticky top-0 pl-4 pt-4 pb-32 text="7xl lg:9xl">
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
</section>
