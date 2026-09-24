<script lang='ts'>
  import type { ClassValue } from 'svelte/elements'

  import LogoFill from '$lib/components/LogoFill.svelte'
</script>

<header class='sticky top-0 z-50 w-full overflow-x-clip bg-bg leading-tight'>
  <nav
    class='
      container mx-auto px-5
      xl:px-8
    '
  >
    <ul
      class='
        flex gap-3
        *:*:inline-block *:*:py-5
        *:transition-[opacity,visibility]
        xl:gap-5
        xl:*:*:py-8
        [&_a]:text-bord-400
        [&_a]:hover:text-accent-400
        [&_a]:focus:text-accent-400
        [&_i]:mx-px [&_i]:scale-110
        max-sm:not-has-checked:[&>li]:not-data-nohide:has-[a]:invisible
        max-sm:not-has-checked:[&>li]:not-data-nohide:has-[a]:opacity-0
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
        <a href='https://github.com/molarmanful' target='_blank' class='group'>
          {@render icon('Github', 'icon-[ph--github-logo]')}
        </a>
      </li>
      <li class='delay-200'>
        <a
          href='https://instagram.com/bandidojim'
          target='_blank'
          class='group'
        >
          {@render icon('Instagram', 'icon-[ph--instagram-logo]')}
        </a>
      </li>
      <li class='delay-150'>
        <a
          href='https://linkedin.com/in/molarmanful'
          target='_blank'
          class='group'
        >
          {@render icon('LinkedIn', 'icon-[ph--linkedin-logo]')}
        </a>
      </li>
      <li class='delay-100'>
        <a
          href='https://codegolf.stackexchange.com/users/41247/mama-fun-roll'
          target='_blank'
          class='group'
        >
          {@render icon('CGCC.SE', 'icon-[ph--golf]')}
        </a>
      </li>
      <li class='delay-50'>
        <a
          href='https://docs.google.com/document/d/13Hy3akmfz9tvyFH6awZ8riWSCivtYQZa3TE-f_CGszI/edit?usp=sharing'
          target='_blank'
          class='group'
        >
          {@render icon('CV', 'icon-[ph--read-cv-logo]')}
        </a>
      </li>

      <li class='sm:hidden'>
        <label
          class='
            group cursor-pointer text-bord-400 transition-colors
            has-checked:text-accent-400
          '
        >
          <input class='peer hidden' type='checkbox'>
          {@render icon(
              'Links',
              'icon-[ph--plus] size-[1em] scale-125! transition motion-safe:peer-checked:-rotate-45',
            )}
        </label>
      </li>
    </ul>
  </nav>
</header>

{#snippet icon(label: string, clazz: ClassValue)}
  <span class='relative'>
    <div
      class='
        pointer-events-none absolute top-full right-0 z-10 mt-1 border
        border-bord-400 bg-bg p-1 text-xs text-bord-400 opacity-0 transition
        group-hover:opacity-100
        group-focus:opacity-100
      '
      aria-hidden={true}
    >
      {label}
    </div>
    <i class={clazz}>{label}</i>
  </span>
{/snippet}
