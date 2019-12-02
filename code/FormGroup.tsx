import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerFormGroup = props => {
    return <System.FormGroup {...props}></System.FormGroup>
}

export const FormGroup = withHOC(InnerFormGroup)

FormGroup.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(FormGroup, {
    legendText: {
        title: "Legend text",
        type: ControlType.String,
        defaultValue: "legendText",
    },
    invalid: {
        title: "Invalid",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    message: {
        title: "Message",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    messageText: {
        title: "Message text",
        type: ControlType.String,
        defaultValue: "",
    },
})
