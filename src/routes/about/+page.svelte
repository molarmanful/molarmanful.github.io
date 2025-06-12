<script lang='ts'>
  import A from '$lib/components/A.svelte'
  import Prose from '$lib/components/Prose.svelte'
  import { title } from '$lib/ts/meta'
</script>

<svelte:head>
  <title>ABOUT | {title}</title>
</svelte:head>

<section class='pb-8 pt-5 *:mx-auto xl:(pb-13 pt-8)'>
  <Prose>
    <h1>Benjamin Pang</h1>

    <div>
      <svg class='b b-b-0 b-bord w-full' viewBox='0 0 1080 1080'>
        <use
          style:transform-box='fill-box'
          class='origin-c translate--1/2 fill-none stroke-[calc(1080/min(var(--100vw-px),656)*1px)] stroke-bord'
          href='/me.svg#main'
          shape-rendering='crispEdges'
          vector-effect='non-scaling-stroke'
          width='1587'
          x='50%'
          y='50%'
        ></use>
      </svg>

      <table class='text-left b b-bord w-full [table-layout:fixed] border-collapse [&_th]:(text-head font-bold text-right) [&_:is(th,td)]:(p-2 b-y b-bord) xl:[&_:is(th,td)]:p-3'>
        <tbody>
          <tr><th> Location          </th><td> SF Bay Area / NYC                                    </td></tr>
          <tr><th> Occupation        </th><td> Front-End Eng @ <A href='https://updoc.ai'>UpDoc</A> </td></tr>
          <tr><th> Machine           </th><td> Framework 16                                         </td></tr>
          <tr><th> Operating System  </th><td> NixOS                                                </td></tr>
          <tr><th> Compositor / WM   </th><td> river                                                </td></tr>
          <tr><th> Terminal Emulator </th><td> alacritty-sixel                                      </td></tr>
          <tr><th> Editor            </th><td> Neovim                                               </td></tr>
        </tbody>
      </table>
    </div>

    <p>
      I am a <strong>creative technologist</strong>, which really just means
      that I juggle engineering, art, and design to make stuff and solve
      problems.
    </p>

    <p>
      I've been programming recreationally since I was ~10 years old, and I
      hold a Bachelor of Arts in Interactive Media from NYU Abu Dhabi as well
      as a Master of Professional Studies from NYU's Interactive
      Telecommunications Program. Along the way, I've had the opportunity to
      weave the webs spanning art and tech, collecting a variety of hats and
      principles that influence how I approach my creative process.
    </p>

    <p>
      In the past, my art practice focused primarily around technical
      experimentation in digital 3D, both <A href='/work/3dstill'>still</A> and
      <A href='/work/3danim'>animated</A>. That practice has evolved over time
      into the development of tooling ecosystems for niche fields like <A
        href='/work/bited'>bitmap font design</A>.
    </p>

    <p>
      I am an avid contributor and consumer of open-source software. I am morally
      opposed to slop.
    </p>

    <p>
      Outside of my programming/art practice, I find personal enjoyment in
      <A href='https://store.steampowered.com/app/233860/Kenshi/'>Kenshi</A>,
      Rubik's Cubes, pen spinning, steak cooking, and Muay Thai.
    </p>
  </Prose>
</section>
