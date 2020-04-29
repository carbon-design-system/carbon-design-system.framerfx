import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerHeaderContainer = (props) => {
  return <System.HeaderContainer {...props}></System.HeaderContainer>
}

const HeaderContainer = withHOC(InnerHeaderContainer)

HeaderContainer.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(HeaderContainer, {
  isSideNavExpanded: {
    title: "Is side nav expanded",
    type: ControlType.Boolean,
    defaultValue: false,
  },
})
