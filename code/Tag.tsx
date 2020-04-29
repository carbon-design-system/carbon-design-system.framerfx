import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { startCase } from "./utils"
import { omitIrrelevantProps } from "./utils/props"

const InnerTag = (props) => {
  const { text, ...rest } = omitIrrelevantProps(props)
  return <System.Tag {...rest}>{text}</System.Tag>
}

export const Tag = withHOC(InnerTag)

Tag.defaultProps = {
  width: 71,
  height: 32,
}

const tagTypeOptions = ["red", "magenta", "purple", "blue", "cyan", "teal", "green", "gray", "cool-gray", "warm-gray"]

addPropertyControls(Tag, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Tag Text",
  },
  type: {
    title: "Type",
    type: ControlType.Enum,
    options: tagTypeOptions,
    optionTitles: tagTypeOptions.map(startCase),
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  filter: {
    title: "Filter",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "title",
  },
})
