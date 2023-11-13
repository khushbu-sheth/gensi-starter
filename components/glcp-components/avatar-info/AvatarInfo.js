import React from 'react'
import PropTypes, { oneOfType } from 'prop-types'
import { Box, Avatar } from 'grommet'

import { Typography } from '../typography/Typography'

export const AvatarInfo = ({
  avatarSrc,
  avatarSize,
  avatarChar,
  avatarOnly,
  background,
  primaryInfo,
  secondaryInfo,
  justify,
  testId
}) => {
  const firstChar = primaryInfo.charAt(0)
  const secondChar =
    primaryInfo.split(' ')[1] && primaryInfo.split(' ')[1].charAt(0)
  const avatarFallbackChars =
    avatarChar === 'one' ? firstChar : firstChar + secondChar
  if (avatarChar === 'one') {
    background = 'blue!'
  }
  return (
    <Box
      width={{ max: 'medium' }}
      direction="row"
      gap="small"
      align="center"
      data-testid={testId}
      justify={justify}
    >
      <Avatar
        background={background}
        size={avatarSize}
        src={avatarSrc}
        testId={`${testId}-avatar`}
      >
        {avatarSrc || (
          <Typography
            color="white"
            size={avatarSize}
            type="text"
            weight="normal"
            testId={`${testId}-avatarchar`}
          >
            {avatarFallbackChars}
          </Typography>
        )}
      </Avatar>
      {!avatarOnly && (
        <Box direction="column">
          <Typography
            size="small"
            type="heading"
            level="4"
            testId={`${testId}-primary`}
          >
            {primaryInfo}
          </Typography>
          <Typography
            color="gray"
            size="xsmall"
            type="text"
            weight="normal"
            testId={`${testId}-secondary`}
          >
            {secondaryInfo}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

AvatarInfo.propTypes = {
  /**
   * This can be either url string or other component such as <User /> from grommet-icon.
   */
  avatarSrc: oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Defined size of the avatar. It can be one of the below tshirt sizes available for avatar
   */
  avatarSize: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    '2xl',
    '3xl',
    '4xl',
    '5xl'
  ]),
  /**
   * Defined char limit of the avatar. This will be a fallback option when actual image is not available.
   */
  avatarChar: PropTypes.oneOf(['one', 'two']),
  /**
   * This boolean property used to show only avatar. It will skip other informations.
   */
  avatarOnly: PropTypes.bool,
  /**
   * This property defines the avatar background color
   * This is optional
   */
  background: PropTypes.string,
  /**
   * Primary avatar info such as loggedin user's name. This will be bolder than the secondary info.
   * This is mandatory.
   */
  primaryInfo: PropTypes.string.isRequired,
  /**
   * This will be the secondary info such as the loggedin user's email.
   * This is mandatory.
   */
  secondaryInfo: PropTypes.string.isRequired,
  /**
   * This prop will be used for aligning the avatar info
   */
  justify: PropTypes.string,
  /**
   * It will be used for avatar info reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

AvatarInfo.defaultProps = {
  avatarSrc: null,
  avatarSize: 'medium',
  avatarChar: 'one',
  avatarOnly: false,
  background: 'green',
  justify: 'stretch'
}
