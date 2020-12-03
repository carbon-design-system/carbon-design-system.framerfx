import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableSelectAll = (props) => {
  return <System.TableSelectAll {...props}></System.TableSelectAll>
}

const TableSelectAll = withHOC(InnerTableSelectAll)

TableSelectAll.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(TableSelectAll, {
  checked: {
    title: "Checked",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  indeterminate: {
    title: "Indeterminate",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  name: {
    title: "Name",
    type: ControlType.String,
  },
})
