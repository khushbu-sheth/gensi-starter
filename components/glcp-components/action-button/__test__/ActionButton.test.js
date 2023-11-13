import React from 'react'
import {
  render,
  screen,
  fireEvent,
  within,
  cleanup
} from '@testing-library/react'

import {
  Default,
  MultipleActions,
  ActionsWithSingleOption
} from '../ActionButton.stories'

describe('Action Button', () => {
  afterEach(cleanup)

  it('renders a simple one action, action button', () => {
    render(<Default {...Default.args} />)
    const oneAction = screen.getByTestId('oneaction-action-btn')
    expect(oneAction).toBeInTheDocument()

    global.alert = jest.fn()
    const deleteAction = within(oneAction).getByTestId('action-0')
    expect(deleteAction).toBeInTheDocument()
    fireEvent.click(deleteAction)
    expect(global.alert).toHaveBeenCalledTimes(1)
  })

  it('renders single action in dot dot dot, action button', () => {
    render(<ActionsWithSingleOption {...ActionsWithSingleOption.args} />)
    const singleDropActions = screen.getByTestId('single-drop-action-btn')
    expect(singleDropActions).toBeInTheDocument()

    const button = screen.getByRole('button')
    fireEvent.click(button)

    global.alert = jest.fn()
    const viewDetails = screen.getByTestId('action-0')
    expect(viewDetails).toBeInTheDocument()
    fireEvent.click(viewDetails)
    expect(global.alert).toHaveBeenCalledTimes(1)
  })

  it('renders multiple action, action button', () => {
    render(<MultipleActions {...MultipleActions.args} />)
    const multipleActions = screen.getByTestId('multipleactions-action-btn')
    expect(multipleActions).toBeInTheDocument()

    const button = screen.getByRole('button')
    fireEvent.click(button)

    global.alert = jest.fn()
    const viewDetails = screen.getByTestId('action-0')
    expect(viewDetails).toBeInTheDocument()
    fireEvent.click(viewDetails)
    expect(global.alert).toHaveBeenCalledTimes(1)
  })
})
