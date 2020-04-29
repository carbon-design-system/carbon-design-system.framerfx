import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, Frame } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerOrderedList = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  return (
    <Frame {...rest} background={"transparent"} style={{ paddingLeft: 24 }}>
      <System.OrderedList {...rest}>
        {props.items.map((item, index) => (
          <System.ListItem key={index}>{item}</System.ListItem>
        ))}
      </System.OrderedList>
    </Frame>
  )
}

export const OrderedList = withHOC(InnerOrderedList)

OrderedList.defaultProps = {
  width: 138,
  height: 85,
}

addPropertyControls(OrderedList, {
  nested: {
    title: "Nested",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  items: {
    title: "Items",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["Ordered list item", "Ordered list item", "Ordered list item", "Ordered list item"],
  },
})
