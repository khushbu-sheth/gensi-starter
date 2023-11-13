import React, { useContext } from 'react'
import styled, { ThemeContext, css } from 'styled-components'
import { Card as GrommetCard, CardBody, CardFooter, Box } from 'grommet'
import PropTypes from 'prop-types'

import { Typography } from '../typography/Typography'
import { adjustPad, textAlignments } from '../utils'

const StyledTitle = styled(Typography)`
  ${(props) =>
    props.titleEllipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    `}
`

const StyledDescription = styled(Typography)`
  ${(props) =>
    props.descriptionEllipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    `}
`

export const Card = ({
  background,
  elevation,
  foregroundColor,
  gap,
  cardWidth,
  icon,
  pretitle,
  title,
  subtitle,
  titleSize,
  description,
  action,
  CustomContent,
  textAlign,
  testId,
  titleEllipsis,
  descriptionEllipsis,
  ...rest
}) => {
  const theme = useContext(ThemeContext)

  return (
    <GrommetCard
      background={background}
      elevation={elevation || theme?.card?.container?.elevation}
      gap={gap}
      width={cardWidth}
      data-testid={`card-${testId}`}
      {...rest}
    >
      <CardBody
        align={rest.align || 'start'}
        gap="small"
        direction={rest.direction}
        justify={rest.justify}
        pad={adjustPad(rest.direction, 'body', theme, action)}
      >
        {CustomContent && CustomContent}
        {!CustomContent && (
          <>
            {icon && (
              <Box
                pad={rest.justify === 'between' ? 'none' : { bottom: 'small' }}
                flex={{ shrink: 0 }}
              >
                {icon}
              </Box>
            )}
            <Box data-testid={`${testId}-text-info`} gap="xsmall">
              <>
                {pretitle && (
                  <Typography
                    type="text"
                    size="small"
                    textAlign={textAlign.pretitle || textAlign}
                    testId={`${testId}-pretitle`}
                    color={foregroundColor}
                  >
                    {pretitle}
                  </Typography>
                )}
                <StyledTitle
                  type="text"
                  size={titleSize}
                  textAlign={textAlign.title || textAlign}
                  weight="bold"
                  testId={`${testId}-title`}
                  color={foregroundColor || 'text-strong'}
                  titleEllipsis={titleEllipsis}
                >
                  {title}
                </StyledTitle>
                {subtitle && (
                  <Box margin={{ bottom: 'xsmall' }}>
                    <Typography
                      type="text"
                      size="small"
                      textAlign={textAlign.subtitle || textAlign}
                      testId={`${testId}-subtitle`}
                      color={foregroundColor}
                    >
                      {subtitle}
                    </Typography>
                  </Box>
                )}
              </>
              {description && (
                <StyledDescription
                  type="text"
                  size="medium"
                  textAlign={textAlign.description || textAlign}
                  testId={`${testId}-summary`}
                  color={foregroundColor}
                  descriptionEllipsis={descriptionEllipsis}
                >
                  {description}
                </StyledDescription>
              )}
            </Box>
          </>
        )}
      </CardBody>
      {action && (
        <CardFooter pad={adjustPad(rest.direction, 'footer', theme, action)}>
          {action}
        </CardFooter>
      )}
    </GrommetCard>
  )
}

Card.propTypes = {
  /**
   * This background color code will be used for card background
   */
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  /**
   * Amount of elevation on the Card
   */
  elevation: PropTypes.string,
  /**
   * Foreground color will be applied only on the title and the card body
   * Button color should be handled inside the button with <Typography> component
   */
  foregroundColor: PropTypes.string,
  /**
   * The amount of space between the Card body and Card footer.
   */
  gap: PropTypes.string,
  /**
   * This can be either 'small', 'medium', or '100%'
   */
  cardWidth: PropTypes.oneOf(['small', 'medium', '100%']),
  /**
   * This will be an icon component
   */
  icon: PropTypes.element,
  /**
   * This property will be used for displaying a pre-title above the title
   */
  pretitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * This property is mandatory and will be used for displaying the title of the card
   * This is mandatory.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * This property will be used for displaying a subtitle below the title
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * This property will be used for displaying the subtitle size
   */
  titleSize: PropTypes.string,
  /**
   * Description of the card, up to a small paragraph; distinguished from Tile
   * with this text length difference among other reasons
   * This is mandatory.
   */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * textAlign prop is used to align the text content of the card. When a string is provided,
   * a uniform alignment will be set for pretitle, title, subtitle, and description. When an
   * object is provided, each text element can receive its own specification.
   * This follows Grommet's textAlign.
   */
  textAlign: PropTypes.oneOfType([
    PropTypes.oneOf(textAlignments),
    PropTypes.shape({
      pretitle: PropTypes.oneOf(textAlignments),
      title: PropTypes.oneOf(textAlignments),
      subtitle: PropTypes.oneOf(textAlignments),
      description: PropTypes.oneOf(textAlignments)
    })
  ]),
  /**
   * This will be the action button will be placed at the bottom of the card
   */
  action: PropTypes.element,
  CustomContent: PropTypes.element,
  /**
   * It will be used for component reference to test.
   * This is mandatory.
   */
  testId: PropTypes.string.isRequired,
  titleEllipsis: PropTypes.bool,
  descriptionEllipsis: PropTypes.bool
}

Card.defaultProps = {
  title: undefined,
  subtitle: '',
  pretitle: undefined,
  description: undefined,
  background: '',
  elevation: undefined,
  foregroundColor: '',
  gap: 'medium',
  cardWidth: 'medium',
  icon: undefined,
  titleSize: 'medium',
  action: undefined,
  CustomContent: undefined,
  textAlign: 'start',
  titleEllipsis: false,
  descriptionEllipsis: false
}
