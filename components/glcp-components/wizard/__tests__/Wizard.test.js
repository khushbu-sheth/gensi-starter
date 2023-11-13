import React from 'react'
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'

import {
  WithValidationSavedValues,
  BasicFunctionDescription,
  WizardStepsOtherActions,
  WizardStepWithAdditionalButton
} from '../Wizard.stories'

beforeAll(() => {
  // mock scrollIntoView since it isn't defined when running unit tests
  window.HTMLElement.prototype.scrollIntoView = () => {}
})

it('verifies behavior of header', () => {
  render(<WithValidationSavedValues {...WithValidationSavedValues.args} />)

  // Check header previous button behavior
  expect(screen.queryByTestId('button-header-previous')).toBeNull()
  expect(screen.getByTestId('heading-step-title')).toHaveTextContent(
    'User Details'
  )
  fireEvent.click(screen.getByTestId('button-next'))
  expect(screen.queryByTestId('button-header-previous')).not.toBeNull()
  expect(screen.getByTestId('button-header-previous')).toHaveTextContent(
    'User Details'
  )
  expect(screen.getByTestId('heading-step-title')).toHaveTextContent(
    'Order Info'
  )

  fireEvent.click(screen.getByTestId('button-header-previous'))
  expect(screen.getByTestId('heading-step-title')).toHaveTextContent(
    'User Details'
  )
})

it('verifies wording and behavior of cancellation layer with specified strings', async () => {
  render(<WithValidationSavedValues {...WithValidationSavedValues.args} />)

  // Check header cancel button behavior
  expect(screen.queryByTestId('heading-cancel-heading')).toBeNull()
  expect(screen.getByTestId('button-header-cancel')).not.toBeNull()
  fireEvent.click(screen.getByTestId('button-header-cancel'))
  expect(screen.getByTestId('heading-cancel-heading')).toHaveTextContent(
    'Cancel Setup?'
  )
  expect(screen.getByTestId('text-cancel-text')).toHaveTextContent(
    'Cancelling setup will cause you to lose all of your progress. Are you sure you want to cancel SSO setup?'
  )
  expect(screen.getByTestId('button-cancel-continue')).toHaveTextContent(
    'Continue Setup'
  )
  expect(screen.getByTestId('button-cancel-exit')).toHaveTextContent(
    'End Setup'
  )

  // Close with continue button and confirm
  fireEvent.click(screen.getByTestId('button-cancel-continue'))
  await waitForElementToBeRemoved(() =>
    screen.queryByTestId('heading-cancel-heading')
  )
  expect(screen.queryByTestId('heading-cancel-heading')).toBeNull()
  expect(screen.queryByTestId('text-cancel-text')).toBeNull()
  expect(screen.queryByTestId('button-cancel-exit')).toBeNull()

  // Open and close with exit button and confirm
  fireEvent.click(screen.getByTestId('button-header-cancel'))
  expect(screen.queryByTestId('heading-cancel-heading')).not.toBeNull()
  fireEvent.click(screen.getByTestId('button-cancel-exit'))
  await waitForElementToBeRemoved(() =>
    screen.queryByTestId('heading-cancel-heading')
  )
  expect(screen.queryByTestId('heading-cancel-heading')).toBeNull()

  // TODO: Cannot test by clicking outside, as the window size seems to be too small
  // or there is some other limitation due to Jest testing

  // Open and close by hitting Escape and confirm
  fireEvent.click(screen.getByTestId('button-header-cancel'))
  expect(screen.queryByTestId('heading-cancel-heading')).not.toBeNull()
  // Hit escape key in relation to something on the cancel dialog
  const element = screen.getByTestId('heading-cancel-heading')
  fireEvent.keyDown(element, {
    key: 'Escape',
    code: 'Escape',
    keyCode: 27,
    charCode: 27
  })
  await waitForElementToBeRemoved(() =>
    screen.queryByTestId('heading-cancel-heading')
  )
  expect(screen.queryByTestId('heading-cancel-heading')).toBeNull()
})

