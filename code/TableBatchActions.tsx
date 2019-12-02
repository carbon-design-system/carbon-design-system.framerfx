import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableBatchActions = props => {
    return <System.TableBatchActions {...props}></System.TableBatchActions>
}

export const TableBatchActions = withHOC(InnerTableBatchActions)

TableBatchActions.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TableBatchActions, {
    shouldShowBatchActions: {
        title: "Should show batch actions",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    totalSelected: {
        title: "Total selected",
        type: ControlType.Number,
    },
})
