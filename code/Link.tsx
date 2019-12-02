import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerLink = props => {
    return <System.Link {...props}></System.Link>
}

export const Link = withHOC(InnerLink)

Link.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Link, {
    href: {
        title: "Href",
        type: ControlType.String,
        defaultValue: "https://framer.com",
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    inline: {
        title: "Inline",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
