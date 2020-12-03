import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerGrid = (props) => {
  return <System.Grid {...props}></System.Grid>
}

const Grid = withHOC(InnerGrid)

Grid.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Grid, {
  as: {
    title: "As",
    type: ControlType.String,
  },
  condensed: {
    title: "Condensed",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  fullWidth: {
    title: "Full width",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
