<script>
  import { A } from '.'
  let links = [
    ['Github', 'https://github.com/molarmanful'],
    ['Instagram', 'https://instagram.com/bandidojim'],
    ['ArtStation', 'https://bandidojim.artstation.com'],
    ['LinkedIn', 'https://linkedin.com/in/molarmanful'],
    ['Society6', 'https://society6.com/bandidojim'],
    ['PPCG.SE', 'https://codegolf.stackexchange.com/users/41247/mama-fun-roll'],
    [
      'CV',
      'https://docs.google.com/document/d/13Hy3akmfz9tvyFH6awZ8riWSCivtYQZa3TE-f_CGszI/edit?usp=sharing',
    ],
  ]
</script>

<div prose {...$$restProps}>
  <h2 data-aos="fade-left" noprose text=" stroked gray-500" type-6>LINKS</h2>
  <menu data-aos="fade-left" m="t-2 x-2 lg:t-4" text-gray-500>
    {#each links as [name, link]}
      <li>
        <A duration-500 href={link} item transition-colors>
          {name}
        </A>
      </li>
    {/each}
  </menu>
</div>
