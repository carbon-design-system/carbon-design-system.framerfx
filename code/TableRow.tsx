import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableRow = props => {
    return <System.TableRow {...props}></System.TableRow>
}

export const TableRow = withHOC(InnerTableRow)

TableRow.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TableRow, {})
