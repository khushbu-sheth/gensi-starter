import React from 'react'

import { MenuList } from './MenuList'

export default {
  title: 'CCS/MenuList',
  component: MenuList
}

const Template = (args) => <MenuList {...args} />

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

const rowMenu = [
  {
    id: 1,
    label: 'Profile Details',
    testId: 'profile-details-link'
  },
  {
    id: 2,
    label: 'Security',
    testId: 'profile-security-link'
  },
  {
    id: 3,
    label: 'Password',
    testId: 'profile-password-link'
  },
  {
    id: 4,
    label: 'Preferences',
    testId: 'profile-preferences-link'
  }
]

export const SimpleMenuList = Template.bind({})
SimpleMenuList.args = {
  defaultActiveId: 1,
  menuData: menu,
  testId: 'menulist'
}

export const MenuListWithHighlight = Template.bind({})
MenuListWithHighlight.args = {
  defaultActiveId: 1,
  menuData: menu,
  testId: 'menulist',
  highlightOnSelect: true,
  menuItemPadding: { vertical: 'xsmall', left: 'small' }
}
export const RowMenuListWithHighlight = Template.bind({})
RowMenuListWithHighlight.args = {
  defaultActiveId: 1,
  menuData: rowMenu,
  testId: 'menulistInRow',
  highlightOnSelect: true,
  menuItemPadding: { vertical: 'xsmall', left: 'small' },
  navStyles: { direction: 'row' }
}

export const MenuListWithCustomRenderer = Template.bind({})
MenuListWithCustomRenderer.args = {
  defaultActiveId: 1,
  menuData: menu,
  testId: 'menulistCustomRenderer',
  highlightOnSelect: true,
  menuItemPadding: { vertical: 'xsmall', left: 'small' },
  customRenderer: (menuItem) => {
    return <>{menuItem}</>
  }
}
