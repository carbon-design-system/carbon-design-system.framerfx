import { switchTheme, DEFAULT_THEME, CARBON_THEME_KEY, getCurrentTheme, currentTheme } from "./utils/theme"

async function initTheme() {
  const initialTheme = getCurrentTheme()

  // Theme was changed from Framer's canvas
  window.addEventListener("storage", async (e) => {
    const updatedTheme = getCurrentTheme()

    if (updatedTheme !== currentTheme) {
      switchTheme(updatedTheme)
    }
  })

  await switchTheme(initialTheme)
}

initTheme()
