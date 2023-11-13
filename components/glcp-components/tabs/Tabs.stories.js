import React from 'react'
import { Box } from 'grommet'
import {
  CircleInformation,
  Beacon,
  Wifi,
  License,
  Archive
} from 'grommet-icons'

import { Tabs } from './Tabs'

export default {
  title: 'CCS/Tabs',
  component: Tabs
}

const Template = (args) => <Tabs {...args} />

const tabsList = [
  {
    id: 1,
    label: 'All Devices',
    content: <Box pad="medium">All Devices tab content</Box>,
    testId: 'all-devices-tab'
  },
  {
    id: 2,
    label: 'Ready to Go',
    content: <Box pad="medium">Ready to Go tab content</Box>,
    testId: 'ready-to-go-tab'
  },
  {
    id: 3,
    label: 'Unassigned',
    content: <Box pad="medium">Unassigned tab content</Box>,
    testId: 'unassigned-tab'
  },
  {
    id: 4,
    label: 'Unlicensed',
    content: <Box pad="medium">Unlicensed tab content</Box>,
    testId: 'unlicensed-tab'
  },
  {
    id: 5,
    label: 'Archived',
    content: <Box pad="medium">Archived tab content</Box>,
    testId: 'archived-tab'
  }
]

export const SimpleTabs = Template.bind({})
SimpleTabs.args = {
  tabsList,
  alignControls: 'start',
  justify: 'start',
  testId: 'simpleTabs'
}

const tabsListWithIcon = [
  {
    id: 1,
    icon: <Wifi size="medium" />,
    label: 'All Devices',
    content: <Box pad="medium">All Devices tab content</Box>,
    testId: 'all-devices-tab'
  },
  {
    id: 2,
    icon: <Beacon size="medium" />,
    label: 'Ready to Go',
    content: <Box pad="medium">Ready to Go tab content</Box>,
    testId: 'ready-to-go-tab'
  },
  {
    id: 3,
    icon: <CircleInformation size="medium" />,
    label: 'Unassigned',
    content: <Box pad="medium">Unassigned tab content</Box>,
    testId: 'unassigned-tab'
  },
  {
    id: 4,
    icon: <License size="medium" />,
    label: 'Unlicensed',
    content: <Box pad="medium">Unlicensed tab content</Box>,
    testId: 'unlicensed-tab'
  },
  {
    id: 5,
    icon: <Archive size="medium" />,
    label: 'Archived',
    content: <Box pad="medium">Archived tab content</Box>,
    testId: 'archived-tab'
  }
]
export const TabsWithIcon = Template.bind({})
TabsWithIcon.args = {
  tabsList: tabsListWithIcon,
  alignControls: 'start',
  justify: 'start',
  testId: 'tabsWithIcon'
}
