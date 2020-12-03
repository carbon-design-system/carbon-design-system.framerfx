import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerModalBody = (props) => {
  return <System.ModalBody {...props}></System.ModalBody>
}

const ModalBody = withHOC(InnerModalBody)

ModalBody.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(ModalBody, {})
