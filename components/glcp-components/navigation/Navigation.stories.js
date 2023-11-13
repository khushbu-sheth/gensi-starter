import React from 'react'

import { AvatarInfo } from '../avatar-info/AvatarInfo'
import { Button } from '../button/Button'
import ATTSvg from '../../images/ATT.svg'

import { Navigation } from './Navigation'

export default {
  title: 'CCS/Navigation',
  component: Navigation
}

const Template = (args) => <Navigation {...args} />
const avatarInfo = (
  <AvatarInfo
    avatarSrc={ATTSvg}
    avatarSize="medium"
    primaryInfo="AT&T Corporation"
    secondaryInfo="ID: 0a7141c332ec4c4aae04aa4b8fe59deb"
    testId="account-info"
  />
)
const menu = [
  { id: 1, label: 'Home', routeTo: '#/home', testId: 'home' },
  { id: 2, label: 'My Apps', routeTo: '#/my-apps', testId: 'my-apps' },
  {
    id: 3,
    label: 'App Catalog',
    routeTo: '#/app-catalog',
    testId: 'app-catalog'
  },
  {
    id: 4,
    label: 'Manage',
    routeTo: '#/manage-account',
    testId: 'manage-account'
  }
]
export const Default = Template.bind({})
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
