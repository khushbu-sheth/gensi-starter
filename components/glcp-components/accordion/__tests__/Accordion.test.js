import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { BasicWithIcon } from '../Accordion.stories'

it('renders the accordion in the basicWithIcon state', () => {
  render(<BasicWithIcon {...BasicWithIcon.args} />)
  const accordionPanel = screen.queryAllByTestId('heading-accordion-title')
  expect(accordionPanel[0]).toHaveTextContent('Example 1')
  expect(accordionPanel[1]).toHaveTextContent('Example 2')

  fireEvent.click(accordionPanel[0])
  fireEvent.click(accordionPanel[1])
  const accordionContent = screen.queryAllByTestId('heading-accordion-content')

  expect(accordionContent[0]).toHaveTextContent('HPE')
  expect(accordionContent[1]).toHaveTextContent('HPE Aruba')
  fireEvent.click(accordionPanel[0])
  expect(accordionContent[0]).not.toHaveTextContent('HPE Aruba')
})
