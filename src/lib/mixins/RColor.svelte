<script>
  import { colors } from '../js/util'

  let b = 500
  let rc = x => 0 | (Math.random() * x.length)
  let rt = () => 0 | (Math.random() * 3000 + 1000)
  let c = ''
  let t = 0
  let d = 0

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
