import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"

const InnerFileUploaderSkeleton = (props) => {
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }
  return <System.FileUploaderSkeleton {...props}></System.FileUploaderSkeleton>
}

export const FileUploaderSkeleton = withHOC(InnerFileUploaderSkeleton)

FileUploaderSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(FileUploaderSkeleton, {})
