import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

import { Typography } from '../typography/Typography'

import { DefaultSpinner } from './DefaultSpinner'
import { HPESpinner } from './HPESpinner'

const spinner = {
  default: <DefaultSpinner />,
  hpe: <HPESpinner />
}

export const Loader = ({ type, size, label, orientation, testId }) => (
  <Box
    align="center"
    justify="center"
    width={orientation === 'vertical' ? size : null}
    direction={orientation === 'horizontal' ? 'row' : 'column'}
    gap={orientation === 'horizontal' ? 'small' : null}
    data-testid={testId}
  >
    <Box align="center" justify="center" width={size} height={size}>
      {spinner[type]}
    </Box>

    {label && (
      <Typography size="xsmall" testId="t9" type="text">
        {label}
      </Typography>
    )}
  </Box>
)

Loader.propTypes = {
  /**
   * This prop will determine the type of the sponner
   */
  type: PropTypes.oneOf(['hpe', 'default']),

  /**
   * This prop will control the size of the box (i.e width and height).
   * Default will be 36px as per UX.
   * TODO: UX and design system is still working on it as per this https://arubanetworks.slack.com/archives/C016NNY4TA9/p1611080780020500
   */
  size: PropTypes.string,

  /**
   * set display orientation
   */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),

  /**
   * This prop will show the text of the spinner.
   */
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),

  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

Loader.defaultProps = {
  type: 'default',
  size: '36px',
  label: '',
  orientation: 'vertical'
}
