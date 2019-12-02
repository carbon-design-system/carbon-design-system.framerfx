import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerFormLabel = props => {
    return <System.FormLabel {...props}></System.FormLabel>
}

export const FormLabel = withHOC(InnerFormLabel)

FormLabel.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(FormLabel, {})
