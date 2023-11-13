import React from 'react'
import { Box } from 'grommet'
import PropTypes from 'prop-types'

import { Button } from '../button/Button'

export const ButtonGroup = ({ buttonList, justifyGroup, testId }) => {
  return (
    <Box
      direction="row"
      gap="medium"
      justify={justifyGroup}
      data-testid={testId}
    >
      {buttonList &&
        buttonList.length > 0 &&
        buttonList.map((button, idx) => (
          <Button
            {...button}
            key={idx} /* eslint-disable-line react/no-array-index-key */
          />
        ))}
    </Box>
  )
}

ButtonGroup.propTypes = {
  /**
   * Array of buttons with below shape- This array is mandatory
   * label property - label of each button
   * testId property - reference to test.
   */
  buttonList: PropTypes.arrayOf(
    /**
     * Shape of button object is same as for button component
     */
    PropTypes.shape({
      /**
       * Button label. This can be a string or <Typography /> component.
       */
      label: PropTypes.node,
      /**
       * It will be used for component reference to test.
       * This is mandatory.
       */
      testId: PropTypes.string.isRequired
    })
  ).isRequired,
  /**
   * It will be used to justify buttons to start, end or center of the parent
   * This is optional.
   */
  justifyGroup: PropTypes.oneOf(['start', 'center', 'end']),
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired
}

ButtonGroup.defaultProps = {
  justifyGroup: 'end'
}
