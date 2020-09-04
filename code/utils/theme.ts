const CDN_BASE_URL = "https://static.ikettl.es/carbon"

export const themes = {
  whiteTheme: `${CDN_BASE_URL}/theme-white.css`,
  g10Theme: `${CDN_BASE_URL}/theme-g10.css`,
  g90Theme: `${CDN_BASE_URL}/theme-g90.css`,
  g100Theme: `${CDN_BASE_URL}/theme-g100.css`,
}

export const DEFAULT_THEME: keyof typeof themes = "whiteTheme"

export function formatThemeName(themeName: string) {
  return themeName.split("Theme")[0]
}

// Generates an ID for the style tag
function generateStylesheetId(themeName: string): string {
  return `stylesheet-${themeName}`
}

// Performs an XHR request to fetch the theme CSS and inserts it into the DOM
async function fetchTheme(themeStylesheetUrl: string, stylesheetId: string) {
  const response = await fetch(themeStylesheetUrl, {
    method: "GET",
  })
  const body = (await response.text()) as string
  const stylesheetBody = document.createTextNode(body)
  const style = document.createElement("style")
  style.type = "text/css"
  style.id = stylesheetId
  style.appendChild(stylesheetBody)
  document.head.appendChild(style)
}

// Inserts the specified theme and cleans up any unused style tags of previously used themes
export async function insertTheme(themeName: string) {
  if (!themes[themeName]) {
    throw new Error(`Theme ${themeName} not found`)
  }

  const stylesheetId = generateStylesheetId(themeName)

  if (!document.getElementById(stylesheetId)) {
    try {
      await fetchTheme(themes[themeName], stylesheetId)

      // Removes unused themes from the DOM
      for (const unusedThemeName of Object.keys(themes).filter((name) => name !== themeName)) {
        const unusedStylesheetId = generateStylesheetId(unusedThemeName)
        const style = document.getElementById(unusedStylesheetId)
        if (style) {
          document.head.removeChild(style)
        }
      }
    } catch (err) {
      console.error(`Unable to fetch theme ${themeName} at URL ${themes[themeName]}`)
    }
  }
}

export async function switchTheme(themeName: string) {
  await insertTheme(themeName)
}
