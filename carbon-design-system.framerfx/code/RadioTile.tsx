import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerRadioTile = (props) => {
  return <System.RadioTile {...props}></System.RadioTile>
}

const RadioTile = withHOC(InnerRadioTile)

RadioTile.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(RadioTile, {
  checked: {
    title: "Checked",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  defaultChecked: {
    title: "Default checked",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  name: {
    title: "Name",
    type: ControlType.String,
  },
  value: {
    title: "Value",
    type: ControlType.String,
  },
  tabIndex: {
    title: "Tab index",
    type: ControlType.Number,
    defaultValue: 0,
  },
  light: {
    title: "Light",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
