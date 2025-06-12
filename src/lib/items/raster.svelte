<script lang='ts' module>
  export const title = 'THE RASTER COLLECTION'
  export const desc = 'Because black & white is fun, but so is color. Drawn with a mouse in HEAVYPAINT/Krita/MS Paint.'
  export const tags = ['2d', 'digital', 'art', 'collection']
  export const year = 2021
</script>

<script lang='ts'>
  import ArtImg from '$lib/components/ArtImg.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import Subheading from '$lib/components/Subheading.svelte'
  import YTVideo from '$lib/components/YTVideo.svelte'
  import { artalt } from '$lib/ts/util.svelte'
</script>

<Prose>
  <h1>{title}</h1>
  <Subheading>{desc}</Subheading>
</Prose>

<ArtImg name='fashionablegirl' alt={artalt('SOME GIRL')} />
<ArtImg name='flintstoneshouse' alt={artalt('FLINTSTONES HOUSE')} />
<ArtImg name='caveopening' alt={artalt('SOME CAVE')} />
<ArtImg name='wackoface' alt={artalt('WACKOFACE')} />
<ArtImg name='busta' alt={artalt('BUSTA RHYMES')} />
<ArtImg name='blossoms' alt={artalt('Fox Sleeping Under Cherry Blossoms')} />
<ArtImg name='foryasmin' alt={artalt('For Yasmin')} />
<ArtImg name='kai' alt={artalt('For Kai')} />
<YTVideo a='5kqdi0ExSMo' aspectClass='aspect-square' title='Family Dinner' />
<ArtImg name='skullmap' alt={artalt('A BEAUTIFUL COMPLEXTION')} />
<ArtImg name='pinkdunes' alt={artalt('PINK DUNES')} />
