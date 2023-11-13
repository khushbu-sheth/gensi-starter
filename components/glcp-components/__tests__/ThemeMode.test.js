import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { ThemeMode } from '../ThemeMode'

describe('ThemeMode', () => {
  afterEach(cleanup)
  it('should render a child in theme mode', () => {
    const content = 'Test the child'
    render(
      <ThemeMode>
        <div>{content}</div>
      </ThemeMode>
    )

    expect(screen.getByText(content)).toBeInTheDocument()
    expect(screen.getByTestId('theme')).toHaveAttribute(
      'class',
      expect.stringContaining('StyledGrommet')
    )
  })
})
