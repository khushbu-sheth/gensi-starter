import React, { useContext, useEffect, useState } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { PropTypes } from 'prop-types'

import { CCSForm } from '../form/Form'

import { WizardContext } from './WizardContext'
import { StepHeader } from './StepHeader'
import { StepFooter } from './StepFooter'

// Can be called by clicking the final button on the last step OR by hitting
// -Enter- on any intermediate step
const formSubmit = (
  formValues,
  setAttemptedAdvance,
  activeStep,
  setActiveStep,
  steps,
  actionOnSubmit,
  setFormError,
  setFinishDisabled
) => {
  if (setFinishDisabled && activeStep === steps.length) {
    setFinishDisabled(true)
  }

  if (steps[activeStep - 1].validateForm) {
    steps[activeStep - 1]
      .validateForm(formValues, steps[activeStep - 1].submitFormOnChange)
      .then(
        () => {
          // submit if successful
          setAttemptedAdvance(false)
          if (activeStep === steps.length) {
            const promise = actionOnSubmit(formValues, setFormError)
            // enable submit button after onSubmit execution is completed.
            // so that user can resubmit if API returned some error.
            if (setFinishDisabled && promise && promise.then) {
              promise.then(() => {
                setFinishDisabled(false)
              })
            }
          } else {
            setActiveStep(activeStep + 1)
          }
        },
        (error) => {
          // mark that the user is trying to advance, so that
          // validation will run on any errors in the future
          setAttemptedAdvance(true)
          setFormError(error.message)
          if (setFinishDisabled) setFinishDisabled(false)
        }
      )
  } else {
    setAttemptedAdvance(false)
    if (activeStep === steps.length) {
      actionOnSubmit(formValues, setFormError)
    } else {
      setActiveStep(activeStep + 1)
    }
  }
}

export const StepContent = ({
  actionOnSubmit,
  buttonLabels,
  disableFinishOnSubmit
}) => {
  const [finishDisabled, setFinishDisabled] = useState(false)
  const size = useContext(ResponsiveContext)
  const {
    formValues,
    setFormValues,
    formError,
    setFormError,
    setAttemptedAdvance,
    activeStep,
    setActiveStep,
    steps,
    width
  } = useContext(WizardContext)

  useEffect(() => {
    if (
      !disableFinishOnSubmit ||
      (disableFinishOnSubmit && activeStep < steps.length)
    ) {
      setFinishDisabled(false)
    }
  }, [activeStep, disableFinishOnSubmit]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box
      pad={{ top: 'large', horizontal: 'medium' }}
      flex={false}
      width={width}
    >
      {/* Set a medium gap on top but don't set more spacing on top or above the
          footer. Each step form is likely unique, so let each step add padding to
          match the UX as necessary. */}
      <Box
        width="100%"
        gap="medium"
        pad={size === 'small' ? { horizontal: 'medium' } : 'xxsmall'}
      >
        <StepHeader />
        <CCSForm
          testId="wizard-form"
          value={formValues}
          errorMessage={formError}
          onChange={setFormValues}
          onSubmit={() => {
            formSubmit(
              formValues,
              setAttemptedAdvance,
              activeStep,
              setActiveStep,
              steps,
              actionOnSubmit,
              setFormError,
              disableFinishOnSubmit ? setFinishDisabled : null
            )
          }}
          buttons={
            <StepFooter
              finishDisabled={finishDisabled}
              buttonLabels={buttonLabels}
            />
          }
        >
          {/* Index an array starting at 0 */}
          {steps[activeStep - 1].childComponents}
        </CCSForm>
      </Box>
    </Box>
  )
}

StepContent.propTypes = {
  actionOnSubmit: PropTypes.func.isRequired,
  buttonLabels: PropTypes.object,
  disableFinishOnSubmit: PropTypes.bool
}

StepContent.defaultProps = {
  buttonLabels: undefined,
  disableFinishOnSubmit: false
}
