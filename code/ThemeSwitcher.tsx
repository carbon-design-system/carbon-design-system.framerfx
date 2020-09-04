import * as React from "react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { themes, formatThemeName, switchTheme, DEFAULT_THEME } from "./utils/theme"

const containerStyle: React.CSSProperties = {
  padding: 16,
}

export const ThemeSwitcher = (props) => {
  const { theme } = props
  React.useEffect(() => {
    switchTheme(theme)
  }, [theme])
  return <div style={containerStyle}>Current Theme: {formatThemeName(theme)}</div>
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
