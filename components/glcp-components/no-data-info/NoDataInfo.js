import { Box } from 'grommet'
import PropTypes from 'prop-types'
import React from 'react'

import { Typography } from '../typography/Typography'

const NoDataInfo = ({ icon, title, subtitle, action, testId }) => {
  return (
    <Box align="center" gap="small" data-testid={testId}>
      {icon}
      {title && (
        <Typography
          type="heading"
          level="3"
          textAlign="center"
          margin={{ top: 'small', bottom: 'none' }}
          testId="no-data-title"
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          size="large"
          type="paragraph"
          textAlign="center"
          testId="no-data-subtitle"
        >
          {subtitle}
        </Typography>
      )}
      {action}
    </Box>
  )
}

export default NoDataInfo

NoDataInfo.propTypes = {
  /**
   * NoDataInfo's  title.
   */
  title: PropTypes.string,
  /**
   * Icon which the user want to display.
   */
  icon: PropTypes.element,
  /**
   * NoDataInfo's  content/description showing under subtitle in smaller font.
   */
  subtitle: PropTypes.string,
  /**
   * It is used to when you have actions items such as button.
   */
  action: PropTypes.element,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

NoDataInfo.defaultProps = {
  title: null,
  icon: null,
  subtitle: null,
  action: null
}
