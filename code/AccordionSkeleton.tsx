import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerAccordionSkeleton = props => {
    return <System.AccordionSkeleton {...props}></System.AccordionSkeleton>
}

export const AccordionSkeleton = withHOC(InnerAccordionSkeleton)

AccordionSkeleton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(AccordionSkeleton, {
    open: {
        title: "Open",
        type: ControlType.Boolean,
        defaultValue: true,
    },
    count: {
        title: "Count",
        type: ControlType.Number,
        defaultValue: 4,
    },
})
