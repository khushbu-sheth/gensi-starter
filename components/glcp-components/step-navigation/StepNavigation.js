import React from 'react'
import { Box } from 'grommet'
import PropTypes from 'prop-types'

import { Loader } from '../loader/Loader'
import { Notification } from '../notification/Notification'
import { Typography } from '../typography/Typography'

import checkImage from './check.png'

const Step = ({ step, number, isActive }) => {
  let border = {
    color: 'transparent',
    size: '3px',
    side: 'left'
  }

  if (isActive || step.status === 'in_progress') {
    border = {
      color: 'status-ok',
      size: '3px',
      side: 'left'
    }
  } else if (step.status === 'failed') {
    border = {
      color: 'status-critical',
      size: '3px',
      side: 'left'
    }
  }

  return (
    <Box direction="row" margin={{ bottom: 'medium' }}>
      <Box
        margin={step.status !== 'complete' ? { left: 'xsmall' } : {}}
        width={step.status !== 'complete' ? '36px' : '42px'}
        border={border}
        flex={false}
      >
        {step.status === 'complete' ? (
          <Box
            background={{
              size: 'contain',
              image: `url(${checkImage})`
            }}
            width="16px"
            height="14px"
          />
        ) : null}
      </Box>
      <Box
        direction="column"
        gap="xsmall"
        align="start"
        data-testid={`step${number}`}
      >
        <Typography size="small" type="text" testId="step">
          <>STEP {number}</>
        </Typography>
        <Typography size="small" level={3} type="heading" testId="title">
          {step.title}
        </Typography>
        <Typography size="small" type="text" testId="description">
          {step.description}
        </Typography>
        {isActive ? (
          <Box direction="row" pad={{ top: 'medium' }}>
            {step.button}
          </Box>
        ) : null}
        {step.status === 'in_progress' ? (
          <Loader
            orientation="horizontal"
            label={step.progress}
            size="24px"
            testId="progress-loader"
          />
        ) : null}
        {step.status === 'failed' ? (
          <Notification
            type="inline"
            text={step.error}
            backgroundColor="status-critical"
            testId="err-inline-notification"
          />
        ) : null}
      </Box>
    </Box>
  )
}

const stepPropTypes = {
  name: PropTypes.string,
  status: PropTypes.oneOf([
    'not_started',
    'in_progress',
    'failed',
    'complete',
    'unknown'
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.element,
  progress: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  error: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

Step.propTypes = {
  step: PropTypes.shape(stepPropTypes).isRequired,
  number: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
}

export const StepNavigation = ({ steps, testId }) => {
  const firstNotStartedStepIndex = steps.findIndex((step) => {
    return step.status === 'not_started'
  })

  const inProgressStepIndex = steps.findIndex((step) => {
    return step.status === 'in_progress'
  })

  const failedStepIndex = steps.findIndex((step) => {
    return step.status === 'failed'
  })

  const stepEls = steps.map((step, idx) => {
    const isActive =
      firstNotStartedStepIndex === idx &&
      !(inProgressStepIndex !== -1) &&
      !(failedStepIndex !== -1)

    return (
      <Step
        step={step}
        number={idx + 1}
        isActive={isActive}
        key={step.name || idx}
      />
    ) // eslint-disable-line react/no-array-index-key
  })

  return (
    <Box direction="column" data-testid={testId}>
      {stepEls}
    </Box>
  )
}

StepNavigation.propTypes = {
  /**
   * array of step objects
   */
  steps: PropTypes.arrayOf(PropTypes.shape(stepPropTypes)).isRequired,

  /**
   * data-testid, will be used for testing
   */
  testId: PropTypes.string.isRequired
}
