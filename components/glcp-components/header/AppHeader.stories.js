import React from 'react'
import { Avatar } from 'grommet'
import { Hpe, Home } from 'grommet-icons'

import { Button } from '../button/Button'
import { Navigation } from '../navigation/Navigation'
import { DropMenu } from '../drop-menu/DropMenu'
import { RightNavigation } from '../right-navigation/RightNavigation'
import { AvatarInfo } from '../avatar-info/AvatarInfo'
import ATTSvg from '../../images/ATT.svg'

import { AppHeader } from './AppHeader'

export default {
  title: 'CCS/Header',
  component: AppHeader
}

const Template = (args) => <AppHeader {...args} />
const HPELogo = <Hpe color="brand" size="medium" />

const accountInfo = (
  <AvatarInfo
    avatarSrc={ATTSvg}
    avatarSize="medium"
    primaryInfo="AT&T Corporation"
    secondaryInfo="ID: 0a7141c332ec4c4aae04aa4b8fe59deb"
    testId="account-info"
  />
)
const menu = [
  {
    id: 1,
    label: 'Home',
    routeTo: '#/home'
  },
  {
    id: 2,
    label: 'My Apps',
    routeTo: '#/my-apps'
  },
  {
    id: 3,
    label: 'App Catalog',
    routeTo: '#/app-catalog'
  },
  {
    id: 4,
    label: 'Manage',
    routeTo: '#/manage-account'
  }
]
const helpMenuItems = [
  { label: 'Help', href: '#' },
  { label: 'Documentation', onClick: () => {} }
]
const helpBtnIcon = <DropMenu items={helpMenuItems} testId="drop-menu" />

const homeBtnIcon = (
  <Button
    plain
    margin={{ left: 'small', right: 'small' }}
    icon={<Home />}
    testId="home-btn"
  />
)
const LeftNav = (
  <Navigation
    accountInfo={accountInfo}
    menuData={menu}
    switchAccountBtn={
      <Button
        label="Switch Account"
        onClick={() => {}}
        secondary
        type="button"
        testId="switch-account-btn"
      />
    }
    testId="nav"
  />
)

const RightNav = (
  <RightNavigation
    actionBtn={{
      help: helpBtnIcon,
      home: homeBtnIcon,
      logout: (
        <Button default label="Logout" type="button" testId="logout-btn" />
      ),
      profile: (
        <Button
          default
          label="My Profile"
          type="button"
          testId="my-profile-btn"
        />
      ),
      user: <Avatar background="green">J</Avatar>
    }}
    testId="right-nav"
    userInfo={
      <AvatarInfo
        avatarSize="medium"
        avatarSrc={null}
        primaryInfo="John Doe"
        secondaryInfo="john.doe@hpe.com"
        testId="user-info-no-avatar"
      />
    }
  />
)

const brandBeforeLogin = {
  logo: HPELogo,
  logoLink: '',
  orgName: 'Hewlett Packard Enterprise',
  appName: '',
  fontWeight: ''
}
const brandAfterLogin = {
  logo: HPELogo,
  logoLink: '',
  orgName: 'HPE GreenLake',
  appName: '',
  fontWeight: 'bold'
}
const brandWithoutLogo = {
  logo: null,
  logoLink: null,
  orgName: 'Menu',
  appName: '',
  fontWeight: 'bold'
}

export const Default = Template.bind({})
Default.args = {
  brand: brandBeforeLogin,
  testId: 'with-no-nav'
}

export const WithMainNavigation = Template.bind({})
WithMainNavigation.args = {
  brand: brandAfterLogin,
  nav: {
    left: LeftNav
  },
  testId: 'with-main-nav'
}

export const WithRightNavigation = Template.bind({})
WithRightNavigation.args = {
  brand: brandAfterLogin,
  nav: {
    right: RightNav
  },
  testId: 'with-right-nav'
}

export const WithFullNavigation = Template.bind({})
WithFullNavigation.args = {
  brand: brandAfterLogin,
  nav: {
    left: LeftNav,
    right: RightNav
  },
  testId: 'with-full-nav'
}

export const WithHideLogo = Template.bind({})
WithHideLogo.args = {
  brand: brandWithoutLogo,
  nav: {
    left: LeftNav,
    right: RightNav
  },
  testId: 'with-full-nav'
}
