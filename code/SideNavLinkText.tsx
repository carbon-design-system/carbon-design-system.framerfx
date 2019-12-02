import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSideNavLinkText = props => {
    return <System.SideNavLinkText {...props}></System.SideNavLinkText>
}

export const SideNavLinkText = withHOC(InnerSideNavLinkText)

SideNavLinkText.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SideNavLinkText, {})
