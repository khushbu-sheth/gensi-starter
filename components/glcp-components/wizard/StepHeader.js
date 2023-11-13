import React, { useContext } from 'react'
import { Box } from 'grommet'

import { Typography } from '../typography/Typography'

import { WizardContext } from './WizardContext'

export const StepHeader = () => {
  const { activeStep, steps } = useContext(WizardContext)
  return (
    <Box gap="xsmall">
      {!steps[activeStep - 1].disableStepCount && (
        <Typography type="text" size="medium" testId="step-of-total">
          {`Step ${activeStep} of ${steps.length}`}
        </Typography>
      )}
      {/* TODO CCS-4097: Could we use PageHeader here? */}
      <Typography
        type="heading"
        level="1"
        testId="step-title"
        color="text-strong"
        size="small"
      >
        {/* Index an array starting at 0 */}
        {steps[activeStep - 1].title}
      </Typography>
      {typeof steps[activeStep - 1].description === 'string' ? (
        <Typography type="paragraph" testId="step-description" size="large">
          {/* Index an array starting at 0 */}
          {steps[activeStep - 1].description}
        </Typography>
      ) : (
        // Index an array starting at 0
        steps[activeStep - 1].description
      )}
    </Box>
  )
}
