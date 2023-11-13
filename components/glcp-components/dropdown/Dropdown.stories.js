import React from 'react'
import { Box } from 'grommet'

import { Logo } from '../logo/Logo'

import { Dropdown } from './Dropdown'
import UAEImage from './AE.png'
import USImage from './US.png'
import UKImage from './GB.png'

export default {
  title: 'CCS/Form/Dropdown',
  component: Dropdown
}

const Template = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  options: ['first', 'second', 'third'],
  testId: 'dropdown-default'
}
export const WithoutBorder = Template.bind({})
WithoutBorder.args = {
  options: ['first', 'second', 'third'],
  noBorder: true,
  testId: 'dropdown-no-border'
}
export const Multiple = Template.bind({})
Multiple.args = {
  options: ['first', 'second', 'third'],
  noBorder: true,
  multiple: true,
  testId: 'dropdown-multiple'
}
export const SetDefaultVal = Template.bind({})
SetDefaultVal.args = {
  options: ['first', 'second', 'third'],
  noBorder: true,
  multiple: true,
  defaultVal: 'second',
  testId: 'dropdown-default-val'
}
export const WithArrayOfObjects = Template.bind({})
const regions = [
  {
    label: 'All Region',
    value: 1
  },
  {
    label: 'US-West',
    value: 2
  },
  {
    label: 'US-East',
    value: 3
  },
  {
    label: 'EU',
    value: 4
  }
]
WithArrayOfObjects.args = {
  options: regions,
  noBorder: true,
  multiple: false,
  placeholder: 'Select Regions',
  onChangeDropdown: () => {},
  testId: 'dropdown-array-of-objects'
}
export const WithArrayOfObjectsDefaultVal = Template.bind({})
WithArrayOfObjectsDefaultVal.args = {
  options: regions,
  noBorder: true,
  multiple: false,
  defaultVal: 3,
  testId: 'dropdown-data-default'
}
export const CustomLabelRenderWithIcon = Template.bind({})
const apps = [
  {
    label: 'United States',
    url: USImage,
    value: 1
  },
  {
    label: 'United Kingdom',
    url: UKImage,
    value: 2
  },
  {
    label: 'United Arab Emirates',
    url: UAEImage,
    value: 3
  }
]
const renderOption = ({ label, url }) => (
  <Box
    direction="row"
    align="center"
    pad="small"
    gap="small"
    flex={false}
    elevation="none"
    background="none"
  >
    <Logo url={url} size="xxsmall" />
    {label}
  </Box>
)
CustomLabelRenderWithIcon.args = {
  options: apps,
  multiple: false,
  customRender: (option) => renderOption(option),
  testId: 'dropdown-custom-renderer'
}
