import React, { useEffect, useState, useContext } from 'react'
import { Box, FormField, TextArea, TextInput } from 'grommet'

import { Button } from '../../button/Button'
import { Typography } from '../../typography/Typography'
import { WizardContext } from '../WizardContext'

// BEGIN Basic Function Description Wizard

export const basicSteps = [
  {
    title: 'Basic step title',
    description: (
      <Typography type="paragraph" size="large" testId="basic">
        Basic step description from object
      </Typography>
    ),
    childComponents: (
      <Box width="medium" pad={{ top: 'medium', bottom: 'large' }}>
        Text here
      </Box>
    ),
    // simulate returning a promise
    validateForm: () => ({
      then: (resolve) => {
        resolve()
      }
    })
  }
]

// BEGIN Basic Large Wizard

export const basicLargeSteps = [
  {
    title: 'Basic Large step title',
    description: 'basic step description',
    // 'Basic step description' for a wizard that has a wider form width.' +
    // ' This is the second sentence in this paragraph and gives a description of the step',
    childComponents: (
      <Box width="large" pad={{ top: 'medium', bottom: 'large' }}>
        Text here
      </Box>
    ),
    // simulate returning a promise
    validateForm: () => ({
      then: (resolve) => {
        resolve()
      }
    })
  }
]

// BEGIN With Validation Saved Values

export const userDetailsDefaults = {
  textArea: ''
}

const UserDetails = () => {
  return (
    <Box
      width="medium"
      pad={{ top: 'small', bottom: 'medium' }}
      margin={{ top: 'xsmall', bottom: 'small' }}
    >
      <FormField
        margin={{ bottom: 'xsmall' }}
        htmlFor="text-area"
        label="Enter some text"
        name="textArea"
      >
        <TextArea
          id="text-area"
          name="textArea"
          placeholder="Placeholder text"
        />
      </FormField>
    </Box>
  )
}

const orderInfoValidate = (formValues) => {
  const emailRegex = RegExp('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+')
  const emailValid = emailRegex.test(formValues.emailField)

  return {
    email: emailValid ? '' : 'Invalid email address.',
    isValid: !!emailValid
  }
}

export const orderInfoDefaults = {
  emailField: ''
}

const OrderInfo = () => {
  const { formValues, attemptedAdvance } = useContext(WizardContext)
  const [error, setError] = useState({
    email: ''
  })

  useEffect(() => {
    if (attemptedAdvance) {
      setError(orderInfoValidate(formValues))
    }
  }, [formValues, attemptedAdvance])

  return (
    <Box
      width="medium"
      pad={{ top: 'small', bottom: 'medium' }}
      margin={{ top: 'xsmall', bottom: 'small' }}
    >
      <FormField
        margin={{ bottom: 'xsmall' }}
        label="Email"
        htmlFor="email-field"
        name="emailField"
        data-testid="email-form-field"
        error={error.email}
      >
        <TextInput
          placeholder="jane.smith@hpe.com"
          id="email-field"
          name="emailField"
          type="email"
          data-testid="email-field-input"
        />
      </FormField>
    </Box>
  )
}

const summaryInfoValidate = (formValues) => {
  // One of each character class
  const passwordRegex = new RegExp('(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])')
  const passwordValid = passwordRegex.test(formValues.passwordField)
  return {
    password: passwordValid ? '' : 'Invalid password.',
    isValid: !!passwordValid
  }
}

export const summaryInfoDefaults = {
  passwordField: ''
}

const SummaryInfo = () => {
  const { formValues, attemptedAdvance } = useContext(WizardContext)
  const [error, setError] = useState({
    password: ''
  })

  useEffect(() => {
    if (attemptedAdvance) {
      setError(summaryInfoValidate(formValues))
    }
  }, [formValues, attemptedAdvance])

  return (
    <Box
      width="medium"
      pad={{ top: 'medium', bottom: 'medium' }}
      margin={{ bottom: 'small' }}
    >
      <Typography type="text" size="medium" testId="">
        Saved form values:
      </Typography>
      <Typography type="text" size="medium" testId="">
        {formValues.textArea}
      </Typography>
      <Typography type="text" size="medium" testId="">
        {formValues.emailField}
      </Typography>
      <FormField
        margin={{ bottom: 'xsmall' }}
        label="Password"
        htmlFor="password-field"
        name="passwordField"
        data-testid="password-form-field"
        error={error.password}
      >
        <TextInput
          id="password-field"
          data-testid="password-field-input"
          name="passwordField"
          type="password"
        />
      </FormField>
    </Box>
  )
}

export const cancelStringObject = {
  heading: 'Cancel Setup?',
  text: 'Cancelling setup will cause you to lose all of your progress. Are you sure you want to cancel SSO setup?',
  continueLabel: 'Continue Setup',
  exitLabel: 'End Setup'
}

