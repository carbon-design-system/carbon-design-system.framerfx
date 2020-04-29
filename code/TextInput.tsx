import * as System from "carbon-components-react"
import * as React from "react"
import { addPropertyControls, ControlType, Stack } from "framer"
import { useManagedState } from "./utils/useManagedState"
import { omitIrrelevantProps, propsWithoutChildren } from "./utils/props"
import { withHOC } from "./withHOC"

const InnerTextInput = (props) => {
  const { value, invalid, onChange, ...rest } = omitIrrelevantProps(propsWithoutChildren(props))
  const [currentValue, setValue] = useManagedState(value, onChange)
  //@ts-ignore
  const [focused, setFocused] = React.useState(false)

  return (
    <System.TextInput
      value={currentValue}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => setFocused(false)}
      onFocus={() => setFocused(true)}
      invalid={invalid && !focused}
      {...rest}
    ></System.TextInput>
  )
}

export const TextInput = withHOC(InnerTextInput)

TextInput.defaultProps = {
  width: 135,
  height: 35,
  onChange: (value) => console.log(value),
}

addPropertyControls(TextInput, {
  disabled: { type: ControlType.Boolean, defaultValue: false },
  labelText: { type: ControlType.String, defaultValue: "TextInput label" },
  helperText: {
    type: ControlType.String,
    defaultValue: "",
  },
  placeholder: {
    type: ControlType.String,
    defaultValue: "placeholder",
  },
  invalidText: {
    type: ControlType.String,
    defaultValue: "invalid text",
  },
  invalid: { type: ControlType.Boolean, defaultValue: false },
})
