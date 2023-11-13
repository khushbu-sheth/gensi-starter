import React from 'react'
import { Grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'
import { hpe } from 'grommet-theme-hpe'
import PropTypes from 'prop-types'

export const ThemeMode = ({ children }) => {
  const baseSpacing = 24
  const expandedBreakpoints = deepMerge(hpe, {
    global: {
      breakpoints: {
        medium: {
          value: baseSpacing * 45 // 1080
        },
        large: {
          value: baseSpacing * 60 // 1440
        },
        xlarge: {} // anything larger than 1440,
      }
    }
  })

  const body = (
    <Grommet
      theme={expandedBreakpoints}
      style={{ minHeight: '88vh' }}
      data-testid="theme"
      background="black"
    >
      {children}
    </Grommet>
  )
  return body
}

ThemeMode.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
    .isRequired
}
