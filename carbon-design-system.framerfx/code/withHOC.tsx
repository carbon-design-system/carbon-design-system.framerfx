import * as React from "react"
import { WithSize } from "./utils/types"

export function withHOC<T>(Component): React.FC<WithSize<T>> {
  return (props: any) => {
    return <Component {...props} />
  }
}
