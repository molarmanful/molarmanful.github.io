<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLHeadingElement> {}

  const { ...rest }: Props = $props()
</script>

<h1 {...rest}>
  <div class='absolute inset-0 screen p-8'>
    <svg
      class='pointer-events-none m-auto full rotate--7 skew-x--7 fill-transparent stroke-4 object-contain aber-drop lg:container lg:stroke-1 md:stroke-2'
      data-aber
    >
      <title>BEN PANG</title>
      <use href='/benpang.svg#main' vector-effect='non-scaling-stroke'></use>
    </svg>
  </div>
</h1>
