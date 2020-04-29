import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, Frame } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerUnorderedList = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  return (
    <Frame {...rest} background={"transparent"} style={{ paddingLeft: 24 }}>
      <System.UnorderedList {...rest}>
        {props.items.map((item, index) => (
          <System.ListItem key={index}>{item}</System.ListItem>
        ))}
      </System.UnorderedList>
    </Frame>
  )
}

export const UnorderedList = withHOC(InnerUnorderedList)

UnorderedList.defaultProps = {
  width: 154,
  height: 86,
}

addPropertyControls(UnorderedList, {
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
    defaultValue: ["Unordered list item", "Unordered list item", "Unordered list item", "Unordered list item"],
  },
})
