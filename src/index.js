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

onload = _=>{
  document.body.classList.remove('opacity-0', 'pointer-events-none')
  document.body.classList.add('opacity-100')
}

onbeforeunload = _=>{
  document.body.classList.remove('opacity-100', 'transition-opacity')
  document.body.classList.add('opacity-0')
  scrollTo(0, 0)
}
