import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import { FileInput as CCSFileInput } from './FileInput'

export default {
  title: 'CCS/FileInput',
  component: CCSFileInput,
  decorators: [withDesign]
}

const Template = (args) => <CCSFileInput {...args} />

export const Simple = Template.bind({})
Simple.args = {
  label: 'Single file input',
  testId: 'file-input-id'
}

export const Multiple = Template.bind({})
Multiple.args = {
  label: 'Multiple file input',
  testId: 'file-input-multiple',
  multiple: true
}

export const SingleCustomLabel = Template.bind({})
SingleCustomLabel.args = {
  label: 'Custom file input',
  testId: 'file-input-custom',
  actionLabels: {
    dropLabel: 'Please drag and drop file here',
    replaceLabel: 'Replace the file',
    selectLabel: 'Select the file'
  }
}

export const MultCustomLabel = Template.bind({})
MultCustomLabel.args = {
  label: 'Custom files input',
  testId: 'file-input-custom-multi',
  actionLabels: {
    dropLabel: 'drag and drop files',
    replaceLabel: 'Select More Files',
    selectLabel: 'Select Files'
  },
  multiple: true
}

Simple.parameters = {
  design: {
    type: 'figma',
    // add figma url here
    url: 'https://www.figma.com/file/2ViBxidUBVk3tcz1tCwt05/MSP-Managed-Service-Provider?node-id=1920%3A125077'
  }
}
