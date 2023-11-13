import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Grommet, DropButton } from 'grommet'
import { More } from 'grommet-icons'
import { deepMerge } from 'grommet/utils'
import { hpe } from 'grommet-theme-hpe'

import { Button } from '../button/Button'

export const ActionButton = ({
  label,
  actions,
  dropAlign,
  datum,
  showOneActionAsDropDown,
  testId,
  customRenderer,
  ...rest
}) => {
  const [open, setOpen] = useState()

  const getActionButton = (isSingleBtn, action, idx) => {
    return isSingleBtn ? (
      <Button
        icon={action.icon}
        label={action.label}
        hoverIndicator
        onClick={() => action.onClick(datum)}
        testId={action.testId || 'action-0'}
        {...rest}
      />
    ) : (
      <Button
        default
        key={idx} // eslint-disable-line react/no-array-index-key
        size="small"
        margin="xxsmall"
        hoverIndicator
        icon={action.icon}
        label={action.label}
        testId={action.testId || `action-${idx}`}
        onClick={() => {
          setOpen(false)
          action.onClick(datum)
        }}
      />
    )
  }

  const getSingleButton = () => {
    const actionButton = getActionButton(true, actions[0])
    return customRenderer
      ? customRenderer(actionButton, actions[0].visibility)
      : actionButton
  }

  const actionEls = customRenderer
    ? actions.map((action, idx) => {
        return (
          !action.hidden &&
          customRenderer(
            getActionButton(false, action, idx),
            action.visibility,
            idx
          )
        )
      })
    : actions.map((action, idx) => {
        return !action.hidden && getActionButton(false, action, idx)
      })

  return (
    <Box align="start" pad="none" data-testid={testId}>
      {actions.length > 1 || showOneActionAsDropDown ? (
        <DropButton
          label={label || null}
          icon={label ? null : <More />}
          open={open}
          hoverIndicator
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          dropAlign={dropAlign}
          dropContent={
            <Grommet
              theme={deepMerge(hpe, {
                button: {
                  default: {
                    font: {
                      weight: 'normal'
                    }
                  }
                }
              })}
            >
              <Box align="start">{actionEls}</Box>
            </Grommet>
          }
          {...rest}
        />
      ) : (
        getSingleButton()
      )}
    </Box>
  )
}

const alignOptions = ['top', 'left', 'right', 'bottom']

ActionButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Array of default actions. A DropButton will dispaly if multiple actions; otherwise, action will display.
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.element,
      /**
       * If ture, action is hidden
       */
      hidden: PropTypes.bool,
      onClick: PropTypes.func.isRequired,
      /**
       * freeform object which can be used to conditionally render actions
       */
      visibility: PropTypes.object,
      /**
       * data-testid, will be used for testing
       */
      testId: PropTypes.string
    }).isRequired
  ).isRequired,

  /**
   * dropAlign options as in grommet
   */
  dropAlign: PropTypes.shape({
    top: PropTypes.oneOf(alignOptions),
    left: PropTypes.oneOf(alignOptions),
    bottom: PropTypes.oneOf(alignOptions),
    right: PropTypes.oneOf(alignOptions)
  }),

  /**
   * data to be passed in
   */
  datum: PropTypes.object,

  /**
   * This will override the default behavior and show even one action in a dropdown
   */
  showOneActionAsDropDown: PropTypes.bool,

  /**
   * data-testid, will be used for testing
   */
  testId: PropTypes.string.isRequired,
  /**
   * customRenderer, will be used for rendering custom action elements
   * eg: button wrapped with visibility wrapper
   */
  customRenderer: PropTypes.func
}

ActionButton.defaultProps = {
  label: undefined,
  customRenderer: null,
  dropAlign: { top: 'bottom', left: 'left' },
  datum: {},
  showOneActionAsDropDown: false
}
export default ActionButton
