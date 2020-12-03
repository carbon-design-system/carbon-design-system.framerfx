import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerA11yWarningIcon = (props) => {
  return <System.A11yWarningIcon {...props}></System.A11yWarningIcon>
}

const A11yWarningIcon = withHOC(InnerA11yWarningIcon)

A11yWarningIcon.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(A11yWarningIcon, {})
