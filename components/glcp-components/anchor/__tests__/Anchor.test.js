import React from 'react'
import { render, screen } from '@testing-library/react'

import { Default } from '../Anchor.stories'

it('renders the anchor with text', () => {
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('default-anchor')).toHaveTextContent(
    'Default Anchor'
  )
})
