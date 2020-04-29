import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerBreadcrumbItem = (props) => {
  const { title, ...rest } = omitIrrelevantProps(props)
  return <System.BreadcrumbItem {...rest}>{title}</System.BreadcrumbItem>
}

export const BreadcrumbItem = withHOC(InnerBreadcrumbItem)

BreadcrumbItem.defaultProps = {
  width: 104,
  height: 21,
}

addPropertyControls(BreadcrumbItem, {
  href: {
    title: "Href",
    type: ControlType.String,
    defaultValue: "https://framer.com",
  },
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "Breadcrumb",
  },
  isCurrentPage: {
    title: "Is Current Page",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
