export default (a: string, b: string) => {
  const mat: number[][]
    = Array.from({ length: a.length + 1 }).map(() => Array.from({ length: b.length + 1 }))
  for (const i in [...a, ' ']) mat[i][0] = +i
  for (const i in [...b, ' ']) mat[0][i] = +i

  for (const i in [...a]) {
    const i1 = +i
    for (const j in [...b]) {
      const j1 = +j
      const cost = +(a[i1] !== b[j1])
      mat[i1 + 1][j1 + 1] = Math.min(
        mat[i1][j1 + 1] + 1,
        mat[i1 + 1][j1] + 1,
        mat[i1][j1] + cost,
      )
    }
  }

  const steps = [a]
  let i = a.length
  let j = b.length
  while (i > 0 || j > 0) {
    const cost = mat[i][j]
    const costD = i > 0 ? mat[i - 1][j] : 1 / 0
    const costI = j > 0 ? mat[i][j - 1] : 1 / 0
    const costS = i > 0 && j > 0 ? mat[i - 1][j - 1] : 1 / 0

    if (cost === costD + 1) {
      i--
      steps.unshift(steps[0].slice(0, i) + steps[0].slice(i + 1))
    }
    else if (cost === costI + 1) {
      j--
      steps.unshift(steps[0].slice(0, i) + b[j] + steps[0].slice(i))
    }
    else if (cost === costS + +(a[i - 1] !== b[j - 1])) {
      i--
      j--
      if (a[i] !== b[j])
        steps.unshift(steps[0].slice(0, i) + b[j] + steps[0].slice(i + 1))
    }
    else {
      i--
      j--
    }
  }

  return steps
}
