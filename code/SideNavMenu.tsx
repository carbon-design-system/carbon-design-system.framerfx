import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSideNavMenu = (props) => {
  return <System.SideNavMenu {...props}></System.SideNavMenu>
}

const SideNavMenu = withHOC(InnerSideNavMenu)

SideNavMenu.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(SideNavMenu, {})
