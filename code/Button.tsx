import * as React from "react"
import * as System from "carbon-components-react"
import { addPropertyControls, ControlType, Stack } from "framer"
import { omitIrrelevantProps } from "./utils/props"

export function Button(props) {
  const { text, isLoading, ...rest } = omitIrrelevantProps(props)

  if (isLoading) {
    return <System.ButtonSkeleton style={{ width: rest.width, height: rest.height }} />
  }

  return (
    <Stack distribution="center" size="100%">
      <System.Button {...rest}>{text}</System.Button>
    </Stack>
  )
}

//Define default props
Button.defaultProps = {
  width: 118,
  height: 48,
}

//Create property controls to expose properties in the canvas
addPropertyControls(Button, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Button",
  },
  kind: {
    type: ControlType.Enum,
    title: "Kind",
    options: ["primary", "secondary", "tertiary", "danger"],
    optionTitles: ["Primary", "Secondary", "Tertiary", "Danger"],
    defaultValue: "primary",
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    options: ["field", "small"],
    optionTitles: ["Field", "Small"],
    defaultValue: "field",
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled",
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: false,
  },
  isLoading: {
    title: "Loading",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
