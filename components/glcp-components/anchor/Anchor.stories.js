import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import { Anchor as CCSAnchor } from './Anchor'

export default {
  title: 'CCS/Anchor',
  component: CCSAnchor,
  decorators: [withDesign]
}

const Template = (args) => <CCSAnchor {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Default Anchor',
  href: 'https://design-system.hpe.design/components/anchor',
  testId: 'default-anchor'
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/I7PsiUmvr7OEJ6311rBUfg/HPE-Anchor-Component?node-id=309%3A0'
  }
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled Anchor',
  href: '#',
  disabled: true,
  testId: 'disabled-anchor'
}

export const Bold = Template.bind({})
Bold.args = {
  label: 'Bold Anchor',
  href: '#',
  weight: 'bold',
  testId: 'bold-anchor'
}
