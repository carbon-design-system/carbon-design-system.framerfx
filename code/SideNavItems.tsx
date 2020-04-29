import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSideNavItems = (props) => {
  return <System.SideNavItems {...props}></System.SideNavItems>
}

const SideNavItems = withHOC(InnerSideNavItems)

SideNavItems.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(SideNavItems, {
  isSideNavExpanded: {
    title: "Is side nav expanded",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
