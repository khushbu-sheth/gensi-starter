import React from 'react'

import { Typography } from '../index'
import { Logo } from '../logo/Logo'
import arubaImage from '../../images/aruba.png'

import { CCSAccordion } from './Accordion'

export default {
  title: 'CCS/Accordion',
  component: CCSAccordion
}

const Template = (args) => {
  const { children, ...rest } = args
  return <CCSAccordion {...rest}>{children}</CCSAccordion>
}

export const BasicWithIcon = Template.bind({})

const content = [
  {
    label: 'Example 1',
    logo: arubaImage,
    company_name: 'HPE'
  },
  {
    label: 'Example 2',
    logo: arubaImage,
    company_name: 'HPE Aruba'
  }
]

BasicWithIcon.args = {
  testId: 'credential',
  data: content,
  icon: (item) => (
    <Logo
      onClick={null}
      param={null}
      size="xxsmall"
      url={item.logo}
      testId="app-logo"
    />
  ),
  label: (item) => item.label,
  customRender: (item) => {
    return (
      <Typography
        level="1"
        size="small"
        type="heading"
        testId="accordion-content"
      >
        {item.company_name}
      </Typography>
    )
  }
}
