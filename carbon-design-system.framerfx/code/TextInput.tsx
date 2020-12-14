import * as System from "carbon-components-react"
import * as React from "react"
import { addPropertyControls, ControlType, Stack } from "framer"
import { useManagedState } from "./utils/useManagedState"
import { omitIrrelevantProps, propsWithoutChildren } from "./utils/props"
import { withHOC } from "./withHOC"
import { indentPropertyControlTitle } from "./utils/propertyControls"

const InnerTextInput = (props) => {
  const {
    value,
    invalid,
    onChange,
    inputType,
    showPasswordLabel,
    labelText,
    onFocus,
    onBlur,
    ...rest
  } = omitIrrelevantProps(propsWithoutChildren(props))
  const [currentValue, setValue] = useManagedState(value, onChange)
  const [focused, setFocused] = React.useState(false)
  const onInputBlur = React.useCallback(() => {
    setFocused(false)
    if (onBlur) {
      onBlur()
    }
  }, [onBlur])
  const onInputFocus = React.useCallback(() => {
    setFocused(true)
    if (onFocus) {
      onFocus()
    }
  }, [onFocus])

  if (inputType === "password") {
    return (
      <System.TextInput.PasswordInput
        value={currentValue}
        labelText={labelText}
        invalid={invalid && !focused}
        showPasswordLabel={showPasswordLabel}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
        {...rest}
      />
    )
  }

  return (
    <System.TextInput
      {...rest}
      value={currentValue}
      labelText={labelText}
      invalid={invalid && !focused}
      onChange={(e) => setValue(e.target.value)}
      onSubmit={() => console.log("Submit")}
      onBlur={() => setFocused(false)}
      onFocus={() => setFocused(true)}
    />
  )
}

export const TextInput = withHOC(InnerTextInput)

TextInput.defaultProps = {
  width: 221,
  height: 65,
}

addPropertyControls(TextInput, {
  value: {
    type: ControlType.String,
    defaultValue: "TextInput Value",
  },
  hideLabel: {
    title: "Label",
    type: ControlType.Boolean,
    enabledTitle: "Hide",
    disabledTitle: "Show",
    defaultValue: false,
  },
  labelText: {
    title: indentPropertyControlTitle("‎Text"),
    type: ControlType.String,
    defaultValue: "Label Text",
    hidden: (props: any) => props.hideLabel,
  },
  placeholder: {
    type: ControlType.String,
    defaultValue: "Placeholder",
  },
  helperText: {
    type: ControlType.String,
    defaultValue: "",
  },
  inputType: {
    title: "Type",
    type: ControlType.SegmentedEnum,
    options: ["text", "password"],
    optionTitles: ["Text", "Password"],
  },
  showPasswordLabel: {
    type: ControlType.String,
    defaultValue: "Show Password",
    hidden: (props: any) => props.inputType !== "password",
  },
  disabled: { type: ControlType.Boolean, defaultValue: false },
  invalid: { type: ControlType.Boolean, defaultValue: false },
  invalidText: {
    type: ControlType.String,
    defaultValue: "Invalid text",
  },
  onFocus: {
    type: ControlType.EventHandler,
  },
  onBlur: {
    type: ControlType.EventHandler,
  },
})
