import { FileInput as GrommetFileInput, Grommet, Box, Text } from 'grommet'
import { Trash } from 'grommet-icons'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { hpe } from 'grommet-theme-hpe'
import { deepMerge } from 'grommet/utils'
import styled from 'styled-components'

import { bytesToSize } from '../utils'

const StyledBox = styled(Box)`
  & > div button {
    z-index: 1;
  }
`

const defaultLabelsObject = {
  dropLabel: 'Drag and drop',
  replaceLabel: 'Replace File',
  selectLabel: 'Select File'
}

export const FileInput = ({
  testId,
  actionLabels = defaultLabelsObject,
  onChange,
  ...rest
}) => {
  const [numFiles, setNumFiles] = useState(0)
  const { multiple } = rest
  const message = multiple
    ? {
        dropPromptMultiple: actionLabels?.dropLabel,
        browse:
          numFiles > 0 ? actionLabels?.replaceLabel : actionLabels?.selectLabel
      }
    : {
        dropPrompt: actionLabels?.dropLabel,
        browse:
          numFiles > 0 ? actionLabels?.replaceLabel : actionLabels?.selectLabel
      }
  const handleChange = (event, files) => {
    setNumFiles(files.length)
    onChange(event)
  }
  return (
    <Grommet
      theme={deepMerge(hpe, {
        fileInput: {
          icons: {
            remove: Trash
          },
          pad: { horizontal: 'large', vertical: 'medium' },
          round: { size: 'xsmall' }
        }
      })}
    >
      <StyledBox>
        <GrommetFileInput
          data-testid={testId}
          messages={message}
          onChange={(event, { files }) => handleChange(event, files)}
          renderFile={(file) => {
            return (
              <Box direction="row" gap="small">
                <Text weight="bold">{file.name}</Text>
                <Text color="text-weak">({bytesToSize(file.size)})</Text>
              </Box>
            )
          }}
          {...rest}
        />
      </StyledBox>
    </Grommet>
  )
}
FileInput.propTypes = {
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired,
  /**
   * It will be used for component onChange event.
   */
  onChange: PropTypes.func,
  /**
   * It will be used for component customized the i18n labels.
   * dropLabel, replaceLabel, selectLabel
   */
  actionLabels: PropTypes.shape({
    dropLabel: PropTypes.string,
    replaceLabel: PropTypes.string,
    selectLabel: PropTypes.string
  })
}
FileInput.defaultProps = {
  actionLabels: undefined,
  onChange: () => {}
}
