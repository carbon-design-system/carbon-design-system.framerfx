import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCondensed = (props) => {
  return <System.Condensed {...props}></System.Condensed>
}

const Condensed = withHOC(InnerCondensed)

Condensed.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Condensed, {})
