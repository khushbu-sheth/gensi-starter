import React, { useState } from 'react'
import { Box, Avatar } from 'grommet'
import { Hpe, HelpOption, AppsRounded, Notification } from 'grommet-icons'

import { MenuList } from '../menu-list/MenuList'
import { Button } from '../button/Button'
import { Typography } from '../typography/Typography'
import { Ruler } from '../ruler/Ruler'
import { Dropdown } from '../dropdown/Dropdown'

import { GLCPHeaderProfile } from './GLCPHeaderProfile'
import { GLCPHeader } from './GLCPHeader'
import { GLCPHeaderAppsMenu } from './GLCPHeaderAppsMenu'
import { GLCPHelpMenu } from './GLCPHelpMenu'

export default {
  title: 'GLCP/Header',
  component: [GLCPHeader, GLCPHelpMenu]
}

const Template = (args) => <GLCPHeader {...args} />
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
    navStyles={{
      padding: 'none',
      gap: 'small',
      direction: 'row'
    }}
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
    menuItemWeight="bold"
    onClickMenuItem={() => {}}
    testId="glcp_main_menu"
  />
)

const CloudConsoleMenu = (
  <MenuList
    navStyles={{
      padding: 'none',
      gap: 'small'
    }}
    menuData={[
      {
        id: 1,
        label: 'HPE GreenLake Central',
        testId: 'header-apps-hpe-green-lake-central'
      },
      {
        id: 2,
        label: 'Data Services',
        testId: 'header-apps-data-services'
      },
      {
        id: 3,
        label: 'Compute Ops Management',
        testId: 'header-apps-compute-ops-management'
      },
      {
        id: 4,
        label: 'Aruba Central',
        testId: 'header-apps-aruba-central'
      }
    ]}
    testId="cloud-console-menu"
  />
)

