import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import { Loader } from './Loader'

export default {
  title: 'CCS/Loader',
  component: Loader,
  decorators: [withDesign]
}

const Template = (args) => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {
  testId: 'loader-spinner'
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qxdE6A2qswCVbW3R6Ti7KG/CCS-v0.09-New-Navigation?node-id=4204%3A25375'
  }
}

export const SpinnerWithText = Template.bind({})
SpinnerWithText.args = {
  label: 'Loading...',
  testId: 'spinner-with-text'
}

export const HPESpinner = Template.bind({})
HPESpinner.args = {
  type: 'hpe',
  size: 'auto',
  testId: 'hpe-spinner'
}

export const HorizontalSpinnerWithText = Template.bind({})
HorizontalSpinnerWithText.args = {
  label: 'Loading...',
  orientation: 'horizontal',
  testId: 'horizontal-spinner-with-text'
}

HorizontalSpinnerWithText.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/haSQhFGJH6yrkhMda4CP7p/Master-Prototype-Latest-Designs?node-id=29098%3A80873'
  }
}
