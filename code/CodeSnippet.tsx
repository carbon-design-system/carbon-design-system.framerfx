import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerCodeSnippet = (props) => {
  const { codeBody, isLoading, ...rest } = omitIrrelevantProps(props)

  if (isLoading) {
    return <System.CodeSnippetSkeleton />
  }

  return <System.CodeSnippet {...rest}>{codeBody}</System.CodeSnippet>
}

export const CodeSnippet = withHOC(InnerCodeSnippet)

CodeSnippet.defaultProps = {
  width: 322,
  height: 54,
}

addPropertyControls(CodeSnippet, {
  isLoading: {
    title: "Loading",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  light: {
    title: "Light",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  type: {
    title: "Type",
    type: ControlType.Enum,
    defaultValue: "single",
    options: ["single", "inline", "multi"],
    optionTitles: ["single", "inline", "multi"],
  },
  codeBody: {
    title: "Code",
    type: ControlType.String,
    defaultValue: `const foo = 'bar';`,
  },
  feedback: {
    title: "Feedback",
    type: ControlType.String,
  },
  copyButtonDescription: {
    title: "Copy Button Description",
    type: ControlType.String,
    defaultValue: "Copies the code",
  },
  copyLabel: {
    title: "Copy Label",
    type: ControlType.String,
    defaultValue: "copyLabel",
  },
  showMoreText: {
    title: "Show More Text",
    type: ControlType.String,
    defaultValue: "Show more",
  },
  showLessText: {
    title: "Show Less Text",
    type: ControlType.String,
    defaultValue: "Show less",
  },
})
