import React from 'react'
import { render, screen } from '@testing-library/react'

import { Primary, Secondary } from '../Button.stories'

it('renders the button in the primary state', () => {
  render(<Primary {...Primary.args} />)
  expect(screen.getByRole('button')).toHaveTextContent('Primary')
})
it('renders the button in the secondary state', () => {
  render(<Secondary {...Secondary.args} />)
  expect(screen.getByRole('button')).toHaveTextContent('Secondary')
})
