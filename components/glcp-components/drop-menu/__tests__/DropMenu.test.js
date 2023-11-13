import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Default } from '../DropMenu.stories'

afterEach(() => {
  window.localStorage.removeItem('menu-item-clicked')
})

describe('TEST:drop-menu', () => {
  it('renders the drop menu as a type button', () => {
    render(<Default {...Default.args} />)
    expect(screen.getByTestId('default-drop-menu').getAttribute('type')).toBe(
      'button'
    )
  })
  it('click the menu icon will show the menu list', () => {
    render(<Default {...Default.args} />)
    fireEvent.click(screen.getByTestId('default-drop-menu'))
    expect(screen.getByTestId('default-drop-menu').hasChildNodes()).toBeTruthy()
  })

  it('click the menu item reset password', () => {
    render(<Default {...Default.args} />)
    fireEvent.click(screen.getByTestId('default-drop-menu'))

    const resetPassword = screen.getByText('Reset Password')

    fireEvent.click(resetPassword)
    expect(window.localStorage.getItem('menu-item-clicked')).toBe(
      'reset password clicked'
    )
  })

  it('click the menu item logout', () => {
    render(<Default {...Default.args} />)
    fireEvent.click(screen.getByTestId('default-drop-menu'))

    const logout = screen.getByText('Logout')
    fireEvent.click(logout)
    expect(window.localStorage.getItem('menu-item-clicked')).toBe(
      'logout clicked'
    )
  })
})
