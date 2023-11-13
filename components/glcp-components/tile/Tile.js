import React from 'react'
import { Box } from 'grommet'
import { PropTypes } from 'prop-types'

import { Typography } from '../typography/Typography'

export const Tile = ({
  logo,
  title,
  subTitle,
  refLink,
  layout,
  boxShadow,
  actionBtn,
  actionStatus,
  pad,
  paramTile,
  width,
  testId,
  background,
  onClickCard,
  CustomActionBtn
}) => {
  const isColumnLayout = layout === 'column'
  const onCardClick = () => {
    if (onClickCard) {
      return paramTile ? onClickCard(paramTile) : onClickCard()
    }
    return null
  }
  return (
    <Box
      gap="small"
      direction={layout}
      align="center"
      width={width}
      data-testid={testId}
      flex={false}
      background={background}
    >
      <Box
        direction={layout}
        justify="between"
        pad={pad}
        hoverIndicator
        fill
        round={boxShadow ? 'small' : 'none'}
        elevation={boxShadow ? 'small' : 'none'}
        data-testid={`tile-${testId}`}
        {...(onClickCard && {
          onClick: onCardClick
        })}
      >
        <Box
          direction={layout}
          align="center"
          fill
          gap="small"
          style={{
            textAlign: isColumnLayout ? 'center' : 'left'
          }}
        >
          {logo}
          <Box align={isColumnLayout ? 'center' : 'start'}>
            <Box
              data-testid={`tile-info-${testId}`}
              align={isColumnLayout ? 'center' : 'start'}
            >
              {title && (
                <Typography
                  size="small"
                  testId={`tile-title-${testId}`}
                  type="text"
                  truncate={onClickCard ? 'tip' : false}
                >
                  {title}
                </Typography>
              )}
              {subTitle && (
                <Typography
                  size="xsmall"
                  testId={`tile-subtitle-${testId}`}
                  type="text"
                >
                  {subTitle}
                </Typography>
              )}
            </Box>
            <Box>{refLink && refLink}</Box>
          </Box>
        </Box>
        {!CustomActionBtn && actionBtn && (
          <Box
            align={isColumnLayout ? 'center' : 'end'}
            alignSelf="center"
            flex={false}
            margin={{ left: 'small' }}
          >
            <Box>{actionBtn}</Box>
            {actionStatus && <Box align="end">{actionStatus}</Box>}
          </Box>
        )}
        {CustomActionBtn && CustomActionBtn}
      </Box>
    </Box>
  )
}

Tile.propTypes = {
  /**
   * This prop will be the storybook Logo component.
   * This is mandatory.
   */
  logo: PropTypes.element.isRequired,
  /**
   * This prop is to show the title for the tile.
   * This can be either string or element type.
   * This is mandatory.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /**
   * This prop is to show the sub title for the tile which can be secondary info.
   * This can be either string or element type.
   */
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * This prop is to show the reference link such as terms of the app.
   * This can be an anchor.
   */
  refLink: PropTypes.element,
  /**
   * This prop is useed to define the layout of the tile.
   * It can be either column or row.
   */
  layout: PropTypes.string,
  /**
   * This boolean prop is useed to show/hide the box shadow for the tile.
   */
  boxShadow: PropTypes.bool,
  /**
   * This prop will be used to show the action button for the tile.
   */
  actionBtn: PropTypes.element,
  /**
   * This prop will be used for showing the status message underneath the action button.
   */
  actionStatus: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * This prop is used for padding of tile.
   * This is optional. Default value is small
   */
  pad: PropTypes.string,
  /**
   * Parameters that can be passed as a arguments in the click handler.
   */
  paramTile: PropTypes.any,
  /**
   * This prop defines the width of the tile.
   * This is optional and default value is 100%
   */
  width: PropTypes.string,
  /**
   * This prop defines the background color of the tile.
   */
  background: PropTypes.string,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired,
  /**
   * Click handler method for the tile card.
   */
  onClickCard: PropTypes.func,
  CustomActionBtn: PropTypes.element
}

Tile.defaultProps = {
  subTitle: null,
  refLink: null,
  layout: 'column',
  boxShadow: false,
  actionBtn: null,
  actionStatus: null,
  pad: 'small',
  paramTile: null,
  width: '100%',
  background: 'white',
  onClickCard: null,
  CustomActionBtn: undefined
}
