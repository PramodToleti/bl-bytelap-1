import { createContext, useState } from "react"
import "./index.css"

const setDark = () => {
  localStorage.setItem("theme", "dark")
  document.documentElement.setAttribute("data-theme", "dark")
}

const setLight = () => {
  localStorage.setItem("theme", "light")
  document.documentElement.setAttribute("data-theme", "light")
}

const storedTheme = localStorage.getItem("theme")

const prefersDark =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark)

if (defaultDark) {
  setDark()
}

const Theme = (props) => {
  const { activeThemeStyles } = props

  const ThemeContext = createContext(null)
  const [activeTheme, setActiveTheme] = useState(false)
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark()
    } else {
      setLight()
    }

    console.log(activeTheme)
    //activeThemeStyles(activeTheme)
  }

  return (
    <ThemeContext.Provider value={{ activeTheme, toggleTheme }}>
      <div className="toggle-theme-wrapper">
        <span>☀️</span>
        <label className="toggle-theme" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onChange={toggleTheme}
            defaultChecked={defaultDark}
          />
          <div className="slider round"></div>
        </label>
        <span>🌒</span>
      </div>
    </ThemeContext.Provider>
  )
}

export default Theme
