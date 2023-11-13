import React from 'react'
import { render, screen } from '@testing-library/react'

import { Default, SpinnerWithText, HPESpinner } from '../Loader.stories'

it('Loader spinner renders and it will have svg element', () => {
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('loader-spinner')).not.toBeEmptyDOMElement()
  expect(screen.getByTestId('spinner-svg')).toBeInTheDocument()
})

it('Loader spinner renders with text', () => {
  render(<SpinnerWithText {...SpinnerWithText.args} />)
  expect(screen.getByTestId('spinner-with-text')).toHaveTextContent(
    'Loading...'
  )
})

it('HPE spinner renders with text', () => {
  render(<HPESpinner {...HPESpinner.args} />)
  expect(screen.getByTestId('hpe-spinner-svg')).toBeInTheDocument()
})
