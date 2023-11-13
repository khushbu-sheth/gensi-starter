import React from 'react'
import {
  render,
  screen,
  fireEvent,
  within,
  cleanup
} from '@testing-library/react'
import { Grommet } from 'grommet'

import {
  Simple,
  WithSearch,
  ClickableWithSummary,
  SelectableWithSearchFilter,
  SelectableClickable
} from '../DataTable.stories'

describe('Data Table', () => {
  afterEach(cleanup)

  it('renders a simple data table', () => {
    render(<Simple {...Simple.args} />)
    const simpleTable = screen.getByTestId('simple-data-table')
    expect(simpleTable).toBeInTheDocument()
  })

  it('renders a data table with summary', () => {
    render(
      <Grommet>
        <ClickableWithSummary {...ClickableWithSummary.args} />
      </Grommet>
    )
    const withSummary = screen.getByTestId('with-summary-data-table')
    expect(withSummary).toBeInTheDocument()

    const tableSummary = within(withSummary).getByTestId('table-summary')
    expect(tableSummary).toBeInTheDocument()

    // make sure row click, does open the dialog
    const row = within(withSummary).queryByText('Alan')
    fireEvent.click(row)
    const rowClickDlg = screen.queryByTestId('side-drawer-dialog')
    expect(rowClickDlg).toBeInTheDocument()
  })

  it('renders a data table with search', async () => {
    render(<WithSearch {...WithSearch.args} />)

    const withSearchTable = screen.getByTestId('with-search')
    expect(withSearchTable).toBeInTheDocument()

    const tableSummary = within(withSearchTable).getByTestId('table-summary')
    expect(tableSummary).toBeInTheDocument()

    const searchField = within(withSearchTable).getByTestId('search-field')
    expect(searchField).toBeInTheDocument()
  })

  it('renders a selectable data table', () => {
    render(
      <Grommet>
        <SelectableWithSearchFilter {...SelectableWithSearchFilter.args} />
      </Grommet>
    )
    const selectableTable = screen.getByTestId('selectable-data-table')
    expect(selectableTable).toBeInTheDocument()

    const tableSummary = within(selectableTable).getByTestId('table-summary')
    expect(tableSummary).toBeInTheDocument()

    const tableSearch = within(selectableTable).getByTestId('search-field')
    expect(tableSearch).toBeInTheDocument()

    /* const bulkActions = within(selectableTable).getByTestId('bulk-actions')
    expect(bulkActions).toBeInTheDocument() */

    const headerCheckbox = within(selectableTable).getAllByRole('checkbox')[0]
    fireEvent.click(headerCheckbox)

    const filterBtn = within(selectableTable).getByTestId('filter-search-btn')
    fireEvent.click(filterBtn)
    const filterDlg = screen.getByTestId('filter-modal-dialog')
    expect(filterDlg).toBeInTheDocument()

    const searchField = within(selectableTable).getByTestId('search-field')
    expect(selectableTable).toBeInTheDocument()
    const search = jest.fn()
    render(searchField.addEventListener('change', search))
    fireEvent.change(searchField, { target: { value: 'alan' } })
    expect(search).toHaveBeenCalled()
  })

  it('renders a selectable no search data table', () => {
    render(
      <Grommet>
        <SelectableClickable {...SelectableClickable.args} />
      </Grommet>
    )
    const selectableClickable = screen.getByTestId('selectable-clickable')
    expect(selectableClickable).toBeInTheDocument()

    const tableSummary =
      within(selectableClickable).getByTestId('table-summary')
    expect(tableSummary).toBeInTheDocument()

    const tableSearch =
      within(selectableClickable).queryByTestId('search-field')
    expect(tableSearch).toBeNull()

    /* const bulkActions = within(selectableClickable).getByTestId('bulk-actions')
    expect(bulkActions).toBeInTheDocument() */

    // make sure header checkbox click, selects all row checkboxes
    const headerCheckbox =
      within(selectableClickable).getAllByRole('checkbox')[0]
    fireEvent.click(headerCheckbox)
    const rowCheckboxes = within(selectableClickable).getAllByRole('checkbox')
    expect(rowCheckboxes).toBeTruthy()

    fireEvent.click(rowCheckboxes[1])
    // make sure row checkbox click, does not trigger row click
    let rowClickDlg =
      within(selectableClickable).queryAllByTestId('side-drawer-dialog')
    expect(rowClickDlg).toHaveLength(0)

    // make sure row click, does open the dialog
    const row = within(selectableClickable).queryByText('Alan')
    fireEvent.click(row)
    rowClickDlg = screen.queryAllByTestId('side-drawer-dialog')
    expect(rowClickDlg).not.toHaveLength(0)
  })
})
