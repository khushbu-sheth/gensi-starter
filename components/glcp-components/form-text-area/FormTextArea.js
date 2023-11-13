import React from 'react'
import { FormField, TextArea } from 'grommet'
import { PropTypes } from 'prop-types'

const FormTextArea = ({ testId, disabled, label, labelHelper, ...rest }) => {
  const {
    validate,
    required,
    error,
    name,
    margin,
    htmlFor,
    pad,
    placeholder,
    ...inputProps
  } = rest

  return (
    <>
      <FormField
        required={required}
        validate={validate}
        data-testid={`${testId}-field`}
        label={label}
        error={error}
        name={name}
        margin={margin}
        htmlFor={htmlFor}
        pad={pad}
        help={labelHelper}
      >
        <TextArea
          name={name}
          placeholder={placeholder}
          data-testid={`${testId}-area`}
          disabled={disabled}
          {...inputProps}
        />
      </FormField>
    </>
  )
}

FormTextArea.propTypes = {
  testId: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelHelper: PropTypes.string
}

FormTextArea.defaultProps = {
  disabled: false,
  label: undefined,
  labelHelper: ''
}

export default FormTextArea
