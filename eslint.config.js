import antfu from '@antfu/eslint-config'

export default antfu({
  svelte: true,
  unocss: true,
}, {
  rules: {
    'style/top-level-functions': 'off',
  },
})
