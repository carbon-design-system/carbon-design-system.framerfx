import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerButtonSkeleton = props => {
    return <System.ButtonSkeleton {...props}></System.ButtonSkeleton>
}

export const ButtonSkeleton = withHOC(InnerButtonSkeleton)

ButtonSkeleton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ButtonSkeleton, {
    small: {
        title: "Small",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    href: {
        title: "Href",
        type: ControlType.String,
        defaultValue: "https://framer.com",
    },
})
