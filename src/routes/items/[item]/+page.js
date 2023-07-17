import D from '$lib/js/D'

export const load = async ({ params: { item: name } }) => {
  return {
    name,
    module: (await D.items.get(name)()).default
  }
}