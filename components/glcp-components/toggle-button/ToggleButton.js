import React from 'react'
import PropTypes from 'prop-types'
import { Box, CheckBox } from 'grommet'
import styled from 'styled-components'

const StyledBox = styled(Box)`
  label > span {
    flex: 100%;
    align-items: flex-end;
  }
`
const Toggle = ({ checked, label, onChange, testId, ...rest }) => {
  return (
    <CheckBox
      label={label}
      reverse={!!label}
      checked={checked}
      onChange={onChange}
      toggle
      data-testid={testId}
      {...rest}
    />
  )
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  /**
   * handler that gets triggered when toggle button state changes
   */
  onChange: PropTypes.func.isRequired,

  /**
   * data-testid, will be used for testing
   */
  testId: PropTypes.string.isRequired
}

Toggle.defaultProps = {
  label: '',
  checked: false
}

export const ToggleButton = ({ label, testId, ...rest }) => {
  return label ? (
    <StyledBox>
      <Toggle label={label} testId={testId} {...rest} />
    </StyledBox>
  ) : (
    <Toggle testId={testId} {...rest} />
  )
}

ToggleButton.propTypes = {
  label: PropTypes.string,

  /**
   * handler that gets triggered when toggle button state changes
   */
  onChange: PropTypes.func.isRequired,
  /**
   * data-testid, will be used for testing
   */
  testId: PropTypes.string.isRequired
}

ToggleButton.defaultProps = {
  label: ''
}
