import React, { useContext } from 'react'
import { Box, Header, Menu, ResponsiveContext } from 'grommet'
import { FormPreviousLink, FormClose, MoreVertical } from 'grommet-icons'
import { PropTypes } from 'prop-types'

import { Typography } from '../typography/Typography'
import { Button } from '../button/Button'

import { WizardContext } from './WizardContext'

export const WizardHeader = ({
  buttonLabels,
  setCancelLayerOpen,
  additionalButtons
}) => {
  const { setAttemptedAdvance, activeStep, setActiveStep, steps, title } =
    useContext(WizardContext)
  const size = useContext(ResponsiveContext)

  const headerButtons = [
    ...additionalButtons,
    !steps[activeStep - 1].disableCancel && (
      <Button
        label={
          buttonLabels?.cancel?.label ? buttonLabels.cancel.label : 'Cancel'
        }
        testId="button-header-cancel"
        icon={<FormClose color="text-strong" />}
        reverse
        onClick={() => {
          setCancelLayerOpen(true)
        }}
      />
    )
  ]

  const showMenu =
    ['xsmall', 'small'].includes(size) && headerButtons.length > 1

  return (
    <Header
      background="background-contrast"
      pad={{ horizontal: 'medium' }}
      fill="horizontal"
      justify="center"
      gap="large"
    >
      <Box direction="row" flex>
        {activeStep > 1 && !steps[activeStep - 1].disableBack && (
          <Button
            label={activeStep > 1 ? steps[activeStep - 2].title : ''}
            testId="button-header-previous"
            icon={<FormPreviousLink color="text-strong" />}
            onClick={() => {
              setActiveStep(activeStep - 1)
              setAttemptedAdvance(false)
            }}
          />
        )}
      </Box>
      <Box pad={{ vertical: 'medium' }}>
        <Typography
          type="text"
          color="text-strong"
          weight="bold"
          size="medium"
          testId="wizard-header"
        >
          {title}
        </Typography>
      </Box>
      {/* use vertical pad on this Box to extend overall height of header */}
      <Box direction="row" flex justify="end" gap="medium">
        {showMenu ? (
          <Menu
            items={headerButtons.map((e) => e.props)}
            icon={<MoreVertical />}
          />
        ) : (
          headerButtons
        )}
      </Box>
    </Header>
  )
}

WizardHeader.propTypes = {
  setCancelLayerOpen: PropTypes.func.isRequired,
  buttonLabels: PropTypes.shape({
    cancel: PropTypes.string
  }),
  additionalButtons: PropTypes.arrayOf(PropTypes.element)
}

WizardHeader.defaultProps = {
  buttonLabels: undefined,
  additionalButtons: []
}
