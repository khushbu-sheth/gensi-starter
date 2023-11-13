import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, DropButton } from 'grommet'

const DropContent = ({ content, testId }) => (
  <Box
    elevation="medium"
    pad={{ vertical: 'small' }}
    width="medium"
    height={{ min: 'auto', max: 'large' }}
    gap="small"
    round="small"
    data-testid={testId}
  >
    {content}
  </Box>
)
DropContent.propTypes = {
  content: PropTypes.element.isRequired,
  testId: PropTypes.string.isRequired
}

export const GLCPHeaderDropMenu = ({ icon, content, testId }) => {
  const [open, setOpen] = useState()
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)
  return (
    <DropButton
      icon={icon}
      plain
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      dropContent={
        <DropContent
          round="small"
          content={content}
          testId={`drop-content-${testId}`}
        />
      }
      dropProps={{
        align: { top: 'bottom', right: 'right' },
        margin: { top: 'xsmall' }
      }}
      data-testid={`drop-btn-${testId}`}
    />
  )
}

GLCPHeaderDropMenu.propTypes = {
  icon: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
  testId: PropTypes.any.isRequired
}
