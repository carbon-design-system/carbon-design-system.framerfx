import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerHeaderPanel = props => {
    return <System.HeaderPanel {...props}></System.HeaderPanel>
}

export const HeaderPanel = withHOC(InnerHeaderPanel)

HeaderPanel.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(HeaderPanel, {})
