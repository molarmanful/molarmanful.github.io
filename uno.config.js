import extractorSvelte from '@unocss/extractor-svelte'
import { colors } from '@unocss/preset-uno/colors'
import {
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

import { allColors } from './src/lib/js/static.js'

export default {
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        1: 'Syne',
        2: 'Hanken Grotesk:200,300,400',
      },
    }),
    presetScrollbar(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],

  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [...allColors, 'aspect-video', 'aspect-portrait', 'aspect-square'],

  theme: {
    colors: {
      accent: colors.pink,
      bord: colors.indigo,
      head: colors.teal,
      text: colors.slate,
      yes: colors.teal,
      no: colors.pink,
    },
    breakpoints: {
      'xs': '320px',
      'xs1': '390px',
      'xs2': '520px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1792px',
    },
    container: {
      maxWidth: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1536px',
      },
    },
    media: {
      mobile_long: '(max-aspect-ratio: 1/2)',
      squarish: '(max-aspect-ratio: 16/11)',
    },
  },

  rules: [
    [
      'text-stroked',
      {
        '-webkit-text-stroke': '2px currentColor',
        'text-stroke': '2px currentColor',
        '-webkit-text-fill-color': '#000',
        'text-fill-color': '#000',
        'paint-order': 'stroke fill',
      },
    ],
    [
      'text-unstroked',
      {
        '-webkit-text-stroke': 'initial',
        'text-stroke': 'initial',
        '-webkit-text-fill-color': 'initial',
        'text-fill-color': 'initial',
        'paint-order': 'normal',
      },
    ],
    [
      'graiscale',
      {
        filter: 'url(/colorize.svg#colorize)',
      },
    ],
    [
      'aberration',
      {
        'text-shadow':
          'var(--aber0, -2) var(--aber1, -2) 0 #f0f, var(--aber2, 2) var(--aber3, 2) 0 #0ff, var(--aber4, 0) var(--aber5, 0) 0 #0f0',
      },
    ],
    [
      'aber-drop',
      {
        filter:
          // 'drop-shadow(var(--aber0) var(--aber1) var(--shad) #f00) ' +
          `drop-shadow(var(--aber0) var(--aber1) var(--shad) ${colors.teal[400]}) `
          + `drop-shadow(var(--aber0) var(--aber1) var(--shad) ${colors.indigo[400]})`,
        // '-webkit-text-fill-color': '#000',
      },
    ],
    [
      'fake-white',
      {
        filter: 'contrast(0) brightness(2)',
      },
    ],
    [
      /var_x-(.+)/,
      ([, x]) => ({
        '--x': x,
      }),
    ],
  ],

  shortcuts: [
    {
      'scroll': 'scrollbar-(~ thumb-color-bord track-color-black)',
      'bold': 'font-400 font-2',
      'prose': 'hyphens-auto',
      'cover':
        'transition [&:hover,&:focus]:b-bord outline-none b-(1 transparent) relative',
      'under': 'underline decoration-(1 offset-[.25rem])',
      'focunder':
        'decoration-transparent outline-none b-(1 transparent) [&:hover,&:focus]:text-white focus:(decoration-white b-current)',
      'screen': 'w-screen h-lvh',
      'dscreen': 'w-screen h-dvh',
      'full': 'w-full h-full',
      'max-full': 'max-w-full max-h-full',
      'max-screen': 'max-w-screen max-h-lvh',
      'max-dscreen': 'max-w-screen max-h-dvh',
      'aspect-portrait': 'aspect-9/16',
      'type-4': 'text-base md:text-lg  lg:text-xl  xl:text-2xl             ',
      'type-5': 'text-xl   md:text-2xl lg:text-3xl xl:text-4xl             ',
      'type-6': 'text-2xl  md:text-3xl lg:text-4xl xl:text-5xl             ',
      'type-7': 'text-4xl  md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl',
      'type-8': 'text-6xl  md:text-7xl lg:text-8xl             2xl:text-9xl',
    },
    [/^ofade-(\d*)$/, ([, c]) => `transition-opacity duration-${c}`],
  ],
  extractors: [extractorSvelte],
}
