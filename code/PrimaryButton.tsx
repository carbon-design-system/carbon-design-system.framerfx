import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPrimaryButton = props => {
    return <System.PrimaryButton {...props}></System.PrimaryButton>
}

export const PrimaryButton = withHOC(InnerPrimaryButton)

PrimaryButton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(PrimaryButton, {})
