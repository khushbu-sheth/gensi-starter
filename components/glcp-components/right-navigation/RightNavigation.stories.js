import React from 'react'
import { Home, HelpOption } from 'grommet-icons'

import { AvatarInfo } from '../avatar-info/AvatarInfo'
import { Button } from '../button/Button'
import { DropMenu } from '../drop-menu/DropMenu'

import { RightNavigation } from './RightNavigation'

export default {
  title: 'CCS/RightNavigation',
  component: RightNavigation
}
const Template = (args) => <RightNavigation {...args} />

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
    testId="home-icon-btn"
  />
)
const profileBtn = (
  <Button type="button" label="My Profile" default testId="my-profile-btn" />
)
const preferenceBtn = (
  <Button type="button" label="Preferences" default testId="preferences-btn" />
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
const menuItems = [
  { label: 'Help', href: '#' },
  { label: 'Documentation', href: '#' }
]
export const Default = Template.bind({})
Default.args = {
  userInfo: defaultUserInfo,
  actionBtn: {
    help: <DropMenu items={menuItems} testId="drop-menu" />,
    home: homeBtnIcon,
    user: userAvatarOnlyChar,
    profile: profileBtn,
    logout: logoutBtn
  },
  testId: 'right-nav'
}
const userInfoWithAvatar = (
  <AvatarInfo
    avatarSize="large"
    avatarSrc="https://i.pravatar.cc/70"
    primaryInfo="John Doe"
    secondaryInfo="john.doe@hpe.com"
    testId="user-info-no-avatar"
  />
)
const userInfoWithAvatarOnly = (
  <AvatarInfo
    avatarOnly
    avatarSize="medium"
    avatarSrc="https://i.pravatar.cc/70"
    primaryInfo="John Doe"
    secondaryInfo="john.doe@hpe.com"
    testId="user-info-no-avatar"
  />
)
export const WithUserAvatar = Template.bind({})
WithUserAvatar.args = {
  userInfo: userInfoWithAvatar,
  actionBtn: {
    help: helpBtnIcon,
    home: homeBtnIcon,
    user: userInfoWithAvatarOnly,
    profile: profileBtn,
    preference: preferenceBtn,
    logout: logoutBtn
  },
  testId: 'right-nav-avatar'
}
