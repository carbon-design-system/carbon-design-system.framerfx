import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerHeader = props => {
    return <System.Header {...props}></System.Header>
}

export const Header = withHOC(InnerHeader)

Header.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Header, {})
