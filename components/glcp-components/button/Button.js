import React from 'react'
import PropTypes from 'prop-types'
import { Button as GrommetButton } from 'grommet'

export const Button = ({ type, label, testId, ...rest }) => {
  return (
    <GrommetButton type={type} label={label} data-testid={testId} {...rest} />
  )
}

Button.propTypes = {
  /**
   * Button type. This can be either 'submit' or 'button'. Default is 'button'
   */
  type: PropTypes.string,
  /**
   * Button label. This can be a string or <Typography /> component.
   */
  label: PropTypes.node,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

Button.defaultProps = {
  type: 'button',
  label: ''
}
