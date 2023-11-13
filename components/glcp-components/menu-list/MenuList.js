import React, { useState, useEffect, useContext } from 'react'
import { Box, Nav, ResponsiveContext } from 'grommet'
import PropTypes, { oneOfType } from 'prop-types'
import styled from 'styled-components'

import { Button } from '../button/Button'
import { Typography } from '../typography/Typography'

const StyledNav = styled(Nav)`
  div[class*='StyledBoxGap'] {
    display: none;
  }
  button + div[class*='StyledBoxGap'] {
    display: block;
  }
`

export const MenuList = ({
  menuData,
  testId,
  defaultActiveId,
  navStyles,
  menuItemStyles,
  menuItemPadding,
  highlightOnSelect,
  onClickMenuItem,
  customRenderer
}) => {
  const screenSize = useContext(ResponsiveContext)
  const [active, setActive] = useState(defaultActiveId)

  useEffect(() => {
    setActive(defaultActiveId)
  }, [defaultActiveId])

  const handleMenuItemClick = (item) => {
    if (highlightOnSelect) {
      setActive(item.id)
    }
    onClickMenuItem(item)
  }

  const getMenuItem = (item) => (
    <Button
      key={item.id}
      onClick={() => handleMenuItemClick(item)}
      active={item.id === active && highlightOnSelect}
      testId={item.testId}
    >
      {() => (
        <Box
          pad={menuItemStyles?.padding || menuItemPadding}
          width={menuItemStyles?.width}
          align={menuItemStyles?.align}
        >
          <Typography
            size="medium"
            type="text"
            weight={menuItemStyles.weight}
            level={item.id === active && highlightOnSelect ? 4 : undefined}
            testId={`desc-${item.testId}`}
          >
            {item.label}
          </Typography>
        </Box>
      )}
    </Button>
  )

  const menuItems = menuData
    .filter((item) => !(item.isHidden ? item.isHidden() : false))
    .map((item) => {
      return customRenderer
        ? customRenderer(getMenuItem(item), item?.visibility, item?.id)
        : getMenuItem(item)
    })

  return (
    <StyledNav
      direction={
        (navStyles?.responsive && screenSize === 'small') ||
        (navStyles?.responsive && screenSize === 'medium')
          ? 'column'
          : navStyles?.direction
      }
      background="white"
      pad={navStyles?.padding}
      data-testid={testId}
      gap={navStyles?.gap}
    >
      {menuData?.length > 0 && menuItems}
    </StyledNav>
  )
}

MenuList.propTypes = {
  /**
   * This prop will have the array of menu list.
   * Each object conains id, label and testId as mandatory properties
   * Additional properties can be optional based on consumer's logic of handling click
   */
  menuData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      testId: PropTypes.string.isRequired,
      linkTo: PropTypes.string,
      isHidden: PropTypes.func
    })
  ).isRequired,
  defaultActiveId: PropTypes.number,
  /**
   * This will be used to style the nav container
   */
  navStyles: PropTypes.shape({
    padding: oneOfType([PropTypes.object, PropTypes.string]),
    gap: PropTypes.string,
    responsive: PropTypes.bool,
    direction: PropTypes.string
  }),
  /**
   * This will be used to style the menu item
   */
  menuItemStyles: PropTypes.shape({
    padding: oneOfType([PropTypes.object, PropTypes.string]),
    weight: PropTypes.string,
    width: PropTypes.string,
    align: PropTypes.string
  }),
  /**
   * It will be used for component menu item padding
   * This can have a format of object { vertical: 'xsmall', left: 'small' }
   * TODO: remove this once all the the consumers of menuItemPadding changed to menuItemStyle
   */
  menuItemPadding: PropTypes.object,
  /**
   * This prop is a boolean value.
   * This is optional. Default is false
   * This defines whether a menu item has to be highlighted on select
   */
  highlightOnSelect: PropTypes.bool,
  /**
   * This prop is a function value
   * This function defines on click handling of a menu item
   */
  onClickMenuItem: PropTypes.func,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired,
  /**
   * customRenderer, it will be used to render custom elements
   * eg: menu item wrapped with visibility wrapper
   */
  customRenderer: PropTypes.func
}

MenuList.defaultProps = {
  highlightOnSelect: false,
  menuItemStyles: {
    padding: 'none',
    weight: 'normal',
    width: '100%',
    align: 'start'
  },
  // TODO: remove this once all the the consumers of menuItemPadding changed to menuItemStyle
  menuItemPadding: {},
  defaultActiveId: 0,
  navStyles: {
    padding: 'small',
    gap: 'medium',
    responsive: true,
    direction: 'column'
  },
  onClickMenuItem: () => {},
  customRenderer: null
}
