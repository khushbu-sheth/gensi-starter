import React, { useState, useEffect } from 'react'
import PropTypes, { oneOfType } from 'prop-types'
import { Select } from 'grommet'

export const Dropdown = ({
  options,
  defaultVal,
  multiple,
  noBorder,
  placeholder,
  customRender,
  onChangeDropdown,
  testId,
  ...rest
}) => {
  const isArrayOfObject = (o) => {
    return (
      o &&
      o.length > 0 &&
      typeof o[0] === 'object' &&
      o[0] !== null &&
      o[0].constructor === Object
    )
  }
  const [value, setValue] = useState([defaultVal] || [])

  useEffect(() => {
    setValue([defaultVal] || [])
  }, [defaultVal])

  const handleOnChange = ({ value: nextValue }) => {
    if (onChangeDropdown) onChangeDropdown(nextValue)
    setValue(nextValue)
  }

  const SelectWithArray = (
    <Select
      placeholder={placeholder}
      multiple={multiple}
      closeOnChange
      value={value}
      options={options}
      onChange={handleOnChange}
      plain={noBorder}
      data-testid={testId}
      {...rest}
    >
      {customRender}
    </Select>
  )
  const SelectWithArrayOfObjects = (
    <Select
      placeholder={placeholder}
      multiple={multiple}
      closeOnChange
      labelKey="label"
      valueKey={{ key: 'value', reduce: true }}
      value={value}
      options={options}
      onChange={handleOnChange}
      plain={noBorder}
      data-testid={testId}
      {...rest}
    >
      {customRender}
    </Select>
  )
  return isArrayOfObject(options) ? SelectWithArrayOfObjects : SelectWithArray
}

Dropdown.propTypes = {
  /**
   * This prop can be either array or array of objects with this format {lable: '', value: ''}
   */
  options: PropTypes.array,
  /**
   * Default value to be set when loading the dropdown
   * It can be either string, object or the number which refers to the value from the option
   */
  defaultVal: oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  /**
   * This boolean property will allow to select multiple options from the dropdown
   */
  multiple: PropTypes.bool,
  /**
   * This prop will be used for removing the border from the dropdown
   */
  noBorder: PropTypes.bool,
  /**
   * This prop will be used for placeholder of the dropdown
   */
  placeholder: PropTypes.string,
  /**
   * This is the onchange event handler for dropdown
   */
  onChangeDropdown: PropTypes.func,
  /**
   * This proper will be used as a callback function to customize the dropdown
   */
  customRender: PropTypes.any,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

Dropdown.defaultProps = {
  options: [],
  multiple: false,
  defaultVal: '',
  noBorder: false,
  onChangeDropdown: () => {},
  customRender: null,
  placeholder: 'Select'
}
