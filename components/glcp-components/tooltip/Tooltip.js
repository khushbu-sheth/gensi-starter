import React from 'react'
import PropTypes from 'prop-types'
import { Tip } from 'grommet'

export const Tooltip = ({ info, testId, children, ...rest }) => {
  return (
    <Tip content={info} data-testid={testId} {...rest}>
      {children}
    </Tip>
  )
}

Tooltip.propTypes = {
  /**
   * This prop represents an element that when hovered over displays the popup.
   * It can be a node or string.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  /**
   * This is tooltip content.
   */
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}
