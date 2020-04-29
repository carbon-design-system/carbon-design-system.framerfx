import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"

const InnerStructuredListSkeleton = (props) => {
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.StructuredListSkeleton {...props}></System.StructuredListSkeleton>
}

export const StructuredListSkeleton = withHOC(InnerStructuredListSkeleton)

StructuredListSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(StructuredListSkeleton, {
  rowCount: {
    title: "Row count",
    type: ControlType.Number,
    defaultValue: 5,
  },
  border: {
    title: "Border",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
