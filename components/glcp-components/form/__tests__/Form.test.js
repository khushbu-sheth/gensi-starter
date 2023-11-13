import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { FormWithoutError, FormWithError } from '../Form.stories'

afterEach(() => {
  window.localStorage.removeItem('on-form-submit')
})

it('renders form without an error message', () => {
  render(<FormWithoutError {...FormWithoutError.args} />)
  expect(screen.queryByTestId('form-global-error')).toBeNull()
  fireEvent.submit(screen.queryByTestId('without-error'))
  expect(window.localStorage.getItem('on-form-submit')).toBe(
    'form without error submitted'
  )
})

it('renders form with an error message', () => {
  render(<FormWithError {...FormWithError.args} />)
  expect(
    screen.getByTestId('text-form-global-error-message')
  ).toHaveTextContent('Error Message')
  fireEvent.submit(screen.queryByTestId('with-error'))
  expect(window.localStorage.getItem('on-form-submit')).toBe(
    'form with error submitted'
  )
})
