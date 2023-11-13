import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Default } from '../PageLayout.stories'

it('renders the page layout with header on screen', () => {
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('glcp-header')).toBeInTheDocument()
})
