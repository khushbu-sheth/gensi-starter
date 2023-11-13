import React, { useContext } from 'react'
import { Box, Footer, ResponsiveContext } from 'grommet'
import PropTypes from 'prop-types'

import { Button } from '../button/Button'
import { Typography } from '../typography/Typography'

export const AppFooter = ({ logo, copyright, links, testId, ...rest }) => {
  const size = useContext(ResponsiveContext)
  return (
    <Footer
      background="background-front"
      direction={size !== 'small' ? 'row' : 'column'}
      align={size !== 'small' ? 'center' : undefined}
      {...rest}
    >
      <Box
        direction={size !== 'small' ? 'row' : 'column'}
        align={size !== 'small' ? 'center' : undefined}
        gap="xsmall"
      >
        {logo}
        <Typography type="text" size="small" data-testid={testId}>
          {copyright}
        </Typography>
      </Box>
      <Box
        direction="row"
        align={size !== 'small' ? 'center' : undefined}
        pad="xsmall"
        wrap
      >
        {links &&
          links.map((link) => (
            <Button
              key={link.id}
              default
              label={link.label}
              href={link.url}
              testId={link.id}
              target="_blank"
            />
          ))}
      </Box>
    </Footer>
  )
}

AppFooter.propTypes = {
  /**
   * This will be the logo element from grommet or the custom logo component
   */
  logo: PropTypes.element,
  /**
   * Copyright string or the element
   */
  copyright: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * This will be the list of hyperlinks displayed in the footer
   * It contains id, label and the url
   */
  links: PropTypes.array,
  /**
   * It will be used for component reference to test.
   */
  testId: PropTypes.string.isRequired
}

AppFooter.defaultProps = {
  logo: undefined,
  copyright: <span>&copy; 2021 Hewlett Packard Enterprise Development LP</span>,
  links: [
    {
      id: 'terms',
      label: 'Terms',
      url: 'https://www.hpe.com/us/en/about/legal/terms-of-use.html'
    },
    {
      id: 'privacy',
      label: 'Privacy',
      url: 'https://www.hpe.com/us/en/legal/privacy.html'
    },
    {
      id: 'feedback',
      label: 'Feedback',
      url: 'https://hpetraining.co1.qualtrics.com/jfe/form/SV_0i8Bsa17cg6MkCy'
    }
  ]
}
