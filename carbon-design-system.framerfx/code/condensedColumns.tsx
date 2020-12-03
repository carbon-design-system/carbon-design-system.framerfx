import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCondensedColumns = (props) => {
  return <System.CondensedColumns {...props}></System.CondensedColumns>
}

const CondensedColumns = withHOC(InnerCondensedColumns)

CondensedColumns.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(CondensedColumns, {})
