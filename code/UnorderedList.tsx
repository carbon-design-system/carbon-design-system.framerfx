import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerUnorderedList = props => {
    return <System.UnorderedList {...props}></System.UnorderedList>
}

export const UnorderedList = withHOC(InnerUnorderedList)

UnorderedList.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(UnorderedList, {
    nested: {
        title: "Nested",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
