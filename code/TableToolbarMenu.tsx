import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableToolbarMenu = props => {
    return <System.TableToolbarMenu {...props}></System.TableToolbarMenu>
}

export const TableToolbarMenu = withHOC(InnerTableToolbarMenu)

TableToolbarMenu.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TableToolbarMenu, {
    renderIcon: {
        title: "Render icon",
        type: ControlType.String,
    },
    iconDescription: {
        title: "Icon description",
        type: ControlType.String,
        defaultValue: "Settings",
    },
})
