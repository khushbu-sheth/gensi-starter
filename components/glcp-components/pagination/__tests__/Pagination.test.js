import React from 'react'
import { render, screen } from '@testing-library/react'

import {
  Default,
  WithCustomItemsPerPage,
  WithSelectedPage,
  ShowPageIdxInfo
} from '../Pagination.stories'

afterEach(() => {
  window.localStorage.removeItem('pagination')
})

it('renders the Default Pagination', () => {
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('pagination-object')).toBeTruthy()
})

it('check setpage is called for default', () => {
  Default.args = {
    ...Default.args,
    totalItems: 1,
    itemsPerPage: 1,
    page: 2,
    testId: 'pagination-object'
  }
  render(<Default {...Default.args} />)
  expect(window.localStorage.getItem('pagination')).toBe(
    'setPage called for Default'
  )
})

it('check setpage is called for WithCustomItemsPerPage', () => {
  WithCustomItemsPerPage.args = {
    ...WithCustomItemsPerPage.args,
    totalItems: 1,
    itemsPerPage: 1,
    page: 2,
    testId: 'pagination-object'
  }
  render(<WithCustomItemsPerPage {...WithCustomItemsPerPage.args} />)
  expect(window.localStorage.getItem('pagination')).toBe(
    'setPage called for WithCustomItemsPerPage'
  )
})

it('check setpage is called for WithSelectedPage', () => {
  WithSelectedPage.args = {
    ...WithSelectedPage.args,
    totalItems: 1,
    itemsPerPage: 1,
    page: 2,
    testId: 'pagination-object'
  }
  render(<WithSelectedPage {...WithSelectedPage.args} />)
  expect(window.localStorage.getItem('pagination')).toBe(
    'setPage called for WithSelectedPage'
  )
})

it('check setpage is called for ShowPageIdxInfo', () => {
  ShowPageIdxInfo.args = {
    ...ShowPageIdxInfo.args,
    totalItems: 1,
    itemsPerPage: 1,
    page: 2,
    testId: 'pagination-object'
  }
  render(<ShowPageIdxInfo {...ShowPageIdxInfo.args} />)
  expect(window.localStorage.getItem('pagination')).toBe(
    'setPage called for ShowPageIdxInfo'
  )
})

it('renders the Default Pagination With no totalItems, should not show', () => {
  Default.args = {
    totalItems: 0,
    testId: 'pagination-object'
  }
  render(<Default {...Default.args} />)
  expect(screen.getByTestId('pagination-object')).toHaveTextContent('')
})

it('renders the WithSelectedPage Pagination', () => {
  render(<WithSelectedPage {...WithSelectedPage.args} />)
  expect(screen.getByTestId('pagination-object')).toBeTruthy()
})

it('renders the WithCustomItemsPerPage Pagination', () => {
  render(<WithCustomItemsPerPage {...WithCustomItemsPerPage.args} />)
  expect(screen.getByTestId('pagination-object')).toBeTruthy()
})

it('renders the WithCustomItemsPerPage Pagination With less item than itemperpage, should not show', () => {
  WithCustomItemsPerPage.args = {
    totalItems: 4,
    itemsPerPage: 5,
    testId: 'pagination-object'
  }
  render(<WithCustomItemsPerPage {...WithCustomItemsPerPage.args} />)
  expect(screen.getByTestId('pagination-object')).toHaveTextContent('')
})

it('renders the ShowPageIdxInfo Pagination with pageIdxInfo', () => {
  ShowPageIdxInfo.args = {
    totalItems: 7,
    itemsPerPage: 5,
    pageIdxInfo: 'Showing 6-7 of 7',
    testId: 'pagination-object'
  }
  render(<ShowPageIdxInfo {...ShowPageIdxInfo.args} />)
  expect(screen.getByTestId('pagination-object')).toHaveTextContent(
    'Showing 6-7 of 7'
  )
})

it('renders the WithSelectedPage Pagination With page over max page, should show last page', () => {
  WithSelectedPage.args = {
    totalItems: 7,
    page: 4,
    pageIdxInfo: 'Showing 6-7 of 7',
    testId: 'pagination-object'
  }
  render(<WithSelectedPage {...WithSelectedPage.args} />)
  expect(screen.getByTestId('pagination-object')).toHaveTextContent(
    'Showing 6-7 of 7'
  )
})
