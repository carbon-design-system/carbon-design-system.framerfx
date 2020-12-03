import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableHeader = (props) => {
  return <System.TableHeader {...props}></System.TableHeader>
}

const TableHeader = withHOC(InnerTableHeader)

TableHeader.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(TableHeader, {
  colSpan: {
    title: "Col span",
    type: ControlType.Number,
  },
  isSortable: {
    title: "Is sortable",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  isSortHeader: {
    title: "Is sort header",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  scope: {
    title: "Scope",
    type: ControlType.String,
    defaultValue: "col",
  },
  sortDirection: {
    title: "Sort direction",
    type: ControlType.Enum,
    options: ["ASC", "DESC", "NONE"],
    optionTitles: ["ASC", "DESC", "NONE"],
  },
})
