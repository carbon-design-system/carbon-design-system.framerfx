import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerFileUploaderDropContainer = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  return <System.FileUploaderDropContainer {...rest}></System.FileUploaderDropContainer>
}

export const FileUploaderDropContainer = withHOC(InnerFileUploaderDropContainer)

FileUploaderDropContainer.defaultProps = {
  width: 200,
  height: 100,
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
