import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerColumn = (props) => {
  return <System.Column {...props}></System.Column>
}

const Column = withHOC(InnerColumn)

Column.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Column, {
  as: {
    title: "As",
    type: ControlType.String,
  },
})
