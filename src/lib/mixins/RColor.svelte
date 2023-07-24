<script>
  export let cs = {
    500: [
      'text-pink-500',
      'text-yellow-500',
      'text-cyan-500',
      'text-red-500',
      'text-teal-500',
      'text-purple-500',
    ],
  }
  export let b = 500
  export let rc = x => 0 | (Math.random() * x.length)
  export let rt = _ => 0 | (Math.random() * 3000 + 1000)
  export let c = ''
  export let t = 0
  export let d = 0

  let g = _ => {
    c = cs[b][rc(cs[b])]
  }
  let f = _ => {
    g()
    t = rt()
    setTimeout(f, t)
  }

  g()
  if (d > 0) setTimeout(f, d)
  else f()
</script>

<slot {c} {t} />
