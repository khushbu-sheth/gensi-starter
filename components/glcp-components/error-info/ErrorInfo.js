import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'grommet-icons'
import { Box } from 'grommet'

import { Typography } from '../typography/Typography'

const ErrorInfo = ({
  ErrorIcon,
  title,
  errorInfo,
  Content,
  ButtonGroup,
  align
}) => {
  return (
    <Box align="start" alignContent="start" pad="xlarge">
      <Box width="medium" justify="center" align={align}>
        {ErrorIcon}
        <Typography
          type="text"
          weight="bold"
          size="xlarge"
          margin={{ top: 'medium', bottom: 'small' }}
          testId="error-info-title"
        >
          {title}
        </Typography>
        {errorInfo && (
          <Typography
            type="text"
            margin={{ bottom: 'small' }}
            testId="error-info-code"
          >
            <>{errorInfo}</>
          </Typography>
        )}
        {Content}
        {ButtonGroup}
      </Box>
    </Box>
  )
}

export default ErrorInfo

ErrorInfo.propTypes = {
  ErrorIcon: PropTypes.element,
  title: PropTypes.string.isRequired,
  errorInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  Content: PropTypes.element.isRequired,
  ButtonGroup: PropTypes.element,
  align: PropTypes.string
}

ErrorInfo.defaultProps = {
  ErrorIcon: <Alert size="large" />,
  errorInfo: undefined,
  ButtonGroup: undefined,
  align: 'start'
}
