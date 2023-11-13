import React from 'react'
import { render, screen } from '@testing-library/react'

import { Default } from '../AppFooter.stories'

it('renders the footer copyright text as 2021 Hewlett Packard Enterprise Development LP', () => {
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('app-footer')).toHaveTextContent(
    '© 2021 Hewlett Packard Enterprise Development LP'
  )
})

it('renders the first footer link text as Terms', () => {
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('terms')).toHaveTextContent('Terms')
})
