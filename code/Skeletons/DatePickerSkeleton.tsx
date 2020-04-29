import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"

const InnerDatePickerSkeleton = (props) => {
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.DatePickerSkeleton {...props}></System.DatePickerSkeleton>
}

export const DatePickerSkeleton = withHOC(InnerDatePickerSkeleton)

DatePickerSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(DatePickerSkeleton, {
  range: {
    title: "Range",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
