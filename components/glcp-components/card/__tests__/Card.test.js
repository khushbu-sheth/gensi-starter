import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import {
  Basic,
  BackgroundButton,
  IconClick,
  TabActionCardsWithIcon,
  StatCardsWithIcon
} from '../Card.stories'

/* TODO: CCS-1055 - replace localStorage */
afterEach(() => {
  window.localStorage.removeItem('card-clicked')
})

it('renders a basic card', () => {
  render(<Basic {...Basic.args} />)
  expect(screen.getByTestId('text-cardBody-title')).toHaveTextContent('Admins')
  expect(screen.getByTestId('text-cardBody-summary')).toHaveTextContent(
    'Find list of administrators in the system'
  )
})

it('renders a card with background set, icon and link', () => {
  render(<BackgroundButton {...BackgroundButton.args} />)
  expect(screen.getByTestId('text-cardBody-title')).toHaveTextContent(
    'Aruba Application'
  )
  expect(screen.getByTestId('text-cardBody-summary')).toHaveTextContent(
    'Configure settings for the Aruba app in this location'
  )
})

it('renders a clickable card with icon', () => {
  render(<IconClick {...IconClick.args} />)
  fireEvent.click(screen.getByTestId('text-cardBody-title'))
  expect(window.localStorage.getItem('card-clicked')).toBe('icon card clicked')
})

it('render a tab action card', () => {
  render(<TabActionCardsWithIcon {...TabActionCardsWithIcon.args} />)
  fireEvent.click(screen.getByTestId('card-tab-action-card-with-icon'))
  expect(window.localStorage.getItem('card-clicked')).toBe(
    'tab action card clicked'
  )
})

it('render stat card with clickable icon', () => {
  render(<StatCardsWithIcon {...StatCardsWithIcon.args} />)
  fireEvent.click(screen.getByTestId('card-stat-card-with-icon'))
  expect(window.localStorage.getItem('card-clicked')).toBe(
    'stat card with icon clicked'
  )
})
