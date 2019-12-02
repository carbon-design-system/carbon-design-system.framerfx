import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerFormItem = props => {
    return <System.FormItem {...props}></System.FormItem>
}

export const FormItem = withHOC(InnerFormItem)

FormItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(FormItem, {})
