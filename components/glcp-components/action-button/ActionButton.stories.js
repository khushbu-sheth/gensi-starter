import React from 'react'
import { Notification } from 'grommet-icons'

import { ActionButton } from './ActionButton'

export default {
  title: 'CCS/ActionButton',
  component: ActionButton
}

const Template = (args) => {
  return <ActionButton {...args} />
}

export const Default = Template.bind({})
Default.args = {
  actions: [
    {
      icon: <Notification />,
      onClick: (datum) => {
        // eslint-disable-next-line no-alert
        alert(datum.message)
      }
    }
  ],
  datum: { message: 'Welcome!' },
  dropAlign: null,
  testId: 'oneaction-action-btn'
}

export const DefaultWithCustomRender = Template.bind({})
DefaultWithCustomRender.args = {
  customRenderer: (actionBtn) => {
    return <>{actionBtn}</>
  },
  actions: [
    {
      icon: <Notification />,
      onClick: (datum) => {
        // eslint-disable-next-line no-alert
        alert(datum.message)
      }
    }
  ],
  datum: { message: 'Welcome!' },
  dropAlign: null,
  testId: 'oneaction-action-btn'
}

export const MultipleActions = Template.bind({})
MultipleActions.args = {
  actions: [
    {
      label: 'View Details',
      onClick: (datum) => {
        // eslint-disable-next-line no-alert
        alert(`
              Record was clicked:
              { 
                  id: ${datum.id},
                  name: ${datum.name}
                  email: ${datum.email}
                  status: ${datum.status}
              }
              
              You can use onClick() to navigate to a record's detail
              page, open a panel or modal to edit the record, or perform 
              other actions as you see fit.
            `)
      }
    },
    {
      label: 'Delete',
      onClick: (datum) => {
        // eslint-disable-next-line no-alert
        alert(`
              delete ${datum.name}
            `)
      }
    }
  ],
  dropAlign: { top: 'bottom', left: 'left' },
  datum: {
    id: '1',
    name: 'Chris',
    email: 'chris@yahoo.com',
    status: 'active'
  },
  testId: 'multipleactions-action-btn'
}

export const ActionsWithSingleOption = Template.bind({})
ActionsWithSingleOption.args = {
  actions: [
    {
      label: 'View Details',
      onClick: (datum) => {
        // eslint-disable-next-line no-alert
        alert(`
              Record was clicked:
              { 
                  id: ${datum.id},
                  name: ${datum.name}
                  email: ${datum.email}
                  status: ${datum.status}
              }
              
              You can use onClick() to navigate to a record's detail
              page, open a panel or modal to edit the record, or perform 
              other actions as you see fit.
            `)
      }
    }
  ],
  showOneActionAsDropDown: true,
  dropAlign: { top: 'bottom', left: 'left' },
  datum: {
    id: '1',
    name: 'Chris',
    email: 'chris@yahoo.com',
    status: 'active'
  },
  testId: 'single-drop-action-btn'
}
