import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Toggle } from '../ToggleButton.stories'

afterEach(() => {
  window.localStorage.removeItem('toogle-clicked')
})

describe('ToggleButton', () => {
  it('render the ToggleButton', () => {
    render(<Toggle {...Toggle.args} />)
    const simple = screen.getByTestId('toggle-btn')
    expect(simple).toBeInTheDocument()

    fireEvent.click(simple)
    expect(simple).not.toBeChecked()

    fireEvent.click(simple)
    expect(simple).toBeChecked()

    expect(window.localStorage.getItem('toogle-clicked')).toBe('toogle clicked')
  })
})
