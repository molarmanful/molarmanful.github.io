<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet
  }

  const { children, ...props }: Props = $props()
</script>

<div class='fixed inset-x-0 top-0 z-10 h-18 p-2 pb-0'>
  <div class='full flex flex-row b-(1 current) bg-black text-bord' {...props}>
    {@render children()}
  </div>
</div>
