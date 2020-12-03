import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"
import { useManagedState } from "./utils/useManagedState"

const InnerSelect = (props) => {
  const {
    isLoading,
    value,
    onChange,
    onClickOption1,
    onClickOption2,
    onClickOption3,
    onClickOption4,
    onClickOption5,
    ...rest
  } = omitIrrelevantProps(props)
  const [currentValue, setValue] = useManagedState(value, onChange)
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const parsedValue = parseInt(e.currentTarget.value, 10)
      setValue(parsedValue)
      let toCall: () => void

      switch (parsedValue) {
        case 0:
          toCall = onClickOption1
          break
        case 1:
          toCall = onClickOption2
          break
        case 2:
          toCall = onClickOption3
          break
        case 3:
          toCall = onClickOption4
          break
        case 4:
          toCall = onClickOption5
          break
      }

      if (toCall) {
        toCall()
      }
    },
    [setValue, onClickOption1, onClickOption2, onClickOption3, onClickOption4, onClickOption5]
  )

  if (isLoading) {
    return <System.SelectSkeleton style={{ width: rest.width, height: rest.height }} />
  }

  return (
    <System.Select {...rest} value={currentValue} onChange={handleChange}>
      {rest.options.map((option, index) => (
        <System.SelectItem key={index} text={option} value={index} />
      ))}
    </System.Select>
  )
}

export const Select = withHOC(InnerSelect)

Select.defaultProps = {
  width: 224,
  height: 75,
}

addPropertyControls(Select, {
  value: {
    title: "Selected Value",
    type: ControlType.Number,
    min: 0,
    max: 4,
    displayStepper: true,
    defaultValue: 0,
  },
  noLabel: {
    title: "Label",
    type: ControlType.Boolean,
    enabledTitle: "Hide",
    disabledTitle: "Show",
    defaultValue: false,
  },
  labelText: {
    title: "Label Text",
    type: ControlType.String,
    defaultValue: "Select",
    // @ts-ignore
    hidden: (props) => props.noLabel,
  },
  options: {
    title: "Options",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["Option 1", "Option 2"],
  },
  inline: {
    title: "Inline",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  invalid: {
    title: "Invalid",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  invalidText: {
    title: "Invalid text",
    type: ControlType.String,
    defaultValue: "",
  },
  helperText: {
    title: "Helper Text",
    type: ControlType.String,
    defaultValue: "Optional helper text.",
  },
  light: {
    title: "Light",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  size: {
    title: "Size",
    type: ControlType.SegmentedEnum,
    optionTitles: ["SM", "XL"],
    options: ["sm", "xl"],
  },
  isLoading: {
    title: "Loading",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  onClickOption1: {
    type: ControlType.EventHandler,
  },
  onClickOption2: {
    type: ControlType.EventHandler,
  },
  onClickOption3: {
    type: ControlType.EventHandler,
  },
  onClickOption4: {
    type: ControlType.EventHandler,
  },
  onClickOption5: {
    type: ControlType.EventHandler,
  },
})
