import React from 'react'
import { Box, Form, FormField, MaskedInput, Text, Avatar } from 'grommet'
import { HelpOption, Home, Hpe } from 'grommet-icons'

import { Navigation } from '../navigation/Navigation'
import { RightNavigation } from '../right-navigation/RightNavigation'
import { AppHeader } from '../header/AppHeader'
import { AppFooter } from '../footer/AppFooter'
import { Button } from '../button/Button'
import { AvatarInfo } from '../avatar-info/AvatarInfo'
import ATTSvg from '../../images/ATT.svg'

import { CommonLayout } from './CommonLayout'

// eslint-disable-next-line react/prop-types
const SamplePageContent = ({ align = 'center', justify = 'center' }) => {
  return (
    <Box fill align={align} justify={justify}>
      <Box width="medium">
        <Text alignSelf="center" size="large" weight="bold">
          Main content placeholder
        </Text>
        <Form
          onChange={() => {
            window.localStorage.setItem('input-change', 'value chaged')
          }}
          onReset={() => {}}
          onSubmit={() => {}}
        >
          <FormField label="Email" name="email" required>
            <MaskedInput
              name="email"
              mask={[
                { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                { fixed: '@' },
                { regexp: /^[\w]+$/, placeholder: 'my' },
                { fixed: '.' },
                { regexp: /^[\w]+$/, placeholder: 'com' }
              ]}
            />
          </FormField>
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button type="submit" label="Update" primary testId="update-btn" />
          </Box>
        </Form>
      </Box>
    </Box>
  )
}

export default {
  title: 'CCS/CommonLayout',
  component: CommonLayout
}

const Template = (args) => {
  return (
    <Box height="98vh">
      <CommonLayout {...args} />
    </Box>
  )
}

export const WithHeaderAndFooter = Template.bind({})
WithHeaderAndFooter.args = {
  header: <AppHeader testId="appheader" />,
  mainContent: <SamplePageContent />,
  footer: <AppFooter testId="app-footer" />
}
const accountInfo = (
  <AvatarInfo
    avatarSrc={ATTSvg}
    avatarSize="medium"
    primaryInfo="AT&T Corporation"
    secondaryInfo="ID: 0a7141c332ec4c4aae04aa4b8fe59deb"
    testId="account-info"
  />
)
const userInfo = (
  <AvatarInfo
    avatarOnly={false}
    avatarSize="medium"
    avatarSrc={null}
    primaryInfo="John Doe"
    secondaryInfo="john.doe@hpe.com"
    testId="user-info-no-avatar"
  />
)
const leftNav = (
  <Navigation
    accountInfo={accountInfo}
    menuData={[
      { id: 1, label: 'Home', routeTo: '#/home' },
      { id: 2, label: 'My Apps', routeTo: '#/my-apps' },
      { id: 3, label: 'App Catalog', routeTo: '#/app-catalog' },
      { id: 4, label: 'Manage', routeTo: '#/manage-account' }
    ]}
    switchAccountBtn={
      <Button
        label="Switch Account"
        onClick={() => {}}
        secondary
        testId="switch-account-btn"
        type="button"
      />
    }
    testId="nav"
  />
)
const rightNav = (
  <RightNavigation
    actionBtn={{
      help: (
        <Button
          icon={<HelpOption />}
          label=""
          margin={{ left: 'small', right: 'small' }}
          plain
          type="button"
          testId="help-btn"
        />
      ),
      home: (
        <Button
          icon={<Home />}
          label=""
          margin={{ left: 'small', right: 'small' }}
          plain
          type="button"
          testId="home-btn"
        />
      ),
      logout: (
        <Button default label="Logout" type="button" testId="logout-btn" />
      ),
      profile: (
        <Button
          default
          label="My Profile"
          type="button"
          testId="my-profile-btn"
        />
      ),
      user: <Avatar background="green">J</Avatar>
    }}
    testId="right-nav"
    userInfo={userInfo}
  />
)
const HPELogo = <Hpe color="brand" size="medium" />

const brandAfterLogin = {
  logo: HPELogo,
  logoLink: '',
  orgName: 'HPE Console',
  appName: '',
  fontWeight: 'bold'
}

const newHeader = (
  <AppHeader
    brand={brandAfterLogin}
    nav={{ left: leftNav, right: rightNav }}
    testId="with-full-nav"
  />
)
export const WithNewHeader = Template.bind({})
WithNewHeader.args = {
  header: newHeader,
  mainContent: <SamplePageContent />,
  footer: <AppFooter testId="app-footer" />
}

export const WithoutHeaderAndFooter = Template.bind({})
WithoutHeaderAndFooter.args = {
  mainContent: <SamplePageContent />
}

export const ContentCentered = Template.bind({})
ContentCentered.args = {
  header: <AppHeader testId="appheader" />,
  mainContent: <SamplePageContent />,
  footer: <AppFooter testId="app-footer" />
}

export const ContentGeneric = Template.bind({})
ContentGeneric.args = {
  header: <AppHeader testId="appheader" />,
  mainContent: <SamplePageContent align="start" justify="start" />,
  footer: <AppFooter testId="app-footer" />
}
