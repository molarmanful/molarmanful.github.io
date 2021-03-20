import 'alpinejs'
import AOS from 'aos'
import LazyLoad from 'vanilla-lazyload'

import 'aos/dist/aos.css'
import './style.css'

AOS.init()
window.lazy = new LazyLoad({})

window.Index = {
  glitch(e){
    e.innerText = '.,'[Math.random() * 2 | 0]
    setTimeout(_=>{
      e.innerText = '.'
    }, 50)
  },
}
