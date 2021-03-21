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
  fade.classList.remove('opacity-100')
  fade.classList.add('opacity-0', 'pointer-events-none')
}

onbeforeunload = _=>{
  document.body.style.opacity = 0
  scrollTo(0, 0)
}
