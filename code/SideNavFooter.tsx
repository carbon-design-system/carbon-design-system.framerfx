import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSideNavFooter = props => {
    return <System.SideNavFooter {...props}></System.SideNavFooter>
}

export const SideNavFooter = withHOC(InnerSideNavFooter)

SideNavFooter.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SideNavFooter, {
    assistiveText: {
        title: "Assistive text",
        type: ControlType.String,
        defaultValue: "Toggle opening or closing the side navigation",
    },
    expanded: {
        title: "Expanded",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isSideNavExpanded: {
        title: "Is side nav expanded",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
