<script lang='ts' module>
  export const desc = 'Because black & white is fun, but so is color. Drawn with a mouse in HEAVYPAINT/Krita/MS Paint.'
  export const tags = ['2d', 'digital', 'art', 'collection']
  export const year = 2021
</script>

<script lang='ts'>
  import { artalt } from '../js/util.svelte'
  import { ArtImg, Heading, Prose, Subheading, YTVideo } from '../mixins'
</script>

<Prose>
  <Heading>THE RASTER COLLECTION</Heading>
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
<YTVideo a='5kqdi0ExSMo' aspect='square' title='Family Dinner' />
<ArtImg name='skullmap' alt={artalt('A BEAUTIFUL COMPLEXTION')} />
<ArtImg name='pinkdunes' alt={artalt('PINK DUNES')} />
