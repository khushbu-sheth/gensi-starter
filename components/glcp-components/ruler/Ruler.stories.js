import React from 'react'

import { Ruler } from './Ruler'

export default {
  title: 'CCS/Ruler',
  component: Ruler
}

const Template = (args) => <Ruler {...args} />

export const Default = Template.bind({})
Default.args = {
  testId: 'default-ruler'
}

export const VerticalRuler = Template.bind({})
VerticalRuler.args = {
  orientation: 'vertical',
  testId: 'vertical-ruler'
}
export const VerticalRulerHeight = Template.bind({})
VerticalRulerHeight.args = {
  orientation: 'vertical',
  height: 'medium',
  testId: 'vertical-ruler-height'
}
