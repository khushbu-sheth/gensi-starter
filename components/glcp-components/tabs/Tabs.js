import React from 'react'
import { Box, Tab, Tabs as GrommetTabs } from 'grommet'
import PropTypes from 'prop-types'

import { Typography } from '../typography/Typography'

export const Tabs = ({ tabsList, testId, ...rest }) => {
  return (
    <GrommetTabs
      justify="start"
      alignControls="start"
      data-testid={testId}
      {...rest}
    >
      {tabsList &&
        tabsList.length > 0 &&
        tabsList.map((tab) => (
          <Tab
            key={tab.id}
            title={
              <Typography
                icon={tab.icon}
                type="text"
                weight="bold"
                testId={tab.testId}
              >
                {tab.label}
              </Typography>
            }
          >
            <Box data-testid={`content-${tab.testId}`}>{tab.content}</Box>
          </Tab>
        ))}
    </GrommetTabs>
  )
}

Tabs.propTypes = {
  /**
   * Array of tabs with below shape- This array is mandatory
   * content propery - content of each tab
   * id property - id of tab
   * icon property - icon element next to title. This is optional
   * label propery - title of each tab
   */
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.element,
      content: PropTypes.element.isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
      testId: PropTypes.string.isRequired
    })
  ).isRequired,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}
