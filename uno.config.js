import { presetAttributify, presetUno, presetWebFonts, transformerDirectives } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { colorResolver } from '@unocss/preset-mini/utils'

export default {
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        1: 'Syne',
        2: 'Hanken Grotesk:200,300,500',
      },
    }),
    presetScrollbar(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  safelist: [],
  rules: [
    ['text-stroked', {
      'text-shadow':
        '-1px -1px var(--stroke-color),' +
        '-1px  1px var(--stroke-color),' +
        '1px -1px var(--stroke-color),' +
        '1px  1px var(--stroke-color),' +
        'var(--aber, 0 0 transparent)',
      '-webkit-text-fill-color': '#000',
    }],
    [/^text-stroked-(.+)$/, colorResolver('--stroke-color', 'text-stroked'), { autocomplete: 'text-stroked-$colors' }],
    ['aberration', { '--aber': '-2px -2px 0 #0ff, 2px 2px 0 #f0f' }],
    ['aberration1', { '--aber': '-1px -1px 0 #0ff, 1px 1px 0 #f0f' }],
  ],
  shortcuts: [
    {
      'scroll': 'scrollbar scrollbar-thumb-color-gray-700 scrollbar-track-color-black',
      'bold': 'font-medium font-2',
      'prose': 'hyphens-auto',
      'center-flex': 'flex items-center justify-center',
      'screen': 'w-screen h-screen',
      'full': 'w-full h-full',
      'navitem': 'text-gray-500 cursor-pointer transition-colors hover:text-white bg-transparent',
    },
    [/^ofade-([\d]*)$/, ([, c]) => `transition-opacity duration-${c}`],
  ],
  extractors: [extractorSvelte],
}