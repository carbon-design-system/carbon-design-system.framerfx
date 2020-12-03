import * as React from "react"
import * as System from "carbon-components-react"
import { Stack, ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerCopyButton = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  return (
    <Stack distribution={"center"} size={"100%"}>
      <div>
        <System.CopyButton {...rest}></System.CopyButton>
      </div>
    </Stack>
  )
}

export const CopyButton = withHOC(InnerCopyButton)

CopyButton.defaultProps = {
  width: 40,
  height: 40,
}

addPropertyControls(CopyButton, {
  iconDescription: {
    title: "Icon description",
    type: ControlType.String,
    defaultValue: "Copy to clipboard",
  },
  feedback: {
    title: "Feedback",
    type: ControlType.String,
    defaultValue: "Copied!",
  },
  feedbackTimeout: {
    title: "Feedback timeout",
    type: ControlType.Number,
    defaultValue: 2000,
    displayStepper: true,
    unit: "ms",
    step: 100,
    min: 0,
  },
})
