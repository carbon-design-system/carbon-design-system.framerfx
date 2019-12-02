import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerForm = props => {
    return <System.Form {...props}></System.Form>
}

export const Form = withHOC(InnerForm)

Form.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Form, {})
