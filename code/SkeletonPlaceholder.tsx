import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSkeletonPlaceholder = props => {
    return <System.SkeletonPlaceholder {...props}></System.SkeletonPlaceholder>
}

export const SkeletonPlaceholder = withHOC(InnerSkeletonPlaceholder)

SkeletonPlaceholder.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SkeletonPlaceholder, {})
