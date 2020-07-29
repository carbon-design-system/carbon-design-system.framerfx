import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"
import { ensureRelativePositioning } from "./utils/layout"

const contentContainerStyle: React.CSSProperties = {
  position: "relative",
}

const InnerAccordionItem = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  return (
    <System.AccordionItem {...rest}>
      <div style={contentContainerStyle}>{ensureRelativePositioning(React.Children.toArray(props.children)[0])}</div>
    </System.AccordionItem>
  )
}

export const AccordionItem = withHOC(InnerAccordionItem)

AccordionItem.defaultProps = {
  width: 240,
  height: 80,
}

addPropertyControls(AccordionItem, {
  iconDescription: {
    title: "Icon description",
    type: ControlType.String,
    defaultValue: "iconDescription",
  },
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "AccordionItem Title",
  },
  open: {
    title: "State",
    type: ControlType.Boolean,
    enabledTitle: "Open",
    disabledTitle: "Closed",
    defaultValue: false,
  },
})
