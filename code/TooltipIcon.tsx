import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { startCase } from "./utils"
import { omitIrrelevantProps } from "./utils/props"
import IconUtil, { iconPropertyControls } from "./utils/Icon"

const InnerTooltipIcon = (props) => {
  const { icon, iconWidth, iconHeight, iconFill, ...rest } = omitIrrelevantProps(props)
  return (
    <System.TooltipIcon {...rest}>
      <IconUtil height={iconHeight} width={iconWidth} icon={icon} />
    </System.TooltipIcon>
  )
}

export const TooltipIcon = withHOC(InnerTooltipIcon)

TooltipIcon.defaultProps = {
  width: 24,
  height: 24,
}

const directionOptions = ["bottom", "top", "left", "right"]
const alignOptions = ["start", "center", "end"]

addPropertyControls(TooltipIcon, {
  tooltipText: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Tooltip text",
    displayTextArea: true,
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
  iconWidth: iconPropertyControls.width,
  iconHeight: iconPropertyControls.height,
  icon: { ...iconPropertyControls.icon, defaultValue: "iconSchematics" },
  onClick: {
    type: ControlType.EventHandler,
  },
})
