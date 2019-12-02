import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerHeaderGlobalAction = props => {
    return <System.HeaderGlobalAction {...props}></System.HeaderGlobalAction>
}

export const HeaderGlobalAction = withHOC(InnerHeaderGlobalAction)

HeaderGlobalAction.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(HeaderGlobalAction, {})
