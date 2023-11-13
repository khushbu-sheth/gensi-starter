import React from 'react'

import { Pagination } from './Pagination'

export default {
  title: 'CCS/Pagination',
  component: Pagination
}

const Template = (args) => <Pagination {...args} />

export const Default = Template.bind({})

Default.args = {
  totalItems: 7,
  setPage: () => {
    localStorage.setItem('pagination', 'setPage called for Default')
  },
  testId: 'pagination-object'
}

export const WithCustomItemsPerPage = Template.bind({})
WithCustomItemsPerPage.args = {
  totalItems: 65,
  itemsPerPage: 10,
  setPage: () => {
    localStorage.setItem(
      'pagination',
      'setPage called for WithCustomItemsPerPage'
    )
  },
  testId: 'pagination-object'
}

export const WithSelectedPage = Template.bind({})
WithSelectedPage.args = {
  totalItems: 12,
  page: 3,
  setPage: () => {
    localStorage.setItem('pagination', 'setPage called for WithSelectedPage')
  },
  testId: 'pagination-object'
}

export const ShowPageIdxInfo = Template.bind({})
ShowPageIdxInfo.args = {
  totalItems: 12,
  page: 3,
  pageIdxInfo: 'Showing 11-12 of 12',
  setPage: () => {
    localStorage.setItem('pagination', 'setPage called for ShowPageIdxInfo')
  },
  testId: 'pagination-object'
}
