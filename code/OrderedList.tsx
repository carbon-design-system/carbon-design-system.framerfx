import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerOrderedList = props => {
    return <System.OrderedList {...props}></System.OrderedList>
}

export const OrderedList = withHOC(InnerOrderedList)

OrderedList.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(OrderedList, {
    nested: {
        title: "Nested",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
