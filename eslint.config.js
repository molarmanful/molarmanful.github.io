import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: true,
    svelte: {
      'overrides': {
        'svelte/sort-attributes': 1,
      },
      'svelte/html-self-closing': [1, {
        void: 'always',
        normal: 'never',
        component: 'always',
        svelte: 'always',
      }],
    },
    unocss: true,
    formatters: {
      css: true,
      html: true,
    },
  },
  {
    rules: {
      'antfu/top-level-function': 0,
      'perfectionist/sort-exports': [2, {
        type: 'alphabetical',
      }],
      'perfectionist/sort-imports': [2, {
        newlinesBetween: 'always',
        type: 'alphabetical',
      }],
      'perfectionist/sort-named-exports': [2, {
        type: 'alphabetical',
      }],
      'perfectionist/sort-named-imports': [2, {
        type: 'alphabetical',
      }],
    },
  },
)
