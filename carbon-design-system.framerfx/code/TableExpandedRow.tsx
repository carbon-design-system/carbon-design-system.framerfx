import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableExpandedRow = (props) => {
  return <System.TableExpandedRow {...props}></System.TableExpandedRow>
}

const TableExpandedRow = withHOC(InnerTableExpandedRow)

TableExpandedRow.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(TableExpandedRow, {
  colSpan: {
    title: "Col span",
    type: ControlType.Number,
  },
})
