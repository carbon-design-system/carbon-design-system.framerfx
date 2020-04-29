import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerNotificationActionButton = (props) => {
  return <System.NotificationActionButton {...props}></System.NotificationActionButton>
}

const NotificationActionButton = withHOC(InnerNotificationActionButton)

NotificationActionButton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(NotificationActionButton, {})
