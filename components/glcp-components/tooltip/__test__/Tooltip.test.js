import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Grommet } from 'grommet'

import { Default } from '../Tooltip.stories'

it('renders the tooltip with info', async () => {
  const info = 'This is a tooltip'
  const tooltip = (
    // NOTE: wrapping with Grommet is required here as they are passing grommet theming in the tooltip component
    <Grommet>
      <Default {...Default.args} />
    </Grommet>
  )
  const { container } = render(tooltip)

  fireEvent.mouseOver(container.firstChild.firstChild)

  expect(await screen.findByText(info)).toBeInTheDocument()
})
