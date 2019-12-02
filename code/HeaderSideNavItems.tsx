import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerHeaderSideNavItems = props => {
    return <System.HeaderSideNavItems {...props}></System.HeaderSideNavItems>
}

export const HeaderSideNavItems = withHOC(InnerHeaderSideNavItems)

HeaderSideNavItems.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(HeaderSideNavItems, {
    hasDivider: {
        title: "Has divider",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
