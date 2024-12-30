<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    aspect?: string
    children: Snippet
  }

  const { aspect = 'video', children }: Props = $props()
</script>

<div class='mx-auto mt-6 max-full bg-bord-950 md:mt-8 {`aspect-${aspect}`}'>
  {@render children()}
</div>
