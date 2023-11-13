import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Default } from '../Logo.stories'
import arubaImage from '../../../images/aruba.png'

afterEach(() => {
  window.localStorage.removeItem('logo-clicked')
})
it('renders the logo with the tabindex', () => {
  Default.args = {
    size: 'small',
    url: arubaImage,
    testId: 'logo-default'
  }
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('logo-default')).toBeTruthy()
})
it('renders the logo with the onclick', () => {
  Default.args = {
    size: 'small',
    url: arubaImage,
    onClick: () => {
      localStorage.setItem('logo-clicked', 'yes')
    },
    testId: 'logo-default-click'
  }
  render(<Default {...Default.args} />)
  fireEvent.click(screen.getByTestId('logo-default-click'))
  expect(window.localStorage.getItem('logo-clicked')).toBe('yes')
})
it('renders the logo with the onclick with param', () => {
  Default.args = {
    size: 'small',
    url: arubaImage,
    onClick: (param) => {
      localStorage.setItem('logo-clicked', param.test)
    },
    param: { test: 'param1' },
    testId: 'logo-default-click'
  }
  render(<Default {...Default.args} />)
  fireEvent.click(screen.getByTestId('logo-default-click'))
  expect(window.localStorage.getItem('logo-clicked')).toBe('param1')
})
