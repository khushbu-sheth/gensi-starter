import React from 'react'
import { Hpe } from 'grommet-icons'

import { Typography } from '../typography/Typography'
import { GLCPHeader } from '../glcp-header'

import { PageLayout } from './PageLayout'

export default {
  title: 'GLCP/PageLayout',
  component: PageLayout
}

const Template = (args) => <PageLayout {...args} />

export const Default = Template.bind({})

const HPELogo = <Hpe color="brand" size="large" />

const defaultBrand = {
  logo: HPELogo,
  logoLink: '/',
  orgName: 'HPE',
  appName: 'GreenLake'
}

Default.args = {
  header: <GLCPHeader brand={defaultBrand} testId="glcp-header" />,
  testId: 'glcp-page-layout'
}
const NoHeaderTemplate = (args) => (
  <PageLayout {...args}>
    <Typography type="text">Page Layout with No Header</Typography>
  </PageLayout>
)
export const NoHeader = NoHeaderTemplate.bind({})
NoHeader.args = {
  testId: 'glcp-page-layout-no-header'
}
