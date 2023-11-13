import React from 'react'
import { Install } from 'grommet-icons'

import { Button } from '../button/Button'

import NoDataInfo from './NoDataInfo'

export default {
  title: 'CCS/NoDataInfo',
  component: NoDataInfo
}

const Template = (args) => <NoDataInfo {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Unable to Connect',
  subtitle:
    'Begin providing access to your users by setting up a SAML connection.',
  icon: <Install size="large" />,
  action: (
    <Button
      label="Set Up Connection"
      primary
      type="button"
      onClick={() => {}}
      testId="action-btn"
    />
  ),
  testId: 'no-data-info'
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6hYD74saV26sSgoLd3Fu9q/PAL-(Platform-Asset-Library)?node-id=3057%3A60180'
  }
}

export const WithoutTitleAndAction = Template.bind({})
WithoutTitleAndAction.args = {
  subtitle: 'Please contact your organization for help with your account.',
  icon: <Install size="large" />,
  testId: 'no-data-info-without-title'
}

WithoutTitleAndAction.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6hYD74saV26sSgoLd3Fu9q/PAL-(Platform-Asset-Library)?node-id=3057%3A60188'
  }
}
