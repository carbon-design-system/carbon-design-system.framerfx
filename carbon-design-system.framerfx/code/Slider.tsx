import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"
import { useManagedState } from "./utils/useManagedState"
import { indentPropertyControlTitle } from "./utils/propertyControls"

const InnerSlider = (props) => {
  const {
    value,
    max,
    min,
    showLabel,
    labelText,
    showMinLabel,
    minLabel,
    showMaxLabel,
    maxLabel,
    showTextInput,
    onChange,
    onRelease,
    onReachMax,
    onReachMin,
    ...rest
  } = omitIrrelevantProps(props)
  const [currentValue, setCurrentValue] = useManagedState(value, onChange)
  const handleChange = React.useCallback(
    ({ value: updatedValue }) => {
      setCurrentValue(updatedValue)
      if (updatedValue === max && onReachMax) onReachMax()
      if (updatedValue === min && onReachMin) onReachMin()
    },
    [setCurrentValue, max, min, onReachMax, onReachMin]
  )

  return (
    <System.Slider
      {...rest}
      value={currentValue}
      max={max}
      min={min}
      labelText={showLabel && labelText}
      minLabel={showMinLabel && minLabel}
      maxLabel={showMaxLabel && maxLabel}
      hideTextInput={!showTextInput}
      onChange={handleChange}
      onRelease={onRelease}
    />
  )
}

interface SliderProps {
  max: number
  min: number
  value: number
  step: number
  showLabel: boolean
  labelText: string
  showTextInput: boolean
  disabled: boolean
  showMinLabel: boolean
  minLabel: string
  maxLabel: string
  showMaxLabel: boolean
  light: boolean
  onChange: (value: number) => void
  onRelease: () => void
  onReachMax: () => void
  onReachMin: () => void
}

export const Slider = withHOC<SliderProps>(InnerSlider)

Slider.defaultProps = {
  width: 365,
  height: 54,
  max: 100,
  min: 0,
  value: 50,
  step: 1,
  showLabel: false,
  showTextInput: true,
  disabled: false,
  labelText: "Label Text",
  showMinLabel: true,
  minLabel: "%",
  showMaxLabel: true,
  maxLabel: "%",
  light: false,
}

addPropertyControls(Slider, {
  value: {
    type: ControlType.Number,
    title: "Value",
    displayStepper: true,
    min: 0,
    defaultValue: Slider.defaultProps.value,
  },
  max: {
    type: ControlType.Number,
    title: "Max",
    displayStepper: true,
    min: 0,
    defaultValue: Slider.defaultProps.max,
  },
  min: {
    type: ControlType.Number,
    title: "Min",
    displayStepper: true,
    min: 0,
    defaultValue: Slider.defaultProps.min,
  },
  step: {
    type: ControlType.Number,
    title: "Step",
    displayStepper: true,
    min: 0,
    defaultValue: Slider.defaultProps.step,
  },
  showLabel: {
    type: ControlType.Boolean,
    title: "Label",
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Slider.defaultProps.showLabel,
  },
  labelText: {
    type: ControlType.String,
    title: indentPropertyControlTitle("Text"),
    placeholder: "Label Text",
    defaultValue: Slider.defaultProps.labelText,
    hidden: (props) => !props.showLabel,
  },
  showMinLabel: {
    type: ControlType.Boolean,
    title: "Min Label",
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Slider.defaultProps.showMinLabel,
  },
  minLabel: {
    type: ControlType.String,
    title: indentPropertyControlTitle("Text"),
    placeholder: "%",
    defaultValue: Slider.defaultProps.minLabel,
    hidden: (props) => !props.showMinLabel,
  },
  showMaxLabel: {
    type: ControlType.Boolean,
    title: "Max Label",
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Slider.defaultProps.showMaxLabel,
  },
  maxLabel: {
    type: ControlType.String,
    title: indentPropertyControlTitle("Text"),
    placeholder: "%",
    defaultValue: Slider.defaultProps.maxLabel,
    hidden: (props) => !props.showMaxLabel,
  },
  showTextInput: {
    type: ControlType.Boolean,
    title: "Text Input",
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: Slider.defaultProps.showTextInput,
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled",
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: Slider.defaultProps.disabled,
  },
  light: {
    title: "Light",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  onRelease: {
    type: ControlType.EventHandler,
  },
  onChange: {
    type: ControlType.EventHandler,
  },
  onReachMax: {
    type: ControlType.EventHandler,
  },
  onReachMin: {
    type: ControlType.EventHandler,
  },
})
