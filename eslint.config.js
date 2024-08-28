import antfu from '@antfu/eslint-config'
import svelte from 'eslint-plugin-svelte'

export default antfu({
  stylistic: true,
  svelte: {
    overrides: {
      'svelte/sort-attributes': 1,
    },
  },
  unocss: true,
}, {
  rules: {
    'style/top-level-functions': 'off',
    'import/order': [1, {
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'always',
    }],
  },
})
  .override('antfu/svelte/setup', {
    plugins: { svelte },
  })
  .override('antfu/svelte/rules', {
    files: ['**/*.svelte', '**/*.svelte.{js,ts}'],
  })
