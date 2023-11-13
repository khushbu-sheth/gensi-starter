import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, List as GrommetList, Menu } from 'grommet'
import { More } from 'grommet-icons'

import { isArrayOfObject } from '../utils'
import { Typography } from '../typography/Typography'
import { Ruler } from '../ruler/Ruler'

export const List = ({
  data,
  primaryKey,
  secondaryKey,
  eventType,
  direction,
  moreActionItems,
  customRender,
  title,
  testId,
  ...rest
}) => {
  const [selected, setSelected] = useState()

  const keyValueList = {
    'item-select': (
      <GrommetList
        data={data}
        primaryKey={primaryKey}
        secondaryKey={secondaryKey}
        itemProps={
          selected >= 0 ? { [selected]: { background: 'brand' } } : undefined
        }
        onClickItem={(event) =>
          setSelected(selected === event.index ? undefined : event.index)
        }
      />
    ),
    'more-actions': (
      <GrommetList
        data={data}
        primaryKey={primaryKey}
        secondaryKey={secondaryKey}
        action={(item, index) => {
          return (
            <Menu
              key={index}
              icon={<More />}
              hoverIndicator
              items={moreActionItems}
            />
          )
        }}
      />
    ),
    'no-event': (
      <GrommetList
        data={data}
        primaryKey={primaryKey}
        secondaryKey={secondaryKey}
      />
    ),
    'no-event-column': (
      <GrommetList data={data}>
        {(datum) => (
          <Box gap="xxsmall">
            <Typography
              type="text"
              size="medium"
              testId={`${testId}-vertical-label`}
            >
              {datum[primaryKey]}
            </Typography>
            <Typography
              type="text"
              size="large"
              testId={`${testId}-vertical-value`}
            >
              {datum[secondaryKey]}
            </Typography>
          </Box>
        )}
      </GrommetList>
    ),
    'data-list': (
      <GrommetList data={data} pad="none">
        {(datum) => (
          <Box
            pad={{ vertical: 'medium' }}
            direction="row"
            justify="between"
            align="center"
            width="medium"
          >
            <Typography type="text" size="xsmall" testId="data-list-label">
              {datum[primaryKey]}
            </Typography>
            <Typography type="text" size="medium" testId="data-list-value">
              {datum[secondaryKey]}
            </Typography>
          </Box>
        )}
      </GrommetList>
    ),
    'custom-render': (
      <GrommetList data={data} {...rest}>
        {customRender}
      </GrommetList>
    )
  }
  const typeOfList =
    direction === 'none' ? eventType : `${eventType}-${direction}`
  return (
    <Box data-testid={testId}>
      {title && typeof title === 'string' && (
        <Box>
          <Typography level="2" type="heading" testId={`${testId}-head-2`}>
            {title}
          </Typography>
          <Ruler />
        </Box>
      )}
      {isArrayOfObject(data) ? (
        keyValueList[typeOfList] || (
          <Typography type="text" testId="unknown-list-type">
            List type is not supported.
          </Typography>
        )
      ) : (
        <GrommetList data={data} {...rest}>
          {customRender}
        </GrommetList>
      )}
    </Box>
  )
}

List.propTypes = {
  /**
   * This prop will give the data for the component.
   * It contains either array of objects or array
   */
  data: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.array])
    .isRequired,
  /**
   * Pass the primary key which you have defined in your array of object data
   */
  primaryKey: PropTypes.string,
  /**
   * Pass the secondary key which you have defined in your array of object data
   */
  secondaryKey: PropTypes.string,
  /**
   * This prop will determine the type of list with various event
   */
  eventType: PropTypes.oneOf([
    'item-select',
    'more-actions',
    'no-event',
    'custom-render',
    'data-list'
  ]),
  /**
   * Direction prop will be used if we want to display the list vertically.
   * So far we have only one use case with no-event.
   */
  direction: PropTypes.oneOf(['row', 'column', 'none']),
  /**
   * This will be used display the more actions menu items and its click handler.
   * Eg. [{ label: 'one', onClick: () => null }]
   */
  moreActionItems: PropTypes.array,
  /**
   * Function that will be called when each data item is rendered.
   * It will be passed with the datum.
   * It should return a react element.
   */
  customRender: PropTypes.any,
  /**
   * title prop is used to display the list title
   * it should be mostly the typography component
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

List.defaultProps = {
  primaryKey: '',
  secondaryKey: '',
  eventType: 'no-event',
  direction: 'none',
  moreActionItems: undefined,
  customRender: null,
  title: null
}
