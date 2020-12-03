import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const InnerContentSwitcher = (props) => {
  const {
    sections,
    onClickSection1,
    onClickSection2,
    onClickSection3,
    onClickSection4,
    onClickSection5,
    onClickSection6,
    onChange,
    ...rest
  } = omitIrrelevantProps(props)

  const onSelectionChange = React.useCallback(
    (value: { index: number; name: string; text: string }) => {
      let toCall: () => void

      switch (value.index) {
        case 0:
          toCall = onClickSection1
          break
        case 1:
          toCall = onClickSection2
          break
        case 2:
          toCall = onClickSection3
          break
        case 3:
          toCall = onClickSection4
          break
        case 4:
          toCall = onClickSection5
          break
        case 5:
          toCall = onClickSection6
          break
      }

      if (toCall) {
        toCall()
      }

      if (onChange) {
        onChange(value)
      }
    },
    [onChange, onClickSection1, onClickSection2, onClickSection3, onClickSection4, onClickSection5, onClickSection6]
  )

  return (
    <System.ContentSwitcher {...rest} onChange={onSelectionChange}>
      {sections.map((section, index) => (
        <System.Switch key={`${section}-${index}`} name={`${index}`} text={section} />
      ))}
    </System.ContentSwitcher>
  )
}

export const ContentSwitcher = withHOC(InnerContentSwitcher)

ContentSwitcher.defaultProps = {
  width: 410,
  height: 40,
}

addPropertyControls(ContentSwitcher, {
  sections: {
    title: "Sections",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["First Section", "Second Section", "Third Section"],
  },
  onClickSection1: {
    type: ControlType.EventHandler,
  },
  onClickSection2: {
    type: ControlType.EventHandler,
  },
  onClickSection3: {
    type: ControlType.EventHandler,
  },
  onClickSection4: {
    type: ControlType.EventHandler,
  },
  onClickSection5: {
    type: ControlType.EventHandler,
  },
  onClickSection6: {
    type: ControlType.EventHandler,
  },
})
