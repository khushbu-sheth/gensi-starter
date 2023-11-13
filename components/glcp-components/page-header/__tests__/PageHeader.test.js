import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import {
  SimplePageHeader,
  PageHeaderWithInfo,
  PageHeaderWithAvatar
} from '../PageHeader.stories'

afterEach(() => {
  window.localStorage.removeItem('page-header')
})

describe('PageHeader', () => {
  it('renders the simple page header with title', () => {
    render(<SimplePageHeader {...SimplePageHeader.args} />)
    expect(screen.getByTestId('heading-page-header-1-title')).toHaveTextContent(
      'My Profile'
    )
  })

  it('renders the page header with title and info', () => {
    render(<PageHeaderWithInfo {...PageHeaderWithInfo.args} />)
    expect(screen.getByTestId('heading-page-header-2-title')).toHaveTextContent(
      'My Profile'
    )
    expect(
      screen.getByTestId('paragraph-page-header-2-description')
    ).toHaveTextContent(
      /Access your provisioned applications. Find more apps in theCatalog/i
    )

    fireEvent.click(screen.getByTestId('anchor-to-catalog'))
    expect(window.localStorage.getItem('page-header')).toBe(
      'sub header clicked'
    )
  })

  it('renders the page header with title, info and avatar', () => {
    render(<PageHeaderWithAvatar {...PageHeaderWithAvatar.args} />)
    expect(screen.getByTestId('heading-page-header-3-title')).toHaveTextContent(
      'My Profile'
    )
    expect(
      screen.getByTestId('paragraph-page-header-3-description')
    ).toHaveTextContent('Access your provisioned applications.')
    expect(
      screen.getByTestId('text-page-header-avatar-avatarchar')
    ).toHaveTextContent('C')
  })
})
