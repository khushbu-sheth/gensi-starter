import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/react'
import { Avatar, Box } from 'grommet'
import { Hpe, AppsRounded, HelpOption } from 'grommet-icons'

import { MenuList } from '../../menu-list/MenuList'
import { Button } from '../../button/Button'
import { Typography } from '../../typography/Typography'
import { Dropdown } from '../../dropdown/Dropdown'
import { Ruler } from '../../ruler/Ruler'
import { GLCPHeaderProfile } from '../GLCPHeaderProfile'
import { GLCPHeaderAppsMenu } from '../GLCPHeaderAppsMenu'
import { GLCPHelpMenu } from '../GLCPHelpMenu'
import {
  BrandMainNav,
  BrandOnly,
  BrandMainNavDropMenu
} from '../GLCPHeader.stories'
import { ThemeMode } from '../../ThemeMode'

const HPELogo = <Hpe color="brand" size="large" />

const defaultBrand = {
  logo: HPELogo,
  logoLink: '/',
  orgName: 'HPE',
  appName: 'GreenLake'
}
const MainNavigation = (
  <MenuList
    defaultActiveId={1}
    highlightOnSelect
    menuData={[
      {
        id: 1,
        label: 'Dashboard',
        testId: 'dashboard-nav-menu'
      },
      {
        id: 2,
        label: 'Applications',
        testId: 'application-nav-menu'
      },
      {
        id: 3,
        label: 'Devices',
        testId: 'devices-nav-menu'
      },
      {
        id: 4,
        label: 'Manage',
        testId: 'manage-nav-menu'
      }
    ]}
    menuItemStyles={{
      padding: {
        horizontal: 'small',
        vertical: 'xsmall'
      },
      weight: 'bold'
    }}
    navStyles={{
      direction: 'row'
    }}
    onClickMenuItem={() => {}}
    testId="glcp_main_menu"
  />
)

const UserProfileData = {
  userInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  },
  profileMenu: (
    <MenuList
      menuData={[
        {
          id: 1,
          label: 'HPE Account Details',
          testId: 'hpe-acc-det-nav-menu'
        },
        {
          id: 2,
          label: 'HPE GreenLake Preferences',
          testId: 'hpe-gl-pref-nav-menu'
        },
        {
          id: 3,
          label: 'Visit hpe.com',
          testId: 'visit-hpe-com-nav-menu'
        },
        {
          id: 4,
          label: 'Sign out of HPE',
          testId: 'sign-out-hpe-nav-menu'
        }
      ]}
      testId="profile-menu"
    />
  ),
  primaryProfileAction: (
    <Button
      primary
      label="My HPE Account"
      testId="header-profile-primary-btn"
    />
  )
}

const HPEGLAdministration = (
  <MenuList
    menuData={[
      {
        id: 1,
        label: 'Manage Account',
        testId: 'header-apps-manage-account'
      },
      {
        id: 2,
        label: 'Manage Devices',
        testId: 'header-apps-manage-devices'
      }
    ]}
    testId="hpe-gl-administration-menu"
  />
)
const AppsMenuData = [
  {
    title: 'HPE GreenLake Administration',
    menu: HPEGLAdministration
  }
]

const helpNavContent = [
  {
    id: 1,
    label: 'Help',
    content: (
      <Box key={1}>
        <Box margin={{ top: 'small' }}>
          <Typography size="xsmall" type="text" background="text-light">
            Help
          </Typography>
        </Box>
        <Box margin={{ top: 'small', bottom: 'xsmall' }}>
          <Dropdown
            options={[]}
            multiple={false}
            testId="help-drop-down"
            placeholder="Please Select"
            onChangeDropdown={() => {}}
          />
        </Box>
        <Box margin={{ top: 'small' }}>
          <Typography size="medium" type="text" background="text-light">
            Select from the help and support choices: HPE GreenLake, HPE
            GreenLake Central, Data Services, Compute Ops Management, or Aruba
            Central.
          </Typography>
        </Box>
      </Box>
    )
  },
  {
    id: 2,
    label: 'Feedback',
    content: (
      <Box key={2}>
        <Box margin={{ top: 'small' }}>
          <Typography
            size="xsmall"
            type="text"
            background="text-light"
            color="gray"
          >
            Give Feedback
          </Typography>
        </Box>
        <Box margin={{ top: 'small' }}>
          <Typography size="xsmall" type="text" background="text-light">
            Which product are you providing feedback for?
          </Typography>
        </Box>
        <Box
          margin={{ top: 'small', bottom: 'xlarge' }}
          pad={{ bottom: 'xlarge' }}
        >
          <Dropdown
            options={[]}
            multiple={false}
            testId="feedback-drop-down"
            placeholder="Please Select"
          />
        </Box>
        <Ruler margin={{ top: 'xlarge', bottom: 'small' }} />
        <Button
          primary
          label="Continue"
          testId="feedback-continue-btn"
          disabled
        />
      </Box>
    )
  },
  {
    id: 3,
    label: 'Legal',
    content: (
      <Box key={3}>
        <Box
          background="green"
          height="small"
          margin={{ top: 'small' }}
          round="xsmall"
        />
        <Box margin={{ top: 'small' }}>
          <Typography
            size="medium"
            weight="bold"
            type="text"
            background="text-light"
          >
            Learn more about HPE GreenLake
          </Typography>
        </Box>
        <Box margin={{ top: 'small', bottom: 'small' }}>
          <Typography size="small" type="text" background="text-light">
            The cloud that comes to you. Wherever your apps and data live,
            you’re there, that is Edge to Cloud.
          </Typography>
        </Box>

        <Button secondary label="Subscribe Now" testId="subscribe-now-btn" />
        <Ruler />

        <Typography size="xsmall" type="text" background="text-light">
          Resources
        </Typography>
        <MenuList
          menuData={[
            {
              id: 1,
              label: 'Privacy Policy',
              testId: 'privacy-policy-legal-drop'
            },
            {
              id: 2,
              label: 'Cookies',
              testId: 'cookies-legal-drop'
            },
            {
              id: 3,
              label: 'Terms of Use',
              testId: 'terms-legal-drop'
            },
            {
              id: 4,
              label: 'Do Not Sell My Personal Information',
              testId: 'privacy-legal-drop'
            }
          ]}
          multiple={false}
          testId="legal-resources-options"
        />
      </Box>
    )
  }
]

