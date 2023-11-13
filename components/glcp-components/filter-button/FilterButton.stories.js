import { Box } from 'grommet'
import React, { useState } from 'react'

import { FilterButton } from './FilterButton'

export default {
  title: 'CCS/FilterButton',
  component: FilterButton
}

const Template = (args) => {
  return <FilterButton {...args} />
}

export const Simple = Template.bind({})
Simple.args = {
  filterAttributes: [
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
    },
    {
      name: 'serial',
      label: 'Serial Number',
      selectionType: 'text'
    },
    {
      name: 'expiry-date',
      label: 'Expiry Date',
      selectionType: 'dropdown',
      values: [
        { valueName: '10', valueLabel: 'Less than 30 days' },
        { valueName: '20', valueLabel: 'Less than 60 days' },
        { valueName: '30', valueLabel: 'Less than 90 days' }
      ]
    },
    {
      name: 'date-range',
      label: 'Date Range',
      selectionType: 'date-range'
    }
  ],
  onFilterValuesChange: () => {},
  testId: 'simple-filter-button'
}

Simple.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KGfphc2fWsEF8GpRC9vKbS/CCS-v0.1?node-id=17467%3A54300'
  }
}

const SearchTemplate = (args) => {
  const [defaultSearchOptions, setDefaultSearchOptions] = useState([])
  const searchArgs = {
    ...args,
    updateValues: (searchText) => {
      const data = [
        { valueLabel: 'Apple: apple', valueName: '0' },
        { valueLabel: 'Blueberry:blueberry', valueName: '1' },
        { valueLabel: 'Orage: orange', valueName: '2' }
      ]

      setDefaultSearchOptions(
        data.filter((d) => {
          return d.valueLabel.indexOf(searchText) !== -1
        })
      )
    },
    values: [defaultSearchOptions]
  }

  return <FilterButton {...searchArgs} />
}
export const Search = SearchTemplate.bind({})
Search.args = {
  filterAttributes: [
    {
      label: 'Tags',
      name: 'tags',
      selectionType: 'search',
      selectedValuesRenderer: (suggestion, onRemoveSelection) => {
        return (
          <Box
            pad="xsmall"
            margin={{
              top: 'xsmall',
              bottom: 'xsmall',
              left: '2px',
              right: '2px'
            }}
            border={{ all: 'large' }}
            style={{ borderRadius: '50px' }}
            onClick={onRemoveSelection}
          >
            {suggestion.label}
          </Box>
        )
      }
    }
  ],
  onFilterValuesChange: () => {},
  initSelectedFilterValues: {
    tags: [
      {
        label: 'Apple: apple',
        value: '0'
      }
    ]
  },
  testId: 'search-filter-button'
}
