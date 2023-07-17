import D from '$lib/js/D'

export const load = async ({ params: { item: name } }) => {
  return {
    D,
    name,
    module: (await D.items.get(name)()).default
  }
}