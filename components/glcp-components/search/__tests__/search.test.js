import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Default, WithPropsData, WithInitSearchData } from '../Search.stories'

afterEach(() => {
  window.localStorage.removeItem('search-text')
})

it('renders the Default Search', () => {
  render(<Default {...Default.args} />)
  const searchField = screen.getByTestId('search-field')
  const search = jest.fn()
  render(searchField.addEventListener('change', search))
  fireEvent.change(searchField, { target: { value: 'M' } })
  expect(search).toHaveBeenCalled()
  expect(screen.getByTestId('search-field')).toHaveValue('M')
  expect(window.localStorage.getItem('search-text')).toBe('M')
})

it('renders the WithPropsData Search', () => {
  render(<WithPropsData {...WithPropsData.args} />)
  expect(screen.getByTestId('search-field')).toBeTruthy()
  const inputNode = screen.getByPlaceholderText('Search Names')
  expect(inputNode).toBeTruthy()
  fireEvent.change(inputNode, { target: { value: 'John' } })
  expect(window.localStorage.getItem('search-text')).toBe('John')
})

it('renders the WithInitSearchData Search', () => {
  render(<WithInitSearchData {...WithInitSearchData.args} />)
  expect(screen.getByTestId('search-field')).toBeTruthy()
  expect(screen.getByTestId('search-field')).toHaveValue('John')
  fireEvent.change(screen.getByTestId('search-field'), {
    target: { value: '' }
  })
  expect(window.localStorage.getItem('search-text')).toBe('')
})
