import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Home, HelpOption } from 'grommet-icons'

import { AvatarInfo } from '../../avatar-info/AvatarInfo'
import { Button } from '../../button/Button'
import { Default } from '../RightNavigation.stories'

it('renders the right navigation and expects the user avatar with first char as J and dropcontent have full name', () => {
  const defaultUserInfo = (
    <AvatarInfo
      avatarSize="medium"
      avatarSrc={null}
      primaryInfo="John Doe"
      secondaryInfo="john.doe@hpe.com"
      testId="user-info-no-avatar"
    />
  )
  const helpBtnIcon = (
    <Button
      plain
      margin={{ left: 'small', right: 'small' }}
      icon={<HelpOption />}
      testId="help-icon-btn"
    />
  )
  const homeBtnIcon = (
    <Button
      plain
      margin={{ left: 'small', right: 'small' }}
      icon={<Home />}
      testId="home-btn"
    />
  )
  const profileBtn = (
    <Button type="button" label="My Profile" default testId="my-profile-btn" />
  )
  const logoutBtn = (
    <Button type="button" label="Logout" default testId="logout-btn" />
  )
  const userAvatarOnlyChar = (
    <AvatarInfo
      avatarOnly
      primaryInfo="John Doe"
      secondaryInfo="john.doe@hpe.com"
      testId="user-info-no-avatar"
    />
  )
  Default.args = {
    userInfo: defaultUserInfo,
    actionBtn: {
      help: helpBtnIcon,
      home: homeBtnIcon,
      user: userAvatarOnlyChar,
      profile: profileBtn,
      logout: logoutBtn
    },
    testId: 'right-nav'
  }
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('right-nav')).toHaveTextContent('J')
  fireEvent.click(screen.getByTestId('drop-btn-right-nav'))
  expect(
    screen.getByTestId('heading-user-info-no-avatar-primary')
  ).toHaveTextContent('John Doe')
  fireEvent.click(screen.getByTestId('drop-btn-right-nav'))
  expect(screen.getByTestId('drop-btn-right-nav')).toBeInTheDocument()
})
