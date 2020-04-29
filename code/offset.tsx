import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerOffset = (props) => {
  return <System.Offset {...props}></System.Offset>
}

const Offset = withHOC(InnerOffset)

Offset.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Offset, {})
