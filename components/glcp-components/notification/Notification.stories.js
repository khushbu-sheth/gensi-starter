import React, { useState } from 'react'
import { Box, Button, Grommet } from 'grommet'
import reactElementToJSXString from 'react-element-to-jsx-string'

import { Notification } from './Notification'

export default {
  title: 'CCS/Notification',
  component: Notification
}

const Template = (args) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(undefined)

  const notificationArgs = { ...args, onClose: handleClose }

  return (
    <Grommet>
      <Box align="start" gap="medium">
        <Button
          label="Show me the notification"
          onClick={handleOpen}
          primary
          data-testid="main-btn"
        />
      </Box>
      {open && <Notification {...notificationArgs} />}
    </Grommet>
  )
}

export const TopStatusGood = Template.bind({})
TopStatusGood.args = {
  position: 'top',
  text: 'This is a notifcation',
  backgroundColor: 'status-ok',
  testId: 'status-good-notification'
}

TopStatusGood.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...TopStatusGood.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const TopStatusCritical = Template.bind({})
TopStatusCritical.args = {
  position: 'top',
  text: 'This is a notifcation',
  backgroundColor: 'status-critical',
  testId: 'status-critical-notification'
}

TopStatusCritical.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...TopStatusCritical.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const BottomStatusCritical = Template.bind({})
BottomStatusCritical.args = {
  position: 'bottom',
  text: 'This is a critical notifcation',
  backgroundColor: 'status-critical',
  testId: 'status-critical-notification'
}

BottomStatusCritical.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...BottomStatusCritical.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const TopStatusWarning = Template.bind({})
TopStatusWarning.args = {
  text: 'This is a warning notifcation',
  backgroundColor: 'status-warning',
  testId: 'status-warning-notification'
}

TopStatusWarning.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...TopStatusWarning.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const TopStatusUnknown = Template.bind({})
TopStatusUnknown.args = {
  text: 'This is a unknown type notifcation',
  backgroundColor: 'status-unknown',
  testId: 'status-unknown-notification'
}

TopStatusUnknown.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...TopStatusUnknown.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

const InlineTemplate = (args) => {
  return <Notification {...args} />
}

export const InlineStatusGood = InlineTemplate.bind({})
InlineStatusGood.args = {
  type: 'inline',
  backgroundColor: 'status-ok',
  text: 'This is an inline notifcation',
  testId: 'ok-inline-notification',
  onClose: undefined
}

InlineStatusGood.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...InlineStatusGood.args} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const InlineStatusCritical = InlineTemplate.bind({})
InlineStatusCritical.args = {
  type: 'inline',
  text: 'This is a critical notifcation',
  backgroundColor: 'status-critical',
  testId: 'critical-inline-notification',
  onClose: undefined
}

InlineStatusCritical.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...InlineStatusCritical.args} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const InlineStatusWarning = InlineTemplate.bind({})
InlineStatusWarning.args = {
  type: 'inline',
  text: 'This is a warning notifcation',
  backgroundColor: 'status-warning',
  testId: 'warning-inline-notification',
  onClose: undefined
}

InlineStatusWarning.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...InlineStatusWarning.args} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const InlineStatusWarningWithCloseButton = InlineTemplate.bind({})
InlineStatusWarningWithCloseButton.args = {
  type: 'inline',
  text: 'This is a warning notifcation with close button',
  backgroundColor: 'status-warning',
  testId: 'warning-inline-notification-with-close',
  onClose: () => {}
}

InlineStatusWarningWithCloseButton.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...InlineStatusWarningWithCloseButton.args} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const InlineStatusUnknown = InlineTemplate.bind({})
InlineStatusUnknown.args = {
  type: 'inline',
  text: 'This is a unknown type notifcation',
  backgroundColor: 'status-unknown',
  testId: 'unknown-inline-notification',
  onClose: undefined
}

InlineStatusUnknown.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...InlineStatusUnknown.args} />,
        { showDefaultProps: false }
      )
    }
  }
}
export const InlineStatusUnknownWithCloseButton = InlineTemplate.bind({})
InlineStatusUnknownWithCloseButton.args = {
  type: 'inline',
  text: 'This is a unknown type notifcation with close button',
  backgroundColor: 'status-unknown',
  testId: 'unknown-inline-notification-with-close',
  onClose: () => {}
}

InlineStatusUnknownWithCloseButton.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...InlineStatusUnknownWithCloseButton.args} />,
        { showDefaultProps: false }
      )
    }
  }
}

const BannerTemplate = (args) => {
  return <Notification {...args} />
}

export const CriticalBannerNotification = BannerTemplate.bind({})
CriticalBannerNotification.args = {
  type: 'inline',
  text: 'This is a critical type banner notifcation',
  backgroundColor: 'status-critical',
  testId: 'critical-banner-notification',
  onClose: undefined
}

CriticalBannerNotification.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...CriticalBannerNotification.args} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const WarningBannerNotification = BannerTemplate.bind({})
WarningBannerNotification.args = {
  type: 'inline',
  text: 'This is a warning type banner notifcation',
  backgroundColor: 'status-warning',
  testId: 'warning-banner-notification',
  onClose: undefined
}

WarningBannerNotification.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...WarningBannerNotification.args} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const StatusGoodBannerNotification = BannerTemplate.bind({})
StatusGoodBannerNotification.args = {
  type: 'inline',
  text: 'This is a status good type banner notifcation',
  backgroundColor: 'status-ok',
  testId: 'status-ok-banner-notification',
  onClose: undefined
}
StatusGoodBannerNotification.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <Notification {...StatusGoodBannerNotification.args} />,
        { showDefaultProps: false }
      )
    }
  }
}
