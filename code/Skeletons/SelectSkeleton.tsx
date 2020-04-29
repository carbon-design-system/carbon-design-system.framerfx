import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"

const InnerSelectSkeleton = (props) => {
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.SelectSkeleton {...props}></System.SelectSkeleton>
}

export const SelectSkeleton = withHOC(InnerSelectSkeleton)

SelectSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(SelectSkeleton, {
  hideLabel: {
    title: "Hide label",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
