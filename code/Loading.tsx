import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerLoading = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  // Don't render this in the sidebar - performance killer!
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.Loading {...rest}></System.Loading>
}

export const Loading = withHOC(InnerLoading)

Loading.defaultProps = {
  width: 180,
  height: 180,
}

addPropertyControls(Loading, {
  active: {
    title: "Active",
    type: ControlType.Boolean,
    defaultValue: true,
  },
  withOverlay: {
    title: "Overlay",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: true,
  },
  small: {
    title: "Small",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
