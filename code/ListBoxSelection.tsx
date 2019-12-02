import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerListBoxSelection = props => {
    return <System.ListBoxSelection {...props}></System.ListBoxSelection>
}

export const ListBoxSelection = withHOC(InnerListBoxSelection)

ListBoxSelection.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ListBoxSelection, {
    selectionCount: {
        title: "Selection count",
        type: ControlType.Number,
    },
})
