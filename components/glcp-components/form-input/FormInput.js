import React from 'react'
import { CheckBoxGroup, FormField, TextInput, Box } from 'grommet'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const StyledTextInput = styled(TextInput)`
  background: rgba(0, 0, 0, 0.04);
  color: #444444;
  opacity: 1;
  border: none;
`

const FormInput = ({
  testId,
  disabled,
  label,
  labelHelper,
  inputType,
  checkBoxOptions,
  action,
  ...rest
}) => {
  const {
    validate,
    required,
    error,
    name,
    margin,
    htmlFor,
    pad,
    placeholder,
    info,
    ...inputProps
  } = { ...rest }

  const FormInputComponent = (
    <FormField
      required={required}
      validate={validate}
      data-testid={`${testId}-field`}
      label={label}
      error={error}
      name={name}
      margin={margin}
      htmlFor={htmlFor}
      help={labelHelper}
      info={info}
      pad={pad}
    >
      {(inputType === 'text' || inputType === 'password') &&
        (disabled ? (
          <StyledTextInput
            name={name}
            placeholder={placeholder}
            data-testid={`${testId}-input`}
            disabled={disabled}
            type={inputType}
            {...inputProps}
          />
        ) : (
          <TextInput
            name={name}
            placeholder={placeholder}
            data-testid={`${testId}-input`}
            disabled={disabled}
            type={inputType}
            {...inputProps}
          />
        ))}
      {inputType === 'checkbox' && (
        <CheckBoxGroup
          options={checkBoxOptions}
          name={name}
          data-testid={`${testId}-check-box`}
          {...inputProps}
        />
      )}
    </FormField>
  )

  if (action)
    return (
      <Box direction="row">
        <Box basis="xlarge"> {FormInputComponent}</Box>
        {action}
      </Box>
    )
  return FormInputComponent
}

FormInput.propTypes = {
  testId: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  inputType: PropTypes.oneOf(['checkbox', 'password', 'text']).isRequired,
  checkBoxOptions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object)
  ]),
  labelHelper: PropTypes.string,
  action: PropTypes.element
}

FormInput.defaultProps = {
  disabled: false,
  label: undefined,
  checkBoxOptions: undefined,
  action: undefined,
  labelHelper: ''
}

export default FormInput
