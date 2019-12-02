import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTooltipIcon = props => {
    return <System.TooltipIcon {...props}></System.TooltipIcon>
}

export const TooltipIcon = withHOC(InnerTooltipIcon)

TooltipIcon.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TooltipIcon, {
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
        defaultValue: "center",
        options: ["", "", ""],
        optionTitles: ["", "", ""],
    },
    tooltipText: {
        title: "Tooltip text",
        type: ControlType.String,
        defaultValue: "tooltipText",
    },
})
