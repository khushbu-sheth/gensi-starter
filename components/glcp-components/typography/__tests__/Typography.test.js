import React from 'react'
import { render, screen } from '@testing-library/react'

import { H1, ParagraphDefault, TextDefault } from '../Typography.stories'

it('renders the h1 text as Heading Example', () => {
  H1.args = { type: 'heading', testId: 'text' }
  render(<H1 {...H1.args} />)
  expect(screen.getByTestId('heading-text')).toHaveTextContent('Sample Text')
})
it('renders the paragraph text as Paragraph Example', () => {
  ParagraphDefault.args = { type: 'paragraph', testId: 'text' }
  render(<ParagraphDefault {...ParagraphDefault.args} />)
  expect(screen.getByTestId('paragraph-text')).toHaveTextContent('Sample Text')
})
it('renders the default text as Text Example', () => {
  TextDefault.args = { type: 'text', testId: 'text' }
  render(<TextDefault {...TextDefault.args} />)
  expect(screen.getByTestId('text-text')).toHaveTextContent('Sample Text')
})
