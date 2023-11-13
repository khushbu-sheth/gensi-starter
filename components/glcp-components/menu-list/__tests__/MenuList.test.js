import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { SimpleMenuList, MenuListWithHighlight } from '../MenuList.stories'

const menu = [
  {
    id: 1,
    label: 'Profile Details',
    routeTo: '/profile/details',
    testId: 'profile-details-link'
  },
  {
    id: 2,
    label: 'Security',
    routeTo: '/profile/security',
    testId: 'profile-security-link'
  },
  {
    id: 3,
    label: 'Password',
    routeTo: '/profile/password',
    testId: 'profile-password-link'
  },
  {
    id: 4,
    label: 'Preferences',
    routeTo: '/profile/preferences',
    testId: 'profile-preferences-link'
  },
  {
    id: 5,
    label: 'Notifications',
    routeTo: '/profile/notifications',
    testId: 'profile-notifications-link'
  },
  {
    id: 6,
    label: 'Sessions',
    routeTo: '/profile/sessions',
    testId: 'profile-sessions-link',
    isHidden: () => {
      return true
    }
  }
]

it('renders the menu list when click on menu item handles the click event', () => {
  SimpleMenuList.args = {
    defaultActiveId: 1,
    menuData: menu,
    testId: 'menulist'
  }
  render(<SimpleMenuList {...SimpleMenuList.args} />)
  fireEvent.click(screen.getByTestId('profile-preferences-link'))
  expect(screen.getByTestId('desc-profile-preferences-link')).toHaveTextContent(
    'Preferences'
  )
  const profileDetailsMenuItem = screen.getByTestId('profile-details-link')
  const mockHandleMenuItemClick = jest.fn()
  render(
    profileDetailsMenuItem.addEventListener('click', mockHandleMenuItemClick)
  )
  fireEvent.click(profileDetailsMenuItem)
  expect(mockHandleMenuItemClick).toHaveBeenCalled()
})

it('renders the menu list when click on menu item it highlights the clicked menu item', () => {
  MenuListWithHighlight.args = {
    defaultActiveId: 1,
    menuData: menu,
    testId: 'menulist',
    highlightOnSelect: true,
    menuItemPadding: { vertical: 'xsmall', left: 'small' }
  }
  render(<MenuListWithHighlight {...MenuListWithHighlight.args} />)
  fireEvent.click(screen.getByTestId('profile-preferences-link'))
  expect(screen.getByTestId('desc-profile-preferences-link')).toHaveTextContent(
    'Preferences'
  )
  const profileDetailsMenuItem = screen.getByTestId('profile-details-link')
  const mockHandleMenuItemClick = jest.fn()
  render(
    profileDetailsMenuItem.addEventListener('click', mockHandleMenuItemClick)
  )
  fireEvent.click(profileDetailsMenuItem)
  expect(mockHandleMenuItemClick).toHaveBeenCalled()
})
