<script lang='ts'>
  import gsap from 'gsap'
  import { Observer } from 'gsap/dist/Observer'

  import { Splash, Title } from '.'

  import { browser } from '$app/environment'
  import { cD } from '$lib/js/contexts'

  if (browser)
    gsap.registerPlugin(Observer)

  const { fo } = cD.get()

  $effect(() => {
    const ctx = gsap.context(() => {
      const titleTo = (v: string) => gsap.quickTo('[data-title]', v, { duration: 0.1 })
      const titleTos = {
        skewX: titleTo('skewX'),
        skewY: titleTo('skewY'),
        rotX: titleTo('rotationX'),
        rotY: titleTo('rotationY'),
      }

      const splashTo = (v: string) => gsap.quickTo('[data-splash]', v, { duration: 0.2 })
      const splashTos = {
        x: splashTo('xPercent'),
        y: splashTo('yPercent'),
      }

      const aberTo = (v: string) => gsap.quickTo('[data-aber]', v, { duration: 0.1 })
      const aberTos = {
        x: aberTo('--aber0'),
        y: aberTo('--aber1'),
        shad: aberTo('--shad'),
        light: aberTo('--light'),
      }

      gsap.fromTo('[data-splash]', {
        scale: 1.1,
        filter: 'hue-rotate(0deg)',
      }, {
        scale: 1,
        filter: 'hue-rotate(-69deg)',
        scrollTrigger: {
          scrub: 0.4,
          start: 'top top',
          end: '+=100%',
        },
      })

      gsap.fromTo('[data-title]', {
        opacity: 1,
        yPercent: 0,
      }, {
        opacity: 0,
        yPercent: -!fo?.matches * 10,
        scrollTrigger: {
          scrub: 0.2,
          start: 'top top',
          end: '+=50%',
        },
      })

      gsap.set('[data-aber]', { '--light': 100, 'attr': { stroke: `hsl(328.6deg, 85.5%, calc(var(--light) * 1%))` } })

      Observer.create({
        type: 'pointer',
        onMove(self) {
          if (fo?.matches || scrollY >= innerHeight)
            return

          const prog = 1 - scrollY / innerHeight
          const relX = self.x === void 0 ? 0 : (self.x / innerWidth * 2 - 1) * prog
          const relY = self.y === void 0 ? 0 : (self.y / innerHeight * 2 - 1) * prog

          const titleX = relX * 0.5
          const titleY = relY * 0.5
          titleTos.skewX(titleX)
          titleTos.skewY(titleY)
          titleTos.rotX(titleY)
          titleTos.rotY(titleY)

          const splashX = -relX
          const splashY = -relY
          splashTos.x(splashX)
          splashTos.y(splashY)

          const aber = 4
          const shad = 4
          const dist = Math.min(1, Math.hypot(relX, relY) * 2)
          const aberX = -Math.min(0.5, Math.max(-0.5, relX)) * 2 * aber
          const aberY = -Math.min(0.5, Math.max(-0.5, relY)) * 2 * aber
          const aberShad = Math.max(0, (1 - dist) * shad)
          const aberLight = (1 - dist) * 30 + 70
          aberTos.x(aberX)
          aberTos.y(aberY)
          aberTos.shad(aberShad)
          aberTos.light(aberLight)
        },
      })
    })

    return () => ctx.revert()
  })
</script>

<header id='top' class='relative screen'>
  <div class='fixed full flex'>
    <div class='absolute inset-x-0 top-0 h-lvh' data-splash>
      <Splash clazz='absolute right-0 top-0 media-squarish:right-40% media-squarish:translate-x-1/2' />
    </div>
    <div class='absolute inset-0' data-title>
      <Title />
    </div>
  </div>
</header>
