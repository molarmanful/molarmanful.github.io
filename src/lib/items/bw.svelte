<script lang='ts' module>
  export const title = 'THE BLACK & WHITE COLLECTION'
  export const desc = 'Monochrome artwork drawn with pen and paper or a mouse in Krita/MS Paint. Studies of contrast, shading, and value blending techniques.'
  export const tags = ['2d', 'digital', 'art', 'collection']
  export const year = 2022
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

<ArtImg name='imperfect' alt={artalt('WHY CAN\'T I BE PERFECT?')} />
<ArtImg name='entropia' alt={artalt('ENTROPIA')} />
<ArtImg name='ruler' />
<ArtImg name='sketchedfaces' alt='Quick stylized character sketches.' />
<ArtImg name='sketchedfaces2' alt='Quick character sketches and notes done during an art museum excursion in Sharjah, UAE.' />
<ArtImg name='hand' alt={artalt('HAND')} />
<ArtImg name='valueblending' alt={artalt('SPHERE')} />
<ArtImg name='blackpanther' alt={artalt('BLACK PANTHER')} />
<ArtImg name='scream' alt={artalt('SCREAM')} />
<ArtImg name='dehumanized' alt={artalt('DEHUMANIZED')} />
<ArtImg name='scrawnyman' alt={artalt('SCRAWNY MAN')} />
<ArtImg name='mood' alt={artalt('MOOD')} />
<ArtImg name='walter' alt={artalt('WALTER')} />
<ArtImg name='yee' alt={artalt('YEE')} />
