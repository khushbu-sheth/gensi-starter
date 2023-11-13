import React, { useRef, useState, useEffect } from 'react'
import { Box /* , Button  */ } from 'grommet'
import { Trash, View } from 'grommet-icons'

import { ModalDialog, ModalHeader } from '../modal-dialog/ModalDialog'
import { Typography } from '../typography/Typography'
import { FilterButton } from '../filter-button/FilterButton'

import { columns as sampleColumns, data as sampleData } from './__data__/data'
import { columns as userColumns, data as userData } from './__data__/userData'
import { DataTable } from './DataTable'

export default {
  title: 'CCS/DataTable',
  component: DataTable
}

const Template = (args) => {
  const [tableData, setTableData] = useState([])
  const [clickRowModalOpen, setClickRowModalOpen] = useState(false)
  const [clickedRowData, setClickedRowData] = useState({})

  /* const [paOnlyDisabled, setPAOnlyDisabled] = useState(true)
  const [priceOver15Disabled, setPriceOver15Disabled] = useState(true) */

  const { grid, search, selection, ...rest } = args
  const { data, onClickRow, ...restGrid } = grid

  const timeoutId = useRef(null)

  useEffect(() => {
    setTableData(data)
  }, [data])

  useEffect(() => {
    return () => {
      if (timeoutId && timeoutId.current) clearTimeout(timeoutId.current)
    }
  }, [timeoutId])

  const handleSearchValueChange = (value) => {
    const p = new Promise((resolve) => {
      const filteredData = data.filter((datum) => {
        return (
          datum.name.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
          datum.location.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
      })
      timeoutId.current = setTimeout(() => resolve(filteredData), 1000)
    })
    p.then((results) => {
      clearTimeout(timeoutId.current)
      setTableData(results)
    })
  }

  const tableSearch = search && {
    ...search,
    onSearchValueChange: handleSearchValueChange
  }

  const sel = selection && {
    ...selection,
    /* bulkActions: (
      <Box direction="row" gap="small" pad="none">
        <Button
          secondary
          size="medium"
          label="Palo Alto Only Action"
          disabled={paOnlyDisabled}
          testId="pa-only-btn"
        />
        <Button
          secondary
          label="Paid > $15 Only Action"
          disabled={priceOver15Disabled}
          testId="paid-more-15-btn"
        />
      </Box>
    ), */
    onSelectionChange: (/* selectionArr */) => {
      // enable/disable bulk actions
      /* const paOnlyEnabled = selectionArr.every((val) => {
        const record = data.find((d) => {
          return d.id === val
        })
        return record.location === 'Palo Alto'
      })

      const priceOver15Enabled = selectionArr.every((val) => {
        const record = data.find((d) => {
          return d.id === val
        })

        return record.paid > 1500
      })

       setPAOnlyDisabled(selectionArr.length === 0 || !paOnlyEnabled)
      setPriceOver15Disabled(selectionArr.length === 0 || !priceOver15Enabled) */
    }
  }

  const ClickRowModal = () => {
    return (
      <ModalDialog
        content={
          <Box margin={{ top: '15px' }}>
            <Typography
              size="medium"
              style={{ maxHeight: '150px', overflow: 'auto' }}
              testId="dialog-content"
              type="text"
            >
              {`${clickedRowData.name} was clicked`}
            </Typography>
          </Box>
        }
        header={
          <ModalHeader
            title={
              <Typography
                size="large"
                style={{ whiteSpace: 'nowrap' }}
                testId="header-title"
                type="text"
                weight="bold"
              >
                Side Drawer Dialog
              </Typography>
            }
            onClose={() => setClickRowModalOpen(false)}
          />
        }
        height="100%"
        onClose={() => setClickRowModalOpen(false)}
        position="right"
        testId="side-drawer-dialog"
      />
    )
  }

  const tableClickableRow = onClickRow && {
    onClickRow: (e) => {
      setClickedRowData(e.datum)
      setClickRowModalOpen(true)
    }
  }

  return (
    <>
      <DataTable
        grid={{
          data: tableData,
          ...tableClickableRow,
          ...restGrid
        }}
        search={tableSearch}
        selection={sel}
        {...rest}
      />
      {clickRowModalOpen && <ClickRowModal />}
    </>
  )
}

const filterBtn = (
  <FilterButton
    filterAttributes={[
      {
        name: 'license-tier',
        label: 'License Tier',
        values: [
          { valueName: 'advanced', valueLabel: 'Advanced' },
          { valueName: 'enterprise', valueLabel: 'Enterprise' },
          {
            valueName: 'f+s',
            valueLabel: 'Foundation + Security'
          }
        ]
      },
      {
        name: 'device-type',
        label: 'Device Type',
        values: [
          { valueName: '1', valueLabel: 'Access Points' },
          { valueName: '2', valueLabel: 'Switches' }
        ]
      },
      {
        name: 'expiration-date',
        label: 'Expiration Date',
        selectionType: 'radio',
        values: [
          { valueName: '11', valueLabel: 'Less than 30 days' },
          { valueName: '22', valueLabel: 'Less than 60 days' },
          { valueName: '33', valueLabel: 'Less than 90 days' }
        ]
      }
    ]}
    onFilterValuesChange={() => {}}
    testId="filter-search-btn"
  />
)

export const Simple = Template.bind({})
Simple.args = {
  grid: {
    data: userData,
    columns: userColumns,
    defaultActions: [
      {
        icon: <Trash />,
        onClick: (datum) => {
          // eslint-disable-next-line no-alert
          alert(`
              delete ${datum.name}
            `)
        }
      }
    ]
  },
  testId: 'simple-data-table'
}

Simple.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qxdE6A2qswCVbW3R6Ti7KG/CCS-v0.09-New-Navigation?node-id=2857%3A29623'
  }
}

