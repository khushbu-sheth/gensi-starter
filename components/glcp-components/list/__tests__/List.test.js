import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Grommet } from 'grommet'

import {
  SimpleList,
  KeyValuePairWithNoEvent,
  KeyValuePairWithItemSelect,
  BulletedList
} from '../List.stories'

describe('TEST: Simple List', () => {
  const simpleList = (
    // NOTE: wrapping with Grommet is required here as they are passing grommet theming in the List component
    <Grommet>
      <SimpleList {...SimpleList.args} />
    </Grommet>
  )
  it('renders the simple list with ul and li', () => {
    render(simpleList)
    expect(screen.getByTestId('simple-list').firstChild.nodeName).toBe('UL')
    expect(
      screen.getByTestId('simple-list').firstChild.firstChild.nodeName
    ).toBe('LI')
  })
  it('renders the simple list with the given data', () => {
    render(simpleList)
    expect(
      screen.getByTestId('simple-list').firstChild.firstChild
    ).toHaveTextContent('Boise')
  })
})
describe('TEST: Key Value Pair With No Event', () => {
  const keyValPairList = (
    // NOTE: wrapping with Grommet is required here as they are passing grommet theming in the List component
    <Grommet>
      <KeyValuePairWithNoEvent {...KeyValuePairWithNoEvent.args} />
    </Grommet>
  )
  it('renders the key value pair list with span', () => {
    render(keyValPairList)
    expect(
      screen.getByTestId('key-val-list-no-event').firstChild.firstChild
        .firstChild.nodeName
    ).toBe('SPAN')
  })
  it('renders the key value pair with the given data', () => {
    render(keyValPairList)
    expect(
      screen.getByTestId('key-val-list-no-event').firstChild.firstChild
        .firstChild
    ).toHaveTextContent('California')
  })
})
describe('TEST: Key Value Pair With Item Select', () => {
  const keyValPairItemSelectList = (
    // NOTE: wrapping with Grommet is required here as they are passing grommet theming in the List component
    <Grommet>
      <KeyValuePairWithItemSelect {...KeyValuePairWithItemSelect.args} />
    </Grommet>
  )
  it('renders the key value pair list with item click', () => {
    render(keyValPairItemSelectList)
    const listItem = screen.getByText('California').parentElement
    const mockHandleListItemClick = jest.fn()
    render(listItem.addEventListener('click', mockHandleListItemClick))
    fireEvent.click(listItem)
    expect(mockHandleListItemClick).toHaveBeenCalled()
  })
})
describe('TEST: Key Value Pair with unknown typeOfList', () => {
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
  KeyValuePairWithNoEvent.args = {
    data: keyValueList,
    primaryKey: 'state',
    secondaryKey: 'code',
    direction: 'row',
    testId: 'key-val-list-no-event-unknown-type'
  }
  const keyValuePairWithNoEvent = (
    // NOTE: wrapping with Grommet is required here as they are passing grommet theming in the List component
    <Grommet>
      <KeyValuePairWithNoEvent {...KeyValuePairWithNoEvent.args} />
    </Grommet>
  )
  it('prints the text message of no support', () => {
    render(keyValuePairWithNoEvent)
    expect(screen.getByTestId('unknown-list-type')).toHaveTextContent(
      'List type is not supported.'
    )
  })
})
describe('TEST: Bulleted List', () => {
  const bulletedList = (
    // NOTE: wrapping with Grommet is required here as they are passing grommet theming in the List component
    <Grommet>
      <BulletedList {...BulletedList.args} />
    </Grommet>
  )
  it('renders the bulleted list with ul and li', () => {
    render(bulletedList)
    expect(screen.getByTestId('bulleted-list').firstChild.nodeName).toBe('UL')
    expect(
      screen.getByTestId('bulleted-list').firstChild.firstChild.nodeName
    ).toBe('LI')
    expect(screen.queryAllByTestId('circle-icon')[0].nodeName).toBe('svg')
    expect(
      screen.getByTestId('bulleted-list').firstChild.firstChild
    ).toHaveTextContent('Boise')
  })
})
