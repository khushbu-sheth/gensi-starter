import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import {
  ErrorInfoWithIcon,
  ErrorInfoWithButtons,
  ErrorInfoWithoutErrorCode
} from '../ErrorInfo.stories'
import ErrorInfo from '../ErrorInfo'

it('renders default values with different icons', () => {
  const { queryByTestId } = render(
    <ErrorInfo {...ErrorInfoWithoutErrorCode.args} />
  )
  expect(screen.getByTestId('error-icon')).toHaveAttribute(
    'aria-label',
    'CircleAlert'
  )
  expect(screen.getByTestId('error-info-title')).toHaveTextContent(
    'Error Message'
  )
  expect(queryByTestId('error-info-code')).toBeNull()
})

it('renders with error code', () => {
  render(<ErrorInfo {...ErrorInfoWithIcon.args} />)
  expect(screen.getByTestId('error-info-code')).toHaveTextContent(
    'Error Code: 451'
  )
})

it('Properly renders action buttons', () => {
  render(<ErrorInfo {...ErrorInfoWithButtons.args} />)
  expect(
    screen.getByTestId('error-buttons').querySelectorAll('button')
  ).toHaveLength(2)
  const { origin } = window.location || {}
  fireEvent.click(screen.getByTestId('primary-btn'))
  expect(window.location.origin).toBe(origin)
})
