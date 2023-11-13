import React from 'react'
import { FormField, TextInput } from 'grommet'

import { Button } from '..'

import { CCSForm } from './Form'

export default {
  title: 'CCS/Form',
  component: CCSForm
}

const children = (
  <>
    <FormField
      label="First Name"
      name="first_name"
      data-testid="sign-up-first-name-form-field"
    >
      <TextInput
        data-testid="sign-up-first-name-input"
        name="first_name"
        placeholder="Jane"
      />
    </FormField>
    <FormField
      label="Last Name"
      name="last_name"
      data-testid="sign-up-last-name-form-field"
    >
      <TextInput
        data-testid="sign-up-last-name-input"
        name="last_name"
        placeholder="Smith"
      />
    </FormField>
  </>
)

const buttons = (
  <>
    <Button
      primary
      testId="sign-up-submit"
      type="submit"
      label="Sign Up"
      fill="horizontal"
      size="large"
      margin={{ top: 'medium' }}
    />
  </>
)

const Template = (args) => <CCSForm {...args}>{children}</CCSForm>

export const FormWithoutError = Template.bind({})
FormWithoutError.args = {
  errorMessage: '',
  testId: 'without-error',
  buttons,
  onSubmit: () => {
    window.localStorage.setItem(
      'on-form-submit',
      'form without error submitted'
    )
  }
}

export const FormWithError = Template.bind({})
FormWithError.args = {
  errorMessage: 'Error Message',
  testId: 'with-error',
  buttons,
  onSubmit: () => {
    window.localStorage.setItem('on-form-submit', 'form with error submitted')
  }
}
