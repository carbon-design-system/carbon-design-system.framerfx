import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSelectItem = props => {
    return <System.SelectItem {...props}></System.SelectItem>
}

export const SelectItem = withHOC(InnerSelectItem)

SelectItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SelectItem, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    hidden: {
        title: "Hidden",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "",
    },
})
