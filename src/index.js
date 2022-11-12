import Alpine from 'alpinejs'
import AOS from 'aos'
import LazyLoad from 'vanilla-lazyload'
import Levenshtein from './levenshtein'

AOS.init()

window.lazy = new LazyLoad({
  callback_loaded() {
    AOS.refresh()
  },
})

history.scrollRestoration = 'manual'

document.body.classList.add('transition-opacity')

onload = _ => {
  document.body.style.opacity = 1
  document.body.classList.remove('pointer-events-none')
}

let bank = ['weird', 'weird art', '2D art', '3D art', 'generative', 'design', 'experimental', 'surreal', 'wizard']
let i = 0

window.index = _ => ({
  selected: '',
  dropped: false,
  iloaded: false,
  word: bank[0],
  clas: '',

  iOpen(x) {
    this.selected = x
  },

  iClose() {
    this.selected = ''
    this.iloaded = false
  },

  init() {
    setInterval(_ => {
      i = (i + 1) % bank.length

      let w = bank[i]
      let lev = new Levenshtein(this.word, w)
      let steps = lev.getSteps()
      let j = 0;

      let n = setInterval(_ => {

        if (j < steps.length) {
          let s = steps[j]
          s[1]--, s[2]--
          switch (s[0]) {
            case 'substitute':
              this.word = this.word.slice(0, s[1]) + w[s[2]] + this.word.slice(s[1] + 1)
              break
            case 'insert':
              this.word = this.word.slice(0, s[1] + 1) + w[s[2]] + this.word.slice(s[1] + 1)
              break
            case 'delete':
              this.word = this.word.slice(0, s[1]) + this.word.slice(s[1] + 1)
              break
          }
          j++
        }
        else clearInterval(n)
      }, 50)
    }, 1500)
  },
})

window.Alpine = Alpine
Alpine.start()