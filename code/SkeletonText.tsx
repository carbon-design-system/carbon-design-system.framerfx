import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSkeletonText = props => {
    return <System.SkeletonText {...props}></System.SkeletonText>
}

export const SkeletonText = withHOC(InnerSkeletonText)

SkeletonText.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SkeletonText, {
    paragraph: {
        title: "Paragraph",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    lineCount: {
        title: "Line count",
        type: ControlType.Number,
        defaultValue: 3,
    },
    width: {
        title: "Width",
        type: ControlType.String,
        defaultValue: "100%",
    },
    heading: {
        title: "Heading",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
