import React from 'react'
import { Box } from 'grommet'
import PropTypes from 'prop-types'

import { PageContainer } from './PageContainer'

export const PageLayout = ({ header, footer, testId, banner, ...rest }) => {
  return (
    <PageContainer data-testid={testId}>
      <Box flex overflow="auto">
        <Box height={{ min: '100%' }}>
          {header}
          {banner}
          <PageContainer {...rest} />
        </Box>
      </Box>
      {/* NO Footer for GLCP in Cancun release (Mar 23 2022) */}
      {footer}
    </PageContainer>
  )
}

PageLayout.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  banner: PropTypes.element,
  testId: PropTypes.string
}

PageLayout.defaultProps = {
  header: undefined,
  footer: undefined,
  banner: undefined,
  testId: 'glcp-page-layout'
}
