import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerHeaderMenuButton = props => {
    return <System.HeaderMenuButton {...props}></System.HeaderMenuButton>
}

export const HeaderMenuButton = withHOC(InnerHeaderMenuButton)

HeaderMenuButton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(HeaderMenuButton, {})
