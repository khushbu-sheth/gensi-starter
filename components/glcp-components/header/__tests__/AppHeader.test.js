import React from 'react'
import { render, screen } from '@testing-library/react'
import { Hpe } from 'grommet-icons'

import { ThemeMode } from '../../ThemeMode'
import { Default } from '../AppHeader.stories'

const HPELogo = <Hpe color="brand" size="medium" />

const brandBeforeLogin = {
  logo: HPELogo,
  logoLink: '',
  orgName: 'Hewlett Packard Enterprise',
  appName: '',
  fontWeight: ''
}

it('renders the header organization text as Hewlett Packard Enterprise', () => {
  Default.args = {
    brand: brandBeforeLogin,
    testId: 'with-no-nav'
  }
  render(
    <ThemeMode>
      <Default {...Default.args} />
    </ThemeMode>
  )
  expect(screen.getByTestId('text-with-no-nav-orgname')).toHaveTextContent(
    'Hewlett Packard Enterprise'
  )
})
