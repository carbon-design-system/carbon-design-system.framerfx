import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerToggleSmall = props => {
    return <System.ToggleSmall {...props}></System.ToggleSmall>
}

export const ToggleSmall = withHOC(InnerToggleSmall)

ToggleSmall.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ToggleSmall, {})
