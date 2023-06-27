<script>
  export let name = ''
  export let id
</script>

<section relative flex w-screen bg-black {id}>
  <div hidden class="lg:inline-block" data-aos="fade-right">
    <div vert sticky top-0 pl-4 pt-4 pb-32 text="7xl lg:9xl">
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
