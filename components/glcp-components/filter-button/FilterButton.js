import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Anchor,
  Stack,
  FormField,
  CheckBoxGroup,
  RadioButton,
  TextInput,
  DateInput
} from 'grommet'
import { Filter, Search as SearchIcon } from 'grommet-icons'
import styled from 'styled-components'
import debounce from 'lodash/debounce'

import { ModalDialog, ModalHeader } from '../modal-dialog/ModalDialog'
import { Button } from '../button/Button'
import { ButtonGroup } from '../button-group/ButtonGroup'
import { Typography } from '../typography/Typography'
import { CCSForm } from '../form/Form'
import { dimensions } from '../utils'
import { Dropdown } from '../dropdown/Dropdown'
/* Inputs should always be accompanied by labels for accessibility. An icon
    may serve as a label if 1) the icon meaning is well understood, and 2)
    has an 'aria-labelledby' attribute. For additional detail:
    https://www.w3.org/WAI/tutorials/forms/labels/#using-aria-labelledby
    https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms/Basic_form_hints
  */
const StyledTextInput = styled(TextInput).attrs(() => ({
  'aria-labelledby': 'search-icon'
}))`
  font-size: 18px;
`

const filterAttributesPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    selectionType: PropTypes.oneOf([
      'checkbox',
      'radio',
      'text',
      'dropdown',
      'date-range',
      'search'
    ]), // default-"checkbox"
    values: PropTypes.arrayOf(
      PropTypes.shape({
        valueName: PropTypes.string,
        valueLabel: PropTypes.string
      })
    ),
    height: PropTypes.oneOf(dimensions), // applicable only for checkbox and radiobutton for internal scroll

    /**
     * used to get new data to display as values
     * for now, it's used to get new values (for example using an API call in case of search)
     */
    updateValues: PropTypes.func,

    /**
     * a renderer for selected values if one is needed
     * for now, it's only used to render selected values for search
     */
    selectedValuesRenderer: PropTypes.func
  }).isRequired
)

