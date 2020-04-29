import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"
import { omitIrrelevantProps } from "../utils/props"

const InnerTextAreaSkeleton = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  // Don't render this in the sidebar - performance killer!
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.TextAreaSkeleton {...props}></System.TextAreaSkeleton>
}

export const TextAreaSkeleton = withHOC(InnerTextAreaSkeleton)

TextAreaSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(TextAreaSkeleton, {
  hideLabel: {
    title: "Hide label",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
