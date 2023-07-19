import {
  presetAttributify,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default {
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        1: 'Syne',
        2: 'Hanken Grotesk:200,300,400',
      },
    }),
    presetScrollbar(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [],
  theme: {
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      // '3xl': '2304px',
      // '4xl': '3072px',
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
        'text-shadow':
          '-1px -1px currentColor,' +
          '-1px  1px currentColor,' +
          '1px -1px currentColor,' +
          '1px  1px currentColor,' +
          'var(--aber, 0 0 transparent)',
        '-webkit-text-fill-color': '#000',
      },
    ],
    [
      'aberration',
      {
        'text-shadow':
          'var(--aber0, -2) var(--aber1, -2) 0 #f0f, var(--aber2, 2) var(--aber3, 2) 0 #0ff, var(--aber4, 0) var(--aber5, 0) 0 #0f0',
      },
    ],
  ],
  shortcuts: [
    {
      scroll:
        'scrollbar scrollbar-thumb-color-gray-700 scrollbar-track-color-black',
      bold: 'font-400 font-2',
      prose: 'hyphens-auto',
      'center-flex': 'flex items-center justify-center',
      screen: 'w-screen h-screen',
      full: 'w-full h-full',
      'max-full': 'max-w-full max-h-full',
      navitem:
        'text-gray-500 cursor-pointer transition-colors hover:text-white bg-transparent',
      'aspect-portrait': 'aspect-9/16',
      'type-4':
        'text-base  md:text-lg   lg:text-xl   xl:text-2xl              ',
      'type-5':
        'text-xl    md:text-2xl  lg:text-3xl  xl:text-4xl              ',
      'type-6':
        'text-2xl   md:text-3xl  lg:text-4xl  xl:text-5xl              ',
      'type-7':
        'text-4xl   md:text-5xl  lg:text-6xl  xl:text-7xl  2xl:text-8xl',
      'type-8':
        'text-6xl   md:text-7xl  lg:text-8xl               2xl:text-9xl',
    },
    [/^ofade-([\d]*)$/, ([, c]) => `transition-opacity duration-${c}`],
  ],
  extractors: [extractorSvelte],
}
