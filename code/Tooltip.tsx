import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { startCase } from "./utils"
import { omitIrrelevantProps } from "./utils/props"

const InnerTooltip = (props) => {
  const { content, tooltipText, ...rest } = omitIrrelevantProps(props)
  return (
    <System.Tooltip {...rest}>
      <div style={{ position: "relative" }}>{content && content.length ? content : <p>{tooltipText}</p>}</div>
    </System.Tooltip>
  )
}

export const Tooltip = withHOC(InnerTooltip)

Tooltip.defaultProps = {
  width: 98,
  height: 17,
}

const directionOptions = ["bottom", "top", "left", "right"]

addPropertyControls(Tooltip, {
  tooltipText: {
    title: "Text",
    type: ControlType.String,
    defaultValue:
      "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead.",
  },
  content: {
    title: "Content",
    type: ControlType.ComponentInstance,
  },
  triggerText: {
    title: "Tooltip Label",
    type: ControlType.String,
    defaultValue: "Tooltip Label",
  },
  direction: {
    title: "Direction",
    type: ControlType.Enum,
    defaultValue: directionOptions[0],
    options: directionOptions,
    optionTitles: directionOptions.map(startCase),
  },
})
