import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSearchFilterButton = props => {
    return <System.SearchFilterButton {...props}></System.SearchFilterButton>
}

export const SearchFilterButton = withHOC(InnerSearchFilterButton)

SearchFilterButton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SearchFilterButton, {
    labelText: {
        title: "Label text",
        type: ControlType.String,
        defaultValue: "Search",
    },
    iconDescription: {
        title: "Icon description",
        type: ControlType.String,
        defaultValue: "filter",
    },
})
