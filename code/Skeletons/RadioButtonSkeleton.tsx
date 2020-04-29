import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"

const InnerRadioButtonSkeleton = (props) => {
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.RadioButtonSkeleton {...props}></System.RadioButtonSkeleton>
}

export const RadioButtonSkeleton = withHOC(InnerRadioButtonSkeleton)

RadioButtonSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(RadioButtonSkeleton, {})
