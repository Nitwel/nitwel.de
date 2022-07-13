export type ImageOptions = Partial<{
    width: number,
    height: number,
    quality: number
}>

export function getImage(id: string, options: ImageOptions = {}) {
    let url = new URL(`https://nitwel-eu.directus.app/assets/${id}`)

    for(let [key, val] of Object.entries(options)) {
        url.searchParams.set(key, val.toString())
    }
    return url.toString()
}