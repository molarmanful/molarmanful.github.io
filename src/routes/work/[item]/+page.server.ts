import type { PageServerLoad } from './$types'

export const load: PageServerLoad = ({ params: { item: name } }) => ({ name })
