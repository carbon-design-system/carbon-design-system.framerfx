import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"
import { useManagedState } from "./utils/useManagedState"
import { indentPropertyControlTitle } from "./utils/propertyControls"

const InnerTextArea = (props) => {
  const { value, onChange, isLoading, labelText, ...rest } = omitIrrelevantProps(props)
  const [currentValue, setValue] = useManagedState(value, onChange)
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.currentTarget.value),
    [setValue]
  )

  if (isLoading) {
    return <System.TextAreaSkeleton style={{ width: rest.width, height: rest.height }} />
  }

  return <System.TextArea {...rest} value={currentValue} labelText={labelText} onChange={handleChange} />
}

export const TextArea = withHOC(InnerTextArea)

TextArea.defaultProps = {
  width: 215,
  height: 130,
}

addPropertyControls(TextArea, {
  value: {
    title: "Value",
    type: ControlType.String,
    defaultValue: "",
    displayTextArea: true,
  },
  hideLabel: {
    title: "Label",
    type: ControlType.Boolean,
    enabledTitle: "Hide",
    disabledTitle: "Show",
    defaultValue: false,
  },
  labelText: {
    title: indentPropertyControlTitle("Text"),
    type: ControlType.String,
    defaultValue: "Label Text",
    hidden: (props: any) => props.hideLabel,
  },
  placeholder: {
    title: "Placeholder",
    type: ControlType.String,
    defaultValue: "Placeholder Text",
  },
  invalidText: {
    title: "Invalid Text",
    type: ControlType.String,
    defaultValue: "Invalid Text",
  },
  cols: {
    title: "Cols",
    type: ControlType.Number,
    displayStepper: true,
    min: 0,
    defaultValue: 50,
  },
  rows: {
    title: "Rows",
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 4,
    min: 0,
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
  light: {
    title: "Light",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  isLoading: {
    title: "Loading",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
