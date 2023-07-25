<script>
  import { onMount } from 'svelte'

  import { colors } from '../js/util'

  let pulse = 2000
  let len = 4
  let clrs = [...Array(len)].map(() => 'text-gray-500')

  let ic = 0
  let i = len - 1

  onMount(() => {
    setInterval(() => {
      if (i == len - 1) ic = (ic + 1) % colors[500].length
      clrs[i] = colors[500][ic]
      i = (i + 1) % len
    }, pulse / len)
  })
</script>

<slot {clrs} {len} {pulse} />
