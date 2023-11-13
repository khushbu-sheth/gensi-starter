import React from 'react'
import { render, screen } from '@testing-library/react'

import { UserInfoWithIcon, UserInfoWithNoAvatar } from '../AvatarInfo.stories'

it('renders the primary info as given name', () => {
  render(<UserInfoWithIcon {...UserInfoWithIcon.args} />)
  expect(screen.getByTestId('user-info')).toHaveTextContent('John Doe')
})

it('renders the first char of primary name when there is no avatar', () => {
  render(<UserInfoWithNoAvatar {...UserInfoWithNoAvatar.args} />)
  expect(screen.getByTestId('user-info-no-avatar')).toHaveTextContent('J')
})
