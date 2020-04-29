import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"

const InnerSearchSkeleton = (props) => {
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.SearchSkeleton {...props}></System.SearchSkeleton>
}

export const SearchSkeleton = withHOC(InnerSearchSkeleton)

SearchSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(SearchSkeleton, {
  small: {
    title: "Small",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
