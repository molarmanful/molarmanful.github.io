import { molarmanfulLint } from '@molarmanful/fe-tools'
import globals from 'globals'

import svelteConfig from './svelte.config'

export default molarmanfulLint({
  ts: {
    parserOptions: {
      projectService: {
        tsconfigRootDir: import.meta.dirname,
        allowDefaultProject: [
          'eslint.config.ts',
          'svelte.config.ts',
        ],
      },
    },
  },
  svelte: {
    parserOptions: {
      svelteConfig,
    },
  },
}).append({
  files: ['util/**/*.js'],
  languageOptions: { globals: globals.node },
}).append({
  settings: {
    'better-tailwindcss': {
      entryPoint: 'src/app.css',
    },
  },
})
