import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerToolbar = props => {
    return <System.Toolbar {...props}></System.Toolbar>
}

export const Toolbar = withHOC(InnerToolbar)

Toolbar.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Toolbar, {})
