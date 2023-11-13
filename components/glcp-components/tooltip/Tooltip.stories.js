import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Button } from 'grommet'
import { CircleInformation } from 'grommet-icons'
import reactElementToJSXString from 'react-element-to-jsx-string'

import { Typography } from '../typography/Typography'

import { Tooltip as CCSTooltip } from './Tooltip'

export default {
  title: 'CCS/Tooltip',
  component: CCSTooltip,
  decorators: [withDesign]
}

const Template = (args) => <CCSTooltip {...args} />

export const Default = Template.bind({})

Default.args = {
  info: (
    <Typography type="text" size="small">
      This is a tooltip
    </Typography>
  ),
  children: <Button icon={<CircleInformation size="small" />} />,
  dropProps: { align: { left: 'right' } },
  testId: 'default-tooltip'
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Ts53TAipMolmsv9DxWG3p0/HPE-Layer-Component?node-id=100%3A70'
  },
  docs: {
    source: {
      code: reactElementToJSXString(<CCSTooltip {...Default.args} />)
    }
  }
}

export const TooltipString = Template.bind({})
TooltipString.args = {
  info: (
    <Typography type="text" size="small">
      This is a tooltip
    </Typography>
  ),
  children: 'text string',
  dropProps: { align: { left: 'right' } },
  testId: 'default-tooltip'
}

TooltipString.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Ts53TAipMolmsv9DxWG3p0/HPE-Layer-Component?node-id=100%3A70'
  },
  docs: {
    source: {
      code: reactElementToJSXString(<CCSTooltip {...TooltipString.args} />)
    }
  }
}
