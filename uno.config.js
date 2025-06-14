import extractorSvelte from '@unocss/extractor-svelte'
import { colors } from '@unocss/preset-wind4/colors'
import { presetIcons, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default {
  presets: [
    presetWind4({ preflights: { reset: true } }),
    presetScrollbar(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': '-0.125em',
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

  extractors: [extractorSvelte()],
}
