import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerFileUploaderItem = props => {
    return <System.FileUploaderItem {...props}></System.FileUploaderItem>
}

export const FileUploaderItem = withHOC(InnerFileUploaderItem)

FileUploaderItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(FileUploaderItem, {
    uuid: {
        title: "Uuid",
        type: ControlType.String,
    },
    name: {
        title: "Name",
        type: ControlType.String,
    },
    status: {
        title: "Status",
        type: ControlType.Enum,
        defaultValue: "uploading",
        options: ["uploading", "edit", "complete"],
        optionTitles: ["uploading", "edit", "complete"],
    },
    iconDescription: {
        title: "Icon description",
        type: ControlType.String,
        defaultValue: "iconDescription",
    },
    invalid: {
        title: "Invalid",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    errorSubject: {
        title: "Error subject",
        type: ControlType.String,
    },
    errorBody: {
        title: "Error body",
        type: ControlType.String,
    },
})
