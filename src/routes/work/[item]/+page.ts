import { error } from '@sveltejs/kit'

import { pages } from '#lib/ts/meta.ts'

import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params: { item } }) => {
  if (!Object.hasOwn(pages, item)) error(404)
  const { meta, default: component } = await pages[item]()
  return { ...meta, component }
}
