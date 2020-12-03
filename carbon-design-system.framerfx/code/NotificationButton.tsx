import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerNotificationButton = (props) => {
  return <System.NotificationButton {...props}></System.NotificationButton>
}

const NotificationButton = withHOC(InnerNotificationButton)

NotificationButton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(NotificationButton, {
  type: {
    title: "Type",
    type: ControlType.String,
    defaultValue: "button",
  },
  iconDescription: {
    title: "Icon description",
    type: ControlType.String,
    defaultValue: "close icon",
  },
  renderIcon: {
    title: "Render icon",
    type: ControlType.String,
  },
  name: {
    title: "Name",
    type: ControlType.String,
  },
  notificationType: {
    title: "Notification type",
    type: ControlType.Enum,
    defaultValue: "toast",
    options: ["toast", "inline"],
    optionTitles: ["toast", "inline"],
  },
})
