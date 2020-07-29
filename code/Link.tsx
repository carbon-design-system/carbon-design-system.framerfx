import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerLink = (props) => {
  const { text, href, onClick, ...rest } = omitIrrelevantProps(props)
  const onClickLink = React.useCallback(
    (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (onClick) {
        onClick(href)
      }
    },
    [onClick, href]
  )
  return (
    <System.Link {...rest} href={href} onClick={onClickLink}>
      {text}
    </System.Link>
  )
}

export const Link = withHOC(InnerLink)

Link.defaultProps = {
  width: 59,
  height: 19,
  onClick: (href) => console.log(`Link clicked ${href}`),
}

addPropertyControls(Link, {
  href: {
    title: "Href",
    type: ControlType.String,
    defaultValue: "https://framer.com",
  },
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Link",
  },
  disabled: {
    title: "Disabled",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  inline: {
    title: "Inline",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  visited: {
    title: "Visited",
    type: ControlType.Boolean,
    defaultValue: false,
  },
  onClick: {
    type: ControlType.EventHandler,
  },
})
