import React from 'react'
import { Hpe } from 'grommet-icons'
import { Header as GrommetHeader, Anchor, Box } from 'grommet'
import PropTypes from 'prop-types'

import { Typography } from '../typography/Typography'

export const AppHeader = ({ brand, nav, testId, ...rest }) => {
  return (
    <GrommetHeader {...rest} data-testid={testId}>
      <Box
        direction="row"
        align="center"
        justify="between"
        pad={
          !brand.logo
            ? { left: 'small', top: 'xsmall', bottom: 'xsmall', right: 'small' }
            : 'none'
        }
        border={brand.border ? { side: 'bottom', color: '#CCCCCC' } : false}
        fill
      >
        <Box direction="row" align="center" gap="xsmall">
          {nav && nav.left}
          {brand.logo && (
            <Anchor
              icon={brand.logo}
              href={brand.logoLink}
              margin="8px 0 0 0"
              testId={`${testId}-logo`}
            />
          )}
          <Typography
            size="small"
            type="text"
            weight={brand.fontWeight}
            testId={`${testId}-orgname`}
          >
            {brand.orgName}
          </Typography>
          {brand.appName && (
            <Typography
              size="small"
              type="text"
              weight={brand.fontWeight}
              testId={`${testId}-appname`}
            >
              {brand.appName}
            </Typography>
          )}
        </Box>
        {nav && nav.right}
      </Box>
    </GrommetHeader>
  )
}

AppHeader.propTypes = {
  /**
   * This brand prop contains all the props related to branding
   * such as logo, logo url link, orgnization name, application name, font size and the border
   */
  brand: PropTypes.shape({
    logo: PropTypes.element,
    logoLink: PropTypes.string,
    orgName: PropTypes.string,
    appName: PropTypes.string,
    fontWeight: PropTypes.string,
    border: PropTypes.bool
  }),
  /**
   * It will be used for hiding logo in secondary header.
   */
  hideLogo: PropTypes.bool,
  /**
   * This prop is for navigation comes along with header.
   * There is left nav which is the main navigation for the application.
   * And there is a right nav which is the user profile navigation.
   */
  nav: PropTypes.shape({
    left: PropTypes.element,
    right: PropTypes.element
  }),
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}
const HPELogo = <Hpe color="brand" size="medium" />

const brandBeforeLogin = {
  logo: HPELogo,
  logoLink: '',
  orgName: 'HPE GreenLake',
  appName: '',
  fontWeight: 'bold',
  border: true
}
AppHeader.defaultProps = {
  brand: brandBeforeLogin,
  hideLogo: false,
  nav: null
}
