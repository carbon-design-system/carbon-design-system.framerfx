import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../withHOC"
import { omitIrrelevantProps } from "../utils/props"

const InnerIconSkeleton = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  return <System.IconSkeleton {...rest}></System.IconSkeleton>
}

export const IconSkeleton = withHOC(InnerIconSkeleton)

IconSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(IconSkeleton, {})
