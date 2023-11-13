import React, { useState } from 'react'

import { ToggleButton } from './ToggleButton'

export default {
  title: 'CCS/ToggleButton',
  component: ToggleButton
}

const Template = (args) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [checked, setChecked] = useState(args.checked)
  const { onChange } = args || {}
  return (
    <>
      <ToggleButton
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked)
          onChange()
        }}
      />
    </>
  )
}

export const Toggle = Template.bind({})
Toggle.args = {
  label: 'Choice of device',
  onChange: () => {
    localStorage.setItem('toogle-clicked', 'toogle clicked')
  },
  checked: true,
  testId: 'toggle-btn'
}

Toggle.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KGfphc2fWsEF8GpRC9vKbS/CCS-v0.1?node-id=17467%3A56881'
  }
}
