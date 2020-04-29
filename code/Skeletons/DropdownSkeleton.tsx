import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"

const InnerDropdownSkeleton = (props) => {
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.DropdownSkeleton {...props}></System.DropdownSkeleton>
}

export const DropdownSkeleton = withHOC(InnerDropdownSkeleton)

DropdownSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(DropdownSkeleton, {
  inline: {
    title: "Inline",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
