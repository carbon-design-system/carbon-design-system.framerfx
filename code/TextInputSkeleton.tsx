import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTextInputSkeleton = props => {
    return <System.TextInputSkeleton {...props}></System.TextInputSkeleton>
}

export const TextInputSkeleton = withHOC(InnerTextInputSkeleton)

TextInputSkeleton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TextInputSkeleton, {
    hideLabel: {
        title: "Hide label",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
