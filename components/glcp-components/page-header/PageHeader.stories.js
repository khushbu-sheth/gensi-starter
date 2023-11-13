import React from 'react'

import { Anchor } from '../anchor/Anchor'
import { AvatarInfo } from '../avatar-info/AvatarInfo'

import { PageHeader } from './PageHeader'

export default {
  title: 'CCS/PageHeader',
  component: PageHeader
}

const subHeaderWithAnchor = (
  <>
    Access your provisioned applications. Find more apps in the
    <Anchor
      testId="anchor-to-catalog"
      label="Catalog"
      href="#"
      margin={{ left: 'xsmall' }}
      onClick={() => {
        window.localStorage.setItem('page-header', 'sub header clicked')
      }}
    />
    .
  </>
)

const Template = (args) => <PageHeader {...args} />

export const SimplePageHeader = Template.bind({})
SimplePageHeader.args = {
  primaryHeader: 'My Profile',
  testId: 'page-header-1'
}
SimplePageHeader.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qxdE6A2qswCVbW3R6Ti7KG/CCS-v0.09-New-Navigation?node-id=2763%3A26051'
  }
}

export const PageHeaderWithInfo = Template.bind({})
PageHeaderWithInfo.args = {
  subHeader: subHeaderWithAnchor,
  primaryHeader: 'My Profile',
  testId: 'page-header-2'
}
PageHeaderWithInfo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qxdE6A2qswCVbW3R6Ti7KG/CCS-v0.09-New-Navigation?node-id=2763%3A26051'
  }
}

export const PageHeaderWithAvatar = Template.bind({})
PageHeaderWithAvatar.args = {
  avatarInfo: (
    <AvatarInfo
      avatarOnly
      avatarSize="large"
      primaryInfo="Camylle Barton"
      secondaryInfo=""
      testId="page-header-avatar"
    />
  ),

  subHeader: 'Access your provisioned applications.',
  primaryHeader: 'My Profile',
  testId: 'page-header-3'
}
PageHeaderWithAvatar.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qxdE6A2qswCVbW3R6Ti7KG/CCS-v0.09-New-Navigation?node-id=3895%3A22789'
  }
}
