import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableExpandHeader = (props) => {
  return <System.TableExpandHeader {...props}></System.TableExpandHeader>
}

const TableExpandHeader = withHOC(InnerTableExpandHeader)

TableExpandHeader.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(TableExpandHeader, {
  expandIconDescription: {
    title: "Expand icon description",
    type: ControlType.String,
    defaultValue: "expandIconDescription",
  },
})
