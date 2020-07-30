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
      let toCall: () => void

      switch (index) {
        case 0:
          toCall = onAction1Click
          break
        case 1:
          toCall = onAction2Click
          break
        case 2:
          toCall = onAction3Click
          break
      }

      if (toCall) {
        toCall()
      }
    },
    [onAction1Click, onAction2Click, onAction3Click]
  )
  const onClickCloseButton = React.useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  return (
    <System.InlineNotification
      {...rest}
      actions={actions.map((action, index) => (
        <System.NotificationActionButton key={index} onClick={() => onClickAction(index)}>
          {action}
        </System.NotificationActionButton>
      ))}
      onCloseButtonClick={onClickCloseButton}
    />
  )
}

export const InlineNotification = withHOC(InnerInlineNotification)

InlineNotification.defaultProps = {
  width: 320,
  height: 82,
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
