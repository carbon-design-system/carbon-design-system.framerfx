import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerProgressStep = props => {
    return <System.ProgressStep {...props}></System.ProgressStep>
}

export const ProgressStep = withHOC(InnerProgressStep)

ProgressStep.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ProgressStep, {
    index: {
        title: "Index",
        type: ControlType.Number,
    },
    current: {
        title: "Current",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    complete: {
        title: "Complete",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: "description",
    },
    invalid: {
        title: "Invalid",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    secondaryLabel: {
        title: "Secondary label",
        type: ControlType.String,
        defaultValue: "secondaryLabel",
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    tooltipId: {
        title: "Tooltip id",
        type: ControlType.String,
    },
})
