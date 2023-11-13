import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import {
  Default,
  SetDefaultVal,
  WithoutBorder,
  WithArrayOfObjects,
  CustomLabelRenderWithIcon
} from '../Dropdown.stories'

const defaultState = []
const setState = jest.fn(defaultState)
const useStateSpy = jest.spyOn(React, 'useState')
useStateSpy.mockImplementation((init) => [init, setState])

afterEach(() => {
  jest.clearAllMocks()
})

it('renders the dropdown with placeholder as Select and value as empty string', () => {
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('dropdown-default').placeholder).toBe('Select')
  expect(screen.getByTestId('dropdown-default').value).toBe('')
})

it('renders the empty where there is no defaultVal', () => {
  const element = <Default {...Default.args} />
  const { getByTestId } = render(element)
  expect(getByTestId('dropdown-default').value).toBe('')
})

it('show the default value as first', () => {
  const element = <SetDefaultVal {...SetDefaultVal.args} />
  const { getByTestId } = render(element)
  expect(getByTestId('dropdown-default-val').value).toBe('second')
})

it('render the dropdown with no border', () => {
  const element = <WithoutBorder {...WithoutBorder.args} />
  render(element)
  expect(element.props.noBorder).toBe(true)
})
it('render the dropdown with array of objects', () => {
  const element = <WithArrayOfObjects {...WithArrayOfObjects.args} />
  render(element)
  fireEvent.click(screen.getByTestId('dropdown-array-of-objects'))
  expect(document.querySelectorAll('span')[1]).toHaveTextContent('US-West')
})
it('render label with icon', () => {
  render(<CustomLabelRenderWithIcon {...CustomLabelRenderWithIcon.args} />)
  expect(screen.getByTestId('dropdown-custom-renderer')).toBeInTheDocument()
})
