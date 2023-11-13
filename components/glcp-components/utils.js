export const isArrayOfObject = (o) => {
  return (
    o &&
    o.length > 0 &&
    typeof o[0] === 'object' &&
    o[0] !== null &&
    o[0].constructor === Object
  )
}

export const dimensions = [
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  '100%'
]

export const dropPositions = ['top', 'right', 'bottom', 'left']

// Wizard width is not a t-shirt size but instead dependent
// on the max number of columns it will contain * the width
// of those columns (medium) + gap between columns + small amount
// of pad to ensure focus is visible.
export const getWidth = (numberColumns, theme, size) => {
  const inputWidth =
    parseInt(theme.global.size.medium.replace('px', ''), 10) * numberColumns
  const gapWidth =
    size !== 'small'
      ? parseInt(theme.global.edgeSize.large.replace('px', ''), 10) *
        (numberColumns - 1)
      : 0
  const focusPad =
    2 *
    (size === 'small'
      ? parseInt(theme.global.edgeSize.small.replace('px', ''), 10)
      : parseInt(theme.global.edgeSize.xxsmall.replace('px', ''), 10))
  return `${inputWidth + gapWidth + focusPad}px`
}
export const textAlignments = ['start', 'center', 'end', 'justify']
export const bytesToSize = (bytes = 0) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return '0 Byte'
  const sizeIndex = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
  return `${Math.round(bytes / 1024 ** sizeIndex, 2)} ${sizes[sizeIndex]}`
}

// avoid duplication of padding between Card body and footer so gap
// can drive spacing
export const adjustPad = (direction, context, theme, action) => {
  const pad = theme?.card?.body?.pad

  // only Card body exists, apply pad as-is
  if (!action) return pad

  let adjustedPad
  // 1. When direction column and there are actions, remove the bottom
  // pad on the CardBody and top pad on the CardFooter
  // 2. When direction row, remove right pad on body and left pad on
  // footer
  // 3. When direction row-reverse, remove left pad on body and right pad
  // on footer
  if (context === 'body') {
    adjustedPad = {
      left: direction !== 'row-reverse' ? pad : undefined,
      right: direction !== 'row' ? pad : undefined,
      top: pad,
      bottom:
        direction !== 'row' && direction !== 'row-reverse' ? undefined : pad
    }
  } else if (context === 'footer') {
    adjustedPad = {
      left: direction !== 'row' ? pad : undefined,
      right: direction !== 'row-reverse' ? pad : undefined,
      bottom: pad,
      top: direction !== 'row' && direction !== 'row-reverse' ? undefined : pad
    }
  }
  return adjustedPad
}
