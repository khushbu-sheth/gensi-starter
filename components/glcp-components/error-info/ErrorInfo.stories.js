import React from 'react'
import { CircleAlert } from 'grommet-icons'

import { Typography } from '../typography/Typography'
import { ButtonGroup } from '../button-group/ButtonGroup'

import ErrorInfo from './ErrorInfo'

export default {
  title: 'CCS/ErrorInfo',
  component: ErrorInfo
}

const Content = (
  <Typography type="text" size="xlarge" margin={{ vertical: 'xlarge' }}>
    baby locavore poke hell of raw denim ramps asymmetrical neutra meditation
    chambray mlkshk before they sold out salvia skateboard.
  </Typography>
)
const Template = (args) => <ErrorInfo {...args} />

export const ErrorInfoWithIcon = Template.bind({})
ErrorInfoWithIcon.args = {
  ErrorIcon: <CircleAlert size="large" data-testid="error-icon" />,
  title: 'Error Message',
  errorInfo: 'Error Code: 451',
  Content
}

export const ErrorInfoWithoutErrorCode = Template.bind({})
ErrorInfoWithoutErrorCode.args = {
  ErrorIcon: <CircleAlert size="large" data-testid="error-icon" />,
  title: 'Error Message',
  Content
}

export const ErrorInfoWithButtons = Template.bind({})
ErrorInfoWithButtons.args = {
  ErrorIcon: <CircleAlert size="large" />,
  title: 'Error Message',
  errorInfo: 'Error Code: 400',
  Content,
  ButtonGroup: (
    <ButtonGroup
      buttonList={[
        {
          id: 1,
          label: 'Sign Out',
          primary: true,
          onClick: () => {
            window.location.replace('/')
          },
          testId: 'primary-btn'
        },
        {
          id: 2,
          label: 'Contact Support',
          secondary: true,
          testId: 'secondary-btn'
        }
      ]}
      justifyGroup="start"
      testId="error-buttons"
    />
  )
}

const ContentCentered = (
  <Typography
    type="text"
    size="xlarge"
    margin={{ vertical: 'xlarge' }}
    textAlign="center"
  >
    baby locavore poke hell of raw denim ramps asymmetrical neutra meditation
    chambray mlkshk before they sold out salvia skateboard.
  </Typography>
)

export const ErrorInfoWithButtonsCentered = Template.bind({})
ErrorInfoWithButtonsCentered.args = {
  ErrorIcon: <CircleAlert size="large" />,
  title: 'Error Message',
  errorInfo: 'Error Code: 400',
  Content: ContentCentered,
  align: 'center',
  ButtonGroup: (
    <ButtonGroup
      buttonList={[
        {
          id: 1,
          label: 'Sign Out',
          primary: true,
          onClick: () => {
            window.location.replace('/')
          },
          testId: 'primary-btn'
        },
        {
          id: 2,
          label: 'Contact Support',
          secondary: true,
          testId: 'secondary-btn'
        }
      ]}
      justifyGroup="start"
      testId="error-buttons"
    />
  )
}
