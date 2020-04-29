import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSideNavLink = (props) => {
  return <System.SideNavLink {...props}></System.SideNavLink>
}

const SideNavLink = withHOC(InnerSideNavLink)

SideNavLink.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(SideNavLink, {})
