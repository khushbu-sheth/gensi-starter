import React from 'react'

import arubaImage from '../../images/aruba.png'
import ATTSvg from '../../images/ATT.svg'
import clearpassImage from '../../images/clearpass.png'

import complianceImage from './compliance.png'
import { Logo } from './Logo'

export default {
  title: 'CCS/Logo',
  component: Logo
}

const Template = (args) => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'small',
  url: arubaImage,
  testId: 'logo-default',
  onClick: null
}
export const ClearPass = Template.bind({})
ClearPass.args = {
  size: 'small',
  testId: 'logo-cp',
  url: clearpassImage
}
export const ClearPassMedium = Template.bind({})
ClearPassMedium.args = {
  size: 'medium',
  testId: 'logo-cp-medium',
  url: complianceImage
}
export const NoShade = Template.bind({})
NoShade.args = {
  size: 'medium',
  noShade: true,
  testId: 'logo-cp-medium',
  url: ATTSvg
}
