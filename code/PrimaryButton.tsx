import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerPrimaryButton = (props) => {
  const { text, ...rest } = omitIrrelevantProps(props)
  return <System.PrimaryButton {...props}>{text}</System.PrimaryButton>
}

const PrimaryButton = withHOC(InnerPrimaryButton)

PrimaryButton.defaultProps = {
  width: 118,
  height: 48,
}

addPropertyControls(PrimaryButton, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Button",
  },
})
