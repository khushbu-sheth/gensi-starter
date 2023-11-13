import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Nav, DropButton } from 'grommet'

const DropContent = ({ userInfo, actionBtn, testId }) => (
  <Box elevation="medium" data-testid={testId}>
    <Box
      pad="medium"
      width="medium"
      direction="row"
      gap="small"
      align="center"
      border={{ side: 'bottom', color: '#CCCCCC' }}
    >
      {userInfo}
    </Box>
    <Box direction="column" justify="between" align="center">
      <Box pad="small" fill>
        {actionBtn.profile}
      </Box>
      {actionBtn.preference && (
        <Box pad="small" fill border={{ side: 'top', color: '#CCCCCC' }}>
          {actionBtn.preference}
        </Box>
      )}
      <Box pad="small" fill border={{ side: 'top', color: '#CCCCCC' }}>
        {actionBtn.logout}
      </Box>
    </Box>
  </Box>
)

DropContent.propTypes = {
  userInfo: PropTypes.any,
  actionBtn: PropTypes.object.isRequired,
  testId: PropTypes.string.isRequired
}
DropContent.defaultProps = {
  userInfo: null
}
export const RightNavigation = ({ userInfo, actionBtn, testId }) => {
  const [open, setOpen] = useState()
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <Nav
      direction="row"
      align="center"
      gap="xsmall"
      pad={{ right: 'small' }}
      data-testid={testId}
    >
      {actionBtn.help}
      {actionBtn.home}
      <DropButton
        icon={actionBtn.user}
        plain
        margin={{ left: 'small', right: 'small' }}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        dropContent={
          <DropContent
            userInfo={userInfo}
            actionBtn={actionBtn}
            testId={`drop-content-${testId}`}
          />
        }
        dropProps={{
          align: { top: 'bottom', right: 'right' },
          margin: { top: 'xsmall' }
        }}
        data-testid={`drop-btn-${testId}`}
      />
    </Nav>
  )
}
RightNavigation.propTypes = {
  /**
   * This prop will have the user information.
   * AvatarInfo component will be used as a input to this prop.
   */
  userInfo: PropTypes.element,
  /**
   * This will have properties which handles the click actions on the right nav.
   * It contains help, home, user, profile and logout buttons.
   */
  actionBtn: PropTypes.shape({
    help: PropTypes.element,
    home: PropTypes.element,
    user: PropTypes.element,
    profile: PropTypes.element,
    preference: PropTypes.element,
    logout: PropTypes.element
  }),
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

RightNavigation.defaultProps = {
  userInfo: null,
  actionBtn: null
}
