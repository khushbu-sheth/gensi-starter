import React from 'react'
import { Box, Text } from 'grommet'
import {
  User,
  Aruba,
  Key,
  Note,
  Magic,
  Desktop,
  StatusGood,
  LinkNext,
  ShareRounded
} from 'grommet-icons'

import { Button, Typography, Anchor } from '../index'
import hpeDiscoverImage from '../../images/hpe_discover.png'
import hpeGLforNetworkingImage from '../../images/hpe_gl_for_networking.png'

import { Card } from './Card'

export default {
  title: 'CCS/Card',
  component: Card
}

const Template = (args) => <Card {...args} />

export const Basic = Template.bind({})
Basic.args = {
  cardWidth: 'small',
  title: 'Admins',
  description: 'Find list of administrators in the system',
  testId: 'cardBody'
}

export const Icon = Template.bind({})
Icon.args = {
  cardWidth: 'small',
  icon: <Key size="medium" />,
  title: 'User Details',
  description:
    'Get more information on your account, including name, profile image, etc',
  testId: 'cardBody'
}

export const IconClick = Template.bind({})
IconClick.args = {
  cardWidth: 'small',
  icon: <Note size="medium" />,
  title: 'Clickable card',
  description:
    'Define a function for onClick so this card is clickable with a resulting action',
  testId: 'cardBody',
  onClick: () => {
    localStorage.setItem('card-clicked', 'icon card clicked')
  }
}

export const BackgroundButton = Template.bind({})
BackgroundButton.args = {
  background: 'yellow',
  icon: <Aruba size="medium" color="darkorange" />,
  title: 'Aruba Application',
  description: 'Configure settings for the Aruba app in this location',
  action: (
    <Button
      size="small"
      label="Configure"
      color="darkorange"
      secondary
      testId="action-btn"
    />
  ),
  testId: 'cardBody'
}

export const NoBackgroundLargerTitleFancyIcon = Template.bind({})
NoBackgroundLargerTitleFancyIcon.args = {
  icon: (
    <Box round="xsmall" pad="xsmall" background="#00739d">
      <User size="medium" color="white" />
    </Box>
  ),
  title: 'Create a New Account',
  titleSize: 'xlarge',
  description: 'You can always create a new organization account',
  action: (
    <Button label="Create Account" primary size="small" testId="action-btn" />
  ),
  testId: 'cardBody'
}
export const BackgroundForegroundColor = Template.bind({})
BackgroundForegroundColor.args = {
  background: '#00739D',
  foregroundColor: 'white',
  icon: <Magic color="brand" size="medium" />,
  title: 'Take a Tour',
  description:
    'See everything the HPE console has to offer in this short tour.',
  action: (
    <Button
      color="brand"
      label=""
      secondary
      size="small"
      testId="start-tour-btn"
    >
      <Typography
        type="text"
        color="white"
        weight="bold"
        testId="star-tour-txt"
      >
        Start Tour
      </Typography>
    </Button>
  ),
  testId: 'start-tour-card'
}

export const StatCardsWithIcon = Template.bind({})
StatCardsWithIcon.args = {
  cardWidth: 'medium',
  icon: <Desktop color="green" />,
  title: (
    <Typography size="xxlarge" testId="tile-title" type="text" weight="bold">
      90
    </Typography>
  ),
  description: (
    <Typography size="medium" testId="tile-subtitle" type="text">
      Total Devices
    </Typography>
  ),
  align: 'center',
  textAlign: 'center',
  testId: 'stat-card-with-icon',
  onClick: () => {
    localStorage.setItem('card-clicked', 'stat card with icon clicked')
  }
}
StatCardsWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/rgRsolnt0ZPeskUwrMgzyb/Device-Management?node-id=4283%3A60666'
  }
}

