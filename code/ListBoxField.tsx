import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerListBoxField = (props) => {
  return <System.ListBoxField {...props}></System.ListBoxField>
}

const ListBoxField = withHOC(InnerListBoxField)

ListBoxField.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(ListBoxField, {
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  tabIndex: {
    title: "Tab index",
    type: ControlType.String,
  },
})
