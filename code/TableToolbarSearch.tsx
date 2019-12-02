import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableToolbarSearch = props => {
    return <System.TableToolbarSearch {...props}></System.TableToolbarSearch>
}

export const TableToolbarSearch = withHOC(InnerTableToolbarSearch)

TableToolbarSearch.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TableToolbarSearch, {
    searchContainerClasses: {
        title: "Search container classes",
        type: ControlType.String,
    },
    placeHolderText: {
        title: "Place holder text",
        type: ControlType.String,
        defaultValue: "placeHolderText",
    },
    labelText: {
        title: "Label text",
        type: ControlType.String,
        defaultValue: "labelText",
    },
    persistent: {
        title: "Persistent",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
