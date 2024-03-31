<script>
  import { createFocusTrap, createKeyStroke } from '@grail-ui/svelte'
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { fade } from 'svelte/transition'

  import { receive, send } from '$lib/js/crossfade'
  import { A, ItemBar, ItemBody } from '$lib/mixins'

  export let data

  $: crumbs = data.pathname.split`/`
    .slice(1)
    .reduce((a, x) => [...a, [x, a[a.length - 1][1] + '/' + x]], [['', '']])
    .slice(1)

  let el
  let elS = writable()
  $: $elS = el
  setContext('focus', elS)

  const { activate, useFocusTrap } = createFocusTrap({
    setReturnFocus: () => el,
  })

  createKeyStroke({
    key: ['Tab'],
    handler: activate,
  })
</script>

<div contents use:useFocusTrap>
  <ItemBar>
    <nav aria-label="breadcrumbs" flex h-full ml-4>
      <ol flex="~ nowrap" list-none m-auto>
        <li><A href="/" item t tabindex="0">ben</A></li>
        {#each crumbs as [name, href], i}
          <li transition:fade={{ duration: 200 }}>
            <span aria-hidden>&nbsp;&gt;</span>
            {#if i == crumbs.length - 1}
              <span aria-current="page">{name}</span>
            {:else}
              <A {href} item t tabindex="0">
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
      <ItemBody bind:el>
        <slot />
      </ItemBody>
    </div>
  {/key}
</div>
