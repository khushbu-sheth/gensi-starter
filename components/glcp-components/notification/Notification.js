import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grommet, Notification as GrommetNotification } from 'grommet'
import { deepMerge } from 'grommet/utils'
import { hpe } from 'grommet-theme-hpe'

const bgColorToStatus = (backgroundColor) => {
  switch (backgroundColor) {
    case 'status-critical':
      return 'critical'
    case 'status-warning':
      return 'warning'
    case 'status-ok':
      return 'normal'
    default:
      return 'unknown'
  }
}

export const Notification = ({
  type,
  position,
  text,
  onClose,
  status,
  backgroundColor, // TODO Remove once all API handling updated with status prop
  testId,
  autoClose,
  ...rest
}) => {
  const statusTxt = status || bgColorToStatus(backgroundColor)
  if (type === 'inline') {
    return (
      <Box data-testid={testId} id="my-notification">
        <Grommet
          theme={deepMerge(hpe, {
            notification: {
              container: {
                pad: { vertical: 'small' }
              }
            }
          })}
        >
          <GrommetNotification
            message={text}
            status={statusTxt}
            onClose={onClose}
            {...rest}
          />
        </Grommet>
      </Box>
    )
  }
  return (
    <Box data-testid={testId} id="my-notification-toast">
      <GrommetNotification
        message={text}
        onClose={onClose}
        status={statusTxt}
        toast={{ position, autoClose }}
      />
    </Box>
  )
}

Notification.propTypes = {
  /**
   * default type shows a a pop up
   */
  type: PropTypes.oneOf(['inline', 'default']),

  /**
   * An indicator that relays the current status of a Notification.
   */
  status: PropTypes.oneOf(['unknown', 'normal', 'warning', 'critical']),

  /**
   * Position of the notification; top is default - not used for inline type
   */
  position: PropTypes.oneOf([
    'bottom',
    'bottom-left',
    'bottom-right',
    'center',
    'end',
    'hidden',
    'left',
    'right',
    'start',
    'top',
    'top-left',
    'top-right'
  ]),

  // TODO Remove once API error handling completed with new styled notifications
  /**
   * icon displayed to the left of the text
   */
  // icon: PropTypes.element,

  /**
   * notification text
   */

  text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,

  /**
   * function to close the dialog; close button always displays for  default notifications, for inline notifications if you want close button then only pass onClose
   */
  onClose: PropTypes.func,

  // TODO Remove once API error handling completed with new styled notifications
  /**
   * color of backgound
   */
  backgroundColor: PropTypes.oneOf([
    'status-critical',
    'status-warning',
    'status-ok',
    'status-unknown'
  ]),

  /**
   * decides prop to close automatically after 8sec
   */
  autoClose: PropTypes.bool,

  /**
   * data-testid, will be used for testing
   */
  testId: PropTypes.string.isRequired
}

Notification.defaultProps = {
  type: 'default',
  position: 'top',
  status: undefined, // TODO default to normal after removing backgroundColor
  backgroundColor: 'status-ok',
  onClose: undefined,
  autoClose: false
}
