import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'grommet'

import { dropPositions } from '../utils'

export const DropMenu = ({ items, position, label, icon, testId }) => {
  return (
    <Menu
      items={items}
      dropAlign={position}
      label={label}
      icon={icon}
      data-testid={testId}
    />
  )
}

DropMenu.propTypes = {
  /**
   * items prop is required for drop menu to renders the list
   * The structure of this list can be { label: 'required', href: 'optional', onClick: () => {optional} }
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      onClick: PropTypes.func
    })
  ).isRequired,
  /**
   * position prop is optional to place the drop menu alignment
   * Default is { right: 'right', top: 'bottom' }
   */
  position: PropTypes.shape({
    top: PropTypes.oneOf(dropPositions),
    right: PropTypes.oneOf(dropPositions),
    bottom: PropTypes.oneOf(dropPositions),
    left: PropTypes.oneOf(dropPositions)
  }),
  /**
   * label prop is option to render the text for menu
   * This can be undefined or can be combined with the icon
   */
  label: PropTypes.string,
  /**
   * icon prop is option to render the icon for menu
   * This can be undefined or can be combined with the label
   */
  icon: PropTypes.element,
  /**
   * data-testid, will be used for testing
   */
  testId: PropTypes.string.isRequired
}

DropMenu.defaultProps = {
  position: { right: 'right', top: 'bottom' },
  label: '',
  icon: null
}
