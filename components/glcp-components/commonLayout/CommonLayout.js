import React from 'react'
import { Box } from 'grommet'
import PropTypes from 'prop-types'

export const CommonLayout = ({ header, mainContent, footer }) => {
  return (
    <Box fill direction="column" overflow="auto">
      {header && <Box>{header}</Box>}
      <Box fill height={{ min: '82vh' }}>
        {mainContent}
      </Box>
      {footer && (
        <Box pad={{ horizontal: 'medium', vertical: 'small' }}>{footer}</Box>
      )}
    </Box>
  )
}

CommonLayout.propTypes = {
  /**
   * Header component from storybook.
   */
  header: PropTypes.element,
  /**
   * This will be the placeholder for the content in between header and footer.
   * This is mandatory.
   */
  mainContent: PropTypes.element.isRequired,
  /**
   * Footer component from storybook.
   */
  footer: PropTypes.element
}

CommonLayout.defaultProps = {
  header: null,
  footer: null
}
