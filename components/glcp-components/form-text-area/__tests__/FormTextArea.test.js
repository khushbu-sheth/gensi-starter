import React from 'react'
import { render, screen } from '@testing-library/react'

import {
  RequiredFormTextArea,
  FormTextAreaWithErrorMessage
} from '../FormTextArea.stories'

it('renders the TextArea Form field with text input as required', () => {
  render(<RequiredFormTextArea {...RequiredFormTextArea.args} />)
  expect(screen.getByTestId('text-area-formField-1-field')).toHaveTextContent(
    'text-area-formField-1'
  )
})

it('renders the TextArea Form field with error message', () => {
  render(
    <FormTextAreaWithErrorMessage {...FormTextAreaWithErrorMessage.args} />
  )
  expect(screen.getByTestId('text-area-formField-2-field')).toHaveTextContent(
    'text-area-formField-2'
  )
  expect(screen.getByTestId('text-area-formField-2-field')).toHaveTextContent(
    'this is a required field'
  )
})
