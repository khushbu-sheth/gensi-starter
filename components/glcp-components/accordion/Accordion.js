import React from 'react'
import { Accordion, AccordionPanel, Grommet, Box, Card } from 'grommet'
import PropTypes from 'prop-types'
import { deepMerge } from 'grommet/utils'
import { hpe } from 'grommet-theme-hpe'

import { Typography } from '../typography/Typography'

const theme = deepMerge(hpe, {
  accordion: {
    panel: {
      border: {
        color: 'transparent'
      }
    },
    border: {
      color: 'transparent'
    }
  },
  formField: {
    border: {
      color: 'transparent'
    }
  }
})

const renderPanelTitle = (icon, label) => (
  <Box direction="row" testId="title-icon" align="center" gap="small">
    {icon}
    <Typography type="heading" level="3" size="small" testId="accordion-title">
      {label}
    </Typography>
  </Box>
)

export const CCSAccordion = ({
  basis,
  icon,
  label,
  data,
  width,
  testId,
  customRender,
  ...rest
}) => {
  return (
    <Grommet theme={theme}>
      <Accordion animate {...rest}>
        {data.map((datum) => {
          return (
            <Card
              key={datum}
              margin={{ top: 'small' }}
              pad="medium"
              width={width}
              gap="medium"
            >
              <Box fill direction="row">
                <Box basis={basis}>
                  <AccordionPanel
                    testId={`${datum.testId}-accordion-panel`}
                    label={renderPanelTitle(icon(datum), label(datum))}
                  >
                    {customRender(datum)}
                  </AccordionPanel>
                </Box>
              </Box>
            </Card>
          )
        })}
      </Accordion>
    </Grommet>
  )
}

// Last Adding into the code
CCSAccordion.propTypes = {
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired,
  /**
   * Content inside the AccordionPanels
   * This is mandatory.
   */
  width: PropTypes.node,
  /**
   * accordion title
   */
  label: PropTypes.func,
  /**
   * icon displayed to the left of element
   */
  icon: PropTypes.func,

  /**
   * Change AccordionPanels Size
   */
  basis: PropTypes.string,

  customRender: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

CCSAccordion.defaultProps = {
  label: null,
  icon: null,
  basis: 'large',
  width: 'large'
}
