import * as System from "carbon-components-react"
import * as React from "react"
import { addPropertyControls, ControlType, Stack } from "framer"
import { useManagedState } from "./utils/useManagedState"
import { omitIrrelevantProps, propsWithoutChildren } from "./utils/props"
import { withHOC } from "./withHOC"

const InnerTextInput = (props) => {
  const { value, invalid, onChange, inputType, showPasswordLabel, ...rest } = omitIrrelevantProps(
    propsWithoutChildren(props)
  )
  const [currentValue, setValue] = useManagedState(value, onChange)
  //@ts-ignore
  const [focused, setFocused] = React.useState(false)

  if (inputType === "password") {
    return (
      <System.TextInput.PasswordInput
        value={currentValue}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        invalid={invalid && !focused}
        showPasswordLabel={showPasswordLabel}
        {...rest}
      />
    )
  }

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
  width: 221,
  height: 65,
  onChange: (value) => console.log(value),
}

addPropertyControls(TextInput, {
  inputType: {
    type: ControlType.SegmentedEnum,
    options: ["text", "password"],
    optionTitles: ["Text", "Password"],
  },
  disabled: { type: ControlType.Boolean, defaultValue: false },
  labelText: { type: ControlType.String, defaultValue: "TextInput label" },
  helperText: {
    type: ControlType.String,
    defaultValue: "",
  },
  placeholder: {
    type: ControlType.String,
    defaultValue: "Placeholder",
  },
  invalidText: {
    type: ControlType.String,
    defaultValue: "Invalid text",
  },
  showPasswordLabel: {
    type: ControlType.String,
    defaultValue: "Show Password",
    // @ts-ignore
    hidden: (props) => props.inputType !== "password",
  },
  invalid: { type: ControlType.Boolean, defaultValue: false },
})
