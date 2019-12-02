import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerBreadcrumb = props => {
    return <System.Breadcrumb {...props}></System.Breadcrumb>
}

export const Breadcrumb = withHOC(InnerBreadcrumb)

Breadcrumb.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Breadcrumb, {
    noTrailingSlash: {
        title: "No trailing slash",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
