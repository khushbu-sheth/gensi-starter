import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

export const Ruler = ({ orientation, testId, ...rest }) => {
  const type = {
    horizontal: {
      width: '100%',
      height: '1px',
      margin: { vertical: 'medium' }
    },
    vertical: {
      width: '1px',
      height: '100vh',
      margin: { horizontal: 'medium' }
    }
  }
  return (
    <Box
      height={rest.height || type[orientation].height}
      width={rest.width || type[orientation].width}
      background="text-weak"
      margin={type[orientation].margin}
      data-testid={testId}
      {...rest}
    />
  )
}
Ruler.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  testId: PropTypes.string
}
Ruler.defaultProps = {
  orientation: 'horizontal',
  testId: ''
}
