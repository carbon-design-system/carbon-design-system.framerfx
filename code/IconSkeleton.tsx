import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerIconSkeleton = props => {
    return <System.IconSkeleton {...props}></System.IconSkeleton>
}

export const IconSkeleton = withHOC(InnerIconSkeleton)

IconSkeleton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(IconSkeleton, {})
