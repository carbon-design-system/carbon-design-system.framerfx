import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerBreadcrumbItem = props => {
    return <System.BreadcrumbItem {...props}></System.BreadcrumbItem>
}

export const BreadcrumbItem = withHOC(InnerBreadcrumbItem)

BreadcrumbItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(BreadcrumbItem, {
    href: {
        title: "Href",
        type: ControlType.String,
        defaultValue: "https://framer.com",
    },
    isCurrentPage: {
        title: "Is current page",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
