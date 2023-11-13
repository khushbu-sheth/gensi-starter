import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

import { AvatarInfo } from '../avatar-info/AvatarInfo'
import { Ruler } from '../ruler/Ruler'

export const GLCPHeaderProfile = ({
  userInfo,
  profileMenu,
  primaryProfileAction
}) => {
  return (
    <>
      <Box margin={{ horizontal: 'medium' }}>
        <AvatarInfo
          avatarSize="large"
          avatarChar="two"
          primaryInfo={`${userInfo.firstName} ${userInfo.lastName}`}
          secondaryInfo={userInfo.email}
          background="status-warning"
          testId="user-info-avatar"
        />
      </Box>
      <Ruler
        border={{
          color: 'background-back',
          size: '1px',
          side: 'bottom'
        }}
        margin={{ vertical: 'small' }}
      />
      {profileMenu}
      <Ruler
        border={{
          color: 'background-back',
          size: '1px',
          side: 'bottom'
        }}
        margin={{ vertical: 'small' }}
      />
      {primaryProfileAction}
    </>
  )
}
GLCPHeaderProfile.propTypes = {
  userInfo: PropTypes.object,
  profileMenu: PropTypes.element,
  primaryProfileAction: PropTypes.element
}

GLCPHeaderProfile.defaultProps = {
  userInfo: {
    firstName: '',
    lastName: '',
    email: ''
  },
  profileMenu: undefined,
  primaryProfileAction: undefined
}
