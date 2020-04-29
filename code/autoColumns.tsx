import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerAutoColumns = (props) => {
  return <System.AutoColumns {...props}></System.AutoColumns>
}

const AutoColumns = withHOC(InnerAutoColumns)

AutoColumns.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(AutoColumns, {})
