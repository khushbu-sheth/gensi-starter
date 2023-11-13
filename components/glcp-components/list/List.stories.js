import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Box } from 'grommet'
import { StatusGoodSmall } from 'grommet-icons'

import { Typography } from '../typography/Typography'
import { Anchor } from '../anchor/Anchor'

import { List as CCSList } from './List'

export default {
  title: 'CCS/List',
  component: CCSList,
  decorators: [withDesign]
}

const Template = (args) => <CCSList {...args} />

const locations = [
  'Boise',
  'Fort Collins',
  'Los Gatos',
  'Palo Alto',
  'San Francisco'
]
export const SimpleList = Template.bind({})
SimpleList.args = {
  data: locations,
  testId: 'simple-list'
}
SimpleList.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/tMYTr17r6hhGajSlNRiPje/HPE-List-Component?node-id=19%3A135'
  }
}
const keyValueList = [
  {
    state: 'California',
    code: 'CA'
  },
  {
    state: 'Texas',
    code: 'TX'
  }
]
export const KeyValuePairWithNoEvent = Template.bind({})
KeyValuePairWithNoEvent.args = {
  data: keyValueList,
  primaryKey: 'state',
  secondaryKey: 'code',
  testId: 'key-val-list-no-event'
}

export const KeyValuePairWithItemSelect = Template.bind({})
KeyValuePairWithItemSelect.args = {
  data: keyValueList,
  primaryKey: 'state',
  secondaryKey: 'code',
  eventType: 'item-select',
  testId: 'key-val-list-item-select'
}

export const KeyValuePairWithMoreActions = Template.bind({})
KeyValuePairWithMoreActions.args = {
  data: keyValueList,
  primaryKey: 'state',
  secondaryKey: 'code',
  eventType: 'more-actions',
  moreActionItems: [{ label: 'one' }, { label: 'two' }],
  testId: 'key-val-list-more-actions'
}

export const KeyValuePairVertical = Template.bind({})
KeyValuePairVertical.args = {
  data: keyValueList,
  primaryKey: 'state',
  secondaryKey: 'code',
  eventType: 'no-event',
  direction: 'column',
  testId: 'key-val-list-vertical'
}

KeyValuePairVertical.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qxdE6A2qswCVbW3R6Ti7KG/CCS-v0.09-New-Navigation?node-id=4779%3A31555'
  }
}
const renderChildren = (datum) => (
  <Box gap="xxsmall">
    <Typography type="text" size="medium" testId="vertical-label">
      {datum.state}
    </Typography>
    <Typography type="text" size="large" testId="vertical-value">
      <Anchor href="#" label={datum.code} testId="list-value-anchor" />
    </Typography>
  </Box>
)
export const CustomRenderChildren = Template.bind({})
CustomRenderChildren.args = {
  data: keyValueList,
  eventType: 'custom-render',
  customRender: (datum) => renderChildren(datum),
  testId: 'key-val-list-vertical'
}
const renderDataList = (datum) => (
  <Box gap="xxsmall" direction="row" justify="between" align="center">
    <Typography type="text" size="xsmall" testId="data-list-label">
      {datum.state}
    </Typography>
    <Typography type="text" size="medium" testId="data-list-value">
      {datum.code}
    </Typography>
  </Box>
)
export const CustomRenderListWithTitle = Template.bind({})
CustomRenderListWithTitle.args = {
  data: keyValueList,
  eventType: 'custom-render',
  customRender: (datum) => renderDataList(datum),
  title: 'Details',
  testId: 'key-val-list-custom'
}
// NOTE: DataListWithTitle story is same as CustomRenderListWithTitle except
// that it has the special eventtype as 'data-list'
// this helps the consumer to pass this value instead of writing custom render every time
export const DataListWithTitle = Template.bind({})
DataListWithTitle.args = {
  data: keyValueList,
  primaryKey: 'state',
  secondaryKey: 'code',
  eventType: 'data-list',
  title: 'Details',
  testId: 'data-list'
}

const renderBulletedList = (datum) => (
  <Box direction="row">
    <Box pad={{ top: 'small' }} margin={{ right: 'small' }}>
      {/* To match the bullet static size added px value to the icon. */}
      <StatusGoodSmall size="6px" data-testid="circle-icon" />
    </Box>
    <Box pad={{ top: 'xxsmall' }}>
      <Typography type="text" size="medium" testId="bulleted-list-value">
        {datum}
      </Typography>
    </Box>
  </Box>
)

export const BulletedList = Template.bind({})
BulletedList.args = {
  data: locations,
  customRender: (datum) => renderBulletedList(datum),
  testId: 'bulleted-list'
}
