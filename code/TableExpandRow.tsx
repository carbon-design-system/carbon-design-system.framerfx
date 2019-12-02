import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableExpandRow = props => {
    return <System.TableExpandRow {...props}></System.TableExpandRow>
}

export const TableExpandRow = withHOC(InnerTableExpandRow)

TableExpandRow.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TableExpandRow, {
    isExpanded: {
        title: "Is expanded",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    expandIconDescription: {
        title: "Expand icon description",
        type: ControlType.String,
        defaultValue: "expandIconDescription",
    },
    expandHeader: {
        title: "Expand header",
        type: ControlType.String,
        defaultValue: "expand",
    },
})
