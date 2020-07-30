import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "./withHOC"
import { startCase } from "./utils"
import { omitIrrelevantProps } from "./utils/props"
import { ensureRelativePositioning } from "./utils/layout"

const InnerTooltip = (props) => {
  const { content, tooltipText, open, ...rest } = omitIrrelevantProps(props)
  return (
    <System.Tooltip {...rest} open={!open || RenderTarget.current() === RenderTarget.canvas ? undefined : open}>
      <div style={{ position: "relative" }}>
        {content && content.length ? (
          ensureRelativePositioning(React.Children.toArray(content)[0])
        ) : (
          <p>{tooltipText}</p>
        )}
      </div>
    </System.Tooltip>
  )
}

export const Tooltip = withHOC(InnerTooltip)

Tooltip.defaultProps = {
  width: 101,
  height: 17,
}

const directionOptions = ["bottom", "top", "left", "right"]
const typeOptions = ["text", "content"]

addPropertyControls(Tooltip, {
  triggerText: {
    title: "Label",
    type: ControlType.String,
    defaultValue: "Tooltip Label",
  },
  type: {
    title: "Type",
    type: ControlType.SegmentedEnum,
    options: typeOptions,
    optionTitles: typeOptions.map(startCase),
    defaultValue: "text",
  },
  tooltipText: {
    title: "Text",
    type: ControlType.String,
    defaultValue:
      "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead.",
    displayTextArea: true,
    hidden: (props: any) => props.type !== "text",
  },
  content: {
    title: "Content",
    type: ControlType.ComponentInstance,
    hidden: (props: any) => props.type !== "content",
  },
  showIcon: {
    title: "Icon",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: true,
  },
  open: {
    title: "State",
    type: ControlType.Boolean,
    enabledTitle: "Open",
    disabledTitle: "Closed",
    defaultValue: false,
  },
  direction: {
    title: "Direction",
    type: ControlType.Enum,
    defaultValue: directionOptions[0],
    options: directionOptions,
    optionTitles: directionOptions.map(startCase),
  },
})
