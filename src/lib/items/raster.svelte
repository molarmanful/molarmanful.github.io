<script lang='ts' module>
  export const meta = {
    title: 'THE RASTER COLLECTION',
    desc:
      'Because black & white is fun, but so is color. Drawn with a mouse in HEAVYPAINT/Krita/MS Paint.',
    tags: ['2d', 'digital', 'art', 'collection'],
    year: 2021,
  }
</script>

<script lang='ts'>
  import ArtImg from '#lib/components/ArtImg.svelte'
  import Prose from '#lib/components/Prose.svelte'
  import Subheading from '#lib/components/Subheading.svelte'
  import YTVideo from '#lib/components/YTVideo.svelte'
  import { artalt } from '#lib/ts/meta.ts'
</script>

<Prose>
  <h1>{meta.title}</h1>
  <Subheading>{meta.desc}</Subheading>
</Prose>

<ArtImg name='fashionablegirl' alt={artalt('SOME GIRL')} />
<ArtImg name='flintstoneshouse' alt={artalt('FLINTSTONES HOUSE')} />
<ArtImg name='caveopening' alt={artalt('SOME CAVE')} />
<ArtImg name='wackoface' alt={artalt('WACKOFACE')} />
<ArtImg name='busta' alt={artalt('BUSTA RHYMES')} />
<ArtImg name='blossoms' alt={artalt('Fox Sleeping Under Cherry Blossoms')} />
<ArtImg name='foryasmin' alt={artalt('For Yasmin')} />
<ArtImg name='kai' alt={artalt('For Kai')} />
<YTVideo class='aspect-square' a='5kqdi0ExSMo' title='Family Dinner' />
<ArtImg name='skullmap' alt={artalt('A BEAUTIFUL COMPLEXTION')} />
<ArtImg name='pinkdunes' alt={artalt('PINK DUNES')} />
