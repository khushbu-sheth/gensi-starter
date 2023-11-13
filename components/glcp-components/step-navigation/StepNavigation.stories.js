import React from 'react'

import { Button } from '../button/Button'
import { Typography } from '../typography/Typography'

import { StepNavigation } from './StepNavigation'

export default {
  title: 'CCS/StepNavigation',
  component: StepNavigation
}

const Template = (args) => {
  return <StepNavigation {...args} />
}

export const Active = Template.bind({})
Active.args = {
  testId: 'active-step-nav',
  steps: [
    {
      status: 'not_started',
      title: 'Step 1 title',
      description: 'Step 1 description',
      button: (
        <Button
          primary
          size="medium"
          label="Step 1 button"
          testId="step1-button"
        />
      )
    },
    {
      title: 'Step 2 title',
      description: 'Step 2 description',
      button: (
        <Button
          primary
          size="medium"
          label="Step 2 button"
          testId="step2-button"
        />
      ),
      progress: (
        <Typography size="small" type="text">
          Step 2 progress
        </Typography>
      )
    },
    {
      title: 'Step 3 title',
      description: 'Step 3 description',
      button: (
        <Button
          primary
          size="medium"
          label="Step 3 button"
          testId="review-unsupported-apps-button"
        />
      ),
      progress: (
        <Typography size="small" type="text">
          Step 3 progress
        </Typography>
      )
    },
    {
      title: 'Step 4 title',
      description: 'Step 4 description',
      button: (
        <Button
          primary
          size="medium"
          label="Step 4 button"
          testId="review-unsupported-apps-button"
        />
      )
    }
  ]
}

Active.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/haSQhFGJH6yrkhMda4CP7p/Master-Prototype-(Latest-Designs)?node-id=29098%3A80004'
  }
}

export const InProgress = Template.bind({})
InProgress.args = {
  testId: 'inprogress-step-nav',
  steps: [
    {
      status: 'complete',
      title: 'Step 1 title',
      description: 'Step 1 description',
      button: (
        <Button
          primary
          size="medium"
          label="Step 1 button"
          testId="step1-button"
        />
      )
    },
    {
      status: 'in_progress',
      title: 'Step 2 title',
      description: 'Step 2 description',
      button: (
        <Button
          primary
          size="medium"
          label="Step 2 button"
          testId="step2-button"
        />
      ),
      progress: (
        <Typography size="small" type="text">
          Step 2 progress
        </Typography>
      )
    },
    {
      title: 'Step 3 title',
      description: 'Step 3 description',
      button: (
        <Button
          primary
          size="medium"
          label="Step 3 button"
          testId="review-unsupported-apps-button"
        />
      ),
      progress: (
        <Typography size="small" type="text">
          Step 3 progress
        </Typography>
      )
    },
    {
      title: 'Step 4 title',
      description: 'Step 4 description',
      button: (
        <Button
          primary
          size="medium"
          label="Step 4 button"
          testId="review-unsupported-apps-button"
        />
      )
    }
  ]
}

InProgress.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/haSQhFGJH6yrkhMda4CP7p/Master-Prototype-Latest-Designs?node-id=29098%3A80873'
  }
}

export const Error = Template.bind({})
Error.args = {
  testId: 'error-step-nav',
  steps: [
    {
      status: 'complete',
      title: 'Step 1 title',
      description: 'Step 1 description',
      button: (
        <Button
          primary
          size="medium"
          label="Step 1 button"
          testId="step1-button"
        />
      )
    },
    {
      status: 'complete',
      title: 'Step 2 title',
      description: 'Step 2 description',
      button: (
        <Button
          primary
          size="medium"
          label="Step 2 button"
          testId="step2-button"
        />
      ),
      progress: (
        <Typography size="small" type="text">
          Step 2 progress
        </Typography>
      )
    },
    {
      status: 'complete',
      title: 'Step 3 title',
      description: 'Step 3 description',
      button: (
        <Button
          primary
          size="medium"
          label="Step 3 button"
          testId="review-unsupported-apps-button"
        />
      ),
      progress: (
        <Typography size="small" type="text">
          Step 3 progress
        </Typography>
      )
    },
    {
      status: 'failed',
      title: 'Step 4 title',
      description: 'Step 4 description',
      button: (
        <Button
          primary
          size="medium"
          label="Step 4 button"
          testId="review-unsupported-apps-button"
        />
      ),
      error: (
        <Typography type="text" size="small">
          Step 4 error
        </Typography>
      )
    }
  ]
}

Error.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/haSQhFGJH6yrkhMda4CP7p/Master-Prototype-(Latest-Designs)?node-id=29098%3A79771'
  }
}
