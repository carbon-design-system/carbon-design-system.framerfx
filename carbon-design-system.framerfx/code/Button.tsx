import * as React from "react"
import * as System from "carbon-components-react"
import { addPropertyControls, ControlType } from "framer"
import { omitIrrelevantProps } from "./utils/props"

export function Button(props) {
  const { text, isLoading, onTap, ...rest } = omitIrrelevantProps(props)

  const onButtonTapped = React.useCallback(() => {
    if (onTap) {
      onTap()
    }
  }, [onTap])

  if (isLoading) {
    return <System.ButtonSkeleton style={{ width: rest.width, height: rest.height }} onClick={onButtonTapped} />
  }

  return (
    <System.Button {...rest} onClick={onButtonTapped}>
      {text}
    </System.Button>
  )
}

//Define default props
Button.defaultProps = {
  width: 118,
  height: 40,
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
  onTap: {
    type: ControlType.EventHandler,
    title: "On Tap",
  },
})
