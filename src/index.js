import 'alpinejs'
import AOS from 'aos'
import LazyLoad from 'vanilla-lazyload'
import SmoothScroll from 'smooth-scroll'

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

history.scrollRestoration = 'manual'

document.body.classList.add('transition-opacity')

const load = _=>{
  document.body.style.opacity = 1
  document.body.classList.remove('pointer-events-none')
}

if(window.fastload) load()
else onload = load
