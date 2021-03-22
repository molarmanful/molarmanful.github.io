import 'alpinejs'
import AOS from 'aos'
import LazyLoad from 'vanilla-lazyload'
import SmoothScroll from 'smooth-scroll'

import 'aos/dist/aos.css'
import './style.css'

AOS.init()
window.lazy = new LazyLoad({})
window.scroll = new SmoothScroll('a[href*="#"]', {
  updateURL: false,
  speedAsDuration: true
})

window.Index = {
  glitch(e){
    e.innerText = '.,'[Math.random() * 2 | 0]
    setTimeout(_=>{
      e.innerText = '.'
    }, 50)
  },
}

addEventListener('DOMContentLoaded', _=>{
  document.body.classList.add('opacity-100')
  document.body.classList.remove('opacity-0', 'pointer-events-none')
})

onbeforeunload = _=>{
  document.body.classList.remove('transition-opacity', 'opacity-100')
  document.body.classList.add('opacity-0')
  scrollTo(0, 0)
}
