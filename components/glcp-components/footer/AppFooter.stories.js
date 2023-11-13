import React from 'react'
import { Hpe } from 'grommet-icons'

import { AppFooter } from './AppFooter'

export default {
  title: 'CCS/Footer',
  component: AppFooter
}

const Template = (args) => <AppFooter {...args} />

export const Default = Template.bind({})
Default.args = {
  copyright: '© 2021 Hewlett Packard Enterprise Development LP',
  testId: 'app-footer'
}

export const FooterWithLogo = Template.bind({})
FooterWithLogo.args = {
  logo: <Hpe color="brand" size="large" />,
  copyright: '2021 Hewlett Packard Enterprise Development LP',
  testId: 'app-footer-logo'
}
