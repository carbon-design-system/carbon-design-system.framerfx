import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTag = props => {
    return <System.Tag {...props}></System.Tag>
}

export const Tag = withHOC(InnerTag)

Tag.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Tag, {
    type: {
        title: "Type",
        type: ControlType.Enum,
        options: ["red", "magenta", "purple", "blue", "cyan", "teal", "green", "gray", "cool-gray", "warm-gray"],
        optionTitles: ["red", "magenta", "purple", "blue", "cyan", "teal", "green", "gray", "cool gray", "warm gray"],
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    filter: {
        title: "Filter",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
