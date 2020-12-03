import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { styles } from "@carbon/type"
import { omitIrrelevantProps } from "./utils/props"

type Breakpoint = "max" | "xlg" | "lg" | "md"

interface CarbonTextStyle {
  fontSize: string
  fontWeight: number
  letterSpacing: string | number
  lineHeight: string | number
  breakpoints?: Record<Breakpoint, Omit<CarbonTextStyle, "breakpoints">>
}

const carbonStyles = styles as Record<string, CarbonTextStyle>

export function Typography(props) {
  const { text, style, color, fontFamily, ...rest } = omitIrrelevantProps(props)

  if (!styles[style]) {
    throw new Error(`Unknown style: ${style}`)
  }

  return (
    <div
      {...rest}
      style={{
        ...styles[style],
        fontFamily,
        color,
      }}
    >
      {text}
    </div>
  )
}

Typography.defaultProps = {
  height: 48,
  width: 253,
}

const styleOptions = Object.keys(carbonStyles).sort()

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Typography, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Hello Framer!",
    displayTextArea: true,
  },
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: "#000",
  },
  fontFamily: {
    title: "Font",
    type: ControlType.Enum,
    options: ["IBM Plex Mono", "IBM Plex Sans", "IBM Plex Serif"],
    defaultValue: "IBM Plex Sans",
  },
  style: {
    title: "Style",
    type: ControlType.Enum,
    options: styleOptions,
    defaultValue: "display01",
  },
})