export const ClickableWithSummary = Template.bind({})
ClickableWithSummary.args = {
  grid: {
    data: sampleData,
    columns: sampleColumns,
    height: 'medium',
    onClickRow: () => {}
  },
  summary: {
    entityName: 'Device(s)'
  },
  testId: 'with-summary-data-table'
}

export const WithSearch = Template.bind({})
WithSearch.args = {
  grid: {
    data: sampleData,
    columns: sampleColumns,
    height: 'medium'
  },
  summary: {
    entityName: 'Device(s)'
  },
  search: { placeholder: 'Search Name' },
  testId: 'with-search'
}

export const SelectableWithSearchFilter = Template.bind({})
SelectableWithSearchFilter.args = {
  grid: {
    data: sampleData,
    columns: sampleColumns,
    height: 'medium',
    defaultActions: [
      {
        label: 'View Details',
        icon: <View />,
        onClick: (datum) => {
          // eslint-disable-next-line no-alert
          alert(`
            Record was clicked:
            { 
                id: ${datum.id},
                name: ${datum.name}
                email: ${datum.email}
                status: ${datum.status}
            }
            
            You can use onClick() to navigate to a record's detail
            page, open a panel or modal to edit the record, or perform 
            other actions as you see fit.
          `)
        }
      },
      {
        label: 'Delete',
        icon: <Trash />,
        onClick: (datum) => {
          // eslint-disable-next-line no-alert
          alert(`
            delete ${datum.name}
          `)
        }
      }
    ]
  },
  summary: { entityName: 'Device(s)' },
  filterButton: filterBtn,
  search: { placeholder: 'Search Name' },
  selection: {
    primaryKey: 'id',
    bulkActions: {
      actionDropdown: {
        label: 'Actions'
      },
      actions: [
        {
          label: 'delete',
          onClick: () => {}
        }
      ]
    },
    onSelectionChange: () => {}
  },
  testId: 'selectable-data-table'
}

SelectableWithSearchFilter.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/rgRsolnt0ZPeskUwrMgzyb/Device-Management?node-id=2387%3A5666'
  }
}

export const SelectableClickable = Template.bind({})
SelectableClickable.args = {
  grid: {
    data: sampleData,
    columns: sampleColumns,
    onClickRow: () => {},
    height: 'medium'
  },
  summary: { entityName: 'Device(s)' },
  selection: {
    primaryKey: 'id',
    bulkActions: {
      actionDropdown: {
        label: 'Actions'
      },
      actions: [
        {
          label: 'delete',
          onClick: () => {}
        }
      ]
    },
    onSelectionChange: () => {}
  },
  testId: 'selectable-clickable'
}
SelectableClickable.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/rgRsolnt0ZPeskUwrMgzyb/Device-Management?node-id=2350%3A2471'
  }
}
