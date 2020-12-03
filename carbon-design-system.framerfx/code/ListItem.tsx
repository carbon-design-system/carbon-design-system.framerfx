import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerListItem = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  return <System.ListItem {...rest}></System.ListItem>
}

const ListItem = withHOC(InnerListItem)

ListItem.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(ListItem, {})
