import { molarmanfulLint } from '@molarmanful/fe-tools'
import { loadConfig } from '@sveltejs/load-config'
import globals from 'globals'

const svelteCfgLoad = await loadConfig('./', { traverse: false })
const svelteConfig = svelteCfgLoad && 'config' in svelteCfgLoad
  ? svelteCfgLoad.config
  : void 0

const cfg = molarmanfulLint({
  ts: {
    parserOptions: {
      projectService: {
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

export default cfg
