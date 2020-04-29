import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import Search20 from "@carbon/icons-react/lib/search/20"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"
import IconUtil from "./utils/Icon"

const InnerHeader = (props) => {
  const { title, titlePrefix, navigationItems, actions, displayMenuButton, isMenuOpen, ...rest } = omitIrrelevantProps(
    props
  )
  const ariaLabel = React.useMemo(() => `${titlePrefix} ${title}`, [titlePrefix, title])

  const onClickOpenMenu = React.useCallback(() => {}, [])

  return (
    <System.Header {...rest} aria-label={ariaLabel}>
      {displayMenuButton && (
        <System.HeaderMenuButton aria-label={"Open Menu"} onClick={onClickOpenMenu} isActive={isMenuOpen} />
      )}
      <System.HeaderName prefix={titlePrefix}>{title}</System.HeaderName>
      {navigationItems.map((item, index) => (
        <System.HeaderMenuItem key={index}>{item}</System.HeaderMenuItem>
      ))}
      {actions && actions.length && (
        <System.HeaderGlobalBar>
          {actions.map((action, index) => {
            // We have to reference the key as a string otherwise Framer will render a content property control
            const iconChild = React.Children.toArray(action.props["children"])[0] as any
            return (
              <System.HeaderGlobalAction aria-label={`${index}`} key={index} onClick={() => {}}>
                <IconUtil
                  width={iconChild.props.iconWidth}
                  height={iconChild.props.iconHeight}
                  fill={iconChild.props.iconFill}
                  icon={iconChild.props.icon}
                />
              </System.HeaderGlobalAction>
            )
          })}
        </System.HeaderGlobalBar>
      )}
    </System.Header>
  )
}

export const Header = withHOC(InnerHeader)

Header.defaultProps = {
  width: 600,
  height: 48,
}

addPropertyControls(Header, {
  title: {
    title: "Title",
    type: ControlType.String,
    defaultValue: "Title",
  },
  titlePrefix: {
    title: "Title Prefix",
    type: ControlType.String,
    defaultValue: "IBM",
  },
  navigationItems: {
    title: "Navigation Items",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["Link 1", "Link 2", "Link 3"],
  },
  actions: {
    title: "Actions (HeaderGlobalAction)",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.ComponentInstance,
    },
  },
  displayMenuButton: {
    title: "Menu Button",
    type: ControlType.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: true,
  },
  isMenuOpen: {
    title: "Menu Icon",
    type: ControlType.Boolean,
    enabledTitle: "Open",
    disabledTitle: "Closed",
    defaultValue: false,
  },
})
