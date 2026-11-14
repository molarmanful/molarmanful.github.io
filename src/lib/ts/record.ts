export const makeRecord = <V>(obj: Record<string, V>) =>
  Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [
      k.replace(/^.+\/([^/]+)\.\w+$/, '$1'),
      v,
    ]),
  )
