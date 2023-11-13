import React from 'react'

import { ObjectList } from './ObjectList'

export default {
  title: 'CCS/ObjectList',
  component: ObjectList
}

const Template = (args) => <ObjectList {...args} />

export const Default = Template.bind({})
Default.args = {
  data: { name: 'John', age: '25' },
  testId: 'obj-list-1'
}
export const ObjectListWithTitle = Template.bind({})
ObjectListWithTitle.args = {
  data: { name: 'John', age: '25' },
  title: 'My Details',
  testId: 'obj-list-2'
}
export const ObjectListWithEditOption = Template.bind({})
ObjectListWithEditOption.args = {
  data: { name: 'John', age: '25' },
  title: 'My Details',
  testId: 'obj-list-3',
  pad: { vertical: 'small' },
  editBtnTitle: 'modify'
}
