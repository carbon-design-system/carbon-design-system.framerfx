import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerListBoxMenuIcon = props => {
    return <System.ListBoxMenuIcon {...props}></System.ListBoxMenuIcon>
}

export const ListBoxMenuIcon = withHOC(InnerListBoxMenuIcon)

ListBoxMenuIcon.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ListBoxMenuIcon, {
    isOpen: {
        title: "Is open",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
