import React from 'react'
import { render, screen } from '@testing-library/react'

import { Skeleton } from '../Skeleton'
import { Paragraph } from '../Skeleton.stories'

it('renders the skeleton', () => {
  render(<Skeleton {...Paragraph.args} />)
  expect(screen.getByTestId('skeleton-para-last')).toBeInTheDocument()
})
