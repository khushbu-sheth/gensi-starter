import React from 'react'
import { CircleInformation } from 'grommet-icons'

import { Typography } from './Typography'

export default {
  title: 'CCS/Typography',
  component: Typography
}

const Template = (args) => <Typography {...args} />
export const H1 = Template.bind({})
H1.args = {
  type: 'heading',
  level: '1',
  testId: 't1'
}
export const H2 = Template.bind({})
H2.args = {
  type: 'heading',
  level: '2',
  testId: 't2'
}
export const H3 = Template.bind({})
H3.args = {
  type: 'heading',
  level: '3',
  testId: 't3'
}
export const H4 = Template.bind({})
H4.args = {
  type: 'heading',
  level: '4',
  testId: 't4'
}
export const H5 = Template.bind({})
H5.args = {
  type: 'heading',
  level: '5',
  testId: 't5'
}
export const H6 = Template.bind({})
H6.args = {
  type: 'heading',
  level: '6',
  testId: 't6'
}
export const ParagraphDefault = Template.bind({})
ParagraphDefault.args = {
  type: 'paragraph',
  testId: 't7'
}
export const PasswordDefault = Template.bind({})
PasswordDefault.args = {
  type: 'password',
  testId: 't8'
}
export const TextDefault = Template.bind({})
TextDefault.args = {
  type: 'text',
  testId: 't8'
}
export const TextXSmall = Template.bind({})
TextXSmall.args = {
  type: 'text',
  size: 'xsmall',
  testId: 't9'
}
export const TextBold = Template.bind({})
TextBold.args = {
  type: 'text',
  weight: 'bold',
  testId: 't10'
}
export const TextWeightWithNumber = Template.bind({})
TextWeightWithNumber.args = {
  type: 'text',
  weight: 600,
  testId: 't11'
}
export const TextColored = Template.bind({})
TextColored.args = {
  type: 'text',
  color: 'gray',
  size: 'xsmall',
  testId: 't12'
}

export const TextWithIcon = Template.bind({})
TextWithIcon.args = {
  type: 'text',
  size: 'medium',
  reverse: false,
  icon: <CircleInformation size="medium" />,
  testId: 't13'
}

export const TextWithIconReverse = Template.bind({})
TextWithIconReverse.args = {
  type: 'text',
  size: 'medium',
  reverse: true,
  icon: <CircleInformation size="medium" />,
  testId: 't14'
}
export const HeadingTruncate = Template.bind({})
HeadingTruncate.args = {
  truncate: true,
  type: 'heading',
  level: '1',
  testId: 't15'
}
export const ParagraphTruncate = Template.bind({})
ParagraphTruncate.args = {
  type: 'paragraph',
  truncate: true,
  testId: 't16'
}
export const TextTruncate = Template.bind({})
TextTruncate.args = {
  type: 'paragraph',
  truncate: true,
  testId: 't17'
}
export const TextTruncateTip = Template.bind({})
TextTruncateTip.args = {
  type: 'paragraph',
  truncate: 'tip',
  testId: 't18'
}

H1.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/oJhw3JqMemtbwWjlLPWW5O/HPE-Typography-Styles?node-id=277%3A46'
  }
}
