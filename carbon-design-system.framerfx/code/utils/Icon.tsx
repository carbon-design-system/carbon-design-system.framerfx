import * as React from "react"
import * as System from "carbon-components-react"
import * as Icons from "carbon-icons"
import * as IconsList from "carbon-icons/dist/carbon-icons"
import { omitIrrelevantProps } from "./props"
import { ControlType, PropertyControls } from "framer"

export const iconOptions = Object.keys(Icons).filter((key) => key !== "default")
export const iconOptionTitles = iconOptions.map((key) => key.split("icon")[1])

function IconUtil(props) {
  const { icon, width, height, ...rest } = omitIrrelevantProps(props)
  return (
    <System.Icon
      {...rest}
      name={icon}
      icon={Icons[icon]}
      title={icon}
      description={""}
      viewBox={IconsList[icon].viewBox}
      role={"img"}
      width={`${width}px`}
      height={`${height}px`}
    ></System.Icon>
  )
}

IconUtil.defaultProps = {
  width: 24,
  height: 24,
}

export default IconUtil

export const iconPropertyControls: PropertyControls = {
  icon: {
    title: "Icon",
    type: ControlType.Enum,
    options: iconOptions,
    optionTitles: iconOptionTitles,
    defaultValue: iconOptions[0],
  },
  fill: {
    title: "Fill",
    type: ControlType.Color,
    defaultValue: "#000",
  },
  height: {
    title: "Height",
    type: ControlType.Number,
    unit: "px",
    min: 0,
    defaultValue: 24,
    displayStepper: true,
  },
  width: {
    title: "Width",
    type: ControlType.Number,
    unit: "px",
    min: 0,
    defaultValue: 24,
    displayStepper: true,
  },
}
