import React, { useState } from 'react'
import { Menu } from 'grommet-icons'
import { Box, Layer } from 'grommet'
import PropTypes from 'prop-types'

import { Button } from '../button/Button'
import { MenuList } from '../menu-list/MenuList'

export const Navigation = ({
  accountInfo,
  switchAccountBtn,
  menuData,
  onClickMenuItem,
  testId
}) => {
  const [open, setOpen] = useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(undefined)

  return (
    <Box data-testid={testId}>
      <Box justify="start" width="xxsmall">
        <Button
          label=""
          icon={<Menu />}
          onClick={onOpen}
          testId={`burger-btn-${testId}`}
        />
      </Box>
      {open && (
        <Layer
          position="left"
          full="vertical"
          modal={false}
          onClickOutside={onClose}
          onEsc={onClose}
          data-testid={`layer-${testId}`}
        >
          <Box
            as="nav"
            fill="vertical"
            overflow="auto"
            width={{ min: 'auto', max: 'medium' }}
            onSubmit={onClose}
            pad="small"
            gap="small"
            elevation="large"
          >
            {/* TODO: adding pad with pixel to match with HPE HFWS */}
            <Box
              justify="start"
              width="xxsmall"
              margin={{ top: 'large' }}
              pad={{ top: '22px' }}
            >
              <Button
                icon={<Menu />}
                active
                onClick={onClose}
                testId="menu-btn"
              />
            </Box>
            {accountInfo && (
              <Box
                pad={{
                  top: 'small',
                  right: 'small',
                  bottom: 'medium',
                  left: 'small'
                }}
                gap="small"
                border={{ side: 'bottom', color: '#BBBBBB' }}
              >
                {accountInfo}
                <Box width="small" pad={{ top: 'small' }}>
                  {switchAccountBtn}
                </Box>
              </Box>
            )}
            <MenuList
              menuData={menuData}
              testId={`nav-${testId}`}
              onClickMenuItem={onClickMenuItem}
            />
          </Box>
        </Layer>
      )}
    </Box>
  )
}

Navigation.propTypes = {
  /**
   * This prop will hold the information about the selection customer account information.
   * AvatarInfo component will be used here as a input
   */
  accountInfo: PropTypes.element,
  /**
   * This prop is a placeholder for switch account button
   */
  switchAccountBtn: PropTypes.element,
  /**
   * This prop will have the array of menu list.
   * Each object conains id, label, routeTo and testId properties
   */
  menuData: PropTypes.array,
  /**
   * This prop is a function value
   * This function defines on click handling of a menu item
   */
  onClickMenuItem: PropTypes.func,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

Navigation.defaultProps = {
  accountInfo: null,
  switchAccountBtn: (
    <Button
      label="Switch Account"
      onClick={null}
      secondary
      type="button"
      testId="switch-account-btn"
    />
  ),
  menuData: [
    { id: 1, label: 'Home', routeTo: '/home', testId: 'home' },
    { id: 2, label: 'My Apps', routeTo: '/my-apps', testId: 'my-apps' },
    {
      id: 3,
      label: 'App Catalog',
      routeTo: '/app-catalog',
      testId: 'app-catalog'
    },
    {
      id: 4,
      label: 'Manage',
      routeTo: '/manage-account',
      testId: 'manage-account'
    }
  ],
  onClickMenuItem: () => {}
}
