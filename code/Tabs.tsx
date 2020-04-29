import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { omitIrrelevantProps } from "./utils/props"

const instructionsStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  fontSize: 13,
  fontWeight: 500,
  textAlign: "center",
  color: "#bb88ff",
  backgroundColor: "#2f2546",
  border: "1px solid #8855ff",
  padding: 32,
  overflow: "hidden",
}

const InnerTabs = (props) => {
  const { tabLabels, tabContent, ...rest } = omitIrrelevantProps(props)
  return (
    <System.Tabs {...rest}>
      {tabLabels.map((tabLabel, index) => (
        <System.Tab key={index} id={`tab-${index + 1}`} label={tabLabel}>
          {!tabContent[index] ? (
            <div style={instructionsStyle}>
              Connect tab content using the connector at the right side of this component or via the properties panel.
            </div>
          ) : (
            <div style={{ position: "relative" }}>{tabContent[index]}</div>
          )}
        </System.Tab>
      ))}
    </System.Tabs>
  )
}

export const Tabs = withHOC(InnerTabs)

Tabs.defaultProps = {
  width: 482,
  height: 280,
}

addPropertyControls(Tabs, {
  tabLabels: {
    title: "Tab Labels",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
    },
    defaultValue: ["Tab Label 1", "Tab Label 2", "Tab Label 3"],
  },
  tabContent: {
    title: "Tab Content",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.ComponentInstance,
    },
    defaultValue: [],
  },
})
