<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    el?: HTMLElement
    children: Snippet
    id?: string
  }

  let { el = $bindable(), id, children, ...rest }: Props = $props()
</script>

<div
  class='absolute inset-0 dscreen overflow-hidden bg-black p-2 pt-18'
  {...rest}
>
  <!-- svelte-ignore a11y_autofocus -->
  <article
    bind:this={el}
    {id}
    class='full overflow-x-hidden b-(1 t-0 bord) pb-4 outline-none lg:pb-0 scroll'
    autofocus
    tabindex='-1'
  >
    {@render children()}
  </article>
</div>
