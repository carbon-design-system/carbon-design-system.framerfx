import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSideNavHeader = props => {
    return <System.SideNavHeader {...props}></System.SideNavHeader>
}

export const SideNavHeader = withHOC(InnerSideNavHeader)

SideNavHeader.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SideNavHeader, {
    renderIcon: {
        title: "Render icon",
        type: ControlType.String,
    },
    isSideNavExpanded: {
        title: "Is side nav expanded",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
