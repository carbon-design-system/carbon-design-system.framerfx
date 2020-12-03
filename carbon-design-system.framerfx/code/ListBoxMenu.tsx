import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerListBoxMenu = (props) => {
  return <System.ListBoxMenu {...props}></System.ListBoxMenu>
}

const ListBoxMenu = withHOC(InnerListBoxMenu)

ListBoxMenu.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(ListBoxMenu, {})
