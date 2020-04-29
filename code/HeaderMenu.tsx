import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

// @TODO Fix weird positioning
const InnerHeaderMenu = (props) => {
  const { title, items, ...rest } = props
  return (
    <System.HeaderMenu {...props} aria-label={title} menuLinkName={title}>
      {items.map((item, index) => (
        <System.HeaderMenuItem key={index}>{item}</System.HeaderMenuItem>
      ))}
    </System.HeaderMenu>
  )
}

export const HeaderMenu = withHOC(InnerHeaderMenu)

HeaderMenu.defaultProps = {
  width: 600,
  height: 48,
}

addPropertyControls(HeaderMenu, {
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "Link 10",
  },
  items: {
    title: "Menu Items",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["Sub-link 1", "Sub-link 2", "Sub-link 3"],
  },
})
