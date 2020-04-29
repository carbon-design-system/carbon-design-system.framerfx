import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPasswordInput = (props) => {
  return <System.PasswordInput {...props}></System.PasswordInput>
}

const PasswordInput = withHOC(InnerPasswordInput)

PasswordInput.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(PasswordInput, {
  defaultValue: {
    title: "Default value",
    type: ControlType.String,
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "placeholder",
  },
  value: {
    title: "Value",
    type: ControlType.String,
  },
  hideLabel: {
    title: "Hide label",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  invalid: {
    title: "Invalid",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  invalidText: {
    title: "Invalid text",
    type: ControlType.String,
    defaultValue: "",
  },
  light: {
    title: "Light",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  tooltipPosition: {
    title: "Tooltip position",
    type: ControlType.Enum,
    options: ["", "", "", ""],
    optionTitles: ["", "", "", ""],
  },
  tooltipAlignment: {
    title: "Tooltip alignment",
    type: ControlType.Enum,
    options: ["", "", ""],
    optionTitles: ["", "", ""],
  },
  hidePasswordLabel: {
    title: "Hide password label",
    type: ControlType.String,
    defaultValue: "hidePasswordLabel",
  },
  showPasswordLabel: {
    title: "Show password label",
    type: ControlType.String,
    defaultValue: "showPasswordLabel",
  },
  size: {
    title: "Size",
    type: ControlType.String,
    defaultValue: "",
  },
})
