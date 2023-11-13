import React from 'react'

import { Skeleton } from './Skeleton'

const design = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/RFHKQmOmyn5pvY2nqa1WIs/VAS-Marketplace?node-id=6609%3A86364'
  }
}

export default {
  title: 'CCS/Skeleton',
  component: Skeleton
}

const Template = (args) => <Skeleton {...args} />

export const Paragraph = Template.bind({})

Paragraph.args = {
  count: 6
}

Paragraph.parameters = design

export const SingleRounded = Template.bind({})
SingleRounded.args = {
  count: 1,
  round: true
}
SingleRounded.parameters = design

export const SingleSquare = Template.bind({})
SingleSquare.args = {
  count: 1
}
SingleSquare.parameters = design

export const Rectangle = Template.bind({})
Rectangle.args = {
  variant: 'rectangle',
  height: 'small',
  width: 'xxsmall'
}
Rectangle.parameters = design

export const RectangleRound = Template.bind({})
RectangleRound.args = {
  variant: 'rectangle',
  height: 'small',
  width: 'medium',
  round: true
}
RectangleRound.parameters = design

export const CircleSmall = Template.bind({})
CircleSmall.args = {
  variant: 'circle',
  diameter: 'small'
}
CircleSmall.parameters = design

export const CircleLarge = Template.bind({})
CircleLarge.args = {
  variant: 'circle',
  diameter: 'large'
}
CircleLarge.parameters = design
