import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerIcon = props => {
    return <System.Icon {...props}></System.Icon>
}

export const Icon = withHOC(InnerIcon)

Icon.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Icon, {
    iconTitle: {
        title: "Icon title",
        type: ControlType.String,
        defaultValue: "iconTitle",
    },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: "description",
    },
    fill: {
        title: "Fill",
        type: ControlType.String,
    },
    fillRule: {
        title: "Fill rule",
        type: ControlType.String,
        defaultValue: "evenodd",
    },
    height: {
        title: "Height",
        type: ControlType.String,
    },
    role: {
        title: "Role",
        type: ControlType.String,
        defaultValue: "img",
    },
    viewBox: {
        title: "View box",
        type: ControlType.String,
    },
    width: {
        title: "Width",
        type: ControlType.String,
    },
})
