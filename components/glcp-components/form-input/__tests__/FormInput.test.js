import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import {
  FormCheckBoxInput,
  FormTextInput,
  FormTextInputWithErrorMessage,
  FormDisabledTextInputWithIcon
} from '../FormInput.stories'

afterEach(() => {
  window.localStorage.removeItem('form-close-button')
})

it('renders the  Form Input field with text input as required', () => {
  render(<FormTextInput {...FormTextInput.args} />)
  expect(screen.getByTestId('form-text-input-1-field')).toHaveTextContent(
    'form-text-input-1'
  )
})

it('renders the form text Input with error message', () => {
  render(
    <FormTextInputWithErrorMessage {...FormTextInputWithErrorMessage.args} />
  )
  expect(screen.getByTestId('form-text-input-2-field')).toHaveTextContent(
    'form-text-input-2'
  )
  expect(screen.getByTestId('form-text-input-2-field')).toHaveTextContent(
    'this is a required field'
  )
})

it('renders the form check box input', () => {
  render(<FormCheckBoxInput {...FormCheckBoxInput.args} />)
  expect(screen.getByTestId('form-checkbox-input-field')).toHaveTextContent(
    'option-1'
  )
})

it('check close button click', () => {
  render(
    <FormDisabledTextInputWithIcon {...FormDisabledTextInputWithIcon.args} />
  )
  const closeButton = screen.getByTestId('copy-btn')
  fireEvent.click(closeButton)
  expect(window.localStorage.getItem('form-close-button')).toBe(
    'close button clicked'
  )
})
