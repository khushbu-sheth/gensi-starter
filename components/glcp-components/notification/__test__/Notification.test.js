import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import {
  TopStatusGood,
  TopStatusWarning,
  TopStatusUnknown,
  BottomStatusCritical
} from '../Notification.stories'

describe('Notification', () => {
  it('renders a status good notification', () => {
    render(<TopStatusGood {...TopStatusGood.args} />)
    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    expect(screen.getByTestId('status-good-notification')).toBeInTheDocument()
    expect(screen.getByText('This is a notifcation')).toBeInTheDocument()

    expect(screen.getByLabelText(/Status is okay/i)).toBeInTheDocument()
  })

  it('renders a status critical notification', () => {
    render(<BottomStatusCritical {...BottomStatusCritical.args} />)

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    expect(
      screen.getByTestId('status-critical-notification')
    ).toBeInTheDocument()
    expect(screen.getByText('This is a notifcation')).toBeInTheDocument()

    expect(screen.getByLabelText('Status is critical')).toBeInTheDocument()
  })

  it('renders a status warning notification', () => {
    render(<TopStatusWarning {...TopStatusWarning.args} />)

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    expect(
      screen.getByTestId('status-warning-notification')
    ).toBeInTheDocument()
    expect(screen.getByText('This is a notifcation')).toBeInTheDocument()

    expect(screen.getByLabelText('Status is warning')).toBeInTheDocument()
  })

  it('renders a status unknown type notification', () => {
    render(<TopStatusUnknown {...TopStatusUnknown.args} />)

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    expect(
      screen.getByTestId('status-unknown-notification')
    ).toBeInTheDocument()
    expect(screen.getByText('This is a notifcation')).toBeInTheDocument()

    expect(screen.getByLabelText('Status is unknown')).toBeInTheDocument()
  })
})
