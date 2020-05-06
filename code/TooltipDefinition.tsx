import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { startCase } from "./utils"
import { omitIrrelevantProps } from "./utils/props"

const InnerTooltipDefinition = (props) => {
  const { text, ...rest } = omitIrrelevantProps(props)
  return <System.TooltipDefinition {...rest}>{text}</System.TooltipDefinition>
}

export const TooltipDefinition = withHOC(InnerTooltipDefinition)

TooltipDefinition.defaultProps = {
  width: 100,
  height: 18,
}

const directionOptions = ["bottom", "top", "left", "right"]
const alignOptions = ["start", "center", "end"]

addPropertyControls(TooltipDefinition, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Definition Tooltip",
  },
  tooltipText: {
    title: "Tooltip Text",
    type: ControlType.String,
    defaultValue: "Brief description of the dotted, underlined word above.",
  },
  direction: {
    title: "Direction",
    type: ControlType.Enum,
    defaultValue: directionOptions[0],
    options: directionOptions,
    optionTitles: directionOptions.map(startCase),
  },
  align: {
    title: "Align",
    type: ControlType.SegmentedEnum,
    defaultValue: "center",
    options: alignOptions,
    optionTitles: alignOptions.map(startCase),
  },
})
