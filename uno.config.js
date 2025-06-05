import extractorSvelte from '@unocss/extractor-svelte'
import { colors } from '@unocss/preset-wind4/colors'
import { presetIcons, presetWebFonts, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default {
  presets: [
    presetWind4({ preflights: { reset: true } }),
    presetWebFonts({
      provider: 'none',
      fonts: {
        x1: '"M PLUS 1 Code"',
        x2: '"M PLUS 1 Code"',
      },
      themeKey: 'font',
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

  extendTheme(theme) {
    theme.breakpoint.xs = '32rem'
    theme.colors = {
      ...theme.colors,
      accent: colors.pink,
      bord: colors.indigo,
      head: colors.teal,
      text: colors.slate,
      yes: colors.teal,
      no: colors.pink,
    }
  },

  extractors: [extractorSvelte],
}
