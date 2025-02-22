export const fallbackLng = 'en'
export const languages = [fallbackLng, 'cn']
export const defaultNS = 'common'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  if (Array.isArray(ns)) {
    throw new Error('ns must be a string')
  }

  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
