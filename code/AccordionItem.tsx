import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerAccordionItem = props => {
    return <System.AccordionItem {...props}></System.AccordionItem>
}

export const AccordionItem = withHOC(InnerAccordionItem)

AccordionItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(AccordionItem, {
    iconDescription: {
        title: "Icon description",
        type: ControlType.String,
        defaultValue: "iconDescription",
    },
    open: {
        title: "Open",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