const DropMenuData = [
  {
    id: 1,
    icon: <HelpOption />,
    content: <GLCPHelpMenu helpNavContent={helpNavContent} testId="help-menu" />
  },
  {
    id: 2,
    icon: <AppsRounded />,
    content: <GLCPHeaderAppsMenu appsData={AppsMenuData} testId="apps-menu-1" />
  },
  {
    id: 3,
    icon: <Avatar background="background-contrast">SA</Avatar>,
    content: <GLCPHeaderProfile {...UserProfileData} />
  }
]

it('renders the header organization text as HPE and the app name as GreenLake', () => {
  BrandOnly.args = {
    brand: defaultBrand,
    testId: 'glcp-header-brand-only'
  }
  render(
    <ThemeMode>
      <BrandOnly {...BrandOnly.args} />
    </ThemeMode>
  )
  expect(
    screen.getByTestId('glcp-header-brand-only-org_name')
  ).toHaveTextContent('HPE')
  expect(
    screen.getByTestId('glcp-header-brand-only-app_name')
  ).toHaveTextContent('GreenLake')
})

it('render the main navigation', () => {
  BrandMainNav.args = {
    brand: defaultBrand,
    navigation: MainNavigation,
    testId: 'glcp-header-main-nav'
  }
  render(
    <ThemeMode>
      <BrandMainNav {...BrandMainNav.args} />
    </ThemeMode>
  )
  // console.log(prettyDOM(screen.getByTestId('glcp-header-main-nav')))
  // Only when burger button available
  // if (screen.getByTestId('glcp-header-main-nav-burger_btn')) {
  //   fireEvent.click(screen.getByTestId('glcp-header-main-nav-burger_btn'))
  // }
  expect(screen.getByTestId('dashboard-nav-menu')).toHaveTextContent(
    'Dashboard'
  )
})
it('render the profile menu and apps menu', () => {
  BrandMainNavDropMenu.args = {
    brand: defaultBrand,
    navigation: MainNavigation,
    dropMenu: DropMenuData,
    testId: 'with-drop-menu'
  }
  render(
    <ThemeMode>
      <BrandMainNavDropMenu {...BrandMainNavDropMenu.args} />
    </ThemeMode>
  )
  // console.log(prettyDOM(screen.getByTestId('with-drop-menu')))
  expect(
    screen.getByTestId('drop-btn-with-drop-menu-menu-item-3').firstChild
      .firstChild
  ).toHaveTextContent('SA')
  const appsSelectorBtn = screen.getByTestId(
    'drop-btn-with-drop-menu-menu-item-2'
  )
  expect(appsSelectorBtn).toBeInTheDocument()
  fireEvent.click(screen.getByTestId('drop-btn-with-drop-menu-menu-item-3'))
})
it('render the drop menu for help icon', () => {
  BrandMainNavDropMenu.args = {
    brand: defaultBrand,
    navigation: MainNavigation,
    dropMenu: DropMenuData,
    testId: 'with-drop-menu'
  }
  render(
    <ThemeMode>
      <BrandMainNavDropMenu {...BrandMainNavDropMenu.args} />
    </ThemeMode>
  )
  expect(
    screen.getByTestId('drop-btn-with-drop-menu-menu-item-1')
  ).toBeInTheDocument()
  fireEvent.click(screen.getByTestId('drop-btn-with-drop-menu-menu-item-1'))
  expect(screen.getByTestId('text-desc-Help-1')).toHaveTextContent('Help')
  expect(screen.getByTestId('text-desc-Feedback-2')).toHaveTextContent(
    'Feedback'
  )
  expect(screen.getByTestId('text-desc-Legal-3')).toHaveTextContent('Legal')
  fireEvent.click(screen.getByTestId('text-desc-Legal-3'))
  expect(screen.getByTestId('subscribe-now-btn')).toBeInTheDocument()
})
