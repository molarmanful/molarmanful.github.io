<script>
  import { colors } from '../js/util'

  export let b = 500
  export let rc = x => 0 | (Math.random() * x.length)
  export let rt = () => 0 | (Math.random() * 3000 + 1000)
  export let c = ''
  export let t = 0
  export let d = 0

  let g = () => {
    c = colors[b][rc(colors[b])]
  }
  let f = () => {
    g()
    t = rt()
    setTimeout(f, t)
  }

  setTimeout(f, d)
</script>

<slot {c} {t} />