const HPEGLAdministration = (
  <MenuList
    navStyles={{
      padding: 'none',
      gap: 'small'
    }}
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

const HPEResources = (
  <MenuList
    navStyles={{
      padding: 'none',
      gap: 'small'
    }}
    menuData={[
      {
        id: 1,
        label: 'HPE Support Center',
        testId: 'header-apps-hpe-support-center'
      },
      {
        id: 2,
        label: 'HPE Developer Community',
        testId: 'header-apps-hpe-developer-community'
      },
      {
        id: 3,
        label: 'HPE Communities',
        testId: 'header-apps-hpe-communities'
      },
      {
        id: 4,
        label: 'HPE Financial Services',
        testId: 'header-apps-hpe-financial-services'
      }
    ]}
    testId="hpe-resources-menu"
  />
)

const AppsMenuData = [
  {
    title: 'Cloud Consoles',
    menu: CloudConsoleMenu
  },
  {
    title: 'HPE GreenLake Administration',
    menu: HPEGLAdministration
  },
  {
    title: 'HPE Resources',
    menu: HPEResources
  }
]

const appList = [
  'HPE GreenLake',
  'HPE GreenLake Central',
  'Data Services',
  'Compute Ops Management',
  'Aruba Central'
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

const UserProfileData = {
  userInfo: {
    firstName: 'John Doe',
    lastName: '',
    email: 'john.doe@example.com'
  },
  profileMenu: (
    <MenuList
      navStyles={{
        padding: 'none',
        gap: 'small'
      }}
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

const DropMenuData = [
  {
    id: 1,
    icon: <HelpOption />,
    content: <GLCPHelpMenu helpNavContent={helpNavContent} testId="help-menu" />
  },
  {
    id: 2,
    icon: <AppsRounded color="text" />,
    content: <GLCPHeaderAppsMenu appsData={AppsMenuData} testId="apps-menu" />
  },
  {
    id: 3,
    icon: <Avatar background="background-contrast">SA</Avatar>,
    content: <GLCPHeaderProfile {...UserProfileData} />
  }
]
const BellNotification = (
  <Button icon={<Notification color="text" />} testId="bell-notification" />
)
export const BrandOnly = Template.bind({})
BrandOnly.args = {
  brand: defaultBrand,
  testId: 'glcp-header-brand-only'
}

export const BrandMainNav = Template.bind({})
BrandMainNav.args = {
  brand: defaultBrand,
  navigation: MainNavigation,
  testId: 'glcp-header-brand-with-main-nav'
}
export const BrandMainNavDropMenu = Template.bind({})
BrandMainNavDropMenu.args = {
  brand: defaultBrand,
  navigation: MainNavigation,
  dropMenu: DropMenuData,
  testId: 'glcp-header-with-drop-menu'
}

export const BrandMainNavDropMenuNotification = Template.bind({})
BrandMainNavDropMenuNotification.args = {
  brand: defaultBrand,
  navigation: MainNavigation,
  notification: BellNotification,
  dropMenu: DropMenuData,
  testId: 'glcp-header-with-drop-menu'
}
export const BrandMainNavWithHelpOnDrop = () => {
  const [selectedApp, setSelectedApp] = useState(null)
  const handleChangeDrop = (app) => {
    setSelectedApp(app)
  }

  const helpDrop = {
    'HPE GreenLake': (
      <>
        <MenuList
          menuData={[
            {
              id: 1,
              label: 'Getting Started',
              testId: 'getting-started-help-dropdown'
            },
            {
              id: 2,
              label: 'Documentation',
              testId: 'documentation-help-dropdown'
            }
          ]}
          testId="glcp-help-dropdown"
        />
      </>
    ),
    'HPE GreenLake Central': (
      <MenuList
        menuData={[
          {
            id: 1,
            label: 'Getting Started',
            testId: 'getting-started-help-dropdown'
          },
          {
            id: 2,
            label: 'User Guide',
            testId: 'user-guide-help-dropdown'
          },
          {
            id: 3,
            label: 'About',
            testId: 'about-help-dropdown'
          },
          {
            id: 4,
            label: 'Service Status',
            testId: 'service-status-help-dropdown'
          }
        ]}
        testId="glcp-help-dropdown"
      />
    ),
    'Data Services': (
      <MenuList
        menuData={[
          {
            id: 1,
            label: 'API Documentation',
            testId: 'api-documentation-help-dropdown'
          },
          {
            id: 2,
            label: 'User Guide',
            testId: 'user-guide-help-dropdown'
          },
          {
            id: 3,
            label: 'How To Create an Organization',
            testId: 'create-organization-help-dropdown'
          },
          {
            id: 4,
            label: 'How To Add an Application',
            testId: 'add-application-help-dropdown'
          },
          {
            id: 5,
            label: 'How To Create an Assignment and Scopes',
            testId: 'create-assignment-scopes-help-dropdown'
          }
        ]}
        testId="glcp-help-dropdown"
      />
    ),
    'Compute Ops Management': (
      <MenuList
        menuData={[
          {
            id: 1,
            label: 'User Guide',
            testId: 'user-guide-help-dropdown'
          },
          {
            id: 2,
            label: 'Compute Ops Management Community',
            testId: 'compute-ops-management-service-help-dropdown'
          }
        ]}
        testId="glcp-help-dropdown"
      />
    ),
    'Aruba Central': (
      <MenuList
        menuData={[
          {
            id: 1,
            label: 'User Guide',
            testId: 'user-guide-help-dropdown'
          },
          {
            id: 2,
            label: 'Aruba Airhead Community',
            testId: 'aruba-airhead-community-help-dropdown'
          }
        ]}
        testId="glcp-help-dropdown"
      />
    )
  }

  const selectDrop = {
    'HPE GreenLake': (
      <>
        <MenuList
          menuData={[
            {
              id: 1,
              label: 'Account, User, and Onboarding Issues',
              testId: 'account-user-onboarding-select-dropdown'
            }
          ]}
          testId="glcp-support-dropdown"
        />
      </>
    ),
    'HPE GreenLake Central': (
      <MenuList
        menuData={[
          {
            id: 1,
            label: 'Create New Case',
            testId: 'create-new-case-select-dropdown'
          },
          {
            id: 2,
            label: 'View Cases',
            testId: 'view-cases-select-dropdown'
          }
        ]}
        testId="glcp-support-dropdown"
      />
    ),
    'Data Services': (
      <MenuList
        menuData={[
          {
            id: 1,
            label: 'HPE Alletra 6000 | HPE Nimble Storage',
            testId: 'nimble-storage-select-dropdown'
          },
          {
            id: 2,
            label: 'HPE Alletra 9000 | HPE Primera Storage',
            testId: 'primera-storage-select-dropdown'
          },
          {
            id: 3,
            label: 'HPE Backup and Recovery',
            testId: 'backup-recovery-select-dropdown'
          }
        ]}
        testId="glcp-support-dropdown"
      />
    ),
    'Compute Ops Management': (
      <MenuList
        menuData={[
          {
            id: 1,
            label: 'Account, User, and Onboarding Issues',
            testId: 'account-user-onboarding-select-dropdown'
          },
          {
            id: 2,
            label: 'Create Compute Case',
            testId: 'create-compute-case-select-dropdown'
          },
          {
            id: 3,
            label: 'View Compute Cases',
            testId: 'view-compute-cases-select-dropdown'
          },
          {
            id: 4,
            label: 'Create Server Hardware Case',
            testId: 'create-server-hardware-case-select-dropdown'
          },
          {
            id: 5,
            label: 'View Server Hardware Case',
            testId: 'view-server-hardware-case-select-dropdown'
          }
        ]}
        testId="glcp-support-dropdown"
      />
    ),
    'Aruba Central': (
      <MenuList
        menuData={[
          {
            id: 1,
            label: 'Create New Case',
            testId: 'create-new-case-select-dropdown'
          },
          {
            id: 2,
            label: 'View Cases',
            testId: 'view-cases-select-dropdown'
          }
        ]}
        testId="glcp-support-dropdown"
      />
    )
  }

  const HelpNavContentNew = [
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
              options={appList}
              defaultVal={selectedApp}
              multiple={false}
              testId="help-drop-down"
              placeholder="Please Select"
              onChangeDropdown={(option) => handleChangeDrop(option)}
            />
          </Box>
          {selectedApp ? (
            <>
              <>{helpDrop[selectedApp]}</>
              <Ruler margin={{ top: 'xsmall', bottom: 'xsmall' }} />
              <Box margin={{ top: 'small' }}>
                <Typography size="xsmall" type="text" background="text-light">
                  Support
                </Typography>
              </Box>
              <>{selectDrop[selectedApp]}</>
            </>
          ) : (
            <Box margin={{ top: 'small' }}>
              <Typography size="medium" type="text" background="text-light">
                Select from the help and support choices: HPE GreenLake, HPE
                GreenLake Central, Data Services, Compute Ops Management, or
                Aruba Central.
              </Typography>
            </Box>
          )}
        </Box>
      )
    },
    {
      id: 2,
      label: 'Feedback',
      content: (
        <Box key={2}>
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
                options={appList}
                defaultVal={selectedApp}
                multiple={false}
                testId="feedback-drop-down"
                placeholder="Please Select"
                onChangeDropdown={(option) => handleChangeDrop(option)}
              />
            </Box>
            <Ruler margin={{ top: 'xlarge', bottom: 'small' }} />
            <Button
              primary
              label="Continue"
              testId="feedback-continue-btn"
              disabled={!selectedApp}
            />
          </Box>
          <Box />
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

  const SampleDropMenuData = [
    {
      id: 1,
      icon: <HelpOption />,
      content: (
        <GLCPHelpMenu helpNavContent={HelpNavContentNew} testId="help-menu" />
      )
    },
    {
      id: 2,
      icon: <AppsRounded />,
      content: <GLCPHeaderAppsMenu appsData={AppsMenuData} testId="apps-menu" />
    }
  ]
  return (
    <GLCPHeader
      brand={defaultBrand}
      navigation={MainNavigation}
      dropMenu={SampleDropMenuData}
      testId="help-menu-test"
    />
  )
}
