import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"
import { startCase } from "./utils"

// @TODO Fix inconsistencies between preview and canvas
const InnerInlineNotification = (props) => {
  const { actions, onClose, onAction1Click, onAction2Click, onAction3Click, ...rest } = omitIrrelevantProps(props)
  const onClickAction = React.useCallback(
    (index: number) => {
      switch (index) {
        case 0:
          onAction1Click()
          break
        case 1:
          onAction2Click()
          break
        case 2:
          onAction3Click()
          break
      }
    },
    [onAction1Click, onAction2Click, onAction3Click]
  )
  return (
    <System.InlineNotification
      {...rest}
      actions={actions.map((action, index) => (
        <System.NotificationActionButton key={index} onClick={() => onClickAction(index)}>
          {action}
        </System.NotificationActionButton>
      ))}
      onCloseButtonClick={onClose}
    />
  )
}

export const InlineNotification = withHOC(InnerInlineNotification)

InlineNotification.defaultProps = {
  width: 320,
  height: 82,
  onClose: () => console.log(`Notification Closed`),
  onAction1Click: () => console.log(`Action 1 Clicked`),
  onAction2Click: () => console.log(`Action 2 Clicked`),
  onAction3Click: () => console.log(`Action 3 Clicked`),
}

const kindOptions = ["error", "info", "success", "warning"]

addPropertyControls(InlineNotification, {
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "Notification Title",
  },
  subtitle: {
    title: "Subtitle",
    type: ControlType.String,
    defaultValue: "Notification Subtitle",
  },
  kind: {
    title: "Kind",
    type: ControlType.Enum,
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
  actions: {
    title: "Actions",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["Action"],
  },
  onClose: {
    type: ControlType.EventHandler,
  },
  onAction1Click: {
    type: ControlType.EventHandler,
  },
  onAction2Click: {
    type: ControlType.EventHandler,
  },
  onAction3Click: {
    type: ControlType.EventHandler,
  },
})
