import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import Search20 from "@carbon/icons-react/lib/search/20"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"
import IconUtil, { iconPropertyControls } from "./utils/Icon"
import { useManagedState } from "./utils/useManagedState"

const InnerHeader = (props) => {
  const {
    title,
    titlePrefix,
    navigationItems,
    actions,
    displayMenuButton,
    isMenuOpen,
    onOpenMenu,
    onCloseMenu,
    onClickAction1,
    onClickAction2,
    onClickAction3,
    onClickAction4,
    ...rest
  } = omitIrrelevantProps(props)
  const ariaLabel = React.useMemo(() => `${titlePrefix} ${title}`, [titlePrefix, title])
  const [menuOpen, setMenuOpen] = useManagedState(isMenuOpen)

  const onClickToggleMenu = React.useCallback(
    (val: React.MouseEvent<HTMLDivElement>) => {
      const isOpen = !menuOpen
      setMenuOpen(isOpen)
      if (isOpen) {
        onOpenMenu()
      } else {
        onCloseMenu()
      }
    },
    [setMenuOpen, menuOpen, onCloseMenu, onOpenMenu]
  )

  const onClickAction = React.useCallback(
    (index: number) => {
      switch (index) {
        case 0:
          onClickAction1()
          break
        case 1:
          onClickAction2()
          break
        case 2:
          onClickAction3()
          break
        case 3:
          onClickAction4()
          break
      }
    },
    [onClickAction1, onClickAction2, onClickAction3, onClickAction4]
  )

  return (
    <System.Header {...rest} aria-label={ariaLabel}>
      {displayMenuButton && (
        <System.HeaderMenuButton aria-label={"Open Menu"} onClick={onClickToggleMenu} isActive={menuOpen} />
      )}
      <System.HeaderName prefix={titlePrefix}>{title}</System.HeaderName>
      {navigationItems.map((item, index) => (
        <System.HeaderMenuItem key={index}>{item}</System.HeaderMenuItem>
      ))}
      {actions && actions.length && (
        <System.HeaderGlobalBar>
          {actions.map((action, index) => {
            return (
              <System.HeaderGlobalAction aria-label={`${index}`} key={index} onClick={() => onClickAction(index)}>
                <IconUtil width={24} height={24} fill={"#ff0000"} icon={action} />
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
  onOpenMenu: () => console.log("Menu is Open"),
  onCloseMenu: () => console.log("Menu is Closed"),
  onClickAction1: () => console.log("Click Action 1"),
  onClickAction2: () => console.log("Click Action 2"),
  onClickAction3: () => console.log("Click Action 3"),
  onClickAction4: () => console.log("Click Action 4"),
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
    title: "Actions",
    type: ControlType.Array,
    propertyControl: {
      ...iconPropertyControls.icon,
      defaultValue: "iconApplications",
    },
    defaultValue: ["iconApplications"],
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
    hidden: (props: any) => !props.displayMenuButton,
  },
  onOpenMenu: {
    type: ControlType.EventHandler,
  },
  onCloseMenu: {
    type: ControlType.EventHandler,
  },
  onClickAction1: {
    type: ControlType.EventHandler,
  },
  onClickAction2: {
    type: ControlType.EventHandler,
  },
  onClickAction3: {
    type: ControlType.EventHandler,
  },
  onClickAction4: {
    type: ControlType.EventHandler,
  },
})
