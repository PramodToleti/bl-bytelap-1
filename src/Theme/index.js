import "./index.css"
import { useState, useEffect } from "react"
// 1

// 4
const storedTheme = localStorage.getItem("theme")

const prefersDark =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark)

//

const Theme = () => {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  console.log(localStorage.getItem("theme"))
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          // 6
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  )
}

export default Theme
