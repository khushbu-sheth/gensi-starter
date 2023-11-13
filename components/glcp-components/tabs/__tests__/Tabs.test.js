import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { SimpleTabs, TabsWithIcon } from '../Tabs.stories'

describe('Tabs', () => {
  it('renders the simple tabs with out icon', () => {
    render(<SimpleTabs {...SimpleTabs.args} />)
    fireEvent.click(screen.getByTestId('all-devices-tab'))
    expect(screen.getByTestId('text-all-devices-tab')).toHaveTextContent(
      'All Devices'
    )
    expect(screen.getByTestId('content-all-devices-tab')).toHaveTextContent(
      /All Devices tab content/i
    )
  })

  it('renders the tabs with icon', () => {
    render(<TabsWithIcon {...TabsWithIcon.args} />)
    fireEvent.click(screen.getByTestId('ready-to-go-tab'))
    expect(screen.getByTestId('text-ready-to-go-tab')).toHaveTextContent(
      'Ready to Go'
    )
    expect(screen.getByTestId('content-ready-to-go-tab')).toHaveTextContent(
      /Ready to Go tab content/i
    )
  })
})