it('verifies wording of cancellation layer with default strings', async () => {
  // Use story with default cancel strings
  render(<BasicFunctionDescription {...BasicFunctionDescription.args} />)

  // Check header cancel button behavior
  expect(screen.getByTestId('button-header-cancel')).not.toBeNull()
  fireEvent.click(screen.getByTestId('button-header-cancel'))
  expect(screen.getByTestId('heading-cancel-heading')).toHaveTextContent(
    'Cancel'
  )
  expect(screen.getByTestId('text-cancel-text')).toHaveTextContent(
    'Cancelling setup will lose all of your progress. Are you sure you want to exit the setup?'
  )
  expect(screen.getByTestId('button-cancel-continue')).toHaveTextContent(
    'No, continue setup'
  )
  expect(screen.getByTestId('button-cancel-exit')).toHaveTextContent(
    'Yes, cancel setup'
  )

  // Close to clean up for next test
  fireEvent.click(screen.getByTestId('button-cancel-exit'))
  await waitForElementToBeRemoved(() =>
    screen.queryByTestId('heading-cancel-heading')
  )
})

it('verifies Next and Finish visibility', () => {
  render(<WithValidationSavedValues {...WithValidationSavedValues.args} />)

  expect(screen.queryByTestId('button-next')).not.toBeNull()
  expect(screen.queryByTestId('button-finish')).toBeNull()

  // Go to second page and confirm Next button
  fireEvent.click(screen.getByTestId('button-next'))
  expect(screen.queryByTestId('button-finish')).toBeNull()
  expect(screen.getByTestId('button-next')).toHaveTextContent('Next')
  expect(screen.getByTestId('email-field-input')).toBeVisible()
  const element = screen.getByTestId('email-field-input')
  fireEvent.change(element, { target: { value: 'a@b.c' } })

  // Go to third page and confirm Finish button
  fireEvent.click(screen.getByTestId('button-next'))
  expect(screen.getByTestId('button-finish')).toHaveTextContent('Finish')
  expect(screen.queryByTestId('button-next')).toBeNull()
})

it('verifies step number behavior', () => {
  render(<WithValidationSavedValues {...WithValidationSavedValues.args} />)

  expect(screen.getByTestId('step-of-total')).toHaveTextContent('Step 1 of 3')
  // Go to second page and confirm step
  fireEvent.click(screen.getByTestId('button-next'))
  expect(screen.getByTestId('step-of-total')).toHaveTextContent('Step 2 of 3')

  // Go to third page and confirm step
  const element = screen.getByTestId('email-field-input')
  fireEvent.change(element, { target: { value: 'a@b.c' } })
  fireEvent.click(screen.getByTestId('button-next'))
  expect(screen.getByTestId('step-of-total')).toHaveTextContent('Step 3 of 3')
})

it('verifies validation behavior', () => {
  render(<WithValidationSavedValues {...WithValidationSavedValues.args} />)

  // Go to second page and verify no errors, then attempt to go to the third
  // without filling in an email
  fireEvent.click(screen.getByTestId('button-next'))

  expect(screen.getByTestId('heading-step-title')).toHaveTextContent(
    'Order Info'
  )
  expect(
    screen.getByTestId('email-form-field').lastChild
  ).not.toHaveTextContent('Invalid email address')
  expect(screen.queryByTestId('form-global-error')).toBeNull()
  fireEvent.click(screen.getByTestId('button-next'))

  // Confirm error and the page hasn't moved nor has the button changed
  // expect(screen.getByTestId('email-form-field').lastChild).toHaveTextContent(
  //   'Invalid email address'
  // )
  expect(screen.queryByTestId('form-global-error')).not.toBeNull()
  expect(screen.queryByTestId('form-global-error')).toHaveTextContent(
    'There is an error with one or more inputs'
  )
  expect(screen.getByTestId('heading-step-title')).toHaveTextContent(
    'Order Info'
  )
  expect(screen.queryByTestId('button-finish')).toBeNull()

  // Now set email and confirm error clears
  const element = screen.getByTestId('email-field-input')
  fireEvent.change(element, { target: { value: 'a@b.c' } })
  expect(
    screen.getByTestId('email-form-field').lastChild
  ).not.toHaveTextContent('Invalid email address.')
  expect(screen.queryByTestId('form-global-error')).toBeNull()

  // Now advance to next page and confirm
  fireEvent.click(screen.getByTestId('button-next'))
  expect(screen.getByTestId('heading-step-title')).toHaveTextContent('Summary')
  expect(screen.queryByTestId('button-finish')).not.toBeNull()
  expect(
    screen.getByTestId('password-form-field').lastChild
  ).not.toHaveTextContent('Invalid password.')
  expect(screen.queryByTestId('form-global-error')).toBeNull()

  // Attempt to finish without filling in a password
  fireEvent.click(screen.getByTestId('button-finish'))

  expect(screen.getByTestId('password-form-field').lastChild).toHaveTextContent(
    'Invalid password.'
  )
  expect(screen.queryByTestId('form-global-error')).not.toBeNull()
  expect(screen.queryByTestId('form-global-error')).toHaveTextContent(
    'There is an error with one or more inputs'
  )

  // Now set password and confirm error clears
  const elementII = screen.getByTestId('password-field-input')
  fireEvent.change(elementII, { target: { value: 'a@B8' } })
  expect(
    screen.getByTestId('password-form-field').lastChild
  ).not.toHaveTextContent('Invalid password.')
  expect(screen.queryByTestId('form-global-error')).toBeNull()

  // Click finish and confirm stays on page and no further errors
  fireEvent.click(screen.getByTestId('button-finish'))
  expect(screen.getByTestId('heading-step-title')).toHaveTextContent('Summary')
  expect(
    screen.getByTestId('password-form-field').lastChild
  ).not.toHaveTextContent('Invalid password.')
  expect(screen.queryByTestId('form-global-error')).toBeNull()
})