const RenderFormInputField = ({
  selectionType,
  options,
  name,
  label,
  selectedFilterValues,
  setSelectedFilterValues,
  onFilterValuesChange,
  height,
  selectedValuesRenderer,
  updateValues
}) => {
  const defaultDropDownOptions =
    selectionType === 'dropdown' || selectionType === 'search'
      ? options.map((option) => {
          return { label: option.label, value: option.name }
        })
      : []
  const [dropDownOptions, setDropDownOptions] = useState(defaultDropDownOptions)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDebouncedSearchValue = useCallback(
    debounce((text) => {
      if (selectionType === 'dropdown') {
        const filteredValues = defaultDropDownOptions.filter((o) =>
          o.label.includes(text)
        )
        setDropDownOptions(filteredValues)
      } else {
        updateValues(text)
      }
    }, 500),
    []
  )

  const [searchTextValue, setSearchTextValue] = useState('')
  switch (selectionType) {
    case 'text': {
      const selFiltersValue = { ...selectedFilterValues }
      return (
        <TextInput
          name={name}
          value={
            selectedFilterValues[name] ? selectedFilterValues[name][0] : ''
          }
          onChange={(event) => {
            if (!event.target.value) {
              delete selFiltersValue[name]
            } else {
              selFiltersValue[name] = [event.target.value]
            }
            setSelectedFilterValues(selFiltersValue)
            onFilterValuesChange(selFiltersValue)
          }}
          placeholder={`Enter ${label}`}
        />
      )
    }
    case 'dropdown':
      return (
        <Dropdown
          id="select"
          name="select"
          placeholder="Select"
          options={dropDownOptions}
          testId="drop-down"
          onChangeDropdown={(val) => {
            const selFilters = { ...selectedFilterValues }
            selFilters[name] = val
            setSelectedFilterValues(selFilters)
            onFilterValuesChange(selFilters)
            setDropDownOptions(defaultDropDownOptions)
          }}
          onSearch={(text) => {
            handleDebouncedSearchValue(text)
          }}
          value={selectedFilterValues[name]}
        />
      )
    case 'radio':
      return (
        <Box {...(height && { height: { max: height }, overflow: 'auto' })}>
          {options.map((data) => (
            <RadioButton
              data-testid={data.name}
              checked={
                (selectedFilterValues[name] &&
                  selectedFilterValues[name][0] === data.name) ||
                false
              }
              label={data.label}
              onChange={(event) => {
                const selFilters = { ...selectedFilterValues }
                selFilters[name] = [event.target.value]
                setSelectedFilterValues(selFilters)
                onFilterValuesChange(selFilters)
              }}
              name={name}
              value={data.name}
              key={data.name}
            />
          ))}
        </Box>
      )
    case 'date-range': {
      const selFiltersValue = { ...selectedFilterValues }
      return (
        <DateInput
          format="mm/dd/yyyy-mm/dd/yyyy"
          name={name}
          value={selectedFilterValues[name] || ''}
          onChange={(event) => {
            if (!event.value) {
              delete selFiltersValue[name]
            } else {
              selFiltersValue[name] = event.value
            }
            setSelectedFilterValues(selFiltersValue)
            onFilterValuesChange(selFiltersValue)
          }}
        />
      )
    }

    case 'search':
      return (
        <Box pad="small" focusIndicator={false} margin={{ bottom: '150px' }}>
          <StyledTextInput
            dropAlign={{ top: 'bottom', left: 'left' }}
            icon={<SearchIcon id="search-icon" />}
            placeholder={label}
            value={searchTextValue}
            focusIndicator={false}
            onChange={(e) => {
              setSearchTextValue(e.target.value)
              handleDebouncedSearchValue(e.target.value)
            }}
            onSuggestionsOpen={() => {
              updateValues(searchTextValue)
            }}
            onSuggestionSelect={(selectedVal) => {
              const isAlreadySelected =
                selectedFilterValues[name] &&
                selectedFilterValues[name].some(
                  (item) => item.value === selectedVal.suggestion.value
                )

              if (isAlreadySelected) return

              setSearchTextValue('')

              const selFilters = { ...selectedFilterValues }
              if (selFilters[name]) {
                selFilters[name].push(selectedVal.suggestion)
              } else {
                selFilters[name] = [selectedVal.suggestion]
              }
              setSelectedFilterValues(selFilters)
              onFilterValuesChange(selFilters)
            }}
            suggestions={defaultDropDownOptions}
            data-testid="search"
          />
          <Box direction="row" gap="small" wrap>
            {selectedFilterValues[name] &&
              selectedFilterValues[name].map((suggestion) => {
                const onRemoveSelection = () => {
                  // remove the item
                  const selectedValues = selectedFilterValues[name].filter(
                    (selVal) => selVal.value !== suggestion.value
                  )

                  let newSelFilters
                  if (selectedValues.length === 0) {
                    newSelFilters = { ...selectedFilterValues }
                    delete newSelFilters[name]
                  } else {
                    newSelFilters = {
                      ...selectedFilterValues,
                      [name]: selectedValues
                    }
                  }

                  setSelectedFilterValues(newSelFilters)
                  onFilterValuesChange(newSelFilters)
                }

                return (
                  <React.Fragment key={suggestion.value}>
                    {selectedValuesRenderer(suggestion, onRemoveSelection)}
                  </React.Fragment>
                )
              })}
          </Box>
        </Box>
      )
    // checkbox
    default:
      return (
        <CheckBoxGroup
          name={name}
          valueKey="name"
          value={selectedFilterValues[name]}
          onChange={(event) => {
            const selFilters = { ...selectedFilterValues }
            if (!event.value || event.value.length === 0) {
              delete selFilters[name]
            } else {
              selFilters[name] = event.value
            }
            setSelectedFilterValues(selFilters)
            onFilterValuesChange(selFilters)
            if (updateValues) handleDebouncedSearchValue(selFilters)
          }}
          options={options}
          {...(height && { height: { max: height }, overflow: 'auto' })}
        />
      )
  }
}

RenderFormInputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selectionType: PropTypes.oneOf([
    'checkbox',
    'radio',
    'text',
    'dropdown',
    'date-range',
    'search'
  ]).isRequired,
  onFilterValuesChange: PropTypes.func.isRequired,
  selectedFilterValues: PropTypes.object.isRequired,
  setSelectedFilterValues: PropTypes.func.isRequired,
  selectedValuesRenderer: PropTypes.func,
  updateValues: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
  height: PropTypes.oneOf(dimensions) // applicable only for checkbox and radiobutton for internal scroll
}

RenderFormInputField.defaultProps = {
  height: undefined,
  selectedValuesRenderer: () => {},
  updateValues: () => {}
}

const FormFields = ({
  filterAttributes,
  initSelectedFilterValues,
  onFilterValuesChange
}) => {
  // object of {name1: [<values>], name2: [<values]} representing selected filter values
  const [selectedFilterValues, setSelectedFilterValues] = useState(
    initSelectedFilterValues
  )

  useEffect(() => {
    setSelectedFilterValues(initSelectedFilterValues)
  }, [initSelectedFilterValues])

  const formFields = filterAttributes.map(
    (
      {
        name,
        label,
        values = [],
        selectionType = 'checkbox',
        height,
        updateValues,
        selectedValuesRenderer
      },
      formFieldIdx
    ) => {
      const options = values.map(({ valueName, valueLabel }) => {
        return {
          label: valueLabel,
          name: valueName
        }
      })

      return (
        <Box
          key={formFieldIdx} // eslint-disable-line react/no-array-index-key
          pad={{ bottom: '12px' }}
        >
          <FormField
            name={name}
            label={label}
            data-testid={`form-field${formFieldIdx}`}
          >
            <RenderFormInputField
              selectionType={selectionType}
              options={options}
              name={name}
              label={label}
              selectedFilterValues={selectedFilterValues}
              setSelectedFilterValues={setSelectedFilterValues}
              onFilterValuesChange={onFilterValuesChange}
              height={height}
              selectedValuesRenderer={selectedValuesRenderer}
              updateValues={updateValues}
            />
          </FormField>
        </Box>
      )
    }
  )

  return <>{formFields}</>
}

FormFields.propTypes = {
  onFilterValuesChange: PropTypes.func.isRequired,
  filterAttributes: filterAttributesPropTypes.isRequired,
  initSelectedFilterValues: PropTypes.object
}

FormFields.defaultProps = {
  initSelectedFilterValues: {}
}

const FilterDialog = ({
  dialogHeight,
  onDialogChangeState,
  onFilterValuesChange,
  filterAttributes,
  initSelectedFilterValues
}) => {
  const [selectedFilterValues, setSelectedFilterValues] = useState(
    initSelectedFilterValues
  )

  useEffect(() => {
    setSelectedFilterValues(initSelectedFilterValues)
  }, [initSelectedFilterValues])

  return (
    <ModalDialog
      width="medium"
      header={
        <ModalHeader
          title={
            <Typography
              size="small"
              testId="header-title"
              type="heading"
              weight="bold"
            >
              Filter
            </Typography>
          }
        />
      }
      height={dialogHeight}
      content={
        <Box margin={{ top: '18px' }}>
          <CCSForm
            validate="blur"
            testId="filter-form"
            errorMessage=""
            onSubmit={() => {
              onFilterValuesChange(selectedFilterValues)
              onDialogChangeState(false)
            }}
            buttons={
              <ButtonGroup
                buttonList={[
                  {
                    label: 'Cancel',
                    default: true,
                    onClick: () => {
                      onDialogChangeState(false)
                    },
                    margin: { top: '6px' },
                    testId: 'cancel-filter-btn'
                  },
                  {
                    label: 'Apply Filters',
                    primary: true,
                    type: 'submit',
                    margin: { top: '6px' },
                    testId: 'apply-filters-btn'
                  }
                ]}
                testId="filter-dialog-buttons"
              />
            }
          >
            <FormFields
              filterAttributes={filterAttributes}
              initSelectedFilterValues={selectedFilterValues}
              onFilterValuesChange={(values) => {
                setSelectedFilterValues(values)
              }}
            />
          </CCSForm>
        </Box>
      }
      onClose={() => onDialogChangeState(false)}
      testId="filter-modal-dialog"
    />
  )
}

