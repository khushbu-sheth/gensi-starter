import React, { useContext } from 'react'
import { Box } from 'grommet'
import { FormNextLink } from 'grommet-icons'
import { PropTypes } from 'prop-types'

import { Button } from '../button/Button'
import { Loader } from '../loader/Loader'

import { WizardContext } from './WizardContext'

export const StepFooter = ({ finishDisabled, buttonLabels }) => {
  const {
    formValues,
    setAttemptedAdvance,
    activeStep,
    setActiveStep,
    steps,
    setFormError
  } = useContext(WizardContext)
  return (
    <Box
      border={{ side: 'top', color: 'border' }}
      pad={{ top: 'medium' }}
      direction="row"
      justify="end"
      gap="small"
      align="end"
    >
      {finishDisabled ? <Loader testId="wizard-loader-onsubmit" /> : null}
      {buttonLabels?.otherActions?.length &&
        buttonLabels?.otherActions?.map(
          (btn, idx) =>
            btn?.showInStep === activeStep && (
              <Button
                {...btn}
                key={idx} // eslint-disable-line react/no-array-index-key
                label={btn?.label || 'Help'}
                type="button"
                onClick={() => {
                  btn?.handleOnClick(formValues)
                }}
              />
            )
        )}
      {activeStep < steps.length && (
        <Button
          label={buttonLabels?.next?.label ? buttonLabels.next.label : 'Next'}
          testId="button-next"
          icon={<FormNextLink />}
          primary
          reverse
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            // check for errors
            steps[activeStep - 1]
              .validateForm(
                formValues,
                buttonLabels?.next?.submitForm
                  ? buttonLabels.next.submitForm
                  : false
              )
              .then(
                () => {
                  // advance to next step if successful
                  setAttemptedAdvance(false)
                  setActiveStep(activeStep + 1)
                },
                (error) => {
                  // mark that the user is trying to advance, so that
                  // validation will run on any errors in the future
                  setAttemptedAdvance(true)
                  setFormError(error.message)
                }
              )
          }}
        />
      )}
      {activeStep === steps.length && (
        <Button
          label={buttonLabels?.finish ? buttonLabels.finish : 'Finish'}
          testId="button-finish"
          primary
          disabled={finishDisabled}
          type="submit"
        />
      )}
    </Box>
  )
}

StepFooter.propTypes = {
  finishDisabled: PropTypes.bool,
  buttonLabels: PropTypes.shape({
    next: PropTypes.shape({
      label: PropTypes.string,
      submitForm: PropTypes.bool
    }),
    finish: PropTypes.string,
    otherActions: PropTypes.arrayOf(
      PropTypes.shape({
        showInStep: PropTypes.number,
        label: PropTypes.string,
        handleOnClick: PropTypes.func,
        testId: PropTypes.string
      })
    )
  })
}

StepFooter.defaultProps = {
  finishDisabled: false,
  buttonLabels: []
}
