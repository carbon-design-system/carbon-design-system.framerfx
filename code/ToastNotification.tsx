import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { startCase } from "./utils"
import { omitIrrelevantProps } from "./utils/props"

const InnerToastNotification = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  return <System.ToastNotification {...rest}></System.ToastNotification>
}

export const ToastNotification = withHOC(InnerToastNotification)

ToastNotification.defaultProps = {
  width: 290,
  height: 127,
}

const kindOptions = ["error", "info", "success", "warning"]

addPropertyControls(ToastNotification, {
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "Toast Notification Title",
  },
  subtitle: {
    title: "Subtitle",
    type: ControlType.String,
    defaultValue: "Notification Subtitle",
  },
  caption: {
    title: "Caption",
    type: ControlType.String,
    defaultValue: "Notification Caption",
  },
  kind: {
    title: "Kind",
    type: ControlType.Enum,
    defaultValue: "error",
    options: kindOptions,
    optionTitles: kindOptions.map(startCase),
  },
  lowContrast: {
    title: "Low contrast",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  hideCloseButton: {
    title: "Close Button",
    type: ControlType.Boolean,
    defaultValue: false,
    enabledTitle: "Hide",
    disabledTitle: "Show",
  },
  timeout: {
    title: "Timeout",
    type: ControlType.Number,
    defaultValue: 0,
    min: 0,
    displayStepper: true,
    unit: "ms",
  },
})
