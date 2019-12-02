import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTooltipDefinition = props => {
    return <System.TooltipDefinition {...props}></System.TooltipDefinition>
}

export const TooltipDefinition = withHOC(InnerTooltipDefinition)

TooltipDefinition.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TooltipDefinition, {
    children: {
        title: "Children",
        type: ControlType.String,
    },
    triggerClassName: {
        title: "Trigger class name",
        type: ControlType.String,
    },
    direction: {
        title: "Direction",
        type: ControlType.Enum,
        defaultValue: "bottom",
        options: ["", ""],
        optionTitles: ["", ""],
    },
    align: {
        title: "Align",
        type: ControlType.Enum,
        defaultValue: "start",
        options: ["", "", ""],
        optionTitles: ["", "", ""],
    },
})