it('verifies submit behavior on intermediate screen', () => {
  render(<WithValidationSavedValues {...WithValidationSavedValues.args} />)

  fireEvent.click(screen.getByTestId('button-next'))
  expect(
    screen.getByTestId('email-form-field').lastChild
  ).not.toHaveTextContent('Invalid email address.')
  expect(screen.queryByTestId('form-global-error')).toBeNull()
  // Hit submit to simulate enter key in password field to trigger submit
  const element = screen.getByTestId('email-field-input')
  fireEvent.submit(element)

  // Confirm error and the page hasn't moved nor has the button changed
  expect(screen.getByTestId('email-form-field').lastChild).toHaveTextContent(
    'Invalid email address'
  )
  expect(screen.queryByTestId('form-global-error')).not.toBeNull()
  expect(screen.queryByTestId('form-global-error')).toHaveTextContent(
    'There is an error with one or more inputs'
  )
  expect(screen.getByTestId('heading-step-title')).toHaveTextContent(
    'Order Info'
  )
  expect(screen.queryByTestId('button-finish')).toBeNull()

  fireEvent.change(element, { target: { value: 'a@b.c' } })
  expect(
    screen.getByTestId('email-form-field').lastChild
  ).not.toHaveTextContent('Invalid email address.')
  expect(screen.queryByTestId('form-global-error')).toBeNull()

  // Hit submit again to simulate enter key in password field to trigger submit
  // Expect to advance with no errors
  fireEvent.submit(element)

  expect(
    screen.getByTestId('password-form-field').lastChild
  ).not.toHaveTextContent('Invalid email address.')
  expect(screen.queryByTestId('form-global-error')).toBeNull()
  expect(screen.queryByTestId('button-finish')).not.toBeNull()
  expect(screen.getByTestId('heading-step-title')).toHaveTextContent('Summary')
})

it('Check Other Actions button is present in appropriate Step', () => {
  render(<WizardStepsOtherActions {...WizardStepsOtherActions.args} />)
  expect(screen.getByTestId('skip-order')).toHaveTextContent('Help')
  fireEvent.click(screen.getByTestId('skip-order'))

  fireEvent.click(screen.getByTestId('button-next'))
  expect(screen.getByTestId('skip-summary')).toHaveTextContent('Skip Summary')
  fireEvent.click(screen.getByTestId('skip-summary'))
  fireEvent.click(screen.getByTestId('button-header-cancel'))

  expect(screen.getByTestId('button-cancel-exit')).toHaveTextContent(
    'Yes, cancel setup'
  )
  fireEvent.click(screen.getByTestId('button-cancel-exit'))
})

it('Check additional header buttons are rendered', () => {
  render(
    <WizardStepWithAdditionalButton {...WizardStepWithAdditionalButton.args} />
  )
  expect(screen.queryByTestId('save-draft')).toHaveTextContent('Save Draft')
})
