import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"
import { ensureRelativePositioning } from "./utils/layout"

const InnerAccordion = (props) => {
  const { itemTitles, itemContents, itemStates, isLoading, ...rest } = omitIrrelevantProps(props)

  if (isLoading) {
    return (
      <System.AccordionSkeleton count={itemTitles.length} align={rest.align} open={false}></System.AccordionSkeleton>
    )
  }

  return (
    <System.Accordion {...rest}>
      {itemTitles.map((title, index) => (
        <System.AccordionItem key={`${title}-${index}`} title={title} open={!!itemStates[index]}>
          {itemContents[index] ? ensureRelativePositioning(itemContents[index]) : null}
        </System.AccordionItem>
      ))}
    </System.Accordion>
  )
}

export const Accordion = withHOC(InnerAccordion)

Accordion.defaultProps = {
  width: 284,
  height: 105,
}

addPropertyControls(Accordion, {
  align: {
    title: "Align",
    type: ControlType.Enum,
    defaultValue: "end",
    options: ["start", "end"],
    optionTitles: ["Start", "End"],
  },
  isLoading: {
    title: "Loading",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  itemTitles: {
    title: "Item Titles",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["Item 1", "Item 2"],
  },
  itemStates: {
    title: "Item States",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.Boolean,
      enabledTitle: "Open",
      disabledTitle: "Closed",
      defaultValue: false,
    },
    defaultValue: [false, false],
  },
  itemContents: {
    title: "Item Contents",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.ComponentInstance,
    },
  },
})
