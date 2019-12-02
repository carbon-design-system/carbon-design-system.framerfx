import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerContent = props => {
    return <System.Content {...props}></System.Content>
}

export const Content = withHOC(InnerContent)

Content.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Content, {
    tagName: {
        title: "Tag name",
        type: ControlType.String,
        defaultValue: "main",
    },
})
