import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => localStorage.getItem('locale') || 'fr')

  useEffect(() => {
    localStorage.setItem('locale', locale)
    document.documentElement.lang = locale
  }, [locale])

  const toggleLocale = () => setLocale((l) => (l === 'fr' ? 'en' : 'fr'))

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

// Pick the right translation from a multilingual value
// - if value is a string, return it as-is
// - if value is { fr, en }, return value[locale] (fallback to fr)
export const pickLang = (value, locale) => {
  if (value && typeof value === 'object' && !Array.isArray(value) && ('fr' in value || 'en' in value)) {
    return value[locale] ?? value.fr ?? value.en ?? ''
  }
  return value
}
