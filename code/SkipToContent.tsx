import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSkipToContent = (props) => {
  return <System.SkipToContent {...props}></System.SkipToContent>
}

const SkipToContent = withHOC(InnerSkipToContent)

SkipToContent.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(SkipToContent, {
  children: {
    title: "Children",
    type: ControlType.String,
    defaultValue: "Skip to main content",
  },
  href: {
    title: "Href",
    type: ControlType.String,
    defaultValue: "#main-content",
  },
  tabIndex: {
    title: "Tab index",
    type: ControlType.String,
    defaultValue: 0,
  },
})
