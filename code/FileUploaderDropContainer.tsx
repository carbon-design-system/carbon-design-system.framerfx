import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerFileUploaderDropContainer = props => {
    return <System.FileUploaderDropContainer {...props}></System.FileUploaderDropContainer>
}

export const FileUploaderDropContainer = withHOC(InnerFileUploaderDropContainer)

FileUploaderDropContainer.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(FileUploaderDropContainer, {
    labelText: {
        title: "Label text",
        type: ControlType.String,
        defaultValue: "Add file",
    },
    multiple: {
        title: "Multiple",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    name: {
        title: "Name",
        type: ControlType.String,
    },
    role: {
        title: "Role",
        type: ControlType.String,
    },
    tabIndex: {
        title: "Tab index",
        type: ControlType.Number,
        defaultValue: 0,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    accept: {
        title: "Accept",
        type: ControlType.Array,
        defaultValue: [],
    },
})
