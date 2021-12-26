import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import MobileNavbar from './mobile-navbar'
import themes from './theme'

const ThemeToggler = ({ children, Nav }) => {
  const [themeMode, setThemeMode] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeMode(true)
    }
  }, [])
  const themeToggle = () => {
    setThemeMode(!themeMode)
  }
  return (
    <ThemeProvider theme={themeMode ? themes.dark : themes.light}>
      <Nav themeToggle={themeToggle} themeMode={themeMode} />
      <MobileNavbar />
      {children}
    </ThemeProvider>
  )
}

export default ThemeToggler
