import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Grommet } from 'grommet'

import { Button } from '../../button/Button'
import { AvatarInfo } from '../../avatar-info/AvatarInfo'
import { Default } from '../Navigation.stories'

const avatarInfo = (
  <AvatarInfo
    avatarSrc="/images/ATT.svg"
    avatarSize="medium"
    primaryInfo="AT&T Corporation"
    secondaryInfo="ID: 0a7141c332ec4c4aae04aa4b8fe59deb"
    testId="account-info"
  />
)
const menu = [
  { id: 1, label: 'Home', routeTo: '/home', testId: 'home-menu-item' },
  { id: 2, label: 'My Apps', routeTo: '/my-apps', testId: 'my-apps-menu-item' },
  {
    id: 3,
    label: 'App Catalog',
    routeTo: '/app-catalog',
    testId: 'app-catalog-menu-item'
  },
  {
    id: 4,
    label: 'Manage',
    routeTo: '/manage-account',
    testId: 'manage-account-menu-item'
  }
]
it('renders the navigation when click on burger button and displace the account heading', () => {
  Default.args = {
    accountInfo: avatarInfo,
    menuData: menu,
    switchAccountBtn: (
      <Button
        label="Switch Account"
        secondary
        type="button"
        onClick={null}
        testId="switch-account-btn"
      />
    ),
    testId: 'nav'
  }
  render(
    <Grommet>
      <Default {...Default.args} />
    </Grommet>
  )
  fireEvent.click(screen.getByTestId('burger-btn-nav'))
  // console.log(prettyDOM(screen.getByTestId('layer-nav')))
  expect(screen.getByTestId('heading-account-info-primary')).toHaveTextContent(
    'AT&T Corporation'
  )
  const homeMenuItem = screen.getByTestId('home-menu-item')
  expect(homeMenuItem).toHaveTextContent('Home')
  const mockHandleMenuItemClick = jest.fn()
  render(homeMenuItem.addEventListener('click', mockHandleMenuItemClick))
  fireEvent.click(homeMenuItem)
  expect(mockHandleMenuItemClick).toHaveBeenCalled()
})
