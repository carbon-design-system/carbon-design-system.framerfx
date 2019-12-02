import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerToolbarItem = props => {
    return <System.ToolbarItem {...props}></System.ToolbarItem>
}

export const ToolbarItem = withHOC(InnerToolbarItem)

ToolbarItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ToolbarItem, {
    type: {
        title: "Type",
        type: ControlType.String,
    },
    placeHolderText: {
        title: "Place holder text",
        type: ControlType.String,
        defaultValue: "Provide placeHolderText",
    },
})
