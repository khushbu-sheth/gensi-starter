import React from 'react'
import { render, screen, within } from '@testing-library/react'

import { Active, InProgress, Error } from '../StepNavigation.stories'

describe('Active Step Navigation', () => {
  it('renders a step active step navigation', () => {
    render(<Active {...Active.args} />)

    const stepNav = screen.getByTestId('active-step-nav')
    const step1 = within(stepNav).getByTestId('step1')
    const step2 = within(stepNav).getByTestId('step2')
    const step3 = within(stepNav).getByTestId('step3')
    const step4 = within(stepNav).getByTestId('step4')

    expect(within(step1).getByTestId('step')).toHaveTextContent(/STEP 1/i)
    expect(within(step2).getByTestId('step')).toHaveTextContent(/STEP 2/i)
    expect(within(step3).getByTestId('step')).toHaveTextContent(/STEP 3/i)
    expect(within(step4).getByTestId('step')).toHaveTextContent(/STEP 4/i)

    expect(within(step1).getByTestId('title')).toHaveTextContent(
      /STEP 1 title/i
    )
    expect(within(step2).getByTestId('title')).toHaveTextContent(
      /STEP 2 title/i
    )
    expect(within(step3).getByTestId('title')).toHaveTextContent(
      /STEP 3 title/i
    )
    expect(within(step4).getByTestId('title')).toHaveTextContent(
      /STEP 4 title/i
    )

    expect(within(step1).getByTestId('description')).toHaveTextContent(
      /STEP 1 description/i
    )
    expect(within(step2).getByTestId('description')).toHaveTextContent(
      /STEP 2 description/i
    )
    expect(within(step3).getByTestId('description')).toHaveTextContent(
      /STEP 3 description/i
    )
    expect(within(step4).getByTestId('description')).toHaveTextContent(
      /STEP 4 description/i
    )

    expect(within(stepNav).getByTestId('step1-button')).toBeInTheDocument()
  })

  it('renders a step in progress step navigation', () => {
    render(<InProgress {...InProgress.args} />)

    const stepNav = screen.getByTestId('inprogress-step-nav')
    const step1 = within(stepNav).getByTestId('step1')
    const step2 = within(stepNav).getByTestId('step2')
    const step3 = within(stepNav).getByTestId('step3')
    const step4 = within(stepNav).getByTestId('step4')

    expect(within(step1).getByTestId('step')).toHaveTextContent(/STEP 1/i)
    expect(within(step2).getByTestId('step')).toHaveTextContent(/STEP 2/i)
    expect(within(step3).getByTestId('step')).toHaveTextContent(/STEP 3/i)
    expect(within(step4).getByTestId('step')).toHaveTextContent(/STEP 4/i)
    expect(within(stepNav).getByTestId('progress-loader')).toBeInTheDocument()
  })

  it('renders a step error step navigation', () => {
    render(<Error {...Error.args} />)

    const stepNav = screen.getByTestId('error-step-nav')
    const step1 = within(stepNav).getByTestId('step1')
    const step2 = within(stepNav).getByTestId('step2')
    const step3 = within(stepNav).getByTestId('step3')
    const step4 = within(stepNav).getByTestId('step4')

    expect(within(step1).getByTestId('step')).toHaveTextContent(/STEP 1/i)
    expect(within(step2).getByTestId('step')).toHaveTextContent(/STEP 2/i)
    expect(within(step3).getByTestId('step')).toHaveTextContent(/STEP 3/i)
    expect(within(step4).getByTestId('step')).toHaveTextContent(/STEP 4/i)
    expect(
      within(stepNav).getByTestId('err-inline-notification')
    ).toBeInTheDocument()
  })
})
