import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"
import { omitIrrelevantProps } from "../utils/props"

const InnerAccordionSkeleton = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  // Don't render this in the sidebar - performance killer!
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.AccordionSkeleton {...rest}></System.AccordionSkeleton>
}

export const AccordionSkeleton = withHOC(InnerAccordionSkeleton)

AccordionSkeleton.defaultProps = {
  width: 166,
  height: 230,
}

addPropertyControls(AccordionSkeleton, {
  open: {
    title: "Open",
    type: ControlType.Boolean,
    defaultValue: true,
  },
  count: {
    title: "Count",
    type: ControlType.Number,
    defaultValue: 4,
    displayStepper: true,
  },
  align: {
    title: "Align",
    type: ControlType.Enum,
    defaultValue: "end",
    options: ["start", "end"],
    optionTitles: ["start", "end"],
  },
})
