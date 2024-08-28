import antfu from '@antfu/eslint-config'

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
    'style/top-level-functions': 0,
    'import/order': [1, {
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'always',
    }],
  },
})
