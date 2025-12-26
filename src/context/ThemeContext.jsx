import { createContext, useContext, useState, useEffect } from 'react'

export const ACCENT_COLORS = [
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Teal', value: '#10b981' },
  { name: 'Cyan', value: '#06b6d4' },
  { name: 'Rose', value: '#f43f5e' },
  { name: 'Amber', value: '#f59e0b' },
  { name: 'Purple', value: '#a855f7' },
]

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [accent, setAccentColor] = useState(() => localStorage.getItem('accent') || '#6366f1')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.setProperty('--accent', accent)
    localStorage.setItem('theme', theme)
    localStorage.setItem('accent', accent)
  }, [theme, accent])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const setAccent = (color) => setAccentColor(color)

  return (
    <ThemeContext.Provider value={{ theme, accent, toggleTheme, setAccent }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
