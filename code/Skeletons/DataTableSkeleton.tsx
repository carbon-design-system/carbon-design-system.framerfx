import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"

const InnerDataTableSkeleton = (props) => {
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.DataTableSkeleton {...props}></System.DataTableSkeleton>
}

export const DataTableSkeleton = withHOC(InnerDataTableSkeleton)

DataTableSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(DataTableSkeleton, {
  rowCount: {
    title: "Row count",
    type: ControlType.Number,
    defaultValue: 5,
  },
  columnCount: {
    title: "Column count",
    type: ControlType.Number,
    defaultValue: 5,
  },
  zebra: {
    title: "Zebra",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  compact: {
    title: "Compact",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  headers: {
    title: "Headers",
    type: ControlType.String,
  },
})
