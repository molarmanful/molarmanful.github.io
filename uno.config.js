import extractorSvelte from '@unocss/extractor-svelte'
import {
  presetAttributify,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

import { allColors } from './src/lib/js/static'

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
  safelist: [...allColors, 'aspect-video', 'aspect-portrait', 'aspect-square'],
  theme: {
    // breakpoints: {
    //   xs: '320px',
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    //   '2xl': '1536px',
    //   '3xl': '2304px',
    //   '4xl': '3072px',
    // },
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
      'graiscale',
      {
        'border-color': 'white',
        filter:
          'brightness(50%) sepia(1) hue-rotate(180deg) saturate(50%) brightness(86%)',
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
          'drop-shadow(var(--aber0, -2) var(--aber1, -2) 0 #f0f) ' +
          'drop-shadow(var(--aber2, 2) var(--aber3, 2) 0 #0ff) ' +
          'drop-shadow(var(--aber4, 0) var(--aber5, 0) 0 #0f0)',
        '-webkit-text-fill-color': '#000',
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
      scroll:
        'scrollbar scrollbar-thumb-color-gray-700 scrollbar-track-color-black',
      bold: 'font-400 font-2',
      prose: 'hyphens-auto',
      cover:
        'transition [&:hover,&:focus]:graiscale outline-none border-(1 transparent)',
      under: 'underline decoration-(1 offset-[.25rem])',
      focunder:
        '[&:hover,&:focus]:text-white focus:decoration-white decoration-transparent outline-none',
      screen: 'w-screen h-screen',
      full: 'w-full h-full',
      'max-full': 'max-w-full max-h-full',
      'max-screen': 'max-w-screen max-h-screen',
      'aspect-portrait': 'aspect-9/16',
      'type-4': 'text-base md:text-lg  lg:text-xl  xl:text-2xl             ',
      'type-5': 'text-xl   md:text-2xl lg:text-3xl xl:text-4xl             ',
      'type-6': 'text-2xl  md:text-3xl lg:text-4xl xl:text-5xl             ',
      'type-7': 'text-4xl  md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl',
      'type-8': 'text-6xl  md:text-7xl lg:text-8xl             2xl:text-9xl',
    },
    [/^ofade-([\d]*)$/, ([, c]) => `transition-opacity duration-${c}`],
  ],
  extractors: [extractorSvelte],
}
