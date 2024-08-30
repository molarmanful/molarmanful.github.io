<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    aspect?: string
    children: Snippet
  }

  const { aspect = 'video', children }: Props = $props()
</script>

<div class='aspect-{aspect} bg-bord-950 mt-6 md:mt-8 max-full mx-auto'>
  {@render children()}
</div>
