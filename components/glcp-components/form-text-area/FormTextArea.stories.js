import React from 'react'

import FormTextArea from './FormTextArea'

export default {
  title: 'CCS/Form/FormTextArea',
  component: FormTextArea
}

const Template = (args) => <FormTextArea {...args} />

export const RequiredFormTextArea = Template.bind({})

RequiredFormTextArea.args = {
  label: 'text-area-formField-1',
  required: true,
  name: 'text-area-formField-1',
  testId: 'text-area-formField-1'
}

export const FormTextAreaWithErrorMessage = Template.bind({})

FormTextAreaWithErrorMessage.args = {
  label: 'text-area-formField-2',
  required: true,
  name: 'text-area-formField-2',
  testId: 'text-area-formField-2',
  error: 'this is a required field'
}
