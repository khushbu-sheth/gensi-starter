import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

import { MenuList } from '../menu-list/MenuList'
import { Ruler } from '../ruler/Ruler'

export const GLCPHelpMenu = ({ helpNavContent, testId }) => {
  const [render, setRender] = useState(1)
  const menuData = helpNavContent.map((menuListprops) => {
    return {
      id: menuListprops.id,
      label: menuListprops.label,
      testId: `${menuListprops.label}-${menuListprops.id}`
    }
  })

  const renderHelpMenu = helpNavContent.map((fragment) => {
    return [fragment.content]
  })

  const handleClick = (item) => {
    setRender(item.id)
  }

  return (
    <Box height={{ min: '540px' }}>
      <Box margin={{ horizontal: 'small' }}>
        <MenuList
          defaultActiveId={1}
          highlightOnSelect
          menuData={menuData}
          testId="help-menu"
          menuItemStyles={{
            padding: {
              horizontal: 'small',
              vertical: 'none'
            },
            weight: 'bold',
            width: 'xsmall',
            align: 'center'
          }}
          navStyles={{
            gap: 'none',
            pad: 'none',
            responsive: false,
            direction: 'row'
          }}
          onClickMenuItem={(item) => {
            handleClick(item)
          }}
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
      <Box key={`${render}`} testId={testId}>
        <Box height={{ min: 'medium' }}>{renderHelpMenu[render - 1]}</Box>
      </Box>
    </Box>
  )
}

GLCPHelpMenu.propTypes = {
  helpNavContent: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
      renderDefault: PropTypes.oneOf(['help', 'feedback', 'custom'])
    })
  ).isRequired,
  testId: PropTypes.string.isRequired
}

GLCPHelpMenu.defaultProps = {}
