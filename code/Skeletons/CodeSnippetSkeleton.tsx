import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls, RenderTarget } from "framer"
import { withHOC } from "../withHOC"
import { omitIrrelevantProps } from "../utils/props"

const InnerCodeSnippetSkeleton = (props) => {
  const { ...rest } = omitIrrelevantProps(props)
  if (RenderTarget.current() === RenderTarget.thumbnail) {
    return null
  }

  return <System.CodeSnippetSkeleton {...props}></System.CodeSnippetSkeleton>
}

export const CodeSnippetSkeleton = withHOC(InnerCodeSnippetSkeleton)

CodeSnippetSkeleton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(CodeSnippetSkeleton, {
  type: {
    title: "Type",
    type: ControlType.Enum,
    options: ["single", "multi"],
    optionTitles: ["single", "multi"],
  },
})
