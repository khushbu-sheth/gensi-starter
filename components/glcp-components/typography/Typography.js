import React from 'react'
import { Heading, Paragraph, Text, Box, Tip, TextInput } from 'grommet'
import PropTypes, { oneOfType } from 'prop-types'
import styled from 'styled-components'

const StyledTextInput = styled(TextInput)`
  cursor: none;
  padding: 0;
  border: none;
`
const TruncateParagraph = styled(Paragraph)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Typography = ({
  type,
  size,
  weight,
  icon,
  reverse,
  children,
  testId,
  margin,
  truncate,
  ...rest
}) => {
  const TextComponent = () => (
    <Text
      size={size}
      margin={margin}
      weight={weight || 'normal'}
      truncate={truncate}
      data-testid={testId ? `text-${testId}` : null}
      {...rest}
    >
      {children}
    </Text>
  )
  return (
    <Box
      data-testid={testId}
      direction="row"
      gap="xsmall"
      alignSelf={rest.textAlign}
    >
      {icon && !reverse ? icon : null}
      {type === 'heading' &&
        (truncate ? (
          <Tip content={children}>
            <Heading
              size={size}
              margin={margin}
              truncate={!!truncate}
              data-testid={testId ? `heading-${testId}` : ''}
              {...rest}
            >
              {children}
            </Heading>
          </Tip>
        ) : (
          <Heading
            size={size}
            margin={margin}
            data-testid={testId ? `heading-${testId}` : ''}
            {...rest}
          >
            {children}
          </Heading>
        ))}
      {type === 'paragraph' &&
        (truncate ? (
          <Tip content={children}>
            <TruncateParagraph
              size={size}
              margin={margin}
              data-testid={`paragraph-${testId}`}
              {...rest}
            >
              {children}
            </TruncateParagraph>
          </Tip>
        ) : (
          <Paragraph
            size={size}
            margin={margin}
            data-testid={`paragraph-${testId}`}
            {...rest}
          >
            {children}
          </Paragraph>
        ))}
      {type === 'text' &&
        (truncate ? (
          <Tip content={children}>{TextComponent()}</Tip>
        ) : (
          TextComponent()
        ))}
      {type === 'password' && (
        <StyledTextInput
          type="password"
          size={size}
          value={children}
          weight={weight || 'normal'}
          data-testid={testId ? `password-${testId}` : null}
          {...rest}
        />
      )}
      {icon && reverse ? icon : null}
    </Box>
  )
}

Typography.propTypes = {
  /**
   * This prop will be used to determine the type of the typography.
   * It can be either heading/ paragraph/ text /password
   * This is mandatory.
   */
  type: PropTypes.oneOf(['heading', 'paragraph', 'text', 'password'])
    .isRequired,
  /**
   * This is used to define the size of the Typography.
   * It can be of any t-shirt sizing from grommet.
   */
  size: PropTypes.string,
  /**
   * This prop is for handling the font-weight for the text.
   * It can be either element or string type.
   */
  weight: oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * This prop is an icon element which can be placed before or after text.
   * This is optional.
   */
  icon: PropTypes.element,
  /**
   * This prop is boolean
   * Whether an icon and text should be reversed so that the icon is at the end of the text.
   * This is optional.
   */
  reverse: PropTypes.bool,
  /**
   * This prop will be the children within the Typography component.
   * It can be either element or string type.
   */
  children: oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /**
   * This prop can be used to define margin around the Typography.
   * It can be either string or object to handle top, right, bottom, left
   */
  margin: oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * It will be used for text truncation
   */
  truncate: oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * It will be used for component reference to test.
   */
  testId: PropTypes.string
}

Typography.defaultProps = {
  size: 'small',
  weight: 'normal',
  children: 'Sample Text',
  margin: 'none',
  truncate: false,
  testId: '',
  reverse: false,
  icon: null
}
