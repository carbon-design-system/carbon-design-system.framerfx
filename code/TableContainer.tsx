import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableContainer = props => {
    return <System.TableContainer {...props}></System.TableContainer>
}

export const TableContainer = withHOC(InnerTableContainer)

TableContainer.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TableContainer, {})
