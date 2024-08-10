<script>
  import { fadeonly } from '../js/util.svelte'

  import { A } from '.'

  let { ...props } = $props()

  const links = [
    ['i-ph-github-logo', 'Github', 'https://github.com/molarmanful'],
    ['i-ph-instagram-logo', 'Instagram', 'https://instagram.com/bandidojim'],
    // ['', 'ArtStation', 'https://bandidojim.artstation.com'],
    ['i-ph-linkedin-logo', 'LinkedIn', 'https://linkedin.com/in/molarmanful'],
    // ['i-ph-shopping-cart', 'Society6', 'https://society6.com/bandidojim'],
    [
      'i-ph-golf',
      'PPCG.SE',
      'https://codegolf.stackexchange.com/users/41247/mama-fun-roll',
    ],
    [
      'i-ph-file-text',
      'CV',
      'https://docs.google.com/document/d/13Hy3akmfz9tvyFH6awZ8riWSCivtYQZa3TE-f_CGszI/edit?usp=sharing',
    ],
  ]

  const fo = fadeonly()
</script>

<div prose="" {...props}>
  <h2
    data-aos="fade-{fo.matches ? 'in' : 'left'}"
    noprose
    text="stroked gray-500"
    type-6
  >
    LINKS
  </h2>
  <menu
    data-aos="fade-{fo.matches ? 'in' : 'left'}"
    m="t-2 x-2 lg:t-4"
    text-gray-500
  >
    {#each links as [icon, name, link]}
      <li>
        <A href={link} item>
          <div class={icon}></div>
          <span under>{name}</span>
        </A>
      </li>
    {/each}
  </menu>
</div>
