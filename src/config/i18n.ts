// src/config/i18n.ts
export const locales = ['en', 'as'] as const
export const defaultLocale = 'en' as const
export type Locale = typeof locales[number]

export const localeNames = {
  en: 'English',
  as: 'অসমীয়া'
}

export const localeFlags = {
  en: '🇬🇧',
  as: '🇮🇳'
}

// For language detection priority
export const localePriority = ['cookie', 'accept-language', 'default']