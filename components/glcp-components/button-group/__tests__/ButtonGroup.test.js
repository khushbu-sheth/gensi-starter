import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { SingleButton, TwoButtons } from '../ButtonGroup.stories'

describe('Button Group', () => {
  it('renders the panel with single button', () => {
    render(<SingleButton {...SingleButton.args} />)
    expect(screen.getByTestId('primary-btn')).toHaveTextContent('Primary')
    const primaryButton = screen.getByTestId('primary-btn')
    const mockHandleBtnClick = jest.fn()
    render(primaryButton.addEventListener('click', mockHandleBtnClick))
    fireEvent.click(primaryButton)
    expect(mockHandleBtnClick).toHaveBeenCalled()
  })

  it('renders the panel with two buttons', () => {
    render(<TwoButtons {...TwoButtons.args} />)
    const buttonBlock = screen.getByTestId('two-buttons')
    let buttonCount = 0
    if (buttonBlock.childNodes) {
      buttonBlock.childNodes.forEach((child) => {
        if (child.tagName === 'BUTTON') {
          buttonCount += 1
        }
      })
    }
    expect(buttonCount).toBe(2)
    expect(screen.getByTestId('secondary-btn')).toHaveTextContent('Secondary')
    const secondaryButton = screen.getByTestId('secondary-btn')
    const mockHandleBtnClick = jest.fn()
    render(secondaryButton.addEventListener('click', mockHandleBtnClick))
    fireEvent.click(secondaryButton)
    expect(mockHandleBtnClick).toHaveBeenCalled()
  })
})
