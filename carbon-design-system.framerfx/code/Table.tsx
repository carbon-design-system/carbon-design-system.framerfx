import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTable = (props) => {
  return <System.Table {...props}></System.Table>
}

const Table = withHOC(InnerTable)

Table.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(Table, {
  useZebraStyles: {
    title: "Use zebra styles",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  size: {
    title: "Size",
    type: ControlType.Enum,
    options: ["", "", "", ""],
    optionTitles: ["", "", "", ""],
  },
  useStaticWidth: {
    title: "Use static width",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  shouldShowBorder: {
    title: "Should show border",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  isSortable: {
    title: "Is sortable",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  stickyHeader: {
    title: "Sticky header",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
