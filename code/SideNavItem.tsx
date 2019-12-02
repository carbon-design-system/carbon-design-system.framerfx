import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSideNavItem = props => {
    return <System.SideNavItem {...props}></System.SideNavItem>
}

export const SideNavItem = withHOC(InnerSideNavItem)

SideNavItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SideNavItem, {
    large: {
        title: "Large",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
