import type { Component } from 'svelte'

import { error } from '@sveltejs/kit'

import { items } from '#lib/ts/items.ts'
import { makeRecord } from '#lib/ts/record.ts'

import type { PageLoad } from './$types'

const pages = makeRecord(
  import.meta.glob<{ default: Component }>('#lib/items/*.svelte'),
)

export const load: PageLoad = async ({ params: { item } }) => {
  if (!Object.hasOwn(pages, item)) error(404)
  const { default: component } = await pages[item]()
  return { ...items[item], component }
}
