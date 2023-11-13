import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, Layer, ResponsiveContext, Button } from 'grommet'
import { Close } from 'grommet-icons'

import { Typography } from '../typography/Typography'

export const ModalDialog = ({
  position,
  width,
  height,
  header,
  icon,
  content,
  footer,
  onClose,
  testId,
  ...rest
}) => {
  const size = useContext(ResponsiveContext)

  let full
  if ((width === '100%' && height === '100%') || size === 'small') {
    full = true
  } else if (width === '100%') {
    full = 'horizontal'
  } else if (height === '100%') {
    full = 'vertical'
  } else {
    full = false
  }

  return (
    <Layer
      position={position}
      full={full}
      modal
      onEsc={onClose}
      data-testid={testId}
      {...rest}
    >
      <Box
        direction="column"
        width={width}
        height={height}
        gap="medium"
        pad={(rest && rest.pad) || 'medium'}
        overflow="auto"
      >
        <Box direction="row" basis="100%" gap="medium">
          {icon && <Box data-testid="icon">{icon}</Box>}
          <Box direction="column" basis="100%">
            {header}
            {content && (
              <Box basis="100%" data-testid="content" overflow="auto">
                {content}
              </Box>
            )}
          </Box>
        </Box>
        {footer}
      </Box>
    </Layer>
  )
}

const dimensions = [
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  '100%'
]

ModalDialog.propTypes = {
  /**
   * Position of the modal dialog; default is center
   */
  position: PropTypes.oneOf([
    'bottom',
    'bottom-left',
    'bottom-right',
    'center',
    'end',
    'hidden',
    'left',
    'right',
    'start',
    'top',
    'top-left',
    'top-right'
  ]),

  /**
   * width of the dialog
   */
  width: PropTypes.oneOf(dimensions),

  /**
   * height of the dialog
   */
  height: PropTypes.oneOf(dimensions),

  /**
   * Modal header of type ModalHeader
   */
  header: PropTypes.element,

  /**
   * dialog icon displayed to the left of content
   */
  icon: PropTypes.element,

  /**
   * Content of the dialog - use storybook layout components
   */
  content: PropTypes.element,

  /**
   * Modal footer of type ModalFooter
   */
  footer: PropTypes.element,

  /**
   * Function invoked on escape
   */
  onClose: PropTypes.func.isRequired,

  /**
   * data-testid, will be used for testing
   */
  testId: PropTypes.string.isRequired
}

ModalDialog.defaultProps = {
  position: 'center',
  // width set to content size if undefined
  width: undefined,
  // height set to content size if undefined
  height: undefined,
  header: undefined,
  icon: undefined,
  content: undefined,
  footer: undefined
}

export const ModalHeader = ({ title, subtitle, onClose }) => {
  return (
    <Box direction="row" gap="small" align="start">
      <Box direction="column" basis="100%" data-testid="header">
        {title}
        {subtitle && (
          <Typography type="text" size="medium" testId="header-subtitle">
            {subtitle}
          </Typography>
        )}
      </Box>
      {onClose && (
        <Box direction="row" pad="none">
          <Button
            icon={<Close />}
            onClick={onClose}
            plain
            data-testid="close-button"
          />
        </Box>
      )}
    </Box>
  )
}

ModalHeader.propTypes = {
  /**
   * Dialog's title - use Typography component
   */
  title: PropTypes.element,

  /**
   * Dialog's subtitle showing under title in smaller font
   */
  subtitle: PropTypes.string,

  /**
   * hide or show top right corner close button; default is false
   */
  onClose: PropTypes.func
}

ModalHeader.defaultProps = {
  title: undefined,
  subtitle: '',
  onClose: null
}

export const ModalFooter = ({ left, right }) => {
  return (
    <Box direction="row" justifyContent="between" height={{ min: 'auto' }}>
      <Box data-testid="footer-left">{left}</Box>
      <Box flex="grow" />
      <Box data-testid="footer-right">{right}</Box>
    </Box>
  )
}

ModalFooter.propTypes = {
  /**
   * left footer component
   */
  left: PropTypes.element,

  /**
   * right footer component
   */
  right: PropTypes.element
}

ModalFooter.defaultProps = {
  left: undefined,
  right: undefined
}
