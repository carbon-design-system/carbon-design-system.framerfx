import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSideNavIcon = (props) => {
  return <System.SideNavIcon {...props}></System.SideNavIcon>
}

const SideNavIcon = withHOC(InnerSideNavIcon)

SideNavIcon.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(SideNavIcon, {
  small: {
    title: "Small",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
