import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerCopy = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  return <System.Copy {...rest}></System.Copy>
}

const Copy = withHOC(InnerCopy)

Copy.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Copy, {
  feedback: {
    title: "Feedback",
    type: ControlType.String,
    defaultValue: "Copied!",
  },
  feedbackTimeout: {
    title: "Feedback timeout",
    type: ControlType.Number,
    defaultValue: 2000,
  },
})
