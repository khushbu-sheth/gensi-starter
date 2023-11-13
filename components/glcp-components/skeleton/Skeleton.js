import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

const dimensions = [
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  '100%'
]

const skeletonType = ['text', 'rectangle', 'circle']

export const Skeleton = ({
  variant,
  count,
  height,
  width,
  round,
  diameter,
  backgroundColor
}) => {
  return (
    <>
      {variant === 'text' &&
        Array.from({ length: count }, (_, i) => i).map((j) => (
          <Box
            key={j}
            height={height}
            width={j === count - 1 && count > 1 ? '50%' : '100%'}
            round={round}
            margin={{ bottom: '3px' }}
            background={backgroundColor}
            data-testid={
              j === count - 1 && count > 1 ? 'skeleton-para-last' : ''
            }
          />
        ))}
      {variant === 'rectangle' && (
        <Box
          height={height}
          width={width}
          round={round}
          background={backgroundColor}
        />
      )}
      {variant === 'circle' && (
        <Box
          round="50%"
          width={diameter}
          height={diameter}
          background={backgroundColor}
        />
      )}
    </>
  )
}

Skeleton.propTypes = {
  /**
   * This prop defines the skeleton type. Values are text, rectangle or circle
   */
  variant: PropTypes.oneOf(skeletonType),
  /**
   * This prop defines the number of bars to be visible. default is 1
   * Width of the bars will be 100% of the parent.
   * If more than 1 bars, then the last one's width will be 50% for para effect.
   */
  count: PropTypes.number,
  /**
   * This prop defines the height of the bars. Default value is 10px
   * This prop also defines the height of the rectangle, if the variant is a rectangle
   */
  height: PropTypes.string,
  /**
   * This prop defines the width of the rectangle.
   */
  width: PropTypes.oneOf(dimensions),
  /**
   * This prop defines whether border should be rounded or not. Default value is false
   */
  round: PropTypes.bool,
  /**
   * This prop defines the diameter of the circle
   */
  diameter: PropTypes.string,
  /**
   * This prop defines the background color
   */
  backgroundColor: PropTypes.string
}

Skeleton.defaultProps = {
  width: '100%',
  count: 1,
  round: false,
  height: '10px',
  variant: 'text',
  diameter: 'small',
  backgroundColor: 'status-unknown'
}
