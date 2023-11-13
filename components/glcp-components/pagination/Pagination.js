import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Pagination as GrommetPagination,
  ResponsiveContext
} from 'grommet'
import { isNumber } from 'lodash'

import { Typography } from '../typography/Typography'

export const Pagination = ({
  totalItems,
  itemsPerPage,
  page,
  setPage,
  testId,
  pageIdxInfo,
  customRender,
  ...rest
}) => {
  const size = React.useContext(ResponsiveContext)
  const numberMiddlePages = size === 'small' ? 2 : 3

  useEffect(() => {
    if (
      isNumber(totalItems) &&
      totalItems > 0 &&
      isNumber(itemsPerPage) &&
      itemsPerPage > 0
    ) {
      const maxPage = Math.floor((totalItems - 1) / itemsPerPage) + 1
      if (page > maxPage) {
        setPage(maxPage)
      }
    }
  }, [totalItems, itemsPerPage, setPage, page])

  return (
    <Box direction="column" data-testid={testId}>
      {totalItems > itemsPerPage && (
        <>
          <Box direction="row-responsive">
            {pageIdxInfo.length > 0 && (
              <Box width="medium" margin="small">
                <Typography type="text" size="small">
                  {pageIdxInfo}
                </Typography>
              </Box>
            )}
            <Box fill>
              <GrommetPagination
                alignSelf="end"
                step={itemsPerPage}
                numberItems={totalItems}
                page={page}
                numberMiddlePages={numberMiddlePages}
                onChange={setPage}
                {...rest}
              />
            </Box>
          </Box>
        </>
      )}
      {customRender}
    </Box>
  )
}

Pagination.propTypes = {
  /**
   * It will be used for component reference to total items count.
   * This is mandatory.
   */
  totalItems: PropTypes.number.isRequired,
  /**
   * It will be used for component reference to items per page.
   */
  itemsPerPage: PropTypes.number,
  /**
   * It will be used for component reference to current page.
   */
  page: PropTypes.number,
  /**
   * This is the function for change current page
   */
  setPage: PropTypes.func,
  /**
   * It will be used for component reference to test.
   */
  testId: PropTypes.string.isRequired,
  /**
   * It will be used for component to show page index information at the left.
   * For example: Showing 1-5 of 12
   */
  pageIdxInfo: PropTypes.string,
  /**
   * This proper will be used as a callback function to customize the Pagination
   */
  customRender: PropTypes.any
}

Pagination.defaultProps = {
  setPage: () => {},
  page: 1,
  itemsPerPage: 5,
  customRender: null,
  pageIdxInfo: ''
}
