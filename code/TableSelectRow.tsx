import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableSelectRow = props => {
    return <System.TableSelectRow {...props}></System.TableSelectRow>
}

export const TableSelectRow = withHOC(InnerTableSelectRow)

TableSelectRow.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TableSelectRow, {
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    name: {
        title: "Name",
        type: ControlType.String,
    },
    radio: {
        title: "Radio",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
