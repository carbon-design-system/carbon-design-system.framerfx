import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableExpandHeader = props => {
    return <System.TableExpandHeader {...props}></System.TableExpandHeader>
}

export const TableExpandHeader = withHOC(InnerTableExpandHeader)

TableExpandHeader.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TableExpandHeader, {})
