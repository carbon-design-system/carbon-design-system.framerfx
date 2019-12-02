import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSecondaryButton = props => {
    return <System.SecondaryButton {...props}></System.SecondaryButton>
}

export const SecondaryButton = withHOC(InnerSecondaryButton)

SecondaryButton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SecondaryButton, {})
