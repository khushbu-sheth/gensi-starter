import React from 'react'
import { Box, Form } from 'grommet'
import PropTypes from 'prop-types'
import { CircleAlert } from 'grommet-icons'

import { Typography } from '../typography/Typography'

export const FormOverallAlert = ({ message }) => {
  return (
    <Box
      background="rgba(252, 97, 97, 0.24)"
      pad="small"
      round="4px"
      // Relies on the form child to provide a bottom margin that is between itself
      // and the buttons or this error. This setting will then provide
      // a margin between the error message and the buttons.
      margin={{ bottom: 'medium' }}
      gap="xsmall"
      direction="row"
      align="center"
      data-testid="form-global-error"
    >
      <CircleAlert size="small" />
      <Typography type="text" size="xsmall" testId="form-global-error-message">
        {message}
      </Typography>
    </Box>
  )
}
FormOverallAlert.propTypes = {
  message: PropTypes.string.isRequired
}

export const CCSForm = ({
  testId,
  buttons,
  children,
  errorMessage,
  ...rest
}) => {
  return (
    <Form data-testid={testId} {...rest}>
      {children}
      {errorMessage.length > 0 && <FormOverallAlert message={errorMessage} />}
      {buttons}
    </Form>
  )
}

CCSForm.propTypes = {
  children: PropTypes.element,
  testId: PropTypes.string.isRequired,
  buttons: PropTypes.element,
  errorMessage: PropTypes.string.isRequired
}

CCSForm.defaultProps = {
  buttons: <></>,
  children: <></>
}
