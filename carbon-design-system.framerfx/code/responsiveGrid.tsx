import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerResponsiveGrid = props => {
    return <System.ResponsiveGrid {...props}></System.ResponsiveGrid>
}

const ResponsiveGrid = withHOC(InnerResponsiveGrid)

ResponsiveGrid.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ResponsiveGrid, {})
