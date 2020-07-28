import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { useManagedState } from "./utils/useManagedState"
import { propsWithoutChildren, omitIrrelevantProps } from "./utils/props"

const InnerCheckbox = (props) => {
  const { checked, onChange, isLoading, ...rest } = omitIrrelevantProps(propsWithoutChildren(props))
  const [isChecked, setIsChecked] = useManagedState(checked, onChange)

  if (isLoading) {
    return <System.CheckboxSkeleton />
  }

  return <System.Checkbox {...rest} onChange={setIsChecked} id={`${rest.id}-checkbox`} />
}

export const Checkbox = withHOC(InnerCheckbox)

Checkbox.defaultProps = {
  width: 150,
  height: 30,
  onChange: (value) => console.log("Value changed ", value),
}

addPropertyControls(Checkbox, {
  isLoading: {
    title: "Loading",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  checked: {
    title: "Checked",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  indeterminate: {
    title: "Indeterminate",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  hideLabel: {
    title: "Hide label",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  labelText: {
    title: "Label Text",
    type: ControlType.String,
    defaultValue: "Checkbox Label",
  },
})
