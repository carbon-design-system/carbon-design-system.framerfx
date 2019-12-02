import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerFilename = props => {
    return <System.Filename {...props}></System.Filename>
}

export const Filename = withHOC(InnerFilename)

Filename.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Filename, {
    iconDescription: {
        title: "Icon description",
        type: ControlType.String,
        defaultValue: "Uploading file",
    },
    status: {
        title: "Status",
        type: ControlType.Enum,
        defaultValue: "uploading",
        options: ["edit", "complete", "uploading"],
        optionTitles: ["edit", "complete", "uploading"],
    },
    tabIndex: {
        title: "Tab index",
        type: ControlType.String,
        defaultValue: 0,
    },
})
