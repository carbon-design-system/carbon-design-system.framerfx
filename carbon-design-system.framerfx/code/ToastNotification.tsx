import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "./withHOC"
import { startCase } from "./utils"
import { omitIrrelevantProps } from "./utils/props"
import { indentPropertyControlTitle } from "./utils/propertyControls"

const timeoutRenderTargets = [RenderTarget.preview, RenderTarget.export]

const InnerToastNotification = (props) => {
  const { hideSubtitle, subtitle, hideCaption, caption, timeout, onClose, ...rest } = omitIrrelevantProps(props)
  const subtitleText = React.useMemo(() => (hideSubtitle ? "" : subtitle), [hideSubtitle, subtitle])
  const captionText = React.useMemo(() => (hideCaption ? "" : caption), [hideCaption, caption])
  /**
   * Set the key based on caption/subtitle — this forces the component to re-mount
   * to avoid UI glitches on the canvas when changing properties.
   */
  const key = React.useMemo(() => `${subtitleText}-${captionText}`, [subtitleText, captionText])
  const onNotificationClosed = React.useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  return (
    <System.ToastNotification
      {...rest}
      key={key}
      subtitle={subtitleText}
      caption={captionText}
      timeout={timeoutRenderTargets.indexOf(RenderTarget.current()) > -1 ? timeout : undefined}
      onClose={onNotificationClosed}
    ></System.ToastNotification>
  )
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
  hideSubtitle: {
    title: "Subtitle",
    type: ControlType.Boolean,
    enabledTitle: "Hide",
    disabledTitle: "Show",
    defaultValue: false,
  },
  subtitle: {
    title: indentPropertyControlTitle("Text"),
    type: ControlType.String,
    defaultValue: "Notification Subtitle",
    hidden: (props: any) => props.hideSubtitle,
  },
  hideCaption: {
    title: "Caption",
    type: ControlType.Boolean,
    enabledTitle: "Hide",
    disabledTitle: "Show",
    defaultValue: false,
  },
  caption: {
    title: indentPropertyControlTitle("Text"),
    type: ControlType.String,
    defaultValue: "Notification Caption",
    hidden: (props: any) => props.hideCaption,
  },
  kind: {
    title: "Kind",
    type: ControlType.Enum,
    defaultValue: "error",
    options: kindOptions,
    optionTitles: kindOptions.map(startCase),
  },
  hideCloseButton: {
    title: "Close Button",
    type: ControlType.Boolean,
    defaultValue: false,
    enabledTitle: "Hide",
    disabledTitle: "Show",
  },
  lowContrast: {
    title: "Low contrast",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  timeout: {
    title: "Timeout",
    type: ControlType.Number,
    defaultValue: 0,
    min: 0,
    displayStepper: true,
    unit: "ms",
  },
  onClose: {
    type: ControlType.EventHandler,
  },
})
