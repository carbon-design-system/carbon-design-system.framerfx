import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerInlineLoading = props => {
    return <System.InlineLoading {...props}></System.InlineLoading>
}

export const InlineLoading = withHOC(InnerInlineLoading)

InlineLoading.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(InlineLoading, {
    status: {
        title: "Status",
        type: ControlType.Enum,
        options: ["", "", "", ""],
        optionTitles: ["", "", "", ""],
    },
    iconDescription: {
        title: "Icon description",
        type: ControlType.String,
        defaultValue: "iconDescription",
    },
    successDelay: {
        title: "Success delay",
        type: ControlType.Number,
        defaultValue: 1500,
    },
})
