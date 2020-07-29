export function omitIrrelevantProps(props: Record<any, any>) {
  const {
    willChangeTransform: _,
    __slotKeys: __,
    assetMapHash: ___,
    __layoutId: ____,
    selectionMode: _____,
    ...rest
  } = props
  return rest
}

export function propsWithoutChildren(props: Record<any, any>) {
  const { children: __, ...rest } = props
  return rest
}
