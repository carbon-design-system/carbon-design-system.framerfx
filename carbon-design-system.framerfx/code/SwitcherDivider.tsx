import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSwitcherDivider = (props) => {
  return <System.SwitcherDivider {...props}></System.SwitcherDivider>
}

const SwitcherDivider = withHOC(InnerSwitcherDivider)

SwitcherDivider.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(SwitcherDivider, {})
