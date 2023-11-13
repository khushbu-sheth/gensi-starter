import React from 'react'
import { User } from 'grommet-icons'

import ATTSvg from '../../images/ATT.svg'

import { AvatarInfo } from './AvatarInfo'

export default {
  title: 'CCS/AvatarInfo',
  component: AvatarInfo
}

const Template = (args) => <AvatarInfo {...args} />

export const UserInfoWithIcon = Template.bind({})
UserInfoWithIcon.args = {
  avatarSrc: <User />,
  primaryInfo: 'John Doe',
  secondaryInfo: 'john.doe@hpe.com',
  testId: 'user-info'
}
export const UserInfoWithNoAvatar = Template.bind({})
UserInfoWithNoAvatar.args = {
  avatarSrc: null,
  primaryInfo: 'John Doe',
  secondaryInfo: 'john.doe@hpe.com',
  testId: 'user-info-no-avatar'
}
export const UserInfoWithPhoto = Template.bind({})
UserInfoWithPhoto.args = {
  avatarSrc: 'https://i.pravatar.cc/70',
  avatarSize: 'large',
  primaryInfo: 'John Doe',
  secondaryInfo: 'john.doe@hpe.com',
  testId: 'user-info-photo'
}
export const CustomerInfo = Template.bind({})
CustomerInfo.args = {
  avatarSrc: ATTSvg,
  avatarSize: 'large',
  primaryInfo: 'AT&T Corporation',
  secondaryInfo: 'ID: 0a7141c332ec4c4aae04aa4b8fe59deb',
  testId: 'cust-info'
}
export const CustomerInfoWithMediumAvatar = Template.bind({})
CustomerInfoWithMediumAvatar.args = {
  avatarSrc: ATTSvg,
  avatarSize: 'medium',
  primaryInfo: 'AT&T Corporation',
  secondaryInfo: 'ID: 0a7141c332ec4c4aae04aa4b8fe59deb',
  testId: 'cust-info-med-avatar'
}
export const AvatarOnly = Template.bind({})
AvatarOnly.args = {
  avatarOnly: true,
  primaryInfo: 'John',
  secondaryInfo: 'john.doe@hpe.com',
  testId: 'user-info-avatar-only'
}
