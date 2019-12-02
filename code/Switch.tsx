import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSwitch = props => {
    return <System.Switch {...props}></System.Switch>
}

export const Switch = withHOC(InnerSwitch)

Switch.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Switch, {
    index: {
        title: "Index",
        type: ControlType.Number,
    },
    name: {
        title: "Name",
        type: ControlType.String,
    },
    selected: {
        title: "Selected",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Provide text",
    },
})
