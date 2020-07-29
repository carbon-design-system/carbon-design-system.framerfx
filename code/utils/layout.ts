import * as React from "react"

export function ensureRelativePositioning(node: any) {
  return React.cloneElement(node, {
    ...node.props,
    style: {
      ...node.props.style,
      position: "relative",
    },
  })
}
