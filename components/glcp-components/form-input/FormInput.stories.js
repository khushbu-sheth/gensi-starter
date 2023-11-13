import React from 'react'
import { Copy } from 'grommet-icons'

import { Button } from '../button/Button'

import FormInput from './FormInput'

export default {
  title: 'CCS/Form/FormInput',
  component: FormInput
}

const Template = (args) => <FormInput {...args} />

export const FormTextInput = Template.bind({})

FormTextInput.args = {
  label: 'form-text-input-1',
  required: true,
  name: 'form-text-input-1',
  testId: 'form-text-input-1',
  inputType: 'text'
}

export const FormTextInputWithErrorMessage = Template.bind({})

FormTextInputWithErrorMessage.args = {
  label: 'form-text-input-2',
  required: true,
  name: 'form-text-input-2',
  testId: 'form-text-input-2',
  error: 'this is a required field',
  inputType: 'text'
}

export const FormDisabledTextInput = Template.bind({})

FormDisabledTextInput.args = {
  label: 'form-disabled-text-input',
  name: 'form-disabled-text-input',
  testId: 'form-disabled-text-input',
  disabled: true,
  inputType: 'text'
}

export const FormDisabledTextInputWithIcon = Template.bind({})

FormDisabledTextInputWithIcon.args = {
  label: 'form-disabled-text-input-with-icon',
  name: 'form-disabled-text-input-with-icon',
  testId: 'form-disabled-text-input-with-icon',
  disabled: true,
  action: (
    <Button
      default
      margin={{ top: 'medium' }}
      hoverIndicator="none"
      onClick={() => {
        window.localStorage.setItem('form-close-button', 'close button clicked')
      }}
      icon={<Copy size="medium" />}
      testId="copy-btn"
    />
  ),
  inputType: 'text'
}
export const FormCheckBoxInput = Template.bind({})

FormCheckBoxInput.args = {
  label: 'form-checkbox-input',
  name: 'form-checkbox-input',
  testId: 'form-checkbox-input',
  checkBoxOptions: ['option-1', 'option-2', 'option-3'],
  value: ['option-1', 'option-2', 'option-3'],
  inputType: 'checkbox'
}
