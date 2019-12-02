import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableBatchAction = props => {
    return <System.TableBatchAction {...props}></System.TableBatchAction>
}

export const TableBatchAction = withHOC(InnerTableBatchAction)

TableBatchAction.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TableBatchAction, {
    hasIconOnly: {
        title: "Has icon only",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    renderIcon: {
        title: "Render icon",
        type: ControlType.String,
    },
})
