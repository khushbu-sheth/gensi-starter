import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Header, Box, ResponsiveContext } from 'grommet'

import { Ruler } from '../ruler/Ruler'

import { GLCPHeaderBrand } from './GLCPHeaderBrand'
import { GLCPHeaderDropMenu } from './GLCPHeaderDropMenu'

export const GLCPHeader = ({
  brand,
  navigation,
  notification,
  dropMenu,
  testId,
  ...rest
}) => {
  const screenSize = useContext(ResponsiveContext) || 'large'
  return (
    <>
      <Header
        data-testid={testId}
        fill="horizontal"
        background="background-front"
        pad={{ horizontal: 'medium' }}
        {...rest}
      >
        {/* Left Container - branding section */}
        {brand && <GLCPHeaderBrand {...brand} testId={testId} />}
        {/* Center Container - navigation section */}
        {screenSize === 'medium' || screenSize === 'small' ? null : (
          <Box>{navigation}</Box>
        )}
        {/* Right Container - tools, profiles sections */}
        <Box direction="row" gap="small">
          {notification}
          {dropMenu &&
            dropMenu.length > 0 &&
            dropMenu.map((menu) => {
              return (
                <GLCPHeaderDropMenu
                  key={`glcp-header-drop-menu-${menu.id}`}
                  {...menu}
                  testId={`${testId}-menu-item-${menu.id}`}
                />
              )
            })}
        </Box>
      </Header>
      <Ruler
        border={{
          color: 'border-weak',
          size: '1px',
          side: 'bottom'
        }}
        margin="none"
      />
    </>
  )
}

GLCPHeader.propTypes = {
  /**
   * This brand prop contains all the props related to branding
   * such as logo, logo url link, organization name, application name
   * custom typography/style can be applied on orgName and appName
   * else the default style will be applied
   */
  brand: PropTypes.shape({
    logo: PropTypes.element,
    logoLink: PropTypes.string,
    orgName: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    appName: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }),
  /**
   * navigation prop will be mostly the <MenuList/> component
   * It is flexible to customize instead of keeping it in
   */
  navigation: PropTypes.element,
  /**
   * notification will be used to show the bell icon button
   * onClick of this will route to the notification page
   */
  notification: PropTypes.element,
  /**
   * dropMenu array will have id, icon and content
   * This is used for user profile, apps, and help options
   */
  dropMenu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.element,
      content: PropTypes.element
    })
  ),
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

GLCPHeader.defaultProps = {
  brand: undefined,
  navigation: undefined,
  notification: undefined,
  dropMenu: undefined
}
