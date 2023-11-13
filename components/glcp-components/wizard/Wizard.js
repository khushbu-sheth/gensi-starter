import React, { useState, useEffect, useRef, useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { ThemeContext } from 'styled-components'
import { PropTypes } from 'prop-types'

import { getWidth } from '../utils'

import { CancellationLayer } from './CancellationLayer'
import { WizardHeader } from './WizardHeader'
import { StepContent } from './StepContent'
import { WizardContext } from './WizardContext'

// Leveraged in part from https://design-system.hpe.design/templates/wizard

export const Wizard = ({
  title,
  formDefaultValues,
  steps,
  actionOnExit,
  actionOnSubmit,
  cancelStrings,
  testId,
  buttonLabels,
  disableFinishOnSubmit,
  contentWidth
}) => {
  const [activeStep, setActiveStep] = useState(1)
  // store form values in state so they persist
  // when user goes back a step and are accessible for the final submission
  const [formValues, setFormValues] = useState(formDefaultValues)
  // controls state of cancel layer
  const [cancelLayerOpen, setCancelLayerOpen] = useState(false)
  const [attemptedAdvance, setAttemptedAdvance] = useState(false)
  const [formError, setFormError] = useState('')

  // ref allows us to access the wizard container and ensure scroll position
  // is at the top as user advances between steps. useEffect is triggered
  // when the active step or cancelLayerOpen changes.
  const wizardRef = useRef()

  const exitClicked = () => {
    setCancelLayerOpen(false)
    actionOnExit(activeStep)
  }

  useEffect(() => {
    if (wizardRef.current && wizardRef.current.scrollIntoView) {
      wizardRef.current.scrollIntoView()
    }
  }, [activeStep, cancelLayerOpen])

  useEffect(() => {
    let isCurrent = true
    if (attemptedAdvance) {
      steps[activeStep - 1]
        .validateForm(formValues, steps[activeStep - 1].submitFormOnChange)
        .then(
          () => {
            if (isCurrent) setFormError('')
          },
          (error) => {
            if (isCurrent) setFormError(error.message)
          }
        )
    } else if (isCurrent) {
      setFormError('')
    }

    return () => {
      isCurrent = false
    }
  }, [formValues, steps, activeStep]) // eslint-disable-line react-hooks/exhaustive-deps

  const size = useContext(ResponsiveContext)
  const theme = useContext(ThemeContext)

  const numberColumns = 2
  const widthDefault = theme ? getWidth(numberColumns, theme, size) : null

  return (
    <WizardContext.Provider
      value={{
        formValues,
        setFormValues,
        attemptedAdvance,
        setAttemptedAdvance,
        formError,
        setFormError,
        activeStep,
        setActiveStep,
        steps,
        title,
        width: contentWidth || widthDefault
      }}
    >
      <Box ref={wizardRef} align="center" data-testid={testId}>
        <WizardHeader
          buttonLabels={buttonLabels}
          setCancelLayerOpen={setCancelLayerOpen}
          additionalButtons={steps[activeStep - 1].headerButtons}
        />
        <StepContent
          actionOnSubmit={actionOnSubmit}
          buttonLabels={buttonLabels}
          disableFinishOnSubmit={disableFinishOnSubmit}
        />
        {cancelLayerOpen && (
          <CancellationLayer
            onSetOpen={setCancelLayerOpen}
            onClickExit={exitClicked}
            strings={cancelStrings}
          />
        )}
      </Box>
    </WizardContext.Provider>
  )
}

Wizard.propTypes = {
  /**
   * Title of the wizard that displays in the header
   * This is mandatory.
   */
  title: PropTypes.string.isRequired,
  /**
   * List of default values for all items in the form
   * This is mandatory.
   */
  formDefaultValues: PropTypes.object.isRequired,
  /**
   * Each step must have a title and description, a function returning child components,
   * and a validation function that returns an object with a boolean 'isValid' field.
   * If a description is provided, the look and feel should match the other wizard
   * subtitles.
   * This is mandatory.
   */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
      childComponents: PropTypes.object.isRequired,
      validateForm: PropTypes.func,
      submitFormOnChange: PropTypes.bool,
      disableBack: PropTypes.bool,
      disableCancel: PropTypes.bool,
      disableStepCount: PropTypes.bool,
      // this will display additional button before the cancel button in header
      headerButtons: PropTypes.arrayOf(PropTypes.element)
    })
  ).isRequired,
  /**
   * The action that occurs when the user confirms they want to cancel out of
   * the wizard.
   * This is mandatory.
   */
  actionOnExit: PropTypes.func.isRequired,
  /**
   * The action that occurs when the Finish button is clicked on the final screen.
   * Currently there is no action defined for the Next button on the intermediate
   * screens. Use the validateForm on the particular step instead.
   * This is mandatory.
   */
  actionOnSubmit: PropTypes.func.isRequired,
  /**
   * Optional list of strings for the cancel dialog. If set, all fields are required.
   * Fields are:
   * heading
   * text
   * continueLabel
   * exitLabel
   *
   * If not set, default values are used.
   */
  cancelStrings: PropTypes.object,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired,
  /**
   * Optional list of strings to override default button labels. Any field defined
   * will be used, but not all fields need to be set. Fields are:
   * next
   * finish
   */
  buttonLabels: PropTypes.object,

  /**
   * If true, Finish button is disabled when clicked in the last step.
   */
  disableFinishOnSubmit: PropTypes.bool,

  /**
   * If defined, the content will scale horizontally to the provided width.
   * If not set, default return value is used from getWidth()
   */
  contentWidth: PropTypes.oneOf([
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
    '100%'
  ])
}

Wizard.defaultProps = {
  cancelStrings: undefined,
  buttonLabels: {},
  disableFinishOnSubmit: false,
  contentWidth: null
}
