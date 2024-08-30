<script lang='ts'>
  import { type Snippet, setContext } from 'svelte'
  import { fade } from 'svelte/transition'

  import type { LayoutServerData } from './$types'

  import { receive, send } from '$lib/js/crossfade'
  import { FocusTrap } from '$lib/js/util.svelte'
  import { A, ItemBar, ItemBody } from '$lib/mixins'

  interface Props {
    data: LayoutServerData
    children: Snippet
  }

  const { data, children }: Props = $props()

  const crumbs = $derived(
    (data.pathname as string).split('/')
      .slice(1)
      .reduce((a, x) => [...a, [x, `${a[a.length - 1][1]}/${x}`]], [['', '']])
      .slice(1),
  )

  const el: { x?: HTMLElement } = $state({ x: void 0 })
  setContext('focus', el)

  const { activate, useFocusTrap } = new FocusTrap({
    setReturnFocus: () => el.x ?? false,
  }).fns
</script>

<svelte:window
  onkeydown={(e) => {
    if (e.key === 'Tab')
      activate()
  }}
/>

<div class='contents' use:useFocusTrap>
  <ItemBar>
    <nav class='ml-4 h-full flex' aria-label='breadcrumbs'>
      <ol class='m-auto flex flex-nowrap list-none'>
        <li><A data-sveltekit-reload href='/' item t>ben</A></li>
        {#each crumbs as [name, href], i}
          <li transition:fade={{ duration: 200 }}>
            <span aria-hidden='true'>&nbsp;&gt;</span>
            {#if i === crumbs.length - 1}
              <span aria-current='page'>{name}</span>
            {:else}
              <A {href} item t>
                {name}
              </A>
            {/if}
          </li>
        {/each}
      </ol>
    </nav>
  </ItemBar>

  {#key data.pathname}
    <div in:receive={{ key: 'a' }} out:send={{ key: 'a' }}>
      <ItemBody bind:el={el.x}>
        {@render children()}
      </ItemBody>
    </div>
  {/key}
</div>
