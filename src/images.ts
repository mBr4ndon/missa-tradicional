import manifest from './images.json'

export type ImageKey = keyof typeof manifest

// Enquanto for false, as imagens vêm do CDN do Wix.
// `npm run images` descarrega-as para public/images e muda isto para true.
export const LOCAL_IMAGES = false

const WIX = 'https://static.wixstatic.com/media/'

export function img(key: ImageKey, width = 1200): string {
  const { id, ext } = manifest[key]
  if (LOCAL_IMAGES) return `/images/${key}.${ext}`
  return `${WIX}${id}/v1/fit/w_${width},h_${width},q_82/f.${ext}`
}