export const TabActionCardsWithIcon = Template.bind({})
TabActionCardsWithIcon.args = {
  cardWidth: 'medium',
  icon: (
    <Box pad="small" background="#EFEFEF" round align="end">
      <StatusGood color="gray" />
    </Box>
  ),
  title: (
    <Typography size="medium" testId="tile-subtitle" type="text">
      Assigned & Licensed
    </Typography>
  ),
  description: (
    <Typography size="xxlarge" testId="tile-title" type="text" weight="bold">
      101
    </Typography>
  ),
  direction: 'row-reverse',
  justify: 'between',
  align: 'center',
  testId: 'tab-action-card-with-icon',
  onClick: () => {
    localStorage.setItem('card-clicked', 'tab action card clicked')
  }
}

export const FeaturedApplicationCard = Template.bind({})
FeaturedApplicationCard.args = {
  background: 'validation-warning',
  cardWidth: 'medium',
  title: 'Aruba Central',
  description:
    'Manage campus, branch, SD-WAN & data center networks with AI, automation & security.',
  action: (
    <Box fill="horizontal" gap="small">
      <Button
        color="orange"
        label="Launch"
        primary
        type="button"
        testId="launch-btn"
      />
      <Text textAlign="center">
        <Anchor
          label="View Networking Products"
          size="xsmall"
          href="#"
          testId="anchor-view-nw-prod"
        />
      </Text>
    </Box>
  ),
  align: 'stretch',
  gap: 'small',
  textAlign: 'center',
  titleSize: 'large',
  testId: 'featured-application-card'
}

export const DiscoverCard = Template.bind({})
DiscoverCard.args = {
  background: `url(${hpeDiscoverImage})`,
  cardWidth: 'medium',
  foregroundColor: '#FFFFFF',
  pretitle: 'Las Vegas, June 28–30',
  title: 'HPE Discover 2022',
  subtitle: (
    <Typography type="text" weight="bold">
      The edge-to-cloud conference
    </Typography>
  ),
  description:
    'The best of edge, cloud, and everything in between–all in one place.',
  action: (
    <Button
      color="purple!"
      label="Register Now"
      primary
      type="button"
      icon={<LinkNext size="small" />}
      reverse
      testId="register-now-btn"
    />
  ),
  titleSize: 'xxlarge',
  testId: 'discover-card'
}

export const ArubaNetworkingCard = Template.bind({})
ArubaNetworkingCard.args = {
  background: `url(${hpeGLforNetworkingImage})`,
  cardWidth: 'medium',
  pretitle: 'HPE GreenLake for',
  title: 'Aruba networking',
  description:
    'In-depth intelligence and insights on your network-as-a-service consumption.',
  action: (
    <Button
      label="Learn More"
      secondary
      type="button"
      testId="btn-learn-more"
    />
  ),
  border: { color: 'border-weak' },
  elevation: 'none',
  icon: <Box width="small" height="small" />,
  titleSize: 'xxlarge',
  testId: 'aruba-networking-card'
}

export const LatestNewsCard = Template.bind({})
LatestNewsCard.args = {
  background: 'background-contrast',
  cardWidth: 'medium',
  title: 'Get the latest news about HPE GreenLake',
  description:
    'Get weekly news on releases, updates, and more as we make HPE GreenLake the go to edge-to-cloud platform.',
  action: (
    <Button
      label="Subscribe Now"
      secondary
      type="button"
      testId="btn-subs-now"
    />
  ),
  elevation: 'none',
  titleSize: 'xxlarge',
  testId: 'latest-news-card'
}

export const ArubaSupportCard = Template.bind({})
ArubaSupportCard.args = {
  background: 'background-contrast',
  align: 'start',
  direction: 'row',
  cardWidth: '100%',
  title: 'Aruba Support Portal',
  description:
    'Save time on your Aruba Support needs: RMA, license management, downloads and more.',
  action: (
    <Button
      label="Launch"
      icon={<ShareRounded />}
      type="button"
      reverse
      testId="btn-launch-rev"
    />
  ),
  elevation: 'none',
  testId: 'aruba-support-card'
}
