<script lang='ts'>
  import gsap from 'gsap'

  import { page } from '$app/stores'
  import { Heading, Text } from '$lib/components'
  import { hexes } from '$lib/js/static'

  let innerHeight = $state(1)
  let innerWidth = $state(1)

  let ch = $state(1)
  let cw = $state(1)

  const s = `${$page.status}`

  const woo = (node: Element) => {
    const f = () => {
      gsap.to(node, {
        color: gsap.utils.random(hexes[500]),
        duration: gsap.utils.random(1, 3),
        onComplete: f,
      })
    }
    f()
  }
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<svelte:head>
  <title>ERR: {s}</title>
</svelte:head>

<div
  class='pointer-events-none invisible fixed'
  aria-hidden='true'
  bind:clientWidth={cw}
  bind:clientHeight={ch}
>
  0
</div>

<div
  class='pointer-events-none fixed inset-0 flex items-center justify-center text-text-900 opacity-20'
  aria-hidden='true'
>
  <div class='overflow-hidden'>
    {#if ch > 1 && cw > 1}
      {#each Array.from({ length: innerHeight / (ch - 1) | 0 }) as _, i}
        {#each Array.from({ length: innerWidth / (cw - 1) | 0 }) as _, j}
          <span use:woo>{(s + s[1])[(i % 4 + j % 4) % 4]}</span>
        {/each}
        <br>
      {/each}
    {/if}
  </div>
</div>

<div class='screen flex items-center justify-center mix-blend-lighten'>
  <div class='pb-16 text-center'>
    <Heading
      clazz='text-50vmin leading-none relative mb-8'
    >
      <span class='text-accent'>{s[0]}</span
      ><span class='text-accent'
      >{s[1]}</span
      ><span class="{s[0] === s[2] && '08'.includes(s[1]) ? 'scale-x--100' : ''} inline-block text-accent"
      >{s[2]}</span>
    </Heading>
    <Text class='relative z-10'>
      <a class='btn text-bord' data-sveltekit-reload href='/'>home</a>
    </Text>
  </div>
</div>
