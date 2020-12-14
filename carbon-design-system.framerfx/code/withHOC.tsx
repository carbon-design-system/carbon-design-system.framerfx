import * as React from "react"

export function withHOC<T>(Component): React.FC<T> {
  return (props: any) => {
    return <Component {...props} />
  }
}
