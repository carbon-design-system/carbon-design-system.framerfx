import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDangerButton = props => {
    return <System.DangerButton {...props}></System.DangerButton>
}

export const DangerButton = withHOC(InnerDangerButton)

DangerButton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DangerButton, {})
