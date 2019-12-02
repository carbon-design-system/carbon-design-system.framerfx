import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTabContent = props => {
    return <System.TabContent {...props}></System.TabContent>
}

export const TabContent = withHOC(InnerTabContent)

TabContent.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TabContent, {
    selected: {
        title: "Selected",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
