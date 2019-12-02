import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTextAreaSkeleton = props => {
    return <System.TextAreaSkeleton {...props}></System.TextAreaSkeleton>
}

export const TextAreaSkeleton = withHOC(InnerTextAreaSkeleton)

TextAreaSkeleton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TextAreaSkeleton, {
    hideLabel: {
        title: "Hide label",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
