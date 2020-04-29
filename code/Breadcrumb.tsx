import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerBreadcrumb = (props) => {
  const { currentPage, noTrailingSlash: showTrailingSlash, isLoading, ...rest } = omitIrrelevantProps(props)

  if (isLoading) {
    return <System.BreadcrumbSkeleton count={5}></System.BreadcrumbSkeleton>
  }

  return (
    <System.Breadcrumb {...rest} noTrailingSlash={!showTrailingSlash}>
      {props.items.map((item, index) => (
        <System.BreadcrumbItem key={`${item}-${index}`} href={"#"} isCurrentPage={currentPage - 1 === index}>
          {item}
        </System.BreadcrumbItem>
      ))}
    </System.Breadcrumb>
  )
}

export const Breadcrumb = withHOC(InnerBreadcrumb)

Breadcrumb.defaultProps = {
  width: 360,
  height: 20,
}

addPropertyControls(Breadcrumb, {
  isLoading: {
    title: "Loading",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  noTrailingSlash: {
    title: "Trailing Slash",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: false,
  },
  currentPage: {
    title: "Current Page",
    type: ControlType.Number,
    displayStepper: true,
    defaultValue: 1,
    min: 1,
  },
  items: {
    title: "Items",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["Breadcrumb 1", "Breadcrumb 2"],
  },
})
