import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps, propsWithoutChildren } from "./utils/props"
import { useManagedState } from "./utils/useManagedState"

const InnerToggle = (props) => {
  const { value, onChange, variant, ...rest } = omitIrrelevantProps(propsWithoutChildren(props))
  const [currentValue, setCurrentValue] = useManagedState(value, onChange)

  const ToggleTag = variant === "small" ? System.ToggleSmall : System.Toggle

  return <ToggleTag {...rest} aria-label={"Toggle"} onToggle={setCurrentValue} value={currentValue} />
}

export const Toggle = withHOC(InnerToggle)

Toggle.defaultProps = {
  width: 75,
  height: 41,
  onChange: (value: boolean) => console.log(`Toggle Value Changed`, value),
}

addPropertyControls(Toggle, {
  value: {
    title: "Toggled",
    type: ControlType.Boolean,
    enabledTitle: "On",
    disabledTitle: "Off",
    defaultValue: false,
  },
  labelA: {
    title: "Off Label",
    type: ControlType.String,
    defaultValue: "Off",
  },
  labelB: {
    title: "On Label",
    type: ControlType.String,
    defaultValue: "On",
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  variant: {
    title: "Variant",
    type: ControlType.SegmentedEnum,
    options: ["small", "regular"],
    optionTitles: ["Small", "Regular"],
    defaultValue: "regular",
  },
})
