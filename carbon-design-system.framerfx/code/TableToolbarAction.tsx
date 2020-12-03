import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTableToolbarAction = (props) => {
  return <System.TableToolbarAction {...props}></System.TableToolbarAction>
}

const TableToolbarAction = withHOC(InnerTableToolbarAction)

TableToolbarAction.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(TableToolbarAction, {})
