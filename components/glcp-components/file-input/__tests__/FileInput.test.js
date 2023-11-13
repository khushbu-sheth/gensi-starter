import React from 'react'
import { render, screen } from '@testing-library/react'

import {
  Simple,
  Multiple,
  SingleCustomLabel,
  MultCustomLabel
} from '../FileInput.stories'

const defaultState = []
const setState = jest.fn(defaultState)
const useStateSpy = jest.spyOn(React, 'useState')
useStateSpy.mockImplementation((init) => [init, setState])

afterEach(() => {
  jest.clearAllMocks()
})

describe('TEST:file-input', () => {
  it('should render a label and a file input field for single file', () => {
    render(<Simple {...Simple.args} />)
    expect(screen.getByText('Drag and drop')).toBeInTheDocument()
    expect(screen.getByTestId('file-input-id')).toHaveAttribute(
      'label',
      'Single file input'
    )
  })

  it('should render a label and a file input field for multiple files', () => {
    render(<Multiple {...Multiple.args} />)
    expect(screen.getByText('Drag and drop')).toBeInTheDocument()
    expect(screen.getByTestId('file-input-multiple')).toHaveAttribute(
      'label',
      'Multiple file input'
    )
  })

  it('should render a label, a file input field and custom labels for single file', () => {
    render(<SingleCustomLabel {...SingleCustomLabel.args} />)
    expect(
      screen.getByText('Please drag and drop file here')
    ).toBeInTheDocument()
    expect(screen.getByText('Select the file')).toBeInTheDocument()
    expect(screen.getByTestId('file-input-custom')).toHaveAttribute(
      'label',
      'Custom file input'
    )
  })

  it('should render a label, a file input field and custom labels for multiple files', () => {
    render(<MultCustomLabel {...MultCustomLabel.args} />)
    expect(screen.getByText('drag and drop files')).toBeInTheDocument()
    expect(screen.getByText('Select Files')).toBeInTheDocument()
    expect(screen.getByTestId('file-input-custom-multi')).toHaveAttribute(
      'label',
      'Custom files input'
    )
  })
})
