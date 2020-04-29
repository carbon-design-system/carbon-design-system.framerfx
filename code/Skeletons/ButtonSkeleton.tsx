import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"
import { omitIrrelevantProps } from "../utils/props"

const InnerButtonSkeleton = (props) => {
  const { ...rest } = omitIrrelevantProps(props)

  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }

  return <System.ButtonSkeleton {...rest}></System.ButtonSkeleton>
}

export const ButtonSkeleton = withHOC(InnerButtonSkeleton)

ButtonSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(ButtonSkeleton, {
  small: {
    title: "Small",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  href: {
    title: "Href",
    type: ControlType.String,
    defaultValue: "https://framer.com",
  },
})
