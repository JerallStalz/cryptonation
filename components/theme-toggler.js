import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import themes from './theme'

const ThemeToggler = ({ children, Nav }) => {
  const [themeMode, setThemeMode] = useState(false)
  const themeToggle = () => {
    setThemeMode(!themeMode)
  }
  return (
    <ThemeProvider theme={themeMode ? themes.dark : themes.light}>
      <Nav themeToggle={themeToggle} themeMode={themeMode} />
      {children}
    </ThemeProvider>
  )
}

export default ThemeToggler
