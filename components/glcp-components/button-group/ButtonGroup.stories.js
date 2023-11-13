import React from 'react'

import { ButtonGroup } from './ButtonGroup'

export default {
  title: 'CCS/ButtonGroup',
  component: ButtonGroup
}

const Template = (args) => <ButtonGroup {...args} />

const PrimaryButton = {
  id: 1,
  label: 'Primary',
  primary: true,
  testId: 'primary-btn'
}
const SecondaryButton = {
  id: 2,
  label: 'Secondary',
  secondary: true,
  testId: 'secondary-btn'
}

export const SingleButton = Template.bind({})
SingleButton.args = {
  buttonList: [PrimaryButton],
  testId: 'single-button'
}
SingleButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qxdE6A2qswCVbW3R6Ti7KG/CCS-v0.09-New-Navigation?node-id=2842%3A23173'
  }
}

export const TwoButtons = Template.bind({})
TwoButtons.args = {
  buttonList: [SecondaryButton, PrimaryButton],
  testId: 'two-buttons'
}
TwoButtons.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qxdE6A2qswCVbW3R6Ti7KG/CCS-v0.09-New-Navigation?node-id=3895%3A22789'
  }
}
