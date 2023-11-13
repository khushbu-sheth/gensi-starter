import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

import { Typography } from '../typography/Typography'
import { Ruler } from '../ruler/Ruler'
import { dimensions } from '../utils'
import { Button } from '../button/Button'

export const ObjectList = ({
  data,
  title,
  testId,
  pad,
  editBtnTitle,
  editAction
}) => {
  const getTypographyValue = (objectValue) => {
    if (objectValue && typeof objectValue === 'object' && objectValue.value)
      return objectValue.value.toString()
    if (objectValue) return objectValue.toString()
    return '-'
  }
  return (
    <Box data-testid={testId}>
      {title && typeof title === 'string' && (
        <>
          <Box
            direction="row-responsive"
            justify="between"
            margin={{ top: 'medium' }}
          >
            <Typography level="2" type="heading" testId={`${testId}-head-2`}>
              {title}
            </Typography>
            {editBtnTitle && typeof editBtnTitle === 'string' && (
              <Button
                default
                testId={`${testId}-edit-button`}
                onClick={() => {
                  editAction()
                }}
              >
                <Typography
                  type="text"
                  weight="bold"
                  testId={`${testId}-edit-button-title`}
                >
                  {editBtnTitle}
                </Typography>
              </Button>
            )}
          </Box>
          <Ruler />
        </>
      )}
      {Object.keys(data).map((key) => {
        return (
          <Box pad={pad} direction="row" align="start" key={`${testId}-${key}`}>
            <Box width="small" flex={false}>
              <Typography type="text" size="xsmall" testId="obj-list-label">
                {key}
              </Typography>
            </Box>
            <Box align="start">
              <Typography
                type={
                  data[key] && typeof data[key] === 'object'
                    ? data[key].type
                    : 'text'
                }
                wordBreak="break-all"
                size="medium"
                testId="obj-list-value"
              >
                {getTypographyValue(data[key])}
              </Typography>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

ObjectList.propTypes = {
  /**
   * data will be in object type only
   * Eg. { a: 'A', b: 'B' }
   */
  data: PropTypes.object.isRequired,
  /**
   * title prop is used to display the list title
   * This is string type for now. If required enhance it later
   */
  title: PropTypes.string,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired,

  editBtnTitle: PropTypes.string,
  pad: PropTypes.shape({
    horizontal: PropTypes.oneOf(dimensions),
    vertical: PropTypes.oneOf(dimensions)
  }),
  editAction: PropTypes.func
}

ObjectList.defaultProps = {
  title: undefined,
  pad: { vertical: 'medium' },
  editBtnTitle: undefined,
  editAction: () => {}
}
