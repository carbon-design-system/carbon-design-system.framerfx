import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, addPropertyControls } from "framer"
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
    onClickLink1,
    onClickLink2,
    onClickLink3,
    onClickLink4,
    onClickLink5,
    onClickLink6,
    ...rest
  } = omitIrrelevantProps(props)
  const ariaLabel = React.useMemo(() => `${titlePrefix} ${title}`, [titlePrefix, title])
  const [menuOpen, setMenuOpen] = useManagedState(isMenuOpen)

  const onClickToggleMenu = React.useCallback(
    (val: React.MouseEvent<HTMLDivElement>) => {
      const isOpen = !menuOpen
      setMenuOpen(isOpen)
      if (isOpen) {
        if (onOpenMenu) {
          onOpenMenu()
        }
      } else if (onCloseMenu) {
        onCloseMenu()
      }
    },
    [setMenuOpen, menuOpen, onCloseMenu, onOpenMenu]
  )

  const onClickAction = React.useCallback(
    (index: number) => {
      let toCall: () => void

      switch (index) {
        case 0:
          toCall = onClickAction1()
          break
        case 1:
          toCall = onClickAction2()
          break
        case 2:
          toCall = onClickAction3()
          break
        case 3:
          toCall = onClickAction4()
          break
      }

      if (toCall) {
        toCall()
      }
    },
    [onClickAction1, onClickAction2, onClickAction3, onClickAction4]
  )

  const onClickLink = React.useCallback(
    (index: number) => {
      let toCall: () => void

      switch (index) {
        case 0:
          toCall = onClickLink1
          break
        case 1:
          toCall = onClickLink2
          break
        case 2:
          toCall = onClickLink3
          break
        case 3:
          toCall = onClickLink4
          break
        case 4:
          toCall = onClickLink5
          break
        case 5:
          toCall = onClickLink6
          break
      }

      if (toCall) {
        toCall()
      }
    },
    [onClickLink1, onClickLink2, onClickLink3, onClickLink4, onClickLink5, onClickLink6]
  )

  return (
    <System.Header {...rest} aria-label={ariaLabel}>
      {displayMenuButton && (
        <System.HeaderMenuButton aria-label={"Open Menu"} onClick={onClickToggleMenu} isActive={menuOpen} />
      )}
      <System.HeaderName prefix={titlePrefix}>{title}</System.HeaderName>
      {navigationItems.map((item, index) => (
        <System.HeaderMenuItem key={index} onClick={() => onClickLink(index)}>
          {item}
        </System.HeaderMenuItem>
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
  onClickLink1: {
    type: ControlType.EventHandler,
  },
  onClickLink2: {
    type: ControlType.EventHandler,
  },
  onClickLink3: {
    type: ControlType.EventHandler,
  },
  onClickLink4: {
    type: ControlType.EventHandler,
  },
  onClickLink5: {
    type: ControlType.EventHandler,
  },
  onClickLink6: {
    type: ControlType.EventHandler,
  },
})
