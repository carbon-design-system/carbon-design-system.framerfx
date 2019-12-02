import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSideNavDetails = props => {
    return <System.SideNavDetails {...props}></System.SideNavDetails>
}

export const SideNavDetails = withHOC(InnerSideNavDetails)

SideNavDetails.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SideNavDetails, {
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
})
