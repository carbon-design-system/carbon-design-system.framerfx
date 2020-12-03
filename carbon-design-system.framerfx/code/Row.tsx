import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerRow = (props) => {
  return <System.Row {...props}></System.Row>
}

const Row = withHOC(InnerRow)

Row.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Row, {
  as: {
    title: "As",
    type: ControlType.String,
  },
  condensed: {
    title: "Condensed",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
