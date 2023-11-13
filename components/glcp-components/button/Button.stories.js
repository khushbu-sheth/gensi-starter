import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Filter, Previous } from 'grommet-icons'

import { Button as CCSButton } from './Button'

export default {
  title: 'CCS/Button',
  component: CCSButton,
  decorators: [withDesign]
}

const Template = (args) => <CCSButton {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Default',
  default: true,
  testId: 'default-btn'
}
export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
  primary: true,
  testId: 'primary-btn'
}
export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
  secondary: true,
  testId: 'secondary-btn'
}
export const ButtonWithIcon = Template.bind({})
ButtonWithIcon.args = {
  label: 'Back',
  default: true,
  icon: <Previous />,
  hoverIndicator: 'none',
  testId: 'secondary-btn'
}
export const ToolbarKindButton = Template.bind({})
ToolbarKindButton.args = {
  icon: <Filter />,
  kind: 'toolbar',
  testId: 'toolbar-btn'
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Oi5UEEQ33VCAyOKQcZ8Nr8/HPE-Button-Component?node-id=681%3A5164'
  }
}
