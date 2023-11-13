import React from 'react'
import {
  render,
  screen,
  fireEvent,
  within,
  cleanup
} from '@testing-library/react'
import { Grommet } from 'grommet'

import { Simple, Search } from '../FilterButton.stories'

describe('FilterButton', () => {
  afterEach(cleanup)

  it('Test: renders a simple filter button', async () => {
    const mockFunction = jest.fn()
    const properties = {
      ...Simple.args,
      onFilterValuesChange: mockFunction
    }
    render(
      <Grommet>
        <Simple {...properties} />
      </Grommet>
    )

    const filterBtn = screen.getByTestId('simple-filter-button')
    expect(filterBtn).toBeInTheDocument()

    fireEvent.click(filterBtn)
    const filterDlg = screen.getByTestId('filter-modal-dialog')
    expect(filterDlg).toBeInTheDocument()

    const checkboxs = within(filterDlg).getAllByRole('checkbox')
    fireEvent.click(checkboxs[0])
    expect(checkboxs[0]).toBeTruthy()

    fireEvent.click(checkboxs[3])
    expect(checkboxs[3]).toBeTruthy()

    const radioButtons = within(filterDlg).getAllByRole('radio')
    fireEvent.click(radioButtons[0])
    expect(radioButtons[0]).toBeTruthy()

    const textInput = within(filterDlg).getAllByRole('textbox')
    fireEvent.change(textInput[0], { target: { value: 'some value' } })
    expect(textInput[0].value).toBe('some value')

    const select = within(filterDlg).getByPlaceholderText('Select')
    expect(select).toBeInTheDocument()

    const dateRange = within(filterDlg).getByPlaceholderText(
      'mm/dd/yyyy-mm/dd/yyyy'
    )
    expect(dateRange).toBeInTheDocument()

    const applyFilterBtn = within(filterDlg).getByTestId('apply-filters-btn')
    expect(applyFilterBtn).toBeInTheDocument()
    fireEvent.click(applyFilterBtn)

    const clearFilterAnchor = screen.getByTestId('clear-filters-anchor')
    expect(clearFilterAnchor).toBeInTheDocument()

    let filterCount = screen.getByTestId('filter-count')
    expect(filterCount).toBeInTheDocument()

    fireEvent.click(clearFilterAnchor)
    filterCount = screen.queryByTestId('filter-count')
    expect(filterCount).not.toBeInTheDocument()
  })

  it('Test: renders a Search filter button', async () => {
    const mockFunction = jest.fn()
    const properties = {
      ...Search.args,
      onFilterValuesChange: mockFunction
    }

    render(
      <Grommet>
        <Search {...properties} />
      </Grommet>
    )

    const filterBtn = screen.getByTestId('search-filter-button')
    expect(filterBtn).toBeInTheDocument()

    fireEvent.click(filterBtn)
    const filterDlg = screen.getAllByTestId('filter-modal-dialog')[1]
    expect(filterDlg).toBeInTheDocument()

    const searchBtn = within(filterDlg).getByTestId('search')
    expect(searchBtn).toBeInTheDocument()

    fireEvent.change(searchBtn, { target: { value: 'Orange' } })

    const pillBox = within(filterDlg).getByText(/Apple/i)
    expect(pillBox).toBeInTheDocument()

    fireEvent.click(pillBox)
    expect(pillBox).not.toBeInTheDocument()

    const applyFilterBtn = within(filterDlg).getByTestId('apply-filters-btn')
    expect(applyFilterBtn).toBeInTheDocument()
    fireEvent.click(applyFilterBtn)
  })
})
