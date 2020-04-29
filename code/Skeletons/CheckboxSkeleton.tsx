import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"
import { omitIrrelevantProps } from "../utils/props"

const InnerCheckboxSkeleton = (props) => {
  const { ...rest } = omitIrrelevantProps(props)

  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }

  return <System.CheckboxSkeleton {...rest}></System.CheckboxSkeleton>
}

export const CheckboxSkeleton = withHOC(InnerCheckboxSkeleton)

CheckboxSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(CheckboxSkeleton, {})
