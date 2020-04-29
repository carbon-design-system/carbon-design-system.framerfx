import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerNotificationTextDetails = (props) => {
  return <System.NotificationTextDetails {...props}></System.NotificationTextDetails>
}

const NotificationTextDetails = withHOC(InnerNotificationTextDetails)

NotificationTextDetails.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(NotificationTextDetails, {
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "title",
  },
  notificationType: {
    title: "Notification type",
    type: ControlType.Enum,
    defaultValue: "toast",
    options: ["toast", "inline"],
    optionTitles: ["toast", "inline"],
  },
})
