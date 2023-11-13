import React, { useState } from 'react'
import { Box, TextInput } from 'grommet'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Search as SearchIcon } from 'grommet-icons'

/* Inputs should always be accompanied by labels for accessibility. An icon
may serve as a label if 1) the icon meaning is well understood, and 2)
has an 'aria-labelledby' attribute. For additional detail:
https://www.w3.org/WAI/tutorials/forms/labels/#using-aria-labelledby
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms/Basic_form_hints
*/
const StyledTextInput = styled(TextInput).attrs(() => ({
  'aria-labelledby': 'search-icon'
}))``

const dimensions = [
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  '100%'
]

export const Search = ({
  initValue,
  handleCustomSearch,
  placeholder,
  size,
  width,
  testId,
  ...rest
}) => {
  const [searchValue, setSearchValue] = useState(initValue)
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    handleCustomSearch(e.target.value)
  }

  return (
    <Box width={width}>
      <StyledTextInput
        size={size}
        icon={<SearchIcon id="search-icon" />}
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearch}
        data-testid={testId}
        {...rest}
      />
    </Box>
  )
}

Search.propTypes = {
  /**
   * This prop defines the size of the search text.
   * This is optional and default value is medium
   */
  size: PropTypes.string,
  /**
   * This prop will be used for placeholder of the search
   */
  placeholder: PropTypes.string,
  /**
   * This prop will be used for search string initial value
   */
  initValue: PropTypes.string,
  /**
   * This is the handleCustomSearch event handler for search
   */
  handleCustomSearch: PropTypes.func,
  /**
   * width of the search field; default is medium
   */
  width: PropTypes.oneOf(dimensions),
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

Search.defaultProps = {
  size: 'medium',
  placeholder: '',
  initValue: '',
  width: 'medium',
  handleCustomSearch: () => {}
}
