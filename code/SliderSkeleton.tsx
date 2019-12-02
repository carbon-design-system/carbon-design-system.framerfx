import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSliderSkeleton = props => {
    return <System.SliderSkeleton {...props}></System.SliderSkeleton>
}

export const SliderSkeleton = withHOC(InnerSliderSkeleton)

SliderSkeleton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SliderSkeleton, {
    hideLabel: {
        title: "Hide label",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
