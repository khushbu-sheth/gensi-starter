import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import { Hpe } from 'grommet-icons'

import { Typography } from '../typography/Typography'
import { Button } from '../button/Button'

export const GLCPHeaderBrand = ({
  logo,
  logoLink,
  orgName,
  appName,
  onClickBrand,
  testId
}) => {
  return (
    <Button
      testId={`${testId}-brand`}
      onClick={() =>
        onClickBrand ? onClickBrand() : window.location.reload(logoLink)
      }
    >
      <Box
        direction="row"
        align="center"
        gap="medium"
        pad={{ vertical: 'small' }}
        responsive={false}
      >
        {logo}
        <Box direction="row" gap="xsmall" wrap>
          {typeof orgName === 'string' ? (
            <Typography size="medium" type="text" testId={`${testId}-org_name`}>
              {orgName}
            </Typography>
          ) : (
            orgName
          )}
          {typeof appName === 'string' ? (
            <Typography size="medium" type="text" testId={`${testId}-app_name`}>
              {appName}
            </Typography>
          ) : (
            appName
          )}
        </Box>
      </Box>
    </Button>
  )
}

GLCPHeaderBrand.propTypes = {
  logo: PropTypes.element,
  logoLink: PropTypes.string,
  orgName: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  appName: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClickBrand: PropTypes.func,
  testId: PropTypes.string.isRequired
}

const HPELogo = <Hpe color="brand" size="large" />

GLCPHeaderBrand.defaultProps = {
  logo: HPELogo,
  logoLink: '/',
  orgName: 'HPE',
  appName: 'GreenLake',
  onClickBrand: undefined
}
