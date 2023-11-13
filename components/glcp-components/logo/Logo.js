import React from 'react'
import { Box } from 'grommet'
import { PropTypes } from 'prop-types'

import arubaImage from '../../images/aruba.png'

export const Logo = ({ size, url, noShade, onClick, param, testId }) => {
  const imageSizes = {
    xxsmall: { image: '24px', round: 'xxsmall' },
    xsmall: { image: '48px', round: 'xsmall' },
    small: { image: '72px', round: 'small' },
    medium: { image: 'xsmall', round: 'medium' },
    large: { image: '144px', round: 'large' },
    xlarge: { image: 'small', round: '36px' }
  }
  const doAction = () => {
    if (onClick) {
      return param ? onClick(param) : onClick()
    }
    return null
  }
  return (
    <Box
      round={imageSizes[size].round}
      width={imageSizes[size].image}
      height={imageSizes[size].image}
      background={`url(${url})`}
      elevation={noShade ? 'none' : 'small'}
      flex={false}
      onClick={onClick ? doAction : null}
      data-testid={testId}
    />
  )
}
Logo.propTypes = {
  /**
   * Size of the logo can be a string.
   * It can be xxsmall/ xsmall/ small/ medium
   */
  size: PropTypes.string,
  /**
   * Logo url will be used to render this logo
   */
  url: PropTypes.string,
  /**
   * This boolean prop will be used to skip the box shadow around the logo
   */
  noShade: PropTypes.bool,
  /**
   * Click handler on the logo
   */
  onClick: PropTypes.func,
  /**
   * This param prop will be used as a arg in the onClick event handler
   */
  param: PropTypes.any,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}
Logo.defaultProps = {
  size: 'small',
  url: arubaImage,
  noShade: false,
  onClick: null,
  param: null
}
