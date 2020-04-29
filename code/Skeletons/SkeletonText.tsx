import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"
import { omitIrrelevantProps } from "../utils/props"

const InnerSkeletonText = (props) => {
  const { width, skeletonWidth, ...rest } = omitIrrelevantProps(props)
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.SkeletonText {...rest} width={`${skeletonWidth}%`}></System.SkeletonText>
}

export const SkeletonText = withHOC(InnerSkeletonText)

SkeletonText.defaultProps = {
  width: 150,
  height: 16,
}

addPropertyControls(SkeletonText, {
  paragraph: {
    title: "Paragraph",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  lineCount: {
    title: "Line count",
    type: ControlType.Number,
    defaultValue: 3,
  },
  skeletonWidth: {
    title: "Width",
    type: ControlType.Number,
    displayStepper: true,
    step: 1,
    min: 0,
    max: 100,
    unit: "%",
    defaultValue: 100,
  },
  heading: {
    title: "Heading",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
