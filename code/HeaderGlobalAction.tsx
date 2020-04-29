import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import IconUtil, { iconPropertyControls } from "./utils/Icon"
import { omitIrrelevantProps } from "./utils/props"

const InnerHeaderGlobalAction = (props) => {
  const { icon, iconWidth, iconHeight, iconFill, ...rest } = omitIrrelevantProps(props)
  return (
    <System.HeaderGlobalAction {...rest} aria-label={"HeaderGlobalAction"} onClick={() => {}}>
      <IconUtil height={iconHeight} width={iconWidth} icon={icon} />
    </System.HeaderGlobalAction>
  )
}

export const HeaderGlobalAction = withHOC(InnerHeaderGlobalAction)

HeaderGlobalAction.defaultProps = {
  width: 48,
  height: 48,
}

addPropertyControls(HeaderGlobalAction, {
  iconWidth: iconPropertyControls.width,
  iconHeight: iconPropertyControls.height,
  icon: { ...iconPropertyControls.icon, defaultValue: "iconApplications" },
  iconFill: iconPropertyControls.fill,
})
