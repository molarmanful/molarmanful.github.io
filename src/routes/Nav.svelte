<script lang='ts'>
  import LogoFill from '$lib/components/LogoFill.svelte'
</script>

<header class='sticky top-0 z-50 w-full overflow-x-hidden bg-bg leading-tight'>
  <nav
    class='
      container mx-auto px-5
      xl:px-8
    '
  >
    <ul
      class='
        flex gap-3
        *:*:inline-block *:*:py-5 *:transition-[opacity,visibility]
        xl:gap-5 xl:*:*:py-8
        [&_a]:text-bord-400
        [&_a:focus]:text-accent-400 [&_a:hover]:media-hover:text-accent-400
        [&_i]:mx-0.25 [&_i]:scale-110
        max-sm:[&:not(:has(:checked))>li:not([data-nohide]):has(a)]:invisible
        max-sm:[&:not(:has(:checked))>li:not([data-nohide]):has(a)]:opacity-0
      '
    >
      <li class='ms-1' data-nohide>
        <a aria-label='Home' href='/'>
          <LogoFill class='inline-block size-[1em] scale-125 align-[-0.1em]' />
        </a>
      </li>

      <li
        class='
          ms-2
          xl:ms-3
        '
        data-nohide
      >
        <a href='/about'>ABOUT</a>
      </li>

      <li class='ml-auto delay-250'>
        <a href='https://github.com/molarmanful' target='_blank'>
          <i class='icon-[ph--github-logo]'>GitHub</i>
        </a>
      </li>
      <li class='delay-200'>
        <a href='https://instagram.com/bandidojim' target='_blank'>
          <i class='icon-[ph--instagram-logo]'>Instagram</i>
        </a>
      </li>
      <li class='delay-150'>
        <a href='https://linkedin.com/in/molarmanful' target='_blank'>
          <i class='icon-[ph--linkedin-logo]'>Linkedin</i>
        </a>
      </li>
      <li class='delay-100'>
        <a
          href='https://codegolf.stackexchange.com/users/41247/mama-fun-roll'
          target='_blank'
        >
          <i class='icon-[ph--golf]'>PPCG.SE</i>
        </a>
      </li>
      <li class='delay-50'>
        <a
          href='https://docs.google.com/document/d/13Hy3akmfz9tvyFH6awZ8riWSCivtYQZa3TE-f_CGszI/edit?usp=sharing'
          target='_blank'
        >
          <i class='icon-[ph--read-cv-logo]'>CV</i>
        </a>
      </li>

      <li class='sm:hidden'>
        <label
          class='
            cursor-pointer text-bord-400 transition-colors
            has-checked:text-accent-400
          '
        >
          <input class='peer hidden' type='checkbox'>
          <i
            class='
              icon-[ph--plus] size-[1em] scale-125! transition
              motion-safe:peer-checked:-rotate-45
            '
          >Links</i>
        </label>
      </li>
    </ul>
  </nav>
</header>
