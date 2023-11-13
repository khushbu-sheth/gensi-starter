import React from 'react'
import PropTypes from 'prop-types'
import { Anchor as GrommetAnchor } from 'grommet'

export const Anchor = ({ label, href, testId, ...rest }) => {
  return (
    <GrommetAnchor label={label} href={href} data-testid={testId} {...rest} />
  )
}

Anchor.propTypes = {
  /**
   * Anchor label. This can be a string or a <Typography /> component.
   */
  label: PropTypes.node.isRequired,
  /**
   * Hyperlink reference to place in the anchor.
   */
  href: PropTypes.string.isRequired,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

Anchor.defaultProps = {}
