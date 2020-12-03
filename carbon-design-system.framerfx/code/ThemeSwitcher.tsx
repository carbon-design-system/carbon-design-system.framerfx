import * as React from "react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { themes, formatThemeName, switchTheme, DEFAULT_THEME, CARBON_THEME_KEY } from "./utils/theme"
import { useLocalStorage } from "./utils/useLocalStorage"

const containerStyle: React.CSSProperties = {
  padding: 16,
  color: "#09F",
}

export const ThemeSwitcher = (props) => {
  const { theme } = props
  const [currentTheme, setCurrentTheme] = useLocalStorage<string>(CARBON_THEME_KEY, theme)
  React.useEffect(() => {
    setCurrentTheme(theme)
    switchTheme(theme)
  }, [theme])
  return <div style={containerStyle}>Current Theme: {formatThemeName(currentTheme)}</div>
}

ThemeSwitcher.defaultProps = {
  width: 289,
  height: 52,
}

addPropertyControls(ThemeSwitcher, {
  theme: {
    title: "Theme",
    type: ControlType.Enum,
    options: Object.keys(themes),
    optionTitles: Object.keys(themes).map(formatThemeName),
    defaultValue: DEFAULT_THEME,
  },
})
