import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerListBoxMenuItem = (props) => {
  return <System.ListBoxMenuItem {...props}></System.ListBoxMenuItem>
}

const ListBoxMenuItem = withHOC(InnerListBoxMenuItem)

ListBoxMenuItem.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(ListBoxMenuItem, {
  isActive: {
    title: "Is active",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  isHighlighted: {
    title: "Is highlighted",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
