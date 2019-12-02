import * as React from "react"

export function withHOC(Component): React.SFC {
    return (props: any) => {
        return <Component {...props} />
    }
}