FilterDialog.propTypes = {
  dialogHeight: PropTypes.oneOf(dimensions),
  onDialogChangeState: PropTypes.func.isRequired,
  onFilterValuesChange: PropTypes.func.isRequired,
  filterAttributes: filterAttributesPropTypes.isRequired,
  initSelectedFilterValues: PropTypes.object
}

FilterDialog.defaultProps = {
  dialogHeight: undefined,
  initSelectedFilterValues: {}
}

const StyledTypography = styled(Typography)`
  white-space: nowrap;
`

export const FilterButton = ({
  filterAttributes,
  dialogHeight,
  onFilterValuesChange,
  initSelectedFilterValues,
  testId
}) => {
  // if true, filter dialog is displayed
  const [filterDialogOpen, setFilterDialogOpen] = useState(false)
  // object of {name1: [<values>], name2: [<values]} representing selected filter values
  const [selectedFilterValues, setSelectedFilterValues] = useState(
    initSelectedFilterValues
  )

  useEffect(() => {
    setSelectedFilterValues(initSelectedFilterValues || {})
  }, [initSelectedFilterValues])

  return (
    <>
      <Box direction="row" gap="small" align="center">
        <Stack anchor="top-right">
          <Button
            kind="toolbar"
            margin={{ top: 'small', right: 'small' }}
            type="button"
            icon={<Filter />}
            onClick={() => {
              setFilterDialogOpen(true)
            }}
            testId={testId}
          />
          {Object.keys(selectedFilterValues).length > 0 && (
            <Box
              round
              width="24px"
              height="24px"
              background={{ color: 'text' }}
              responsive={false}
              justify="center"
              align="center"
            >
              <Typography
                size="medium"
                type="text"
                weight="normal"
                testId="filter-count"
                color="white"
              >
                {Object.keys(selectedFilterValues).length.toString()}
              </Typography>
            </Box>
          )}
        </Stack>
        {Object.keys(selectedFilterValues).length > 0 && (
          <Anchor
            label={
              <StyledTypography
                size="medium"
                type="text"
                weight="normal"
                testId="clear-filters-anchor"
              >
                Clear Filters
              </StyledTypography>
            }
            onClick={() => {
              setSelectedFilterValues({})
              onFilterValuesChange({})
            }}
          />
        )}
      </Box>
      {filterDialogOpen && (
        <FilterDialog
          dialogHeight={dialogHeight}
          onDialogChangeState={setFilterDialogOpen}
          onFilterValuesChange={(values) => {
            setSelectedFilterValues(values)
            onFilterValuesChange(values)
          }}
          filterAttributes={filterAttributes}
          initSelectedFilterValues={selectedFilterValues}
        />
      )}
    </>
  )
}

FilterButton.propTypes = {
  /**
   * Array of objects representing attribute names, values and labels
   */
  filterAttributes: filterAttributesPropTypes.isRequired,

  /**
   * Handler that gets invoked when filter selection changes
   */
  onFilterValuesChange: PropTypes.func.isRequired,

  dialogHeight: PropTypes.oneOf(dimensions),

  initSelectedFilterValues: PropTypes.object,

  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

FilterButton.defaultProps = {
  dialogHeight: undefined,
  initSelectedFilterValues: {}
}
