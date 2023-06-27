import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import 'aos/dist/aos.css'
import './style.css'
import App from './App.svelte'

export default new App({
  target: document.getElementById('app'),
})