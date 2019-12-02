import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerNumberInputSkeleton = props => {
    return <System.NumberInputSkeleton {...props}></System.NumberInputSkeleton>
}

export const NumberInputSkeleton = withHOC(InnerNumberInputSkeleton)

NumberInputSkeleton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(NumberInputSkeleton, {
    hideLabel: {
        title: "Hide label",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
