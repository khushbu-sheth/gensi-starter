import React, { useState } from 'react'
import { Box } from 'grommet'
import { MailOption } from 'grommet-icons'
import reactElementToJSXString from 'react-element-to-jsx-string'

import { Typography } from '../typography/Typography'
import { Button } from '../button/Button'

import { ModalDialog, ModalHeader, ModalFooter } from './ModalDialog'

export default {
  title: 'CCS/ModalDialog',
  component: ModalDialog
}

const Template = (args) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(undefined)

  let dlgArgs = { ...args, onClose: handleClose }
  const { header } = dlgArgs
  if (header) {
    const dlgHeader = React.cloneElement(header, { onClose: handleClose })
    dlgArgs = { ...dlgArgs, header: dlgHeader }
  }

  return (
    <>
      <Box align="start">
        <Button
          label="Show me the modal dialog"
          onClick={handleOpen}
          primary
          testId="main-btn"
        />
      </Box>
      {open && <ModalDialog {...dlgArgs} />}
    </>
  )
}

export const SideDrawer = Template.bind({})
SideDrawer.args = {
  position: 'right',
  height: '100%',
  header: (
    <ModalHeader
      title={
        <Typography
          type="text"
          size="large"
          weight="bold"
          style={{
            whiteSpace: 'nowrap'
          }}
          testId="header-title"
        >
          Side Drawer Dialog Title
        </Typography>
      }
    />
  ),
  content: (
    <Box margin={{ top: '15px' }}>
      <Typography
        type="text"
        size="medium"
        style={{ maxHeight: '150px', overflow: 'auto' }}
        testId="dialog-content"
      >
        My dialog content.
      </Typography>
      <Button label="Button" primary active testId="content-button" />
    </Box>
  ),
  footer: (
    <ModalFooter
      left={
        <Typography type="text" size="medium" testId="dialog-footer">
          Footer
        </Typography>
      }
    />
  ),
  testId: 'side-drawer-dialog'
}

SideDrawer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Ts53TAipMolmsv9DxWG3p0/HPE-Layer-Component?node-id=47%3A43'
  },
  docs: {
    source: {
      code: reactElementToJSXString(
        <ModalDialog {...SideDrawer.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const CenterDialog = Template.bind({})
CenterDialog.args = {
  header: (
    <ModalHeader
      title={
        <Typography
          type="text"
          size="xxlarge"
          weight="bold"
          style={{
            whiteSpace: 'nowrap'
          }}
          testId="header-title"
        >
          Center Modal Dialog With Title
        </Typography>
      }
      subtitle="My subtitle"
    />
  ),
  icon: (
    <Box margin={{ top: '8px' }}>
      <MailOption />
    </Box>
  ),
  footer: (
    <ModalFooter
      left={
        <Typography type="text" size="medium" testId="left-footer">
          My left footer component
        </Typography>
      }
    />
  ),
  testId: 'center-modal-dialog'
}

CenterDialog.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Ts53TAipMolmsv9DxWG3p0/HPE-Layer-Component?node-id=47%3A43'
  },
  docs: {
    source: {
      code: reactElementToJSXString(
        <ModalDialog {...CenterDialog.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const Basic = Template.bind({})
Basic.args = {
  position: 'bottom',
  header: <ModalHeader subtitle="My subtitle" />,
  icon: <MailOption />,
  content: (
    <Typography
      type="text"
      size="medium"
      style={{ maxHeight: '150px', overflow: 'auto' }}
      testId="dialog-content"
    >
      My dialog content. Basic modal with no title and top close button.
    </Typography>
  ),
  footer: (
    <ModalFooter
      left={
        <Typography type="text" size="medium" testId="left-footer">
          My left footer component
        </Typography>
      }
    />
  ),
  testId: 'basic-modal-dialog'
}

Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Ts53TAipMolmsv9DxWG3p0/HPE-Layer-Component?node-id=100%3A70'
  },
  docs: {
    source: {
      code: reactElementToJSXString(
        <ModalDialog {...Basic.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const BasicLongTitleLargeSize = Template.bind({})
BasicLongTitleLargeSize.args = {
  width: 'large',
  height: 'large',
  header: (
    <ModalHeader
      title={
        <Typography
          type="text"
          size="xxlarge"
          weight="bold"
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
          testId="header-title"
        >
          Basic Modal Dialog With Loooooooooooooooooooooooooooooooooooooooog
          Title
        </Typography>
      }
      subtitle="My subtitle"
    />
  ),
  icon: (
    <Box margin={{ top: '5px' }}>
      <MailOption />
    </Box>
  ),
  content: (
    <Typography
      type="text"
      size="medium"
      margin={{ top: '15px' }}
      style={{ maxHeight: '150px', overflow: 'auto' }}
      testId="dialog-content"
    >
      My dialog content.
    </Typography>
  ),
  footer: (
    <ModalFooter
      left={
        <Typography type="text" size="medium" testId="left-footer">
          My left footer component
        </Typography>
      }
      right={
        <Box direction="row" gap="small">
          <Button label="Cancel" primary testId="cancel-btn" />
          <Button label="Remove" primary active testId="remove-btn" />
        </Box>
      }
    />
  ),
  testId: 'basic-long-title-modal-dialog'
}

BasicLongTitleLargeSize.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <ModalDialog {...BasicLongTitleLargeSize.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}

export const BasicLongContent = Template.bind({})
BasicLongContent.args = {
  width: 'medium',
  header: (
    <ModalHeader
      title={
        <Typography
          type="text"
          size="xxlarge"
          weight="bold"
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
          testId="header-title"
        >
          Basic Modal Dialog With Title Title
        </Typography>
      }
      subtitle="My subtitle"
    />
  ),
  content: (
    <Typography
      type="text"
      size="medium"
      margin={{ top: '15px' }}
      style={{ maxHeight: '250px', overflow: 'auto' }}
      testId="dialog-content"
    >
      My dialog content. My dialog content. My dialog content. My dialog
      content. My dialog content. My dialog content. My dialog content. My
      dialog content. My dialog content. My dialog content. My dialog content.
      My dialog content. My dialog content. My dialog content.My dialog content.
      My dialog content. My dialog content. My dialog content. My dialog
      content. My dialog content. My dialog content. My dialog content. My
      dialog content. My dialog content. My dialog content. My dialog content.
      My dialog content. My dialog content. My dialog content. My dialog
      content. My dialog content. My dialog content. My dialog content. My
      dialog content. My dialog content.My dialog content. My dialog content. My
      dialog content. My dialog content. My dialog content. My dialog content.
    </Typography>
  ),
  footer: (
    <ModalFooter
      left={
        <Typography type="text" size="medium" testId="left-footer">
          My left footer component
        </Typography>
      }
      right={
        <Box direction="row" gap="small">
          <Button label="Cancel" primary testId="cancel-btn" />
          <Button label="Remove" primary active testId="remove-btn" />
        </Box>
      }
    />
  ),
  testId: 'basic-long-content-modal-dialog'
}

BasicLongContent.parameters = {
  docs: {
    source: {
      code: reactElementToJSXString(
        <ModalDialog {...BasicLongContent.args} onClose={() => {}} />,
        { showDefaultProps: false }
      )
    }
  }
}
