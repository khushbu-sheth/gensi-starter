import React from 'react'

import { Wizard } from './Wizard'
import {
  basicSteps,
  basicLargeSteps,
  userDetailsDefaults,
  orderInfoDefaults,
  summaryInfoDefaults,
  cancelStringObject,
  validationWizardSteps,
  scrollDefaultValues,
  scrollSteps,
  basicStepsWithLoader,
  basicStepWithAdditionalButton
} from './__data__/wizardData'

export default {
  title: 'CCS/Wizard',
  component: Wizard
}

const Template = (args) => <Wizard {...args} />

// Basic Wizard with Function Description

export const BasicFunctionDescription = Template.bind({})
BasicFunctionDescription.args = {
  title: 'Wizard title',
  formDefaultValues: {},
  steps: basicSteps,
  actionOnExit: () => {},
  actionOnSubmit: () => {},
  testId: ''
}

// Basic Large Wizard

export const BasicLarge = Template.bind({})
BasicLarge.args = {
  title: 'Large Wizard title',
  formDefaultValues: {},
  steps: basicLargeSteps,
  actionOnExit: () => {},
  actionOnSubmit: () => {},
  testId: ''
}

// Basic Large Wizard Different Finish Label

export const BasicLargeFinishLabel = Template.bind({})
BasicLargeFinishLabel.args = {
  title: 'Large Wizard title',
  formDefaultValues: {},
  steps: basicLargeSteps,
  actionOnExit: () => {},
  actionOnSubmit: () => {},
  testId: '',
  buttonLabels: { finish: 'Complete' }
}

// With Validation Saved Values

export const WithValidationSavedValues = Template.bind({})
WithValidationSavedValues.args = {
  title: 'Validation Example',
  formDefaultValues: {
    ...userDetailsDefaults,
    ...orderInfoDefaults,
    ...summaryInfoDefaults
  },
  steps: validationWizardSteps,
  actionOnExit: () => {},
  actionOnSubmit: () => {},
  cancelStrings: cancelStringObject,
  testId: ''
}

// Scroll

export const Scroll = Template.bind({})
Scroll.args = {
  title: 'Scrolling',
  formDefaultValues: scrollDefaultValues,
  steps: scrollSteps,
  actionOnExit: () => {},
  actionOnSubmit: () => {},
  cancelStrings: cancelStringObject,
  testId: ''
}

export const WizardStepsOtherActions = Template.bind({})
WizardStepsOtherActions.args = {
  buttonLabels: {
    next: {
      submitForm: true
    },
    otherActions: [
      {
        showInStep: 1,
        handleOnClick: () => {},
        testId: 'skip-order'
      },
      {
        showInStep: 2,
        label: 'Skip Summary',
        handleOnClick: () => {},
        testId: 'skip-summary'
      }
    ]
  },
  title: 'Wizard Steps Other Actions',
  formDefaultValues: {},
  steps: validationWizardSteps,
  actionOnExit: () => {},
  actionOnSubmit: () => {},
  testId: ''
}

export const WizardStepsWithLoader = Template.bind({})
WizardStepsWithLoader.args = {
  title: 'Wizard with on submit loader',
  steps: basicStepsWithLoader,
  disableFinishOnSubmit: true,
  actionOnExit: () => {},
  actionOnSubmit: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  },
  testId: ''
}

export const WizardStepWithAdditionalButton = Template.bind({})
WizardStepWithAdditionalButton.args = {
  title: 'Wizard with Save Draft button',
  disableFinishOnSubmit: true,
  actionOnExit: () => {},
  actionOnSubmit: () => {},
  steps: basicStepWithAdditionalButton
}

WizardStepWithAdditionalButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/cCQKjMThmw4I7kf7cnTQFf/ISV-Experience?node-id=196%3A10878'
  }
}
