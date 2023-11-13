import React from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Grommet } from 'grommet'

import {
  SideDrawer,
  CenterDialog,
  Basic,
  BasicLongTitleLargeSize,
  BasicLongContent
} from '../ModalDialog.stories'

describe('ModalDialog', () => {
  it('renders a side drawer modal dialog', () => {
    render(
      <Grommet>
        <SideDrawer {...SideDrawer.args} />
      </Grommet>
    )

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    const dlg = screen.getByTestId('side-drawer-dialog')
    expect(within(dlg).getByTestId('text-header-title')).toHaveTextContent(
      /Side Drawer Dialog Title/i
    )
    expect(within(dlg).getByTestId('close-button')).toBeInTheDocument()

    expect(within(dlg).getByTestId('content')).toHaveTextContent(
      /My dialog content./i
    )

    expect(within(dlg).getByTestId('content-button')).toBeInTheDocument()
    expect(within(dlg).getByTestId('footer-left')).toHaveTextContent('Footer')
  })

  it('renders a center modal dialog', () => {
    render(
      <Grommet>
        <CenterDialog {...CenterDialog.args} />
      </Grommet>
    )

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    const dlg = screen.getByTestId('center-modal-dialog')
    expect(within(dlg).getByTestId('icon')).toBeInTheDocument()
    expect(within(dlg).getByTestId('text-header-title')).toHaveTextContent(
      /Center Modal Dialog With Title/i
    )
    expect(within(dlg).getByTestId('header-subtitle')).toHaveTextContent(
      /My subtitle/i
    )

    expect(within(dlg).getByTestId('footer-left')).toHaveTextContent(
      /My left footer component/i
    )

    fireEvent.click(within(dlg).getByTestId('close-button'))
    expect(within(dlg).getByTestId('close-button')).not.toBeInTheDocument()
  })

  it('renders a basic modal dialog', () => {
    render(
      <Grommet>
        <Basic {...Basic.args} />
      </Grommet>
    )

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    const dlg = screen.getByTestId('basic-modal-dialog')
    expect(within(dlg).getByTestId('header-subtitle')).toHaveTextContent(
      /My subtitle/i
    )
    expect(within(dlg).getByTestId('close-button')).toBeInTheDocument()

    expect(within(dlg).getByTestId('icon')).toBeInTheDocument()
    expect(within(dlg).getByTestId('content')).toHaveTextContent(
      /My dialog content. Basic modal with no title and top close button./i
    )

    expect(within(dlg).getByTestId('footer-left')).toHaveTextContent(
      /My left footer component/i
    )
  })

  it('renders a modal dialog with long title top and bottom buttons', () => {
    render(
      <Grommet>
        <BasicLongTitleLargeSize {...BasicLongTitleLargeSize.args} />
      </Grommet>
    )

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    const dlg = screen.getByTestId('basic-long-title-modal-dialog')
    expect(within(dlg).getByTestId('text-header-title')).toHaveTextContent(
      /Basic Modal Dialog With Loooooooooooooooooooooooooooooooooooooooog Title/i
    )
    expect(within(dlg).getByTestId('header-subtitle')).toHaveTextContent(
      /My subtitle/i
    )
    expect(within(dlg).getByTestId('close-button')).toBeInTheDocument()

    expect(within(dlg).getByTestId('icon')).toBeInTheDocument()
    expect(within(dlg).getByTestId('content')).toHaveTextContent(
      /My dialog content./i
    )

    expect(within(dlg).getByTestId('footer-left')).toHaveTextContent(
      /My left footer component/i
    )
    expect(within(dlg).getByTestId('footer-right')).toBeInTheDocument()
  })

  it('renders a modal dialog with long content & top and bottom buttons', () => {
    render(
      <Grommet>
        <BasicLongContent {...BasicLongContent.args} />
      </Grommet>
    )

    const mainBtn = screen.getByTestId('main-btn')
    expect(mainBtn).toBeInTheDocument()
    fireEvent.click(mainBtn)

    const dlg = screen.getByTestId('basic-long-content-modal-dialog')
    expect(within(dlg).getByTestId('header-title')).toHaveTextContent(
      /Basic Modal Dialog With Title/i
    )
    expect(within(dlg).getByTestId('header-subtitle')).toHaveTextContent(
      /My subtitle/i
    )
    expect(within(dlg).getByTestId('content')).toBeInTheDocument()

    expect(within(dlg).getByTestId('footer-left')).toHaveTextContent(
      /My left footer component/i
    )
    expect(within(dlg).getByTestId('footer-right')).toBeInTheDocument()
  })
})
