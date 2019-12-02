import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSelectItemGroup = props => {
    return <System.SelectItemGroup {...props}></System.SelectItemGroup>
}

export const SelectItemGroup = withHOC(InnerSelectItemGroup)

SelectItemGroup.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SelectItemGroup, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Provide label",
    },
})
