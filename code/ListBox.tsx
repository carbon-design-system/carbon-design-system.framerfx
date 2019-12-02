import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerListBox = props => {
    return <System.ListBox {...props}></System.ListBox>
}

export const ListBox = withHOC(InnerListBox)

ListBox.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ListBox, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
