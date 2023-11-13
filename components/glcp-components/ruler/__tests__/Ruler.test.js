import React from 'react'
import { render, screen } from '@testing-library/react'

import { Default } from '../Ruler.stories'

it('renders the ruler', () => {
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('default-ruler')).toHaveAttribute('class')
})
