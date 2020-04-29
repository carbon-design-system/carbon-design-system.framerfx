import * as React from "react"
import * as System from "carbon-components-react"
import IconUtil, { iconPropertyControls } from "./utils/Icon"
import { addPropertyControls, ControlType } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerIcon = (props) => {
  const { isLoading, ...rest } = omitIrrelevantProps(props)

  if (isLoading) {
    return <System.IconSkeleton style={{ width: rest.width, height: rest.height }} />
  }

  return <IconUtil {...rest} />
}

export const Icon = withHOC(InnerIcon)

Icon.defaultProps = {
  width: 24,
  height: 24,
}

addPropertyControls(Icon, {
  ...iconPropertyControls,
  isLoading: {
    title: "Loading",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
