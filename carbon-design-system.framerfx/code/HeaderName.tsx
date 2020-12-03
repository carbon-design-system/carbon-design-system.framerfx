import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerHeaderName = (props) => {
  return <System.HeaderName {...props}></System.HeaderName>
}

const HeaderName = withHOC(InnerHeaderName)

HeaderName.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(HeaderName, {})
