import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTextArea = props => {
    return <System.TextArea {...props}></System.TextArea>
}

export const TextArea = withHOC(InnerTextArea)

TextArea.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TextArea, {
    cols: {
        title: "Cols",
        type: ControlType.Number,
        defaultValue: 50,
    },
    defaultValue: {
        title: "Default value",
        type: ControlType.String,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "",
    },
    rows: {
        title: "Rows",
        type: ControlType.Number,
        defaultValue: 4,
    },
    value: {
        title: "Value",
        type: ControlType.String,
    },
    invalid: {
        title: "Invalid",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    invalidText: {
        title: "Invalid text",
        type: ControlType.String,
        defaultValue: "",
    },
    hideLabel: {
        title: "Hide label",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    light: {
        title: "Light",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
