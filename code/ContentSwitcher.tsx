import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerContentSwitcher = (props) => {
  const { sections, ...rest } = omitIrrelevantProps(props)

  return (
    <System.ContentSwitcher {...rest}>
      {sections.map((section, index) => (
        <System.Switch key={`${section}-${index}`} name={`${index}`} text={section} />
      ))}
    </System.ContentSwitcher>
  )
}

export const ContentSwitcher = withHOC(InnerContentSwitcher)

ContentSwitcher.defaultProps = {
  width: 410,
  height: 40,
  onChange: (value) => console.log(value),
}

addPropertyControls(ContentSwitcher, {
  sections: {
    title: "Sections",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["First Section", "Second Section", "Third Section"],
  },
})
