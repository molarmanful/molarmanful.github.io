<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { A } from '$lib/components'
  import { cD } from '$lib/js/contexts'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    clazz?: string
  }

  const { clazz, ...rest }: Props = $props()
  const { fo, aos } = cD.get()

  const links = [
    [
      '[&:hover,&:focus]:text-slate',
      'i-ph-github-logo',
      'Github',
      'https://github.com/molarmanful',
    ],
    [
      '[&:hover,&:focus]:text-fuchsia',
      'i-ph-instagram-logo',
      'Instagram',
      'https://instagram.com/bandidojim',
    ],
    // ['', 'ArtStation', 'https://bandidojim.artstation.com'],
    [
      '[&:hover,&:focus]:text-blue',
      'i-ph-linkedin-logo',
      'LinkedIn',
      'https://linkedin.com/in/molarmanful',
    ],
    // ['i-ph-shopping-cart', 'Society6', 'https://society6.com/bandidojim'],
    [
      '[&:hover,&:focus]:text-green',
      'i-ph-golf',
      'PPCG.SE',
      'https://codegolf.stackexchange.com/users/41247/mama-fun-roll',
    ],
    [
      '',
      'i-ph-file-text',
      'CV',
      'https://docs.google.com/document/d/13Hy3akmfz9tvyFH6awZ8riWSCivtYQZa3TE-f_CGszI/edit?usp=sharing',
    ],
  ]
</script>

<div class='prose {clazz}' {...rest}>
  <h2
    class='noprose text-(head stroked) type-6'
    use:aos={{
      type: `fade-${fo?.current ? 'in' : 'left'}`,
    }}
  >
    LINKS
  </h2>
  <menu id='anchor-abt-links' class='m-(x-2 t-2) lg:m-t-4'>
    {#each links as [color, icon, name, link], i}
      <li
        class='text-accent'
        use:aos={{
          type: `fade-${fo?.current ? 'in' : 'left'}`,
          delay: i * 0.1,
          trigger: '#anchor-abt-links',
        }}
      >
        <A clazz='{color} decoration-none' href={link} item>
          <div class={icon}></div>
          <span class='under'>{name}</span>
        </A>
      </li>
    {/each}
  </menu>
</div>
