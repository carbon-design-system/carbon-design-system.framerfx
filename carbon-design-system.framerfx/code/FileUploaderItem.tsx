import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"
import { startCase } from "./utils"

const InnerFileUploaderItem = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  return <System.FileUploaderItem {...rest}></System.FileUploaderItem>
}

export const FileUploaderItem = withHOC(InnerFileUploaderItem)

FileUploaderItem.defaultProps = {
  width: 230,
  height: 48,
}

const statusOptions = ["uploading", "edit", "complete"]

addPropertyControls(FileUploaderItem, {
  name: {
    title: "Name",
    type: ControlType.String,
    defaultValue: "File 1",
  },
  status: {
    title: "Status",
    type: ControlType.Enum,
    defaultValue: statusOptions[0],
    options: statusOptions,
    optionTitles: statusOptions.map(startCase),
  },
  invalid: {
    title: "Invalid",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  errorSubject: {
    title: "Error subject",
    type: ControlType.String,
    defaultValue: "File size exceeds limits",
    hidden: (props: { invalid: boolean }) => !props.invalid,
  },
  errorBody: {
    title: "Error body",
    type: ControlType.String,
    defaultValue: "500kb max file size. Select a new file and try again",
    hidden: (props: { invalid: boolean }) => !props.invalid,
  },
})
