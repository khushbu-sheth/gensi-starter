import React from 'react'
import { Box } from 'grommet'
import PropTypes from 'prop-types'

import { Typography } from '../typography/Typography'

const checkAvatarInfoComponent = (props, propName, componentName) => {
  if (props[propName]) {
    if (!(props[propName].type && props[propName].type.name === 'AvatarInfo')) {
      return new Error(
        `Invalid prop ${propName} passed to ${componentName}. Expected a AvatarInfo component as prop`
      )
    }
  }
  return null
}

export const PageHeader = ({
  avatarInfo,
  primaryHeader,
  subHeader,
  testId
}) => {
  return (
    <Box fill direction="row" gap="medium">
      {avatarInfo}
      <Box>
        <Typography level="1" type="heading" testId={`${testId}-title`}>
          {primaryHeader}
        </Typography>
        {subHeader && (
          <Typography
            size="large"
            type="paragraph"
            margin={{ top: 'xsmall', bottom: 'none' }}
            fill
            testId={`${testId}-description`}
          >
            {subHeader}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

PageHeader.propTypes = {
  /**
   * This prop should be AvatarInfo component
   * This is optional
   * Prop type is custom prop type which throws error if prop is not AvatarInfo component
   */
  avatarInfo: checkAvatarInfoComponent,
  /**
   * This is string which is mandatory
   * This string has primary header of the page
   */
  primaryHeader: PropTypes.string.isRequired,
  /**
   * This is node which is optional
   * This node has content header/page description
   * This can be a string or <Typography />,<Anchor /> component.
   */
  subHeader: PropTypes.node,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

PageHeader.defaultProps = {
  avatarInfo: null,
  subHeader: null
}
