import React from 'react'
import { render, screen } from '@testing-library/react'
import { Grommet } from 'grommet'
import { Install } from 'grommet-icons'

import { Button } from '../../button/Button'
import { Default, WithoutTitleAndAction } from '../NoDataInfo.stories'

describe('NoDataInfo', () => {
  it('renders the NoDataInfo default component', () => {
    Default.args = {
      title: 'Unable to Connect',
      subtitle:
        'Begin providing access to your users by setting up a SAML connection.',
      icon: <Install size="large" />,
      action: (
        <Button
          label="Set Up Connection"
          primary
          type="button"
          onClick={() => {}}
          testId="action-btn"
        />
      ),
      testId: 'no-data-info'
    }
    render(
      <Grommet>
        <Default {...Default.args} />
      </Grommet>
    )
    expect(screen.getByTestId('no-data-title')).toHaveTextContent(
      'Unable to Connect'
    )
    expect(screen.getByTestId('no-data-subtitle')).toHaveTextContent(
      'Begin providing access to your users by setting up a SAML connection.'
    )
    expect(screen.getByTestId('action-btn')).toHaveTextContent(
      'Set Up Connection'
    )
  })

  it('renders the NoDataInfo without Icon and title default component', () => {
    WithoutTitleAndAction.args = {
      subtitle: 'Please contact your organization for help with your account.',
      icon: <Install size="large" />,
      testId: 'no-data-info-without-title'
    }
    render(
      <Grommet>
        <WithoutTitleAndAction {...WithoutTitleAndAction.args} />
      </Grommet>
    )

    expect(screen.getByTestId('no-data-subtitle')).toHaveTextContent(
      'Please contact your organization for help with your account.'
    )
  })
})
