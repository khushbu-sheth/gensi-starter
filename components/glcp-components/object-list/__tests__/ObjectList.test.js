import React from 'react'
import { render, screen } from '@testing-library/react'

import { Default, ObjectListWithEditOption } from '../ObjectList.stories'

it('renders the button in the primary state', () => {
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('obj-list-1')).toHaveTextContent('John')
})

it('renders the button in the edit state', () => {
  render(<ObjectListWithEditOption {...ObjectListWithEditOption.args} />)
  expect(screen.getByTestId('obj-list-3')).toHaveTextContent('John')
  expect(screen.getByTestId('obj-list-3-edit-button')).toHaveTextContent(
    'modify'
  )
})
