<script lang='ts' module>
  export const title = 'THE VECTOR COLLECTION'
  export const desc = 'Scalable compositions of geometries and abstract oddities. Made with Illustrator and Hexels.'
  export const tags = ['2d', 'digital', 'design', 'art', 'collection']
  export const year = 2021
</script>

<script lang='ts'>
  import ArtImg from '$lib/components/ArtImg.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import Subheading from '$lib/components/Subheading.svelte'
  import { artalt } from '$lib/ts/util.svelte'
</script>

<Prose>
  <h1>{title}</h1>
  <Subheading>{desc}</Subheading>
</Prose>

<ArtImg name='plane' alt={artalt('SEABIRD')} />
<ArtImg name='meltdown' alt={artalt('MELTDOWN')} />
<ArtImg name='bang' alt={artalt('HAND GUN')} />
<ArtImg name='crow' alt={artalt('THE JACKDAW FLIES')} />
<ArtImg name='beetle' alt={artalt('DOGBANE BEETLE')} />
<ArtImg name='jellyfish' alt={artalt('JELLYFISH')} />
<ArtImg name='somanyhands' alt={artalt('SO MANY HANDS')} />
<ArtImg name='deepspider' alt={artalt('DEEP SEA SPIDER')} />
<ArtImg name='botfight' alt={artalt('BOTFIGHT')} />
<ArtImg name='tpdneoldman' alt={artalt('SOME OLD MAN')} />
<ArtImg name='somerandomwoman' alt={artalt('SOME RANDOM WOMAN')} />
<ArtImg name='woman' alt={artalt('SOME WOMAN')} />
<ArtImg name='synthwoman' alt={artalt('SOME SYNTH')} />
<ArtImg name='haringrun' alt={artalt('WEE WOO')} />
<ArtImg name='tvdude' alt={artalt('TV DUDE')} />
<ArtImg name='snowman' alt={artalt('BLIND MAN TRIPS THROUGH THE SNOW')} />
<ArtImg name='lama' alt={artalt('LAMA 95')} />
<ArtImg name='cobra' alt={artalt('COBRA')} />
<ArtImg name='hand2' alt={artalt('HAND')} />
<ArtImg name='cake' alt={artalt('CAKE DAY')} />
<ArtImg name='weirdface' alt={artalt('WEIRD FACE')} />
<ArtImg name='freefall' alt={artalt('FREEFALL ETUDE')} />
