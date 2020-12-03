import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerInlineLoading = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  // Don't render this in the sidebar - performance killer!
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.InlineLoading key={rest.successDelay} {...rest} />
}

export const InlineLoading = withHOC(InnerInlineLoading)

InlineLoading.defaultProps = {
  width: 36,
  height: 36,
}

addPropertyControls(InlineLoading, {
  status: {
    title: "Status",
    type: ControlType.Enum,
    optionTitles: ["Inactive", "Active", "Finished", "Error"],
    options: ["inactive", "active", "finished", "error"],
  },
  iconDescription: {
    title: "Icon Description",
    type: ControlType.String,
    defaultValue: "Loading data",
  },
  successDelay: {
    title: "Success Delay",
    type: ControlType.Number,
    defaultValue: 1500,
    displayStepper: true,
    step: 100,
    min: 0,
    unit: "ms",
  },
})
