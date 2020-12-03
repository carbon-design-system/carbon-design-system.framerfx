import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableToolbar = (props) => {
  return <System.TableToolbar {...props}></System.TableToolbar>
}

const TableToolbar = withHOC(InnerTableToolbar)

TableToolbar.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(TableToolbar, {})