export const validationWizardSteps = [
  {
    title: 'User Details',
    description: 'Enter user details here',
    childComponents: <UserDetails />,
    // simulate returning a promise
    validateForm: () => ({
      then: (resolve) => {
        resolve()
      }
    })
  },
  {
    title: 'Order Info',
    description: 'Put order info here',
    childComponents: <OrderInfo />,
    // simulate returning a promise that run local and optionally server-based validation
    validateForm: (formValues) => ({
      then: (resolve, reject) => {
        const validation = orderInfoValidate(formValues)
        if (validation.isValid) resolve()
        else reject(new Error('There is an error with one or more inputs'))
      }
    })
  },
  {
    title: 'Summary',
    description: 'Summary of info',
    childComponents: <SummaryInfo />,
    // simulate returning a promise that run local and optionally server-based validation
    validateForm: (formValues) => ({
      then: (resolve, reject) => {
        const validation = summaryInfoValidate(formValues)
        if (validation.isValid) resolve()
        else reject(new Error('There is an error with one or more inputs'))
      }
    })
  }
]

// BEGIN Scroll

export const scrollDefaultValues = {
  textArea: '',
  textArea2: '',
  textArea3: '',
  page2TextArea: '',
  page2TextArea2: '',
  page2TextArea3: ''
}

export const scrollSteps = [
  {
    title: 'First step',
    description: 'Long form with scroll invoked',
    childComponents: (
      <Box
        align="start"
        width="medium"
        pad={{ top: 'medium', bottom: 'medium' }}
        margin={{ bottom: 'small' }}
      >
        <Typography type="text" size="medium" testId="">
          This is a longer form to demonstrate the scroll effect. If you scroll
          down on the page and move to the next page, the scroll bar should
          reposition itself to the top of the screen again.
        </Typography>
        <Typography type="text" size="medium" testId="">
          Some further text here
        </Typography>
        <FormField
          margin={{ vertical: 'large' }}
          label="Enter some text"
          name="textArea"
        >
          <TextArea name="textArea" placeholder="Placeholder text" />
        </FormField>
        <FormField
          margin={{ vertical: 'large' }}
          label="Enter some text"
          name="textArea2"
        >
          <TextArea name="textArea2" placeholder="Placeholder text" />
        </FormField>
        <FormField
          margin={{ top: 'large', bottom: 'xsmall' }}
          label="Enter some text"
          name="textArea3"
        >
          <TextArea name="textArea3" placeholder="Placeholder text" />
        </FormField>
      </Box>
    ),
    // simulate returning a promise
    validateForm: () => ({
      then: (resolve) => {
        resolve()
      }
    })
  },
  {
    title: 'Second step',
    description: 'Page 2: Long form with scroll invoked',
    childComponents: (
      <Box
        align="start"
        width="medium"
        pad={{ top: 'medium', bottom: 'medium' }}
        margin={{ bottom: 'small' }}
      >
        <Typography type="text" size="medium" testId="">
          Page 2: This is a longer form to demonstrate the scroll effect. If you
          scroll down on the page and move to the next page, the scroll bar
          should reposition itself to the top of the screen again.
        </Typography>
        <Typography type="text" size="medium" testId="">
          Further information in this paragraph.
        </Typography>
        <FormField
          margin={{ vertical: 'large' }}
          label="Enter some text"
          name="page2TextArea"
        >
          <TextArea name="page2TextArea" placeholder="Placeholder text" />
        </FormField>
        <FormField
          margin={{ vertical: 'large' }}
          label="Enter some text"
          name="page2TextArea2"
        >
          <TextArea name="page2TextArea2" placeholder="Placeholder text" />
        </FormField>
        <FormField
          margin={{ top: 'large', bottom: 'xsmall' }}
          label="Enter some text"
          name="page2TextArea3"
        >
          <TextArea name="page2TextArea3" placeholder="Placeholder text" />
        </FormField>
      </Box>
    ),
    // simulate returning a promise
    validateForm: () => ({
      then: (resolve) => {
        resolve()
      }
    })
  }
]

// BEGIN Loader and disable button steps

export const basicStepsWithLoader = [
  {
    title: 'Final step',
    description: (
      <Typography type="paragraph" size="large" testId="basic">
        Final step with loader.
      </Typography>
    ),
    childComponents: (
      <Box width="medium" pad={{ top: 'medium', bottom: 'large' }}>
        Clicking on the Finish button will disable the button and show the
        loader icon for 2 seconds. This simulates the behavior where
        actionOnSubmit involves calling an API. Until the API returns a
        response, the wizard cannot be closed and if an error is returned by the
        API, the user should be able to resubmit the form after correcting the
        form input values.
      </Box>
    ),
    // simulate returning a promise
    validateForm: () => ({
      then: (resolve) => {
        resolve()
      }
    })
  }
]

export const basicStepWithAdditionalButton = [
  {
    title: 'Basic step title',
    description: (
      <Typography type="paragraph" size="large" testId="basic">
        Basic step description from object
      </Typography>
    ),
    childComponents: (
      <Box width="medium" pad={{ top: 'medium', bottom: 'large' }}>
        Text here
      </Box>
    ),
    // simulate returning a promise
    validateForm: () => ({
      then: (resolve) => {
        resolve()
      }
    }),
    headerButtons: [<Button label="Save Draft" testId="save-draft" />]
  }
]
